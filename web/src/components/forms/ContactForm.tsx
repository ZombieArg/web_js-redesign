"use client";

import { useState, type FormEvent } from "react";
import toast from "react-hot-toast";
import { useTranslations } from "next-intl";
import { Field } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";
import { sendContactForm } from "@/lib/api/contact";
import { captureEvent } from "@/lib/analytics";

export function ContactForm() {
  const tForms = useTranslations("forms");
  const tToast = useTranslations("toast");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // El elemento se guarda ANTES del await. event.currentTarget solo es válido
    // durante el despacho sincrónico del evento y queda en null después, así que
    // un event.currentTarget.reset() posterior al await tiraba TypeError. Como
    // ese reset vivía dentro del try, lo atrapaba el catch y se veían los dos
    // toasts a la vez, con el mail ya enviado.
    const form = event.currentTarget;
    const data = new FormData(form);
    setSubmitting(true);

    try {
      await sendContactForm({
        name: String(data.get("name") ?? ""),
        company: String(data.get("company") ?? ""),
        email: String(data.get("email") ?? ""),
        whatsapp: String(data.get("whatsapp") ?? ""),
        process: String(data.get("process") ?? ""),
        origin: String(data.get("origin") ?? ""),
      });
    } catch {
      toast.error(tToast("error"));
      return;
    } finally {
      setSubmitting(false);
    }

    // Todo lo de acá queda FUERA del try a propósito: una vez que el envío
    // salió bien, nada posterior puede terminar mostrando el toast de error.
    //
    // Evento de conversión del diagnóstico (feedback SEO/GEO ítem 11): solo se
    // manda si el backend confirmó. Sin datos personales en las props — el
    // contenido del formulario ya viaja al backend de mail, no hace falta
    // duplicarlo en el producto de analítica.
    captureEvent("diagnostico_solicitado", { form: "contacto" });
    toast.success(tToast("success"));
    form.reset();
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
      <Field type="text" name="origin" label={tForms("originRequired")} required />
      <Button type="submit" variant="primary" size="lg" disabled={submitting} className="self-start">
        {submitting ? tForms("submitting") : tForms("submit")}
      </Button>
    </form>
  );
}
