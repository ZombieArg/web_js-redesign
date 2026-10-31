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

// La publicación se habilita por entorno; la fecha editorial no depende del build.
export const BLOG_PUBLIC = process.env.NEXT_PUBLIC_BLOG_PUBLIC === "true";
export const BLOG_PREVIEW = process.env.NODE_ENV === "development" || BLOG_PUBLIC;
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
    category: "proveedores", authors: ["juanma"], readingMinutes: 11, translationStatus: "pending",
    ...publicationFor(), modifiedAt: "2026-10-31",
  },
  {
    slug: "agente-de-ia-vs-chatbot",
    title: "Agente de IA vs chatbot: diferencias reales y cómo decidir qué necesita tu empresa",
    seoTitle: "Agente de IA vs chatbot: diferencias y cómo decidir",
    breadcrumbTitle: "Agente de IA vs chatbot",
    excerpt: "Un chatbot responde; un agente de IA resuelve un paso del proceso. Cinco criterios para decidir qué necesita tu empresa y cuándo alcanza con un chatbot.",
    lead: "Un chatbot responde preguntas; un agente de IA resuelve un paso del proceso: consulta una fuente de verdad y ejecuta una acción, como agendar o cargar un pedido. Si solo necesitás informar, alcanza con un chatbot. Si alguien de tu equipo hace de puente entre un canal y un sistema, necesitás un agente.",
    category: "agentes", authors: ["juanma", "eduardo"], readingMinutes: 10, translationStatus: "pending",
    ...publicationFor(), modifiedAt: "2026-10-31",
  },
  {
    slug: "como-elegir-chatbot-whatsapp-ia",
    title: "Cómo elegir un chatbot de WhatsApp con IA: 8 criterios antes de contratar",
    seoTitle: "Cómo elegir un chatbot de WhatsApp con IA",
    breadcrumbTitle: "Cómo elegir un chatbot de WhatsApp con IA",
    excerpt: "API oficial, dueño del número, derivación a una persona, integraciones, datos y costos: 8 criterios para elegir un chatbot de WhatsApp con IA.",
    lead: "Para elegir un chatbot de WhatsApp con IA, verificá primero que use la API oficial de WhatsApp Business y que el número y las conversaciones queden a nombre de tu empresa. Después mirá de dónde saca las respuestas, cuándo deriva a una persona, con qué sistemas se integra y cómo se mide. El precio viene al final.",
    category: "agentes", authors: ["eduardo"], readingMinutes: 11, translationStatus: "pending",
    ...publicationFor(), modifiedAt: "2026-10-31",
  },
  {
    slug: "por-que-fallan-los-proyectos-de-ia",
    title: "Por qué fallan los proyectos de IA y qué frena a los pilotos antes de producción",
    seoTitle: "Por qué fallan los proyectos de IA y cómo evaluar el tuyo",
    breadcrumbTitle: "Por qué fallan los proyectos de IA",
    excerpt: "Por qué fallan los proyectos de IA: procesos, datos, equipo y métrica. Mitos, causas y cómo evaluar tu piloto antes de invertir.",
    lead: "Un proyecto de IA suele trabarse en la organización antes que en el modelo. Un piloto no llega a producción cuando nadie definió el proceso, los datos no están listos, el equipo que tiene que usarlo no se preparó o no hay una métrica acordada. Todo eso se puede evaluar antes de invertir.",
    category: "implementacion", authors: ["juanma"], readingMinutes: 11, translationStatus: "pending",
    ...publicationFor(), modifiedAt: "2026-10-31",
  },
  {
    slug: "no-code-vs-desarrollo-a-medida-ia",
    title: "No-code vs desarrollo a medida: cómo decidir el camino de tu proyecto de IA",
    seoTitle: "No-code vs desarrollo a medida en IA: cómo decidir",
    breadcrumbTitle: "No-code vs desarrollo a medida",
    excerpt: "No-code vs desarrollo a medida: criterios para elegir el camino de tu proyecto de IA según proceso, integraciones y mantenimiento.",
    lead: "Una plataforma no-code alcanza cuando el proceso es estándar y necesitás validar rápido. Un producto armado conviene cuando tu caso es el caso común que ese producto ya resuelve. El desarrollo a medida se justifica cuando el proceso es propio, hay que integrarse con tus sistemas o no podés quedar atado a un proveedor.",
    category: "proveedores", authors: ["eduardo"], readingMinutes: 11, translationStatus: "pending",
    ...publicationFor(), modifiedAt: "2026-10-31",
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
