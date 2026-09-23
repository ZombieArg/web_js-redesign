import type { Localized, ServicePageContent } from "../types";

const es: ServicePageContent = {
  slug: "ia-sobre-datos",
  iconName: "datos",
  seo: {
    title: "IA sobre los datos de tu empresa | Data Voices",
    description:
      "Inteligencia artificial aplicada a procesos y datos que tu empresa ya tiene. Consulta a bases propias, documentos y sistemas en uso.",
  },
  hero: {
    breadcrumbLabel: "Servicio · IA sobre tus datos",
    h1: "Inteligencia artificial aplicada a tus procesos y datos",
    subhead:
      "La IA útil suele estar en lo que la empresa ya tiene: facturas, tickets, normas, historial comercial. Trabajamos sobre eso. No hace falta reemplazar el sistema actual.",
    primaryCta: { label: "Pedí un diagnóstico gratuito", href: "/contacto" },
  },
  definition: {
    kicker: "Definición institucional",
    heading: "Qué hacemos con tus datos",
    body: "Esta línea aplica inteligencia artificial a procesos y datos que la empresa ya opera. Distinto de un chatbot de atención y distinto de un software desde cero. El trabajo típico: consultar bases propias, resumir documentos, clasificar tickets, apoyar una decisión con el historial real.",
  },
  viability: {
    kind: "signals",
    heading: "Señales de que esta es la página correcta",
    items: [
      "Tienen sistemas andando y nadie los consulta bien.",
      "El conocimiento está en PDFs, mails o carpetas.",
      "Quieren un asistente interno, no uno de cara al cliente.",
    ],
  },
  buildProcess: {
    kicker: "Qué entregamos",
    heading: "Qué entregamos",
    steps: [
      { title: "Un sistema que responde con la fuente citada" },
      { title: "Permisos" },
      { title: "Registro de uso" },
      { title: "Criterio de \"no sé\"" },
      {
        title: "Casos de apoyo",
        caption:
          "Normsy (estudio con 1.021 participantes) cuando el problema es criterio y modelo, no solo recuperación de información. BID cuando el corpus es institucional y grande.",
      },
    ],
  },
  faq: {
    kicker: "Resolución de dudas",
    heading: "Preguntas frecuentes",
    items: [
      {
        question: "¿Hay que migrar todo a un lago de datos?",
        answer: "No como primer paso. Primero se elige un proceso y una fuente.",
      },
      {
        question: "¿Entrenan un modelo propio?",
        answer: "A veces basta con recuperar bien. Entrenar es una decisión, no un default.",
      },
    ],
  },
  closingCta: {
    kicker: "Siguiente paso",
    heading: "Si el dato ya existe y no se usa, el proyecto no es \"hacer IA\".",
    subhead: "Es ponerlo a trabajar.",
    primaryCta: { label: "Pedí un diagnóstico gratuito", href: "/contacto" },
  },
};

export const iaSobreDatosContent: Localized<ServicePageContent> = { es, en: null };
