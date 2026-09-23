import type { CaseItem } from "../types";

/**
 * Placeholder técnico con datos reales-parciales (no lorem ipsum): summary y
 * caption vienen del copy final de Home/Asistentes IA; body/highlights solo
 * están poblados donde hay una fuente concreta (Schema/GEO, prensa real).
 * Narrativa larga, métricas y video quedan pendientes de Íntimo Growth
 * (brief §2.2) — se agregan acá cuando lleguen, sin tocar el template.
 */
export const casos: CaseItem[] = [
  {
    slug: "real-time-interview-agent",
    tag: "HR Tech",
    iconName: "usuarios",
    title: "Real Time Interview Agent",
    summary:
      "Entrevistas de RR. HH. en tiempo real. En el catálogo aparece como implementación llave en mano de RR. HH.",
    caption: "Latencia inferior a 450ms en streaming de voz",
    translationStatus: "pending",
  },
  {
    slug: "normsy",
    tag: "Civic Tech",
    iconName: "documentos",
    title: "Normsy",
    summary: "Estudio con 1.021 participantes.",
    caption: "Procesamiento semántico de respuestas abiertas",
    translationStatus: "pending",
  },
  {
    slug: "agent-launcher",
    tag: "Plataforma",
    iconName: "integraciones",
    title: "Agent Launcher",
    summary:
      "Comparás y activás agentes sobre distintos modelos. Sirve cuando el problema no es un canal, es la orquestación.",
    translationStatus: "pending",
  },
  {
    slug: "bid",
    tag: "Sector Público / Multilateral",
    iconName: "seguridad",
    title: "Trabajo con el Banco Interamericano de Desarrollo",
    summary: "Portafolio público, escala institucional.",
    body: "Trabajo de inteligencia artificial sobre el portafolio público del BID e informe descargable.",
    caption: "Auditoría de datos y pipelines de inferencia",
    translationStatus: "pending",
  },
  {
    slug: "social-media-detoxifier",
    tag: "Civic Tech",
    iconName: "seguridad",
    title: "Social Media Detoxifier",
    summary: "Herramienta de IA para reducir violencia y toxicidad en redes sociales, desarrollada para Civic Health Project.",
    highlights: [{ emoji: "🏆", text: "Anthem Award, premio internacional." }],
    translationStatus: "pending",
  },
];

export function getCaseBySlug(slug: string) {
  return casos.find((c) => c.slug === slug);
}
