"use client";

import { useRef, useState, type FormEvent } from "react";
import toast from "react-hot-toast";
import { useTranslations } from "next-intl";
import { Field } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";
import { sendContactForm } from "@/lib/api/contact";
import { captureEvent } from "@/lib/analytics";
import { isAxiosError } from "axios";

const ORIGIN_VALUES = ["busqueda", "asistente_ia", "linkedin", "referido", "evento", "prensa", "otro"] as const;

export function ContactForm() {
  const tForms = useTranslations("forms");
  const tToast = useTranslations("toast");
  const [submitting, setSubmitting] = useState(false);
  const [origin, setOrigin] = useState("");
  const [originError, setOriginError] = useState("");
  const startedRef = useRef(false);
  const validationErrorRef = useRef(false);
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
      captureEvent("form_error", { form_id: "diagnostico", error_type: "validation" });
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
    } catch (error) {
      captureEvent("form_error", {
        form_id: "diagnostico",
        error_type: isAxiosError(error) && error.response ? "server" : "network",
      });
      toast.error(tToast("error"));
      return;
    } finally {
      setSubmitting(false);
    }

    toast.success(tToast("success"));
    form.reset();
    setOrigin("");
    setOriginError("");
    // La conversión se mide una sola vez, después de confirmar el envío.
    // El texto libre de "Otro" y los datos personales no pasan a PostHog.
    captureEvent("form_submit", { form_id: "diagnostico", origen_declarado: originKey });
  }

  return (
    <form
      onSubmit={handleSubmit}
      onFocusCapture={(event) => {
        if (startedRef.current || !(event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement || event.target instanceof HTMLSelectElement)) return;
        startedRef.current = true;
        captureEvent("form_start", { form_id: "diagnostico" });
      }}
      onInputCapture={() => {
        if (startedRef.current) return;
        startedRef.current = true;
        captureEvent("form_start", { form_id: "diagnostico" });
      }}
      onChangeCapture={() => { validationErrorRef.current = false; }}
      onInvalidCapture={() => {
        if (!startedRef.current) {
          startedRef.current = true;
          captureEvent("form_start", { form_id: "diagnostico" });
        }
        if (validationErrorRef.current) return;
        validationErrorRef.current = true;
        captureEvent("form_error", { form_id: "diagnostico", error_type: "validation" });
      }}
      className="flex flex-col gap-5 rounded-xl border border-divider bg-surface-container-lowest p-8 shadow-card"
    >
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
      <Button type="submit" data-cta-id="form_submit_diagnostico" data-cta-location="form" data-cta-section="diagnostico" variant="primary" size="lg" disabled={submitting} className="self-start">
        {submitting ? tForms("submitting") : tForms("submit")}
      </Button>
    </form>
  );
}
