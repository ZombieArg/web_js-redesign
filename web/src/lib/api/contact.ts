import axios from "axios";

export interface ContactFormValues {
  event_id: string;
  name: string;
  company: string;
  email: string;
  whatsapp: string;
  process: string;
  origen_declarado: string;
  origen_declarado_otro: string | null;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  landing_url: string;
  website: string;
}

export async function sendContactForm(values: ContactFormValues) {
  const response = await axios.post("/api/contact", values, { timeout: 15_000 });
  return response.data as { ok: true; event_id: string; opportunity_id: string };
}
