import type { Localized, NosotrosContent } from "./types";

const es: NosotrosContent = {
  seo: {
    title: "Nosotros | Data Voices",
    description:
      "Quién construye Data Voices. Juan Manuel Ortiz de Zárate y Eduardo Pan. Trabajo con el BID, producto e implementación de IA.",
  },
  hero: {
    h1: "Quién construye Data Voices",
    subhead:
      "Dos perfiles que no se pisan: investigación y producto de IA, e ingeniería de software que llega a producción.",
  },
  entityParagraph:
    "Data Voices es una consultora argentina de inteligencia artificial y desarrollo de software, fundada en 2023, con sede en Buenos Aires. Identidad pública: consultora, no agencia.",
  people: [
    {
      slug: "juanma",
      name: "Juan Manuel Ortiz de Zárate",
      jobTitle: "Co-fundador y CTO",
      bio: "Senior AI Engineer. Magíster y PhD en Ciencias de la Computación (UBA). Toptal y Fundar. Trabajo citado con Auth0, Nixtla, gobiernos y el Banco Interamericano de Desarrollo.",
    },
    {
      slug: "eduardo",
      name: "Eduardo Pan",
      jobTitle: "Co-fundador y Senior Software Developer",
      bio: "Más de 20 años construyendo software. GLG y Ansel Health. React, Node, TypeScript. Trabajo citado con Manchester United, Debenhams y OVO Energy.",
    },
  ],
  bidNote: {
    text: "El trabajo con el BID es institucional y de escala. Portafolio público, no un logo de más.",
    linkLabel: "Ver el caso completo",
    href: "/casos/bid",
  },
  closingCta: { label: "Pedí un diagnóstico gratuito", href: "/contacto" },
};

export const nosotrosContent: Localized<NosotrosContent> = { es, en: null };
