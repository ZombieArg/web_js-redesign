import axios from "axios";
import { API_BASE_URL } from "@/lib/constants";

export interface ContactFormValues {
  name: string;
  company: string;
  email: string;
  whatsapp: string;
  process: string;
  origin: string;
}

/**
 * Mismo endpoint que el sitio legacy (client/src/api/email.ts):
 * POST {API_BASE_URL}/send-email, body {email, message}. La API actual solo
 * acepta esos dos campos — los campos nuevos del formulario (empresa,
 * WhatsApp, proceso, origen) se componen dentro de `message` en vez de
 * inventar un contrato de API nuevo que el backend no entiende todavía.
 */
export async function sendContactForm(values: ContactFormValues) {
  const message = [
    `Nombre: ${values.name}`,
    `Empresa: ${values.company}`,
    `WhatsApp: ${values.whatsapp}`,
    `Proceso a revisar: ${values.process}`,
    `Cómo llegó: ${values.origin}`,
  ].join("\n");

  const response = await axios.post(`${API_BASE_URL}/send-email`, {
    email: values.email,
    message,
  });
  return response.data;
}
