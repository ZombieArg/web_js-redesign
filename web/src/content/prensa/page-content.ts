import type { Localized, PrensaContent } from "../types";

// Copy real de Prensa_DataVoices_ES_EN.md (entregado 24/09/2026). Reemplaza
// el placeholder anterior (hero hardcodeado en Spanish dentro de page.tsx,
// sin H1 real y sin versión EN — feedback SEO/GEO ítems 3 y 5).
const es: PrensaContent = {
  seo: {
    title: "Prensa | Data Voices en los medios",
    description:
      "Data Voices en los medios: premios internacionales, casos de éxito con IA aplicada a atención al cliente, democracia y economía. Cobertura en Infobae, C5N, Perfil y Puntal.",
  },
  hero: {
    h1: "Data Voices en los medios",
    subhead:
      "Cobertura periodística sobre nuestro trabajo en agentes de IA, moderación de contenido y aplicación de inteligencia artificial a procesos reales de negocio.",
  },
  intro:
    "Data Voices es una consultora argentina de inteligencia artificial, fundada por Juan Manuel Ortiz de Zárate (PhD en Ciencias de la Computación, UBA) y Eduardo Pan. El trabajo del equipo fue cubierto por medios como Infobae, Perfil, C5N y Puntal, con foco en tres áreas: premios internacionales por el desarrollo del Social Media Detoxifier junto a Civic Health Project, la creación de Cecilia (agente de atención al cliente por WhatsApp), y el rol de la IA en la transformación de negocios en Argentina.",
  sectionHeading: "Notas de prensa",
  closing: {
    heading: "Si sos periodista y querés contactar al equipo de Data Voices para una nota, escribinos.",
    cta: { label: "Contactanos", href: "/contacto" },
  },
};

const en: PrensaContent = {
  seo: {
    title: "Press | Data Voices in the Media",
    description:
      "Data Voices in the media: international awards, AI-powered customer service, democracy, and business transformation. Coverage in Infobae, C5N, Perfil, and Puntal.",
  },
  hero: {
    h1: "Data Voices in the Media",
    subhead: "Press coverage of our work on AI agents, content moderation, and applying artificial intelligence to real business processes.",
  },
  intro:
    "Data Voices is an Argentine artificial intelligence consultancy founded by Juan Manuel Ortiz de Zárate (PhD in Computer Science, University of Buenos Aires) and Eduardo Pan. The team's work has been covered by outlets including Infobae, Perfil, C5N, and Puntal, spanning three areas: international awards for the Social Media Detoxifier, developed with Civic Health Project; the creation of Cecilia, a WhatsApp-based customer service agent; and AI's role in transforming businesses across Argentina.",
  sectionHeading: "Press coverage",
  closing: {
    heading: "If you're a journalist and would like to get in touch with the Data Voices team for a story, reach out.",
    cta: { label: "Contact us", href: "/contacto" },
  },
};

export const prensaPageContent: Localized<PrensaContent> = { es, en };
