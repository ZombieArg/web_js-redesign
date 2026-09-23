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

export const desarrolloSoftwareIaContent: Localized<ServicePageContent> = { es, en: null };
