import type { Localized, ServicePageContent } from "../types";

const es: ServicePageContent = {
  slug: "desarrollo-software-ia",
  iconName: "software",
  seo: {
    title: "Desarrollo de software con IA a medida | Data Voices",
    description:
      "Desarrollo de software con inteligencia artificial: MVPs y sistemas en producción. Equipo técnico con experiencia en producto.",
  },
  hero: {
    breadcrumbLabel: "Servicio · Desarrollo de Software con IA",
    h1: "Desarrollo de software con inteligencia artificial",
    subhead:
      "Software a medida con IA integrada de verdad, no una capa de prompts superficial. MVP para validar. Sistema para operar.",
    primaryCta: { label: "Pedí un diagnóstico gratuito", href: "/contacto" },
  },
  definition: {
    kicker: "Definición institucional",
    heading: "Qué hacemos",
    body: "Data Voices desarrolla software con inteligencia artificial a medida: productos nuevos y módulos sobre sistemas existentes. El equipo combina ingeniería de software (producción, no prototipo de taller) con diseño de modelos y agentes. El ciclo comercial de estos proyectos es de semanas a pocos meses, no un programa eterno.",
  },
  viability: {
    kind: "mvpSupport",
    heading: "MVP y soporte",
    mvp: { title: "MVP", body: "Una hipótesis de producto, cerrada, para salir a usuarios reales." },
    support: {
      title: "Soporte y evolución",
      body: "El sistema ya corre y hay que extenderlo sin romperlo.",
    },
    disambiguation: {
      text: "Si el entregable es un agente sobre un canal, la página correcta es Asistentes IA.",
      linkLabel: "Ir a Asistentes de IA",
      href: "/servicios/asistentes-ia",
    },
  },
  buildProcess: {
    kicker: "Equipo",
    heading: "Equipo",
    steps: [
      {
        title: "Eduardo",
        caption: "Más de 20 años de software; trabajo citado en GLG y Ansel Health; stack React, Node y TypeScript.",
      },
      { title: "Juanma", caption: "Ingeniería de IA; Auth0, Nixtla, gobiernos, BID." },
    ],
  },
  faq: {
    kicker: "Resolución de dudas",
    heading: "Preguntas frecuentes",
    items: [
      {
        question: "¿Trabajan con el equipo interno?",
        answer: "Sí. El default es dejar capacidad instalada en el equipo, no una caja negra.",
      },
      {
        question: "¿Hay precio en el sitio?",
        answer: "No. El alcance define el número. Publicar una cifra suelta destruye el diagnóstico.",
      },
    ],
  },
  closingCta: {
    kicker: "Siguiente paso",
    heading: "Si ya sabés qué hay que construir, el diagnóstico sirve para cerrar alcance.",
    subhead: "Si no, sirve para no construir de más.",
    primaryCta: { label: "Pedí un diagnóstico gratuito", href: "/contacto" },
  },
};

const en: ServicePageContent = {
  slug: "desarrollo-software-ia",
  iconName: "software",
  seo: {
    title: "Custom AI Software Development | Data Voices",
    description: "AI software development: MVPs and production systems. Technical team with product experience.",
  },
  hero: {
    breadcrumbLabel: "Service · AI Software Development",
    h1: "AI software development",
    subhead: "Custom software with AI actually built in, not a surface layer of prompts. MVP to validate. System to operate.",
    primaryCta: { label: "Get a free diagnostic", href: "/contacto" },
  },
  definition: {
    kicker: "Institutional definition",
    heading: "What we do",
    body: "Data Voices builds custom AI software: new products and modules on top of existing systems. The team combines software engineering (production-grade, not a workshop prototype) with model and agent design. The commercial cycle for these projects runs weeks to a few months, not an endless program.",
  },
  viability: {
    kind: "mvpSupport",
    heading: "MVP and support",
    mvp: { title: "MVP", body: "A closed product hypothesis, built to ship to real users." },
    support: {
      title: "Support and evolution",
      body: "The system is already running and needs to be extended without breaking it.",
    },
    disambiguation: {
      text: "If the deliverable is an agent on a channel, the right page is AI Assistants.",
      linkLabel: "Go to AI Assistants",
      href: "/servicios/asistentes-ia",
    },
  },
  buildProcess: {
    kicker: "Team",
    heading: "Team",
    steps: [
      {
        title: "Eduardo",
        caption: "20+ years in software; work cited at GLG and Ansel Health; React, Node, and TypeScript stack.",
      },
      { title: "Juanma", caption: "AI engineering; Auth0, Nixtla, governments, IDB." },
    ],
  },
  faq: {
    kicker: "FAQ",
    heading: "Frequently asked questions",
    items: [
      {
        question: "Do you work with our internal team?",
        answer: "Yes. The default is to leave installed capacity on the team, not a black box.",
      },
      {
        question: "Is there pricing on the site?",
        answer: "No. Scope defines the number. Publishing a loose figure kills the diagnostic.",
      },
    ],
  },
  closingCta: {
    kicker: "Next step",
    heading: "If you already know what needs to be built, the diagnostic helps close the scope.",
    subhead: "If not, it helps you avoid over-building.",
    primaryCta: { label: "Get a free diagnostic", href: "/contacto" },
  },
};

export const desarrolloSoftwareIaContent: Localized<ServicePageContent> = { es, en };
