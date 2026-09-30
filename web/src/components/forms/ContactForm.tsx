"use client";

import { useState, type FormEvent } from "react";
import toast from "react-hot-toast";
import { useTranslations } from "next-intl";
import { Field } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";
import { sendContactForm } from "@/lib/api/contact";
import { captureEvent } from "@/lib/analytics";

const ORIGIN_VALUES = ["busqueda", "asistente_ia", "linkedin", "referido", "evento", "prensa", "otro"] as const;

export function ContactForm() {
  const tForms = useTranslations("forms");
  const tToast = useTranslations("toast");
  const [submitting, setSubmitting] = useState(false);
  const [origin, setOrigin] = useState("");
  const [originError, setOriginError] = useState("");
  const originOptions = ORIGIN_VALUES.map((value) => ({ value, label: tForms(`originOptions.${value}`) }));

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // El elemento se guarda ANTES del await. event.currentTarget solo es válido
    // durante el despacho sincrónico del evento y queda en null después, así que
    // un event.currentTarget.reset() posterior al await tiraba TypeError. Como
    // ese reset vivía dentro del try, lo atrapaba el catch y se veían los dos
    // toasts a la vez, con el mail ya enviado.
    const form = event.currentTarget;
    const data = new FormData(form);
    const originKey = String(data.get("origen_declarado") ?? "");
    if (!ORIGIN_VALUES.some((value) => value === originKey)) {
      setOriginError(tForms("originChooseError"));
      return;
    }
    const originOther = originKey === "otro"
      ? String(data.get("origen_declarado_otro") ?? "").trim().slice(0, 100)
      : "";
    setSubmitting(true);

    try {
      await sendContactForm({
        name: String(data.get("name") ?? ""),
        company: String(data.get("company") ?? ""),
        email: String(data.get("email") ?? ""),
        whatsapp: String(data.get("whatsapp") ?? ""),
        process: String(data.get("process") ?? ""),
        origen_declarado: originKey,
        origen_declarado_otro: originOther,
        originLabel: originOptions.find((option) => option.value === originKey)?.label ?? originKey,
      });
    } catch {
      toast.error(tToast("error"));
      return;
    } finally {
      setSubmitting(false);
    }

    toast.success(tToast("success"));
    form.reset();
    setOrigin("");
    setOriginError("");
    // Ambos eventos se envían solo tras la confirmación del mail. El texto
    // libre de "Otro" y los datos personales nunca pasan a PostHog.
    captureEvent("form_submit", { origen_declarado: originKey });
    captureEvent("diagnostico_solicitado", { form: "contacto" });
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 rounded-xl border border-divider bg-surface-container-lowest p-8 shadow-card">
      <div className="grid grid-cols-1 gap-5 tablet:grid-cols-2">
        <Field type="text" name="name" label={tForms("name")} required />
        <Field type="text" name="company" label={tForms("company")} required />
        <Field type="email" name="email" label={tForms("email")} required />
        <Field type="tel" name="whatsapp" label={tForms("whatsapp")} required />
      </div>
      <Field type="textarea" name="process" label={tForms("process")} required />
      <Field
        type="select"
        name="origen_declarado"
        label={tForms("origin")}
        placeholder={tForms("originPlaceholder")}
        options={originOptions}
        error={originError}
        required
        inputProps={{
          value: origin,
          "aria-invalid": !!originError,
          "aria-describedby": originError ? "field-origen_declarado-error" : undefined,
          onChange: (event) => {
            setOrigin(event.target.value);
            setOriginError("");
          },
          onInvalid: (event) => {
            event.preventDefault();
            setOriginError(tForms("originChooseError"));
          },
        }}
      />
      {origin === "otro" && (
        <Field
          type="text"
          name="origen_declarado_otro"
          label={tForms("originOther")}
          inputProps={{ maxLength: 100 }}
        />
      )}
      <Button type="submit" variant="primary" size="lg" disabled={submitting} className="self-start">
        {submitting ? tForms("submitting") : tForms("submit")}
      </Button>
    </form>
  );
}
