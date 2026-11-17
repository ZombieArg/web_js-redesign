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
    photoAlt:
      "Equipo de Data Voices, consultora de inteligencia artificial, reunido alrededor de una mesa de madera con ventanas de arco",
  },
  logoRow: {
    heading: "Confiaron en nosotros",
    linkLabel: "Ver el portafolio",
    logos: [
      { key: "chp", alt: "Civic Health Project" },
      { key: "municipioLobos", alt: "Municipio de Lobos" },
      { key: "farmacias", alt: "Farmacias del Pueblo" },
      { key: "padrePepe", alt: "Misión Padre Pepe" },
      { key: "helarte", alt: "Distribuidora Helarte" },
      { key: "bahiaLobos", alt: "Bahía de los Lobos" },
    ],
  },
  whoWeAre: {
    heading: "Quiénes somos",
    body: "Data Voices es una consultora de inteligencia artificial para empresas, con sede en Buenos Aires. El equipo combina investigación (PhD en Ciencias de la Computación, UBA) con desarrollo de software de producción. Las cuatro líneas son asistentes de IA, IA sobre datos y procesos existentes, desarrollo de software con IA, e implementación con capacitación. El trabajo incluye un portafolio público con un organismo internacional y productos propios como Cecilia. El primer paso comercial es un diagnóstico gratuito.",
    badges: ["Sede en Buenos Aires", "Investigación PhD UBA", "Software de producción"],
  },
  teamPhotos: [
    {
      alt: "Equipo de Data Voices en una terraza, con la ciudad y el agua de fondo",
    },
    {
      alt: "Conversación de trabajo del equipo de Data Voices, con mate y notebooks sobre la mesa",
    },
    {
      alt: "Diapositiva «Agentes en colaboración» de la charla de Data Voices en Media Party Buenos Aires",
      caption: "Charla de Data Voices en Media Party Buenos Aires.",
    },
  ],
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
        iconName: "seguridad",
        tag: "Sector Público / Multilateral",
        title: "Trabajo con un organismo internacional",
        description: "Portafolio público, escala institucional.",
        caption: "Auditoría de datos y pipelines de inferencia",
        href: "/casos/organismo-internacional",
      },
      {
        iconName: "usuarios",
        tag: "HR Tech",
        title: "Real Time Interview Agent",
        description: "Entrevistas de RR. HH. en tiempo real.",
        // Reemplaza el "<450ms" que se retiró del caso (28/09/2026): no
        // tenía documento primario. Se usan los tiempos con fuente
        // (Stress Tests Report), consistentes con la ficha del caso.
        caption: "~3 s en capturar la pregunta, ~6,45 s en procesar la respuesta",
        href: "/casos/real-time-interview-agent",
      },
      {
        iconName: "documentos",
        tag: "Civic Tech",
        title: "Normsy",
        description: "Estudio con 1.021 participantes.",
        caption: "Procesamiento semántico de respuestas abiertas",
        href: "/casos/normsy",
      },
      {
        iconName: "cecilia",
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
  relatedGuides: {
    title: "Guías para evaluar un proyecto de IA",
    links: [
      {
        anchor: "Por qué fallan los proyectos de IA antes de llegar a producción",
        line: "Qué frena a los pilotos y cómo evaluar el tuyo.",
        href: "/blog/por-que-fallan-los-proyectos-de-ia",
      },
      {
        anchor: "Agente de IA vs chatbot: diferencias y cómo decidir",
        line: "Qué necesita tu empresa según el proceso que querés resolver.",
        href: "/blog/agente-de-ia-vs-chatbot",
      },
      {
        anchor: "Cómo elegir una consultora de IA: criterios y preguntas antes de contratar",
        line: "Qué mirar en una propuesta y qué señales de alerta conviene detectar a tiempo.",
        href: "/blog/como-elegir-consultora-inteligencia-artificial",
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
    photoAlt:
      "The Data Voices team, an AI consultancy, gathered around a wooden table by arched windows",
  },
  logoRow: {
    heading: "Trusted by",
    linkLabel: "See the portfolio",
    logos: [
      { key: "chp", alt: "Civic Health Project" },
      { key: "municipioLobos", alt: "Municipio de Lobos" },
      { key: "farmacias", alt: "Farmacias del Pueblo" },
      { key: "padrePepe", alt: "Misión Padre Pepe" },
      { key: "helarte", alt: "Distribuidora Helarte" },
      { key: "bahiaLobos", alt: "Bahía de los Lobos" },
    ],
  },
  whoWeAre: {
    heading: "Who we are",
    body: "Data Voices is an AI consultancy for businesses, based in Buenos Aires. The team combines research (PhD in Computer Science, UBA) with production-grade software development. The four lines are AI assistants, AI on existing data and processes, AI software development, and implementation with training. The work includes a public portfolio with an international organization and in-house products like Cecilia. The first commercial step is a free diagnostic.",
    badges: ["Based in Buenos Aires", "PhD research, UBA", "Production-grade software"],
  },
  teamPhotos: [
    {
      alt: "The Data Voices team on a rooftop terrace, with the city and the water behind them",
    },
    {
      alt: "A working conversation among the Data Voices team, with mate and laptops on the table",
    },
    {
      alt: "“Agentes en colaboración” (Agents in collaboration) slide from the Data Voices talk at Media Party Buenos Aires",
      caption: "Data Voices talk at Media Party Buenos Aires.",
    },
  ],
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
        iconName: "seguridad",
        tag: "Public Sector / Multilateral",
        title: "Work with an international organization",
        description: "Public portfolio, institutional scale.",
        caption: "Data audit and inference pipelines",
        href: "/casos/organismo-internacional",
      },
      {
        iconName: "usuarios",
        tag: "HR Tech",
        title: "Real Time Interview Agent",
        description: "Real-time HR interviews.",
        // Replaces the unsupported "<450ms" claim removed from the case
        // (28/09/2026). Matches the verified metrics on the case page.
        caption: "~3 s to capture the question, ~6.45 s to process the answer",
        href: "/casos/real-time-interview-agent",
      },
      {
        iconName: "documentos",
        tag: "Civic Tech",
        title: "Normsy",
        description: "Study with 1,021 participants.",
        caption: "Semantic processing of open-ended responses",
        href: "/casos/normsy",
      },
      {
        iconName: "cecilia",
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
  relatedGuides: {
    title: "Guides to assess an AI project",
    links: [
      {
        anchor: "Why AI projects fail before they reach production",
        line: "What stops pilots, and how to assess yours.",
        href: "/blog/why-ai-projects-fail",
      },
      {
        anchor: "AI agent vs chatbot: the differences and how to decide",
        line: "What your company needs, based on the process you want to solve.",
        href: "/blog/ai-agent-vs-chatbot",
      },
      {
        anchor: "How to choose an AI consulting firm: criteria and questions to ask",
        line: "What to check in a proposal before you sign.",
        href: "/blog/how-to-choose-ai-consulting-firm",
      },
    ],
  },
  closingCta: {
    heading: "If the problem is real, we'll see it in a meeting. If it isn't, we'll tell you that too.",
    primaryCta: { label: "Get a free diagnostic", href: "/contacto" },
  },
};

export const homeContent: Localized<HomeContent> = { es, en };
