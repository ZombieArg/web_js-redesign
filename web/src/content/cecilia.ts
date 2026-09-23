import { whatsappHref } from "@/lib/constants";
import type { Localized, ProductPageContent } from "./types";

// Fuentes: 06.09-Schema_GEO_DataVoices.docx.pdf (§4.4 Cecilia Service+SoftwareApplication)
// y 07.09-Estrategia_SEO_GEO_DataVoices.docx.pdf (§3.3 Cecilia). No hay doc de copy
// dedicado para /cecilia entre los 7 entregados — se sintetiza solo a partir de hechos
// ya declarados en esas dos fuentes y en Home/Asistentes IA, sin agregar claims nuevos.
const es: ProductPageContent = {
  seo: {
    title: "Chatbot de WhatsApp para empresas | Cecilia",
    description:
      "Chatbot de WhatsApp para empresas. Atención al cliente e integraciones con WhatsApp, Mercado Libre, Google Calendar, Tiendanube e Instagram.",
  },
  hero: {
    breadcrumbLabel: "Producto · Cecilia",
    h1: "Cecilia, chatbot de WhatsApp para empresas",
    subhead: "Agente de WhatsApp para empresas. Atención, pedidos, agenda.",
    primaryCta: { label: "Pedí un diagnóstico gratuito", href: "/contacto" },
    secondaryCta: {
      label: "Escribir por WhatsApp",
      href: whatsappHref("Hola, quiero saber más de Cecilia"),
      external: true,
    },
  },
  definition: {
    kicker: "Definición institucional",
    heading: "Qué es Cecilia",
    body: "Cecilia es el agente de WhatsApp de Data Voices: atiende, agenda y resuelve pedidos sin depender de una persona en el medio. Es el producto empaquetado de la línea de Asistentes de IA — la alternativa a medida son desarrollos como Agent Launcher y el Real Time Interview Agent.",
  },
  specs: {
    kicker: "Integraciones",
    heading: "Con qué se integra",
    items: [
      { title: "WhatsApp", description: "Canal principal de atención." },
      { title: "Mercado Libre", description: "Consultas y pedidos del marketplace." },
      { title: "Google Calendar", description: "Agenda turnos y reuniones." },
      { title: "Tiendanube", description: "Pedidos de la tienda online." },
      { title: "Instagram", description: "Mensajes directos del canal social." },
    ],
  },
  faq: {
    kicker: "Resolución de dudas",
    heading: "Preguntas frecuentes",
    items: [
      {
        question: "¿Qué es un chatbot de WhatsApp para empresas?",
        answer:
          "Es un agente que responde y ejecuta pedidos por WhatsApp sin depender de una persona conectada todo el día. Cecilia es la versión empaquetada de Data Voices.",
      },
      {
        question: "¿Con qué se integra Cecilia?",
        answer: "WhatsApp, Mercado Libre, Google Calendar, Tiendanube e Instagram. Sin precio público — se cotiza según el proceso.",
      },
      {
        question: "¿Chatbot genérico o agente a medida?",
        answer:
          "Cecilia cubre los casos más comunes de atención y agenda. Si el proceso es más específico, se resuelve como agente a medida en Asistentes de IA.",
      },
    ],
  },
  closingCta: {
    kicker: "Siguiente paso",
    heading: "¿Tu canal es WhatsApp?",
    subhead: "Arrancá con Cecilia o pedí el diagnóstico si el proceso es más específico.",
    primaryCta: { label: "Pedí un diagnóstico gratuito", href: "/contacto" },
    secondaryCta: { label: "Ir a Asistentes de IA", href: "/servicios/asistentes-ia" },
  },
};

export const ceciliaContent: Localized<ProductPageContent> = { es, en: null };
