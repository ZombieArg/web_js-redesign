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

export const contactoContent: Localized<ContactoContent> = { es, en: null };
