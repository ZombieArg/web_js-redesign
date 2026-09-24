import type { HomeContent, Localized } from "./types";

const es: HomeContent = {
  seo: {
    title: "Consultora de inteligencia artificial para empresas | Data Voices",
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

const en: HomeContent = {
  seo: {
    title: "AI Consultancy for Businesses | Data Voices",
    description: "AI consultancy for businesses. Assistants, data, custom software, and implementation. Free diagnostic.",
  },
  hero: {
    badge: "AI consultancy for businesses",
    h1: "AI consultancy for businesses",
    subhead:
      "We design and implement AI on top of what your company already does. A system that goes into production, not a demo.",
    cta: { label: "Get a free diagnostic", href: "/contacto" },
  },
  logoRow: {
    heading: "Trusted by",
    logos: [
      { key: "bid", alt: "Inter-American Development Bank" },
      { key: "chp", alt: "Civic Health Project" },
      { key: "municipioLobos", alt: "Municipio de Lobos" },
      { key: "farmacias", alt: "Farmacias del Pueblo" },
    ],
  },
  whoWeAre: {
    heading: "Who we are",
    body: "Data Voices is an AI consultancy for businesses, based in Buenos Aires. The team combines research (PhD in Computer Science, UBA) with production-grade software development. The four lines are AI assistants, AI on existing data and processes, AI software development, and implementation with training. The work includes a public portfolio with the IDB and in-house products like Cecilia. The first commercial step is a free diagnostic.",
    badges: ["Based in Buenos Aires", "PhD research, UBA", "Production-grade software"],
  },
  services: {
    heading: "Our services",
    items: [
      {
        iconName: "cecilia",
        title: "AI Assistants",
        description:
          "Agents that handle support, run interviews, or trigger a workflow. Cecilia is the packaged product; Agent Launcher and the Real Time Interview Agent are custom builds. That's how you stop needing a person as the bridge between the channel and the system.",
        href: "/servicios/asistentes-ia",
        linkLabel: "Explore Assistants",
      },
      {
        iconName: "datos",
        title: "AI on your data",
        description:
          "Models and assistants on top of the databases, documents, and systems you already have. No need to start from scratch.",
        href: "/servicios/ia-sobre-datos",
        linkLabel: "Explore Data & Processes",
      },
      {
        iconName: "software",
        title: "AI software development",
        description: "MVPs and production systems. A team that ships software, not just a plan.",
        href: "/servicios/desarrollo-software-ia",
        linkLabel: "Explore Development",
      },
      {
        iconName: "consultoria",
        title: "Implementation and consulting",
        description: "Maturity, team upskilling, rollout. Training when it needs to stick with the team.",
        href: "/servicios/consultoria",
        linkLabel: "Explore Consulting",
      },
    ],
  },
  howWeWork: {
    heading: "How we work",
    steps: [
      { title: "Diagnostic", caption: "Which process you need to improve, and what information you already have." },
      { title: "Closed scope", caption: "What gets built, what doesn't, in how many weeks." },
      { title: "Production delivery", caption: "With your team, or run by us." },
      { title: "Measurement", caption: "We measure the result from day one, so you know if it worked." },
    ],
  },
  cases: {
    heading: "Case studies",
    linkLabel: "See full portfolio",
    items: [
      {
        tag: "Public Sector / Multilateral",
        title: "Work with the IDB",
        description: "Public portfolio, institutional scale.",
        caption: "Data audit and inference pipelines",
        href: "/casos/bid",
      },
      {
        tag: "HR Tech",
        title: "Real Time Interview Agent",
        description: "Real-time HR interviews.",
        caption: "Sub-450ms latency on voice streaming",
        href: "/casos/real-time-interview-agent",
      },
      {
        tag: "Civic Tech",
        title: "Normsy",
        description: "Study with 1,021 participants.",
        caption: "Semantic processing of open-ended responses",
        href: "/casos/normsy",
      },
      {
        tag: "Conversational",
        title: "Cecilia",
        description: "WhatsApp support for municipalities and retail.",
        caption: "CRM integration and transactional resolution",
        href: "/cecilia",
      },
    ],
  },
  testimonials: {
    heading: "What our clients say",
    subheading: "",
    items: [
      {
        quote:
          "With Data Voices we now have a multi-provider AI agent team that helps us analyze the market and make better-informed investment decisions.",
        author: "Rob Romero",
        role: "CEO, Connective Capital Management",
        photoKey: "rob-romero",
      },
      {
        quote:
          "AI training with Data Voices was practical and applicable to our operation. We turned the tech challenge into a concrete improvement opportunity.",
        author: "Ulises Guibelalde",
        role: "Quality Manager, SERPA SRL",
        photoKey: "ulises-guibelalde",
      },
    ],
  },
  faq: {
    kicker: "FAQ",
    heading: "Frequently asked questions",
    items: [
      {
        question: "Are you an AI agency?",
        answer: "No. We're a consultancy: we design, implement, and leave the system running.",
      },
      {
        question: "Do you only build chatbots?",
        answer: "No. Cecilia is one product. The practice covers agents, data, software, and implementation.",
      },
      {
        question: "Does the diagnostic cost anything?",
        answer: "No. It's a meeting to see if there's a problem worth a project.",
      },
    ],
  },
  closingCta: {
    heading: "If the problem is real, we'll see it in a meeting. If it isn't, we'll tell you that too.",
    primaryCta: { label: "Get a free diagnostic", href: "/contacto" },
  },
};

export const homeContent: Localized<HomeContent> = { es, en };
