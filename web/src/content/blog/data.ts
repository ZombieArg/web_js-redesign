import type { TranslationStatus } from "../types";
import { NOINDEX_ALL } from "@/lib/constants";

export type BlogCategory = "proveedores" | "agentes" | "implementacion";

export interface BlogItem {
  slug: string;
  title: string;
  seoTitle: string;
  breadcrumbTitle: string;
  excerpt: string;
  lead: string;
  category: BlogCategory;
  authors: ("juanma" | "eduardo")[];
  readingMinutes: number;
  translationStatus: TranslationStatus;
  /** Se habilita solo cuando la nota ya está publicada en el sitio principal. */
  isPublished?: boolean;
  publishedAt?: string;
  modifiedAt?: string;
}

// Preview muestra los borradores; producción requiere la bandera del blog y una fecha real por nota.
export const BLOG_PUBLIC = process.env.NEXT_PUBLIC_BLOG_PUBLIC === "true";
export const BLOG_PREVIEW = process.env.NODE_ENV === "development" || BLOG_PUBLIC;
const publicationDates = [
  { publishedAt: process.env.NEXT_PUBLIC_BLOG_NOTA_01_PUBLISHED_AT, modifiedAt: process.env.NEXT_PUBLIC_BLOG_NOTA_01_MODIFIED_AT },
  { publishedAt: process.env.NEXT_PUBLIC_BLOG_NOTA_02_PUBLISHED_AT, modifiedAt: process.env.NEXT_PUBLIC_BLOG_NOTA_02_MODIFIED_AT },
  { publishedAt: process.env.NEXT_PUBLIC_BLOG_NOTA_03_PUBLISHED_AT, modifiedAt: process.env.NEXT_PUBLIC_BLOG_NOTA_03_MODIFIED_AT },
  { publishedAt: process.env.NEXT_PUBLIC_BLOG_NOTA_04_PUBLISHED_AT, modifiedAt: process.env.NEXT_PUBLIC_BLOG_NOTA_04_MODIFIED_AT },
  { publishedAt: process.env.NEXT_PUBLIC_BLOG_NOTA_05_PUBLISHED_AT, modifiedAt: process.env.NEXT_PUBLIC_BLOG_NOTA_05_MODIFIED_AT },
];
for (const [index, dates] of publicationDates.entries()) {
  for (const [kind, value] of Object.entries(dates)) {
    if (value && (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}-03:00$/.test(value) || Number.isNaN(Date.parse(value)))) {
      throw new Error(`NEXT_PUBLIC_BLOG_NOTA_0${index + 1}_${kind === "publishedAt" ? "PUBLISHED_AT" : "MODIFIED_AT"} debe tener formato YYYY-MM-DDTHH:mm:ss-03:00`);
    }
  }
  if (dates.modifiedAt && (!dates.publishedAt || Date.parse(dates.modifiedAt) < Date.parse(dates.publishedAt))) {
    throw new Error(`La fecha de modificación de la nota ${index + 1} debe ser posterior a su publicación`);
  }
}
function previewTimestamp() {
  const parts = Object.fromEntries(new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Argentina/Buenos_Aires", year: "numeric", month: "2-digit", day: "2-digit",
    hour: "2-digit", minute: "2-digit", second: "2-digit", hourCycle: "h23", timeZoneName: "longOffset",
  }).formatToParts(new Date()).map(({ type, value }) => [type, value]));
  return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}:${parts.second}${parts.timeZoneName.replace("GMT", "")}`;
}
function publicationFor(index: number) {
  const { publishedAt, modifiedAt } = publicationDates[index];
  const previewDate = index === 0 && (process.env.NODE_ENV === "development" || NOINDEX_ALL) ? previewTimestamp() : undefined;
  return { isPublished: Boolean(publishedAt), publishedAt: publishedAt ?? previewDate, modifiedAt: modifiedAt ?? publishedAt ?? previewDate };
}

export const blogPosts: BlogItem[] = [
  {
    slug: "como-elegir-consultora-inteligencia-artificial",
    title: "Cómo elegir una consultora de IA para tu empresa: criterios, preguntas y señales de alerta",
    seoTitle: "Cómo elegir una consultora de inteligencia artificial",
    breadcrumbTitle: "Cómo elegir una consultora de IA",
    excerpt: "Criterios, preguntas para hacer antes de firmar y señales de alerta para elegir una consultora de IA. Sin rankings ni promesas: cómo evaluar con evidencia.",
    lead: "Elegir una consultora de IA es verificar cuatro cosas: casos en producción, no demos; un método para pasar del diagnóstico a la implementación; claridad sobre quién es dueño del código y de los datos; y cómo se mide el resultado. Si una consultora no puede mostrarte las cuatro con evidencia, seguí buscando.",
    category: "proveedores", authors: ["juanma"], readingMinutes: 11, translationStatus: "pending",
    ...publicationFor(0),
  },
  {
    slug: "agente-de-ia-vs-chatbot",
    title: "Agente de IA vs chatbot: diferencias reales y cómo decidir qué necesita tu empresa",
    seoTitle: "Agente de IA vs chatbot: diferencias y cómo decidir",
    breadcrumbTitle: "Agente de IA vs chatbot",
    excerpt: "Un chatbot responde; un agente de IA resuelve un paso del proceso. Cinco criterios para decidir qué necesita tu empresa y cuándo alcanza con un chatbot.",
    lead: "Un chatbot responde preguntas; un agente de IA resuelve un paso del proceso: consulta una fuente de verdad y ejecuta una acción, como agendar o cargar un pedido. Si solo necesitás informar, alcanza con un chatbot. Si alguien de tu equipo hace de puente entre un canal y un sistema, necesitás un agente.",
    category: "agentes", authors: ["juanma", "eduardo"], readingMinutes: 10, translationStatus: "pending",
    ...publicationFor(1),
  },
  {
    slug: "como-elegir-chatbot-whatsapp-ia",
    title: "Cómo elegir un chatbot de WhatsApp con IA: 8 criterios antes de contratar",
    seoTitle: "Cómo elegir un chatbot de WhatsApp con IA",
    breadcrumbTitle: "Cómo elegir un chatbot de WhatsApp con IA",
    excerpt: "API oficial, dueño del número, derivación a una persona, integraciones, datos y costos: ocho criterios para comparar propuestas.",
    lead: "Para elegir un chatbot de WhatsApp con IA, verificá primero que use la plataforma oficial y que el número y la cuenta queden bajo control de tu empresa. Después mirá de dónde salen las respuestas, cuándo deriva a una persona, con qué sistemas se integra y cómo se mide. El precio viene al final.",
    category: "agentes", authors: ["eduardo"], readingMinutes: 9, translationStatus: "pending",
    ...publicationFor(2),
  },
  {
    slug: "por-que-fallan-los-proyectos-de-ia",
    title: "Por qué fallan los proyectos de IA y qué frena a los pilotos antes de producción",
    seoTitle: "Por qué fallan los proyectos de IA",
    breadcrumbTitle: "Por qué fallan los proyectos de IA",
    excerpt: "Proceso, datos, equipo, métrica y alcance: las causas que frenan los pilotos y una forma concreta de evaluarlas antes de invertir.",
    lead: "Muchos proyectos de IA no se traban por el modelo, sino antes, en la organización. Un piloto no llega a producción cuando nadie definió el proceso, los datos no están listos, el equipo que tiene que usarlo no se preparó o no hay una métrica acordada. Todo eso se puede evaluar antes de invertir.",
    category: "implementacion", authors: ["juanma"], readingMinutes: 9, translationStatus: "pending",
    ...publicationFor(3),
  },
  {
    slug: "no-code-vs-desarrollo-a-medida-ia",
    title: "No-code, producto armado o desarrollo a medida: cómo decidir tu proyecto de IA",
    seoTitle: "No-code vs desarrollo a medida en IA: cómo decidir",
    breadcrumbTitle: "No-code vs desarrollo a medida",
    excerpt: "Tres caminos para un proyecto de IA comparados por ajuste al proceso, integraciones, control de datos y mantenimiento.",
    lead: "Una plataforma no-code alcanza cuando el proceso es estándar y necesitás validar rápido. Un producto armado conviene cuando tu caso es el caso común que ese producto ya resuelve. El desarrollo a medida se justifica cuando el proceso es propio, hay que integrarse con tus sistemas o necesitás más control sobre su evolución.",
    category: "proveedores", authors: ["eduardo"], readingMinutes: 9, translationStatus: "pending",
    ...publicationFor(4),
  },
];

export const publishedBlogPosts = blogPosts.filter((post) => post.isPublished);
export const visibleBlogPosts = !BLOG_PREVIEW ? [] : (process.env.NODE_ENV === "development" || NOINDEX_ALL ? blogPosts : publishedBlogPosts);
export const blogCategoryLabels: Record<BlogCategory, string> = {
  proveedores: "Evaluar proveedores",
  agentes: "Agentes y asistentes",
  implementacion: "Implementación",
};
export const blogCategoryTrackingValue: Record<BlogCategory, string> = {
  proveedores: "evaluar-proveedores",
  agentes: "agentes-asistentes",
  implementacion: "implementacion",
};

export const blogAuthors = {
  juanma: { name: "Juan Manuel Ortiz de Zárate", shortName: "Juanma", jobTitle: "co-fundador y CTO de Data Voices", credentials: "Magíster y PhD en Ciencias de la Computación (UBA)" },
  eduardo: { name: "Eduardo Pan", shortName: "Eduardo Pan", jobTitle: "co-fundador y Senior Software Developer de Data Voices", credentials: "" },
};
