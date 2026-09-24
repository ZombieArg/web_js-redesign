import type { PressItem } from "../types";

/**
 * Las 4 notas reales del sitio, con copy tomado de Prensa_DataVoices_ES_EN.md
 * (entregado 24/09/2026) — título y fecha en ES y EN reales, no generados.
 * Hub funcional con links de salida por ahora; páginas propias por nota
 * (/prensa/[slug]) quedan para cuando haya copy dedicado (brief §2.1) —
 * el hub con las 4 tarjetas alcanza para el lanzamiento (feedback SEO/GEO §3).
 */
export const prensa: PressItem[] = [
  {
    slug: "infobae",
    source: "Infobae",
    title: {
      es: "Argentinos ganan premio internacional por crear una IA que desintoxica redes sociales y elimina la violencia",
      en: "International award for an AI that reduces social media toxicity",
    },
    date: { es: "Enero 2025", en: "January 2025" },
    url: "https://www.infobae.com/tecno/2025/01/09/argentinos-ganan-premio-internacional-por-crear-una-ia-que-desintoxica-redes-sociales-y-elimina-la-violencia/",
    imageKey: "infobae",
  },
  {
    slug: "c5n",
    source: "C5N",
    title: {
      es: "Egresados de la UBA crearon un chatbot con IA pensado para la atención al cliente",
      en: "UBA graduates build an AI chatbot for customer service",
    },
    date: { es: "Enero 2025", en: "January 2025" },
    url: "https://www.c5n.com/sociedad/egresados-la-uba-crearon-un-chatbot-ia-pensado-la-atencion-al-cliente-n188577",
    imageKey: "c5n",
  },
  {
    slug: "perfil",
    source: "Perfil",
    title: {
      es: "IA al servicio de la democracia: el caso de éxito de Data Voices",
      en: "AI in service of democracy: the Data Voices success story",
    },
    date: { es: "Noviembre 2024", en: "November 2024" },
    url: "https://www.perfil.com/noticias/tecnologia/ia-al-servicio-de-la-democracia-el-caso-de-exito-de-data-voices.phtml",
    imageKey: "perfil",
  },
  {
    slug: "puntal",
    source: "Puntal",
    title: {
      es: "Aseguran que la inteligencia artificial cambiará la economía y la forma de vivir de las personas",
      en: "AI will change the economy and the way people live",
    },
    date: { es: "Enero 2025", en: "January 2025" },
    url: "https://www.puntal.com.ar/inteligencia-artificial/aseguran-que-la-inteligencia-artificial-cambiara-la-economia-y-la-forma-vivir-las-personas-n230523",
    imageKey: "puntal",
  },
];
