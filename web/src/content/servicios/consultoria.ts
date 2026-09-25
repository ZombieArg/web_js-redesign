import type { Localized, ServicePageContent } from "../types";

const es: ServicePageContent = {
  slug: "consultoria",
  iconName: "consultoria",
  seo: {
    title: "Implementación y consultoría de IA | Data Voices",
    description:
      "Implementación de inteligencia artificial: diagnóstico de madurez, nivelación del equipo y puesta en marcha. Capacitación cuando hace falta.",
  },
  hero: {
    breadcrumbLabel: "Servicio · Consultoría Estratégica",
    h1: "Implementación de inteligencia artificial",
    subhead:
      "Primero se evalúa qué puede absorber la empresa. Después se elige la herramienta. Al revés es como se acumulan licencias sin dueño.",
    primaryCta: { label: "Pedí un diagnóstico gratuito", href: "/contacto" },
  },
  definition: {
    kicker: "Definición institucional",
    heading: "Qué es esta línea",
    body: "La consultoría de Data Voices es implementación de inteligencia artificial: medir madurez, nivelar al equipo y poner en marcha un proceso concreto. Incluye programas de capacitación (módulos 0 a 9, paquetes de 12 a 80 horas, grupos de hasta 30 personas) cuando el cuello de botella no es el modelo, es que nadie lo usa.",
  },
  viability: null,
  buildProcess: {
    kicker: "Método",
    heading: "Método",
    steps: [
      { title: "Madurez", caption: "Qué procesos, qué datos, qué permisos." },
      { title: "Nivelación", caption: "Capacitación al rol que va a operar, no un seminario genérico." },
      { title: "Implementación", caption: "Un caso en producción." },
      { title: "Informe a quien paga", caption: "Adopción y, cuando se puede medir, efecto." },
      { title: "Seguimiento", caption: "Que no se apague a los treinta días." },
      {
        // Capacitación vive acá por ahora (H2 dentro de Consultoría), por decisión
        // de fallback de la Estrategia SEO/GEO §3.7. Decisión abierta pendiente
        // del cliente: separar a /capacitacion como URL propia si el catálogo se
        // sigue ofreciendo como línea — no es una decisión de copy, es de
        // arquitectura del sitio (ver Consultoria_Estrategica_DataVoices_Revisada.md).
        title: "Capacitación",
        caption:
          "Módulos por función: dirección, marketing, finanzas, gobierno, automatización, cambio. Se contratan sueltos o como programa. Credencial declarada: más de 100 clases en Argentina, México y Ecuador.",
      },
    ],
  },
  faq: {
    kicker: "Resolución de dudas",
    heading: "Preguntas frecuentes",
    items: [
      {
        question: "¿Es capacitación o un proyecto?",
        answer: "Las dos, en ese orden, cuando el equipo no está listo. Proyecto solo, si el equipo ya opera.",
      },
      {
        question: "¿El diagnóstico es el producto?",
        answer: "No. Es el filtro. El producto es un proceso andando.",
      },
    ],
  },
  closingCta: {
    kicker: "Siguiente paso",
    heading: "Si la IA \"ya se probó\" y no quedó nadie usándola, el problema no era el modelo.",
    subhead: "",
    primaryCta: { label: "Pedí un diagnóstico gratuito", href: "/contacto" },
  },
};

const en: ServicePageContent = {
  slug: "consultoria",
  iconName: "consultoria",
  seo: {
    title: "AI Implementation and Consulting | Data Voices",
    description: "AI implementation: maturity diagnostic, team upskilling, and rollout. Training when it's needed.",
  },
  hero: {
    breadcrumbLabel: "Service · Strategic Consulting",
    h1: "AI implementation",
    subhead:
      "First you assess what the company can absorb. Then you pick the tool. The other way around is how you end up with licenses nobody owns.",
    primaryCta: { label: "Get a free diagnostic", href: "/contacto" },
  },
  definition: {
    kicker: "Institutional definition",
    heading: "What this line is",
    body: "Data Voices' consulting is AI implementation: measuring maturity, upskilling the team, and rolling out a concrete process. It includes training programs (modules 0 to 9, 12–80 hour packages, groups of up to 30 people) when the bottleneck isn't the model, it's that nobody uses it.",
  },
  viability: null,
  buildProcess: {
    kicker: "Method",
    heading: "Method",
    steps: [
      { title: "Maturity", caption: "Which processes, which data, which permissions." },
      { title: "Upskilling", caption: "Training for the role that will operate it, not a generic seminar." },
      { title: "Implementation", caption: "One case in production." },
      { title: "Report to whoever's paying", caption: "Adoption and, when measurable, impact." },
      { title: "Follow-up", caption: "So it doesn't fizzle out after thirty days." },
      {
        title: "Training",
        caption:
          "Modules by function: leadership, marketing, finance, government, automation, change management. Booked individually or as a program. Stated credential: 100+ classes delivered in Argentina, Mexico, and Ecuador.",
      },
    ],
  },
  faq: {
    kicker: "FAQ",
    heading: "Frequently asked questions",
    items: [
      {
        question: "Is it training or a project?",
        answer: "Both, in that order, when the team isn't ready. Project alone, if the team already operates.",
      },
      {
        question: "Is the diagnostic the product?",
        answer: "No. It's the filter. The product is a process up and running.",
      },
    ],
  },
  closingCta: {
    kicker: "Next step",
    heading: "If the AI \"was already tried\" and nobody ended up using it, the model wasn't the problem.",
    subhead: "",
    primaryCta: { label: "Get a free diagnostic", href: "/contacto" },
  },
};

export const consultoriaContent: Localized<ServicePageContent> = { es, en };
