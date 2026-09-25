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
    setSubmitting(true);
    const data = new FormData(event.currentTarget);

    try {
      await sendContactForm({
        name: String(data.get("name") ?? ""),
        company: String(data.get("company") ?? ""),
        email: String(data.get("email") ?? ""),
        whatsapp: String(data.get("whatsapp") ?? ""),
        process: String(data.get("process") ?? ""),
        origin: String(data.get("origin") ?? ""),
      });
      // Evento de conversión del diagnóstico (feedback SEO/GEO ítem 11).
      // Solo se manda si el envío al backend salió bien — un submit fallido
      // no es una conversión. Sin datos personales en las props: el contenido
      // del formulario ya viaja al backend de mail, no hace falta duplicarlo
      // en el producto de analítica.
      captureEvent("diagnostico_solicitado", { form: "contacto" });
      toast.success(tToast("success"));
      event.currentTarget.reset();
    } catch {
      toast.error(tToast("error"));
    } finally {
      setSubmitting(false);
    }
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
