import type { PressItem } from "../types";

/**
 * Las 4 notas reales del sitio legacy (App.tsx). Títulos reconstruidos del
 * slug de cada URL (los medios de AR suelen sluggificar el título exacto) —
 * verificar contra la nota publicada antes de dar por definitivo. Hub
 * funcional con links de salida por ahora; la conversión a "páginas
 * propias" (brief §2.1) es trabajo de copy de Íntimo Growth.
 */
export const prensa: PressItem[] = [
  {
    slug: "infobae",
    source: "Infobae",
    title:
      "Argentinos ganan premio internacional por crear una IA que desintoxica redes sociales y elimina la violencia",
    url: "https://www.infobae.com/tecno/2025/01/09/argentinos-ganan-premio-internacional-por-crear-una-ia-que-desintoxica-redes-sociales-y-elimina-la-violencia/",
    imageKey: "infobae",
  },
  {
    slug: "c5n",
    source: "C5N",
    title: "Egresados de la UBA crearon un chatbot con IA pensado para la atención al cliente",
    url: "https://www.c5n.com/sociedad/egresados-la-uba-crearon-un-chatbot-ia-pensado-la-atencion-al-cliente-n188577",
    imageKey: "c5n",
  },
  {
    slug: "perfil",
    source: "Perfil",
    title: "IA al servicio de la democracia: el caso de éxito de Data Voices",
    url: "https://www.perfil.com/noticias/tecnologia/ia-al-servicio-de-la-democracia-el-caso-de-exito-de-data-voices.phtml",
    imageKey: "perfil",
  },
  {
    slug: "puntal",
    source: "Puntal",
    title: "Aseguran que la inteligencia artificial cambiará la economía y la forma de vivir de las personas",
    url: "https://www.puntal.com.ar/inteligencia-artificial/aseguran-que-la-inteligencia-artificial-cambiara-la-economia-y-la-forma-vivir-las-personas-n230523",
    imageKey: "puntal",
  },
];
