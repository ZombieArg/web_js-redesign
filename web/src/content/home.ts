import type { HomeContent, Localized } from "./types";

const es: HomeContent = {
  seo: {
    title: "Data Voices | Consultora de inteligencia artificial para empresas",
    description:
      "Consultora de inteligencia artificial para empresas. Asistentes, datos, software a medida e implementación. Diagnóstico gratuito.",
  },
  hero: {
    badge: "Consultora de inteligencia artificial para empresas",
    h1: "Consultora de inteligencia artificial para empresas",
    subhead:
      "Diseñamos e implementamos IA sobre lo que tu empresa ya hace. Un sistema que entra a producción, no una demo.",
    cta: { label: "Pedí un diagnóstico gratuito", href: "/contacto" },
  },
  logoRow: {
    heading: "Confiaron en nosotros",
    logos: [
      { key: "bid", alt: "Banco Interamericano de Desarrollo" },
      { key: "chp", alt: "Civic Health Project" },
      { key: "municipioLobos", alt: "Municipio de Lobos" },
      { key: "farmacias", alt: "Farmacias del Pueblo" },
    ],
  },
  whoWeAre: {
    heading: "Quiénes somos",
    body: "Data Voices es una consultora de inteligencia artificial para empresas, con sede en Buenos Aires. El equipo combina investigación (PhD en Ciencias de la Computación, UBA) con desarrollo de software de producción. Las cuatro líneas son asistentes de IA, IA sobre datos y procesos existentes, desarrollo de software con IA, e implementación con capacitación. El trabajo incluye un portafolio público con el BID y productos propios como Cecilia. El primer paso comercial es un diagnóstico gratuito.",
    badges: ["Sede en Buenos Aires", "Investigación PhD UBA", "Software de producción"],
  },
  services: {
    heading: "Nuestros servicios",
    items: [
      {
        iconName: "cecilia",
        title: "Asistentes de IA",
        description:
          "Agentes que atienden, entrevistan o activan un flujo. Cecilia es el producto empaquetado; Agent Launcher y el Real Time Interview Agent son a medida. Así dejás de tener una persona haciendo de puente entre el canal y el sistema.",
        href: "/servicios/asistentes-ia",
        linkLabel: "Explorar Asistentes",
      },
      {
        iconName: "datos",
        title: "IA sobre tus datos",
        description:
          "Modelos y asistentes sobre bases, documentos y sistemas que ya existen. No hace falta arrancar de cero.",
        href: "/servicios/ia-sobre-datos",
        linkLabel: "Explorar Datos y Procesos",
      },
      {
        iconName: "software",
        title: "Desarrollo de software con IA",
        description: "MVPs y sistemas en producción. Un equipo que entrega software, no solo un plan.",
        href: "/servicios/desarrollo-software-ia",
        linkLabel: "Explorar Desarrollo",
      },
      {
        iconName: "consultoria",
        title: "Implementación y consultoría",
        description:
          "Madurez, nivelación del equipo, puesta en marcha. Capacitación cuando hace falta que quede adentro.",
        href: "/servicios/consultoria",
        linkLabel: "Explorar Consultoría",
      },
    ],
  },
  howWeWork: {
    heading: "Cómo trabajamos",
    steps: [
      { title: "Diagnóstico", caption: "Qué proceso necesitás mejorar y con qué información ya contás." },
      { title: "Alcance cerrado", caption: "Qué se construye, qué no, en cuántas semanas." },
      { title: "Entrega en producción", caption: "Con tu equipo o operado por nosotros." },
      { title: "Medición", caption: "Medimos el resultado desde el primer día, para que sepas si funcionó." },
    ],
  },
  cases: {
    heading: "Casos",
    linkLabel: "Ver portafolio completo",
    items: [
      {
        tag: "Sector Público / Multilateral",
        title: "Trabajo con el BID",
        description: "Portafolio público, escala institucional.",
        caption: "Auditoría de datos y pipelines de inferencia",
        href: "/casos/bid",
      },
      {
        tag: "HR Tech",
        title: "Real Time Interview Agent",
        description: "Entrevistas de RR. HH. en tiempo real.",
        caption: "Latencia inferior a 450ms en streaming de voz",
        href: "/casos/real-time-interview-agent",
      },
      {
        tag: "Civic Tech",
        title: "Normsy",
        description: "Estudio con 1.021 participantes.",
        caption: "Procesamiento semántico de respuestas abiertas",
        href: "/casos/normsy",
      },
      {
        tag: "Conversacional",
        title: "Cecilia",
        description: "Atención por WhatsApp en municipios y comercio.",
        caption: "Integración CRM y resolución transaccional",
        href: "/cecilia",
      },
    ],
  },
  testimonials: {
    heading: "Lo que dicen nuestros clientes",
    subheading: "",
    items: [
      {
        quote:
          "Con Data Voices hoy contamos con un equipo de agentes de IA multi-proveedor que nos ayuda a analizar el mercado y tomar decisiones de inversión mejor informadas.",
        author: "Rob Romero",
        role: "CEO, Connective Capital Management",
        photoKey: "rob-romero",
      },
      {
        quote:
          "La capacitación en IA con Data Voices fue práctica y aplicable a nuestra operación. Convertimos el desafío tecnológico en una oportunidad concreta de mejora.",
        author: "Ulises Guibelalde",
        role: "Gerente de Calidad, SERPA SRL",
        photoKey: "ulises-guibelalde",
      },
    ],
  },
  faq: {
    kicker: "Resolución de dudas",
    heading: "Preguntas frecuentes",
    items: [
      {
        question: "¿Son una agencia de IA?",
        answer: "No. Somos consultora: diseñamos, implementamos y dejamos el sistema andando.",
      },
      {
        question: "¿Hacen solo chatbots?",
        answer: "No. Cecilia es un producto. La práctica cubre agentes, datos, software e implementación.",
      },
      {
        question: "¿El diagnóstico tiene costo?",
        answer: "No. Es una reunión para ver si hay un problema que valga un proyecto.",
      },
    ],
  },
  closingCta: {
    heading: "Si el problema es real, lo vemos en una reunión. Si no lo es, te lo decimos.",
    primaryCta: { label: "Pedí un diagnóstico gratuito", href: "/contacto" },
  },
};

export const homeContent: Localized<HomeContent> = { es, en: null };
