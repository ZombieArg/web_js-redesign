import type { Localized, ServicePageContent } from "../types";

const es: ServicePageContent = {
  slug: "asistentes-ia",
  iconName: "cecilia",
  seo: {
    title: "Agentes de IA para empresas | Data Voices",
    description:
      "Diseño e implementación de agentes de IA para empresas: atención, RR. HH. y flujos internos. Incluye Cecilia.",
  },
  hero: {
    breadcrumbLabel: "Servicio · Asistentes de IA",
    h1: "Agentes de IA para empresas",
    subhead:
      "Un agente no es un chat con personalidad. Es un sistema que toma un pedido, consulta una fuente y ejecuta. Lo construimos a medida o lo entregamos empaquetado.",
    primaryCta: { label: "Pedí un diagnóstico gratuito", href: "/contacto" },
    secondaryCta: { label: "Ver pipeline de arquitectura ↓", href: "#como-se-construye" },
  },
  stats: [
    { value: "100%", label: "Ejecución sin alucinación" },
    { value: "<1.2s", label: "Latencia de canal" },
    { value: "SLA 99.9%", label: "Disponibilidad crítica" },
  ],
  definition: {
    kicker: "Definición institucional",
    heading: "Qué es un agente de IA",
    body: "Data Voices diseña y desarrolla agentes de IA para empresas. Un agente conecta un canal (WhatsApp, web, interno) con datos y acciones: agendar, responder, filtrar candidatos, activar un flujo. La línea incluye el producto Cecilia y desarrollos como Agent Launcher y el Real Time Interview Agent.",
  },
  viability: {
    kind: "matrix",
    heading: "Cuándo un agente sirve (y cuándo no)",
    positive: {
      tag: "Aplica agente",
      items: [
        "El pedido se repite.",
        "La respuesta vive en un sistema que ya tienen.",
        "Hay una persona que hoy hace de puente y no debería.",
      ],
    },
    negative: {
      tag: "No desplegar agente",
      items: [
        "Si el proceso no está escrito, el agente amplifica el desorden. En ese caso, primero se necesita implementación, no un agente.",
      ],
      link: { label: "Ver consultoría e implementación", href: "/servicios/consultoria" },
    },
  },
  adoptionModalities: {
    kicker: "Modalidades de adopción",
    heading: "Tres formas de entrar",
    items: [
      {
        tag: "Producto",
        iconName: "cecilia",
        title: "Cecilia",
        description: "Agente de WhatsApp para empresas. Atención, pedidos, agenda.",
        specs: ["Canal: WhatsApp", "Integraciones: Mercado Libre, Google Calendar, Tiendanube"],
        link: { label: "Conocer Cecilia", href: "/cecilia" },
      },
      {
        tag: "Agente de selección",
        iconName: "usuarios",
        title: "Real Time Interview Agent",
        description:
          "Entrevistas en tiempo real. En el catálogo aparece como implementación llave en mano de RR. HH.",
        specs: ["Uso: RR. HH.", "Formato: entrevista en vivo"],
        link: { label: "Ver caso de estudio", href: "/casos/real-time-interview-agent" },
      },
      {
        tag: "Plataforma",
        iconName: "integraciones",
        title: "Agent Launcher",
        description: "Comparás y activás agentes sobre distintos modelos. Sirve cuando el problema no es un canal, es la orquestación.",
        specs: ["Multi-modelo", "Enrutamiento y fallback configurable"],
        link: { label: "Explorar Agent Launcher", href: "/casos/agent-launcher" },
      },
    ],
  },
  buildProcess: {
    kicker: "Ingeniería y despliegue",
    heading: "Cómo se construye",
    steps: [
      { title: "Canal", caption: "Dónde vive la conversación: WhatsApp, web o un canal interno." },
      { title: "Fuente de verdad", caption: "El sistema que responde de verdad: CRM, base de datos o catálogo." },
      { title: "Acciones permitidas", caption: "Qué puede ejecutar el agente sin supervisión." },
      { title: "Criterio de escalamiento a una persona", caption: "Cuándo el agente deriva a alguien del equipo." },
      { title: "Medición", caption: "Qué KPI define si el agente funciona." },
    ],
  },
  faq: {
    kicker: "Resolución de dudas",
    heading: "Preguntas frecuentes",
    items: [
      {
        question: "¿Agente o chatbot?",
        answer: "Chatbot responde. Agente resuelve un paso del proceso. Cecilia puede ser las dos cosas; el diseño define cuál.",
      },
      {
        question: "¿Usan una sola plataforma?",
        answer: "No. El canal es el que usa tu cliente. El modelo se elige por tarea, no por moda.",
      },
    ],
  },
  closingCta: {
    kicker: "Siguiente paso",
    heading: "Si ya sabés que el canal es WhatsApp, podés conocer Cecilia directamente.",
    subhead: "Si el problema es otro tipo de agente, empecemos por el diagnóstico.",
    primaryCta: { label: "Pedí un diagnóstico gratuito", href: "/contacto" },
    secondaryCta: { label: "Ir a Cecilia (WhatsApp)", href: "/cecilia" },
  },
};

export const asistentesIaContent: Localized<ServicePageContent> = { es, en: null };
