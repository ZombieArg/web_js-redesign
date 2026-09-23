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

export const consultoriaContent: Localized<ServicePageContent> = { es, en: null };
