/**
 * Fuente única de verdad para datos de contacto y de la organización.
 * Reemplaza los 4 números/mails inconsistentes que había en el sitio legacy
 * (client/src/components/{Header,cecilia/Footer}.tsx, páginas de servicio, LocalBusinessSEO.tsx).
 * Todo link de WhatsApp/mail del sitio nuevo consume esto — nunca hardcodear en un componente.
 */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://datavoices.com.ar";

export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "https://ceciliabot.datavoices.com.ar/api";

export const CONTACT = {
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hola@datavoices.com.ar",
  /** Formato E.164 sin "+", listo para wa.me/. */
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5491173709382",
  /** Formato de despliegue visual. */
  phoneDisplay: "+54 9 11 7370-9382",
  city: "Buenos Aires",
  region: "CABA",
  country: "AR",
} as const;

export function whatsappHref(message?: string): string {
  const base = `https://wa.me/${CONTACT.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const SOCIAL = {
  linkedin: "https://www.linkedin.com/company/data-voices/",
} as const;

export const ORG = {
  name: "Data Voices",
  legalName: "Data Voices",
  foundingDate: "2023",
} as const;
