import type { ContactoContent, Localized } from "./types";

const es: ContactoContent = {
  seo: {
    title: "Contacto | Diagnóstico de IA | Data Voices",
    description:
      "Diagnóstico gratuito de inteligencia artificial. Buenos Aires. hola@datavoices.com.ar · +54 9 11 7370-9382.",
  },
  hero: {
    h1: "Diagnóstico de IA, sin compromiso",
    subhead:
      "Contanos el proceso que hoy se sostiene con gente, planillas o un proveedor que no termina de cerrar. Vemos si hay un proyecto. Si no hay, también te lo decimos.",
  },
  afterSubmitNote: "Te respondemos a ese mail. Si urge, el WhatsApp es el mismo número.",
};

const en: ContactoContent = {
  seo: {
    title: "Contact | AI Diagnostic | Data Voices",
    description: "Free AI diagnostic. Buenos Aires. hola@datavoices.com.ar · +54 9 11 7370-9382.",
  },
  hero: {
    h1: "AI diagnostic, no strings attached",
    subhead:
      "Tell us about the process that's currently held together by people, spreadsheets, or a vendor that never quite delivers. We'll see if there's a project. If there isn't, we'll tell you that too.",
  },
  afterSubmitNote: "We'll reply to that email. If it's urgent, WhatsApp is the same number.",
};

export const contactoContent: Localized<ContactoContent> = { es, en };
