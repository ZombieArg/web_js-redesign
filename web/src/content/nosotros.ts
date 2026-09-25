import type { Localized, NosotrosContent } from "./types";

const es: NosotrosContent = {
  seo: {
    title: "Nosotros | Data Voices",
    description:
      "Quién construye Data Voices. Juan Manuel Ortiz de Zárate y Eduardo Pan. Trabajo con organismos internacionales, producto e implementación de IA.",
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
      bio: "Senior AI Engineer. Magíster y PhD en Ciencias de la Computación (UBA). Toptal y Fundar. Trabajo citado con Auth0, Nixtla, gobiernos y organismos internacionales.",
    },
    {
      slug: "eduardo",
      name: "Eduardo Pan",
      jobTitle: "Co-fundador y Senior Software Developer",
      bio: "Más de 20 años construyendo software. GLG y Ansel Health. React, Node, TypeScript. Trabajo citado con Manchester United, Debenhams y OVO Energy.",
    },
  ],
  institutionalNote: {
    heading: "Eje institucional",
    text: "El trabajo con organismos internacionales es institucional y de escala. Portafolio público, no un logo de más.",
    linkLabel: "Ver el caso completo",
    href: "/casos/organismo-internacional",
  },
  closingCta: { label: "Pedí un diagnóstico gratuito", href: "/contacto" },
};

const en: NosotrosContent = {
  seo: {
    title: "About Us | Data Voices",
    description: "Who builds Data Voices. Juan Manuel Ortiz de Zárate and Eduardo Pan. Work with international organizations, product, and AI implementation.",
  },
  hero: {
    h1: "Who builds Data Voices",
    subhead: "Two profiles that don't overlap: AI research and product, and software engineering that reaches production.",
  },
  entityParagraph:
    "Data Voices is an Argentine AI and software development consultancy, founded in 2023, based in Buenos Aires. Public identity: consultancy, not agency.",
  people: [
    {
      slug: "juanma",
      name: "Juan Manuel Ortiz de Zárate",
      jobTitle: "Co-founder and CTO",
      bio: "Senior AI Engineer. Master's and PhD in Computer Science (UBA). Toptal and Fundar. Work cited with Auth0, Nixtla, governments, and international organizations.",
    },
    {
      slug: "eduardo",
      name: "Eduardo Pan",
      jobTitle: "Co-founder and Senior Software Developer",
      bio: "20+ years building software. GLG and Ansel Health. React, Node, TypeScript. Work cited with Manchester United, Debenhams, and OVO Energy.",
    },
  ],
  institutionalNote: {
    heading: "Institutional track record",
    text: "Our work with international organizations is institutional and at scale. Public portfolio, not just another logo.",
    linkLabel: "See the full case study",
    href: "/casos/organismo-internacional",
  },
  closingCta: { label: "Get a free diagnostic", href: "/contacto" },
};

export const nosotrosContent: Localized<NosotrosContent> = { es, en };
