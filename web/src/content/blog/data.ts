import type { TranslationStatus } from "../types";
import { NOINDEX_ALL } from "@/lib/constants";

export type BlogCategory = "proveedores" | "agentes" | "implementacion";

export interface BlogCopy {
  slug: string;
  title: string;
  seoTitle: string;
  breadcrumbTitle: string;
  excerpt: string;
  lead: string;
  /**
   * TODO(fechas): PENDIENTE. `null` (o el literal `"PENDIENTE"`) hasta que
   * Guilleche confirme la fecha y GM la cargue en ISO (`YYYY-MM-DD` o
   * datetime con offset). No inventar una fecha.
   * Si sigue pendiente, el JSON-LD no emite `datePublished` y el sitemap
   * no usa esta fecha.
   */
  datePublished: string | null;
  /**
   * TODO(fechas): PENDIENTE. Misma regla que `datePublished`.
   * Si sigue pendiente, el JSON-LD no emite `dateModified` y el sitemap
   * omite `lastModified` para la URL de esta nota en este idioma.
   */
  dateModified: string | null;
}

export interface BlogItem extends BlogCopy {
  category: BlogCategory;
  authors: ("juanma" | "eduardo")[];
  readingMinutes: number;
  translationStatus: TranslationStatus;
  /** Se habilita solo cuando la nota ya está publicada en el sitio principal. */
  isPublished?: boolean;
  /**
   * Valor ya cargado, PENDIENTE de confirmar. No cambiarlo por otra fecha.
   * No se emite: sitemap y JSON-LD leen `datePublished` / `dateModified`
   * de cada idioma. El inglés no tenía estos campos; heredaba los del español.
   */
  publishedAt?: string;
  /** Valor ya cargado, PENDIENTE de confirmar. Misma regla que `publishedAt`. */
  modifiedAt?: string;
  /** Traducción en inglés con slug propio. Ausente = la nota sigue solo en español. */
  en?: BlogCopy;
}

// La publicación se habilita por entorno; la fecha editorial no depende del build.
export const BLOG_PUBLIC = process.env.NEXT_PUBLIC_BLOG_PUBLIC === "true";
export const BLOG_PREVIEW = process.env.NODE_ENV === "development" || BLOG_PUBLIC;
// Valor histórico ya cargado (2026-10-27). PENDIENTE de confirmar: no se emite
// y no se reemplaza por otra fecha. La fecha que se publica es datePublished /
// dateModified de cada idioma, hoy en null.
const BLOG_PUBLICATION_DATE = "2026-10-27";
function publicationFor() {
  return { isPublished: true, publishedAt: BLOG_PUBLICATION_DATE, modifiedAt: BLOG_PUBLICATION_DATE };
}

export const blogPosts: BlogItem[] = [
  {
    slug: "como-elegir-consultora-inteligencia-artificial",
    title: "Cómo elegir una consultora de IA para tu empresa: criterios, preguntas y señales de alerta",
    seoTitle: "Cómo elegir una consultora de inteligencia artificial",
    breadcrumbTitle: "Cómo elegir una consultora de IA",
    excerpt: "Criterios, preguntas para hacer antes de firmar y señales de alerta para elegir una consultora de IA. Sin rankings ni promesas: cómo evaluar con evidencia.",
    lead: "Elegir una consultora de IA es verificar cuatro cosas: casos en producción, no demos; un método para pasar del diagnóstico a la implementación; claridad sobre quién es dueño del código y de los datos; y cómo se mide el resultado. Si una consultora no puede mostrarte las cuatro con evidencia, seguí buscando.",
    category: "proveedores", authors: ["juanma"], readingMinutes: 11, translationStatus: "live",
    // publishedAt 2026-10-27 (BLOG_PUBLICATION_DATE) y modifiedAt 2026-10-31:
    // PENDIENTE de confirmar. No reemplazar por otra fecha. No se emiten.
    ...publicationFor(), modifiedAt: "2026-10-31",
    // TODO(fechas): PENDIENTE. ES a confirmar. No cargar una fecha.
    datePublished: null,
    dateModified: null,
    en: {
      slug: "how-to-choose-ai-consulting-firm",
      title: "How to Choose an AI Consulting Firm: 7 Criteria and the Questions to Ask Before You Sign",
      seoTitle: "How to Choose an AI Consulting Firm: 7 Criteria",
      breadcrumbTitle: "How to choose an AI consulting firm",
      excerpt: "Seven criteria and the questions to ask before you sign with an AI consultancy: production cases, method, team, ownership of code and data, and metrics.",
      lead: "Choosing an AI consulting firm comes down to checking four things: cases in production, not demos; a method that goes from assessment to implementation; clear ownership of the code and the data; and how the result is measured. If a firm can't show you all four with evidence, keep looking.",
      // TODO(fechas): PENDIENTE. Referencia, NO cargar: las 3 notas EN parecerían del 2026-11-05.
      // Antes no tenía fecha propia: el JSON-LD heredaba publishedAt/modifiedAt del ES.
      datePublished: null,
      dateModified: null,
    },
  },
  {
    slug: "agente-de-ia-vs-chatbot",
    title: "Agente de IA vs chatbot: diferencias reales y cómo decidir qué necesita tu empresa",
    seoTitle: "Agente de IA vs chatbot: diferencias y cómo decidir",
    breadcrumbTitle: "Agente de IA vs chatbot",
    excerpt: "Un chatbot responde; un agente de IA resuelve un paso del proceso. Cinco criterios para decidir qué necesita tu empresa y cuándo alcanza con un chatbot.",
    lead: "Un chatbot responde preguntas; un agente de IA resuelve un paso del proceso: consulta una fuente de verdad y ejecuta una acción, como agendar o cargar un pedido. Si solo necesitás informar, alcanza con un chatbot. Si alguien de tu equipo hace de puente entre un canal y un sistema, necesitás un agente.",
    category: "agentes", authors: ["juanma", "eduardo"], readingMinutes: 10, translationStatus: "live",
    // publishedAt 2026-10-27 (BLOG_PUBLICATION_DATE) y modifiedAt 2026-10-31:
    // PENDIENTE de confirmar. No reemplazar por otra fecha. No se emiten.
    ...publicationFor(), modifiedAt: "2026-10-31",
    // TODO(fechas): PENDIENTE. ES a confirmar. No cargar una fecha.
    datePublished: null,
    dateModified: null,
    en: {
      slug: "ai-agent-vs-chatbot",
      title: "AI agent vs chatbot: the real differences and how to decide what your company needs",
      seoTitle: "AI Agent vs Chatbot: 5 Criteria to Decide",
      breadcrumbTitle: "AI agent vs chatbot",
      excerpt: "Chatbot or AI agent? Compare channel, source of truth, allowed actions, human escalation and measurement, and know when an agent isn't worth it.",
      lead: "A chatbot answers questions; an AI agent completes a step in your process: it checks a source of truth and executes an action, such as booking an appointment or entering an order. If you only need to inform, a chatbot is enough. If someone acts as a bridge between a channel and a system, you need an agent.",
      // TODO(fechas): PENDIENTE. Referencia, NO cargar: las 3 notas EN parecerían del 2026-11-05.
      // Antes no tenía fecha propia: el JSON-LD heredaba publishedAt/modifiedAt del ES.
      datePublished: null,
      dateModified: null,
    },
  },
  {
    slug: "como-elegir-chatbot-whatsapp-ia",
    title: "Cómo elegir un chatbot de WhatsApp con IA: 8 criterios antes de contratar",
    seoTitle: "Cómo elegir un chatbot de WhatsApp con IA",
    breadcrumbTitle: "Cómo elegir un chatbot de WhatsApp con IA",
    excerpt: "API oficial, dueño del número, derivación a una persona, integraciones, datos y costos: 8 criterios para elegir un chatbot de WhatsApp con IA.",
    lead: "Para elegir un chatbot de WhatsApp con IA, verificá primero que use la API oficial de WhatsApp Business y que el número y las conversaciones queden a nombre de tu empresa. Después mirá de dónde saca las respuestas, cuándo deriva a una persona, con qué sistemas se integra y cómo se mide. El precio viene al final.",
    category: "agentes", authors: ["eduardo"], readingMinutes: 11, translationStatus: "live",
    // publishedAt 2026-10-27 (BLOG_PUBLICATION_DATE) y modifiedAt 2026-10-31:
    // PENDIENTE de confirmar. No reemplazar por otra fecha. No se emiten.
    ...publicationFor(), modifiedAt: "2026-10-31",
    // TODO(fechas): PENDIENTE. ES a confirmar. No cargar una fecha.
    datePublished: null,
    dateModified: null,
    en: {
      slug: "how-to-choose-whatsapp-ai-provider",
      title: "How to Choose a WhatsApp AI Provider: 8 Criteria Before You Sign",
      seoTitle: "How to Choose a WhatsApp AI Provider: 8 Criteria",
      breadcrumbTitle: "How to choose a WhatsApp AI provider",
      excerpt: "Official API, who owns the number, source of truth, human handoff and Meta's rules on AI: eight criteria and the questions to ask any WhatsApp AI vendor.",
      lead: "To choose a WhatsApp AI provider, first check that it uses the official WhatsApp Business API and that the number and the conversations stay in your company's name. Then look at where the answers come from, when it hands off to a person, which systems it integrates with and how it's measured. Price comes last.",
      // TODO(fechas): PENDIENTE. Referencia, NO cargar: las 3 notas EN parecerían del 2026-11-05.
      // Antes no tenía fecha propia: el JSON-LD heredaba publishedAt/modifiedAt del ES.
      datePublished: null,
      dateModified: null,
    },
  },
  {
    slug: "por-que-fallan-los-proyectos-de-ia",
    title: "Por qué fallan los proyectos de IA y qué frena a los pilotos antes de producción",
    seoTitle: "Por qué fallan los proyectos de IA y cómo evaluar el tuyo",
    breadcrumbTitle: "Por qué fallan los proyectos de IA",
    excerpt: "Por qué fallan los proyectos de IA: procesos, datos, equipo y métrica. Mitos, causas y cómo evaluar tu piloto antes de invertir.",
    lead: "Cuando un proyecto de IA se traba, la causa suele estar en la organización y no en el modelo. Un piloto no llega a producción cuando nadie definió el proceso, los datos no están listos, el equipo que tiene que usarlo no se preparó o no hay una métrica acordada. Todo eso se puede evaluar antes de invertir.",
    category: "implementacion", authors: ["juanma"], readingMinutes: 11, translationStatus: "live",
    ...publicationFor(),
    // PENDIENTE de confirmar. No cambiar estos valores por otros. No se emiten.
    // Pisan el 2026-10-27 de publicationFor().
    publishedAt: "2026-10-31T00:00:00-03:00",
    modifiedAt: "2026-10-31T00:00:00-03:00",
    // TODO(fechas): PENDIENTE. Referencia, NO cargar: «Por qué fallan» ES parecería del 2026-11-12.
    datePublished: null,
    dateModified: null,
    en: {
      slug: "why-ai-projects-fail",
      title: "Why AI projects fail and what stops pilots before production",
      seoTitle: "Why AI Projects Fail (and How to Assess Yours)",
      breadcrumbTitle: "Why AI projects fail and what stops pilots before production",
      excerpt: "When an AI project stalls, the cause is often in the organization, not the model. The five causes, what a maturity assessment checks and how to plan a pilot.",
      lead: "When an AI project stalls, the cause is often in the organization, not the model. A pilot doesn't reach production when nobody defined the process, the data isn't ready, the team that has to use it wasn't prepared or there's no agreed metric. All of that can be assessed before you invest.",
      // TODO(fechas): PENDIENTE. Referencia, NO cargar: «Por qué fallan» EN parecería del 2026-11-12.
      // Antes no tenía fecha propia: el JSON-LD heredaba publishedAt/modifiedAt del ES.
      datePublished: null,
      dateModified: null,
    },
  },
  {
    slug: "no-code-vs-desarrollo-a-medida-ia",
    title: "No-code vs desarrollo a medida: cómo decidir el camino de tu proyecto de IA",
    seoTitle: "No-code vs desarrollo a medida en IA: cómo decidir",
    breadcrumbTitle: "No-code vs desarrollo a medida",
    excerpt: "No-code vs desarrollo a medida: criterios para elegir el camino de tu proyecto de IA según proceso, integraciones y mantenimiento.",
    lead: "Una plataforma no-code alcanza cuando el proceso es estándar y necesitás validar rápido. Un producto armado conviene cuando tu caso es el caso común que ese producto ya resuelve. El desarrollo a medida se justifica cuando el proceso es propio, hay que integrarse con tus sistemas o no podés quedar atado a un proveedor.",
    category: "proveedores", authors: ["eduardo"], readingMinutes: 11, translationStatus: "pending",
    // Oculta en producción hasta una próxima tanda; el preview la sigue mostrando.
    // publishedAt 2026-10-27 (BLOG_PUBLICATION_DATE) y modifiedAt 2026-10-31:
    // PENDIENTE de confirmar. No reemplazar por otra fecha. No se emiten.
    ...publicationFor(), modifiedAt: "2026-10-31", isPublished: false,
    // TODO(fechas): PENDIENTE. ES a confirmar. No hay versión EN. No cargar una fecha.
    datePublished: null,
    dateModified: null,
  },
];

const CONFIRMED_ISO_DATE = /^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})?)?$/;

/** Fecha lista para emitir. `null`, `"PENDIENTE"` o un texto que no es ISO no salen. */
export function confirmedEditorialDate(value: string | null | undefined): string | undefined {
  if (!value || value === "PENDIENTE" || !CONFIRMED_ISO_DATE.test(value)) return undefined;
  return value;
}

/** Fechas de la nota en el idioma del slug. `undefined` si el slug no es una nota. */
export function blogDatesForSlug(slug: string): { datePublished: string | null; dateModified: string | null } | undefined {
  const post = blogPosts.find((item) => item.slug === slug || item.en?.slug === slug);
  if (!post) return undefined;
  const copy = post.en && post.en.slug === slug ? post.en : post;
  return { datePublished: copy.datePublished, dateModified: copy.dateModified };
}

export const publishedBlogPosts = blogPosts.filter((post) => post.isPublished);
export const visibleBlogPosts = !BLOG_PREVIEW ? [] : (process.env.NODE_ENV === "development" || NOINDEX_ALL ? blogPosts : publishedBlogPosts);
export const blogCategoryLabels: Record<BlogCategory, string> = {
  proveedores: "Evaluar proveedores",
  agentes: "Agentes y asistentes",
  implementacion: "Implementación",
};
const blogCategoryLabelsEn: Record<BlogCategory, string> = {
  proveedores: "Evaluating vendors",
  agentes: "AI agents and assistants",
  implementacion: "Implementation",
};
export function blogCategoryLabel(locale: string, category: BlogCategory) {
  return locale === "en" ? blogCategoryLabelsEn[category] : blogCategoryLabels[category];
}
export const blogCategoryTrackingValue: Record<BlogCategory, string> = {
  proveedores: "evaluar-proveedores",
  agentes: "agentes-asistentes",
  implementacion: "implementacion",
};

export const blogAuthors = {
  juanma: {
    name: "Juan Manuel Ortiz de Zárate",
    shortName: "Juanma",
    jobTitle: "co-fundador y CTO de Data Voices",
    credentials: "Magíster y PhD en Ciencias de la Computación (UBA)",
    en: { jobTitle: "co-founder and CTO of Data Voices", credentials: "Master's and PhD in Computer Science (UBA)" },
  },
  eduardo: {
    name: "Eduardo Pan",
    shortName: "Eduardo Pan",
    jobTitle: "co-fundador y Senior Software Developer de Data Voices",
    credentials: "",
    en: { jobTitle: "co-founder and Senior Software Developer of Data Voices", credentials: "" },
  },
};

export type BlogAuthorId = keyof typeof blogAuthors;

export function blogAuthor(id: BlogAuthorId, locale: string) {
  const author = blogAuthors[id];
  if (locale !== "en") return author;
  return { ...author, jobTitle: author.en.jobTitle, credentials: author.en.credentials };
}

export function blogCopy(post: BlogItem, locale: string): BlogCopy {
  if (locale === "en" && post.en) return post.en;
  return post;
}

export function blogPostForSlug(slug: string, locale: string) {
  if (locale === "en") {
    return visibleBlogPosts.find((post) => post.en?.slug === slug)
      ?? visibleBlogPosts.find((post) => post.slug === slug && !post.en);
  }
  return visibleBlogPosts.find((post) => post.slug === slug);
}

/** Slug de la nota en el otro idioma. Sin traducción en inglés, el slug español se mantiene. */
export function blogSlugForLocale(slug: string, locale: "es" | "en") {
  const post = blogPosts.find((item) => item.slug === slug || item.en?.slug === slug);
  if (!post) return undefined;
  if (locale === "es") return post.slug;
  return post.en?.slug ?? post.slug;
}
