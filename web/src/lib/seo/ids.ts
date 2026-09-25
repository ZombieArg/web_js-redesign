import { SITE_URL } from "@/lib/constants";

/**
 * @id estables del grafo JSON-LD. Siempre la URL SIN prefijo de idioma
 * (= la URL "es", por routing.localePrefix "as-needed") — identidad
 * semántica del nodo, constante entre locales. No confundir con el
 * `alternates.canonical` de cada página (ver lib/seo/metadata.ts), que sí
 * es por-locale.
 */
export const SCHEMA_IDS = {
  org: `${SITE_URL}/#org`,
  website: `${SITE_URL}/#website`,
  service: (slug: string) => `${SITE_URL}/servicios/${slug}#service`,
  ceciliaProduct: `${SITE_URL}/cecilia#product`,
  faq: (path: string) => `${SITE_URL}${path}#faq`,
  breadcrumb: (path: string) => `${SITE_URL}${path}#breadcrumb`,
  person: {
    juanma: `${SITE_URL}/nosotros#juanma`,
    eduardo: `${SITE_URL}/nosotros#eduardo`,
  },
  work: (slug: string) => `${SITE_URL}/casos/${slug}#work`,
} as const;
