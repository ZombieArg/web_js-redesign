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
          "Normsy (estudio con 1.021 participantes) cuando el problema es criterio y modelo, no solo recuperación de información. El trabajo con un organismo internacional cuando el corpus es institucional y grande.",
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

const en: ServicePageContent = {
  slug: "ia-sobre-datos",
  iconName: "datos",
  seo: {
    title: "AI on Your Company's Data | Data Voices",
    description:
      "Artificial intelligence applied to processes and data your company already has. Query your own databases, documents, and systems in use.",
  },
  hero: {
    breadcrumbLabel: "Service · AI on Your Data",
    h1: "Artificial intelligence applied to your processes and data",
    subhead:
      "Useful AI is usually found in what the company already has: invoices, tickets, policies, sales history. We work on that. No need to replace your current system.",
    primaryCta: { label: "Get a free diagnostic", href: "/contacto" },
  },
  definition: {
    kicker: "Institutional definition",
    heading: "What we do with your data",
    body: "This line applies artificial intelligence to processes and data the company already runs. Different from a support chatbot, different from software built from scratch. Typical work: querying your own databases, summarizing documents, classifying tickets, supporting a decision with real history.",
  },
  viability: {
    kind: "signals",
    heading: "Signs this is the right page",
    items: [
      "You have systems running that nobody queries well.",
      "The knowledge lives in PDFs, emails, or folders.",
      "You want an internal assistant, not a customer-facing one.",
    ],
  },
  buildProcess: {
    kicker: "What we deliver",
    heading: "What we deliver",
    steps: [
      { title: "A system that answers with the cited source" },
      { title: "Permissions" },
      { title: "Usage logging" },
      { title: "An \"I don't know\" criterion" },
      {
        title: "Supporting cases",
        caption:
          "Normsy (study with 1,021 participants) when the problem is judgment and modeling, not just information retrieval. The work with an international organization when the corpus is institutional and large.",
      },
    ],
  },
  faq: {
    kicker: "FAQ",
    heading: "Frequently asked questions",
    items: [
      {
        question: "Do we have to migrate everything to a data lake?",
        answer: "Not as a first step. First you pick a process and a source.",
      },
      {
        question: "Do you train a custom model?",
        answer: "Sometimes good retrieval is enough. Training is a decision, not a default.",
      },
    ],
  },
  closingCta: {
    kicker: "Next step",
    heading: "If the data already exists and isn't being used, the project isn't \"doing AI\".",
    subhead: "It's putting it to work.",
    primaryCta: { label: "Get a free diagnostic", href: "/contacto" },
  },
};

export const iaSobreDatosContent: Localized<ServicePageContent> = { es, en };
