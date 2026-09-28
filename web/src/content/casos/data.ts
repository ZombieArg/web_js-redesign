import type { CaseItem, Localized } from "../types";

/**
 * Contenido extraído de la documentación de proyecto en Drive (28/09/2026).
 * Decisiones tomadas con el cliente al cargarlo:
 *
 * - Normsy y Social Media Detoxifier eran el mismo producto en dos etapas
 *   ("Normsy.ai, formerly Social Media Detoxifier") y estaban publicados como
 *   dos casos distintos. Se fusionaron en `normsy`; el slug viejo redirige.
 * - Agent Launcher va anonimizado: el cliente es una gestora de inversiones y
 *   la arquitectura interna, proveedores y APIs no están autorizados a publicarse.
 * - Se retiró la latencia "<450ms" que estaba publicada: no tiene documento
 *   primario y mide otra capa del pipeline que los tiempos del Stress Tests
 *   Report, que sí están respaldados.
 * - De Normsy solo se publica el Anthem Award, que ya es público. Las cifras
 *   del grant (monto, tamaño de equipo, donantes) salen de una solicitud de
 *   financiamiento de un tercero y esperan confirmación de Civic Health Project.
 *
 * Métricas pendientes de verificación, deliberadamente NO cargadas como
 * tarjeta: las cifras del organismo internacional ("200+/25.000+ proyectos y
 * páginas", "1.500/15 años") no dejan claro qué número corresponde a qué
 * concepto, y una tarjeta obliga a esa asignación. Van en prosa hasta aclararlo.
 */

const es: CaseItem[] = [
  {
    slug: "real-time-interview-agent",
    tag: "HR Tech",
    iconName: "usuarios",
    title: "Real Time Interview Agent",
    summary:
      "Entrevistas de RR. HH. asistidas en tiempo real, sin sumar un bot a la videollamada.",
    caption: "Asistencia en vivo, screening asincrónico y análisis posterior",
    body: "Plataforma que cubre el ciclo completo de entrevistas: preparación, screening, asistencia durante la entrevista en vivo, análisis posterior y seguimiento histórico del candidato.",
    metrics: [
      { label: "Captura de preguntas (Windows 11)", value: "~3 s" },
      { label: "Procesamiento de respuestas (Windows 11)", value: "~6,45 s" },
      { label: "Procesamiento de respuestas (macOS)", value: "4,81 s" },
    ],
    narrative: [
      {
        heading: "El problema",
        paragraphs: [
          "Durante una entrevista, buena parte del trabajo del entrevistador no es entrevistar. Es tomar notas, registrar respuestas, tener presentes los criterios de evaluación y después reconstruir qué pasó para poder comparar candidatos.",
          "Ese trabajo administrativo compite con la atención que requiere la conversación. Y el registro que queda depende de cuánto pudo anotar cada entrevistador, lo que hace difícil comparar entrevistas hechas por personas distintas.",
        ],
      },
      {
        heading: "Qué construimos",
        paragraphs: [
          "Una aplicación de escritorio que procesa el audio de micrófono y parlantes directamente durante la entrevista. No se suma a la llamada como un participante más ni depende de una integración específica con Zoom, Meet o Teams: funciona sobre cualquiera de las tres porque trabaja sobre el audio del equipo.",
          "Durante la entrevista, el agente identifica preguntas, extrae las respuestas, las evalúa contra los criterios configurados y sincroniza todo con la nube. Si la conectividad falla, pasa a un motor local de transcripción en vez de perder la sesión.",
          "En paralelo, una aplicación web concentra candidatos, búsquedas, screenings y análisis, para que el material de la entrevista no quede aislado del resto del proceso.",
        ],
      },
      {
        heading: "Cómo terminó",
        paragraphs: [
          "El producto terminó cubriendo bastante más que la asistencia en vivo: permite screenings asincrónicos, comparar entrevistas y candidatos usando lenguaje natural, gestionar el historial de cada candidato y trabajar de a varios entrevistadores sobre el mismo proceso.",
          "Está disponible en Windows y macOS, con el flujo principal en producción.",
        ],
      },
    ],
    ctaHeading: "¿Un proceso parecido en tu empresa?",
    translationStatus: "live",
  },
  {
    slug: "normsy",
    tag: "Civic Tech",
    iconName: "documentos",
    title: "Normsy",
    summary:
      "Reducir la toxicidad en redes sociales sin censurar: IA que propone respuestas constructivas, con personas decidiendo.",
    caption: "Counterspeech asistido por IA, con humanos en el circuito",
    body: "Herramienta de IA para reducir violencia y toxicidad en redes sociales, desarrollada junto a Civic Health Project. Evolución de lo que originalmente se llamó Social Media Detoxifier.",
    highlights: [
      { emoji: "🏆", text: "Anthem Award 2024 — Best Use of AI", isAward: true },
      { emoji: "🤝", text: "Desarrollado con Civic Health Project" },
      { emoji: "🎓", text: "Con participación del Center for Social Media and Politics de NYU" },
    ],
    metrics: [{ label: "Participantes del estudio", value: "1.021" }],
    narrative: [
      {
        heading: "El problema",
        paragraphs: [
          "Las respuestas habituales a la toxicidad en redes son moderar, eliminar o suspender. Todas actúan después del daño y ninguna cambia el tono de la conversación: sacan contenido, pero no agregan nada.",
          "El planteo del proyecto fue distinto. El problema no es solamente detectar contenido dañino, sino que en esas conversaciones las voces constructivas suelen estar ausentes. Si nadie responde con criterio, lo único que queda es lo tóxico.",
        ],
      },
      {
        heading: "Qué construimos",
        paragraphs: [
          "El sistema identifica conversaciones relevantes y usa modelos de lenguaje para proponer counterspeech: respuestas alternativas que aportan contexto o desactivan la agresión, en lugar de eliminar contenido.",
          "La decisión nunca es automática. Las respuestas propuestas pasan por colaboradores humanos, que aportan el contexto y el criterio que el modelo no tiene. Por eso el enfoque combina clasificación automática y generación con LLM, pero mantiene a la persona en el circuito antes de publicar.",
        ],
      },
      {
        heading: "De Social Media Detoxifier a Normsy",
        paragraphs: [
          "El proyecto empezó como Social Media Detoxifier, junto a Civic Health Project, y con ese nombre ganó el Anthem Award 2024 en la categoría Best Use of AI.",
          "Después evolucionó a Normsy, ampliando la arquitectura: memoria agéntica, ruteo por tópicos y mecanismos de orquestación. Hoy existe como producto público.",
        ],
      },
    ],
    productUrl: "https://normsy.ai",
    productLinkLabel: "Visitar Normsy",
    ctaHeading: "¿Un proceso parecido en tu empresa?",
    translationStatus: "live",
  },
  {
    slug: "agent-launcher",
    tag: "Plataforma",
    iconName: "integraciones",
    title: "Agent Launcher",
    summary:
      "Convertir tareas repetitivas de análisis en agentes reutilizables, sin quedar atado a un modelo ni a un proveedor.",
    caption: "Orquestación de agentes, agnóstica de proveedor",
    body: "Plataforma para comparar y activar agentes sobre distintos modelos, con las ejecuciones persistidas y auditables. Desarrollada para una gestora de inversiones.",
    narrative: [
      {
        heading: "El problema",
        paragraphs: [
          "En una gestora de inversiones, buena parte del trabajo de research es repetitivo: las mismas preguntas sobre distintas compañías, los mismos cruces, el mismo tipo de resumen.",
          "Automatizar eso con IA es tentador, pero tiene una trampa: cada tarea termina atada a un prompt, un modelo y un proveedor específicos. Cuando el proveedor cambia de precio, de modelo o de condiciones, hay que rehacer el trabajo.",
        ],
      },
      {
        heading: "Qué construimos",
        paragraphs: [
          "Una capa de adaptación entre los agentes y los distintos proveedores de modelos. El usuario elige agente, modelo y proveedor por separado, y puede cambiar cualquiera de los tres sin rehacer los otros dos.",
          "Cada ejecución queda persistida y auditada, así que se puede revisar qué se preguntó, con qué modelo y qué respondió. En un contexto donde las decisiones tienen consecuencias económicas, poder reconstruir cómo se llegó a una conclusión importa tanto como la conclusión.",
          "Los agentes se exponen además por API, para que otros sistemas los consuman sin pasar por la interfaz.",
        ],
      },
      {
        heading: "Cómo evolucionó",
        paragraphs: [
          "En fases posteriores dejó de ser solamente un lanzador de agentes. Se sumaron conversación con contexto, visualización, agentes especializados y el criterio de usar primero los datos internos de la organización antes de recurrir a búsquedas web.",
          "El MVP quedó validado técnicamente y pasó a ser una de las bases de una arquitectura de IA más amplia dentro del cliente.",
        ],
      },
    ],
    ctaHeading: "¿Un proceso parecido en tu empresa?",
    translationStatus: "live",
  },
  {
    // El cliente pidió no nombrar explícitamente al organismo (24/09/2026):
    // se menciona como "organismo internacional" en todo el sitio, y el
    // slug se cambió por el mismo motivo (la URL también es una mención).
    slug: "organismo-internacional",
    tag: "Sector Público / Multilateral",
    iconName: "seguridad",
    title: "Trabajo con un organismo internacional",
    summary: "Portafolio público, escala institucional.",
    caption: "Auditoría de datos y pipelines de inferencia",
    body: "Trabajo de inteligencia artificial sobre el portafolio público de un organismo internacional e informe descargable.",
    narrative: [
      {
        heading: "El problema",
        paragraphs: [
          "El organismo manejaba un portafolio público de gran volumen, documentado de forma heterogénea: formatos distintos, criterios distintos, acumulados a lo largo de años.",
          "Con ese material se puede leer un proyecto puntual, pero no analizar el conjunto. La información existía y era pública; lo que faltaba era poder tratarla sistemáticamente.",
        ],
      },
      {
        heading: "Qué hicimos",
        paragraphs: [
          "Auditoría y preparación de los datos, estructuración del material y pipelines de inferencia para procesar la documentación del portafolio a escala.",
          "El trabajo abarcó del orden de mil unidades organizacionales y un histórico de proyectos de unos quince años, con revisión de miles de páginas de documentación.",
        ],
      },
      {
        heading: "El resultado",
        paragraphs: [
          "El material procesado se usó para producir análisis estructurado destinado a apoyar el trabajo institucional, incluido un informe descargable.",
        ],
      },
    ],
    ctaHeading: "¿Un proceso parecido en tu empresa?",
    translationStatus: "live",
  },
];

const en: CaseItem[] = [
  {
    slug: "real-time-interview-agent",
    tag: "HR Tech",
    iconName: "usuarios",
    title: "Real Time Interview Agent",
    summary: "Real-time assistance for HR interviews, without adding a bot to the call.",
    caption: "Live assistance, async screening, and post-interview analysis",
    body: "A platform covering the full interview cycle: preparation, screening, live in-interview assistance, post-interview analysis, and candidate history.",
    metrics: [
      { label: "Question capture (Windows 11)", value: "~3 s" },
      { label: "Answer processing (Windows 11)", value: "~6.45 s" },
      { label: "Answer processing (macOS)", value: "4.81 s" },
    ],
    narrative: [
      {
        heading: "The problem",
        paragraphs: [
          "During an interview, much of the interviewer's work is not interviewing. It is taking notes, recording answers, keeping evaluation criteria in mind, and afterwards reconstructing what happened in order to compare candidates.",
          "That administrative work competes with the attention the conversation needs. And the record that survives depends on how much each interviewer managed to write down, which makes interviews run by different people hard to compare.",
        ],
      },
      {
        heading: "What we built",
        paragraphs: [
          "A desktop application that processes microphone and speaker audio directly during the interview. It does not join the call as another participant and does not depend on a specific integration with Zoom, Meet, or Teams: it works across all three because it works on the machine's audio.",
          "During the interview, the agent identifies questions, extracts answers, evaluates them against the configured criteria, and syncs everything to the cloud. If connectivity fails, it falls back to a local transcription engine rather than losing the session.",
          "Alongside it, a web application holds candidates, searches, screenings, and analysis, so interview material does not sit isolated from the rest of the process.",
        ],
      },
      {
        heading: "How it ended up",
        paragraphs: [
          "The product ended up covering considerably more than live assistance: asynchronous screenings, comparing interviews and candidates using natural language, managing each candidate's history, and several interviewers working on the same process.",
          "It runs on Windows and macOS, with the main workflow in production.",
        ],
      },
    ],
    ctaHeading: "A similar process at your company?",
    translationStatus: "live",
  },
  {
    slug: "normsy",
    tag: "Civic Tech",
    iconName: "documentos",
    title: "Normsy",
    summary:
      "Reducing toxicity on social media without censorship: AI that proposes constructive replies, with people deciding.",
    caption: "AI-assisted counterspeech, with humans in the loop",
    body: "An AI tool to reduce violence and toxicity on social media, built with Civic Health Project. It evolved from what was originally called Social Media Detoxifier.",
    highlights: [
      { emoji: "🏆", text: "Anthem Award 2024 — Best Use of AI", isAward: true },
      { emoji: "🤝", text: "Built with Civic Health Project" },
      { emoji: "🎓", text: "With participation from NYU's Center for Social Media and Politics" },
    ],
    metrics: [{ label: "Study participants", value: "1,021" }],
    narrative: [
      {
        heading: "The problem",
        paragraphs: [
          "The usual responses to toxicity online are to moderate, remove, or suspend. All of them act after the harm, and none change the tone of the conversation: they take content away without adding anything.",
          "This project started from a different premise. The problem is not only detecting harmful content, but that constructive voices are usually absent from those conversations. If no one replies with judgment, all that remains is the toxic material.",
        ],
      },
      {
        heading: "What we built",
        paragraphs: [
          "The system identifies relevant conversations and uses language models to propose counterspeech: alternative replies that add context or defuse aggression, instead of removing content.",
          "The decision is never automatic. Proposed replies go through human collaborators, who bring the context and judgment the model lacks. So the approach combines automatic classification and LLM generation, but keeps a person in the loop before anything is published.",
        ],
      },
      {
        heading: "From Social Media Detoxifier to Normsy",
        paragraphs: [
          "The project began as Social Media Detoxifier, with Civic Health Project, and under that name won the 2024 Anthem Award for Best Use of AI.",
          "It later evolved into Normsy, extending the architecture with agentic memory, topic-based routing, and orchestration. It is a public product today.",
        ],
      },
    ],
    productUrl: "https://normsy.ai",
    productLinkLabel: "Visit Normsy",
    ctaHeading: "A similar process at your company?",
    translationStatus: "live",
  },
  {
    slug: "agent-launcher",
    tag: "Platform",
    iconName: "integraciones",
    title: "Agent Launcher",
    summary:
      "Turning repetitive analysis tasks into reusable agents, without being locked into one model or provider.",
    caption: "Agent orchestration, provider-agnostic",
    body: "A platform to compare and run agents across different models, with executions persisted and auditable. Built for an investment management firm.",
    narrative: [
      {
        heading: "The problem",
        paragraphs: [
          "At an investment management firm, much of the research work is repetitive: the same questions about different companies, the same cross-checks, the same kind of summary.",
          "Automating that with AI is tempting, but it has a catch: each task ends up tied to one specific prompt, model, and provider. When the provider changes pricing, models, or terms, the work has to be redone.",
        ],
      },
      {
        heading: "What we built",
        paragraphs: [
          "An adaptation layer between the agents and the various model providers. The user picks agent, model, and provider separately, and can change any one of the three without redoing the other two.",
          "Every execution is persisted and audited, so it is possible to review what was asked, with which model, and what came back. In a setting where decisions carry financial consequences, being able to reconstruct how a conclusion was reached matters as much as the conclusion.",
          "The agents are also exposed over an API, so other systems can consume them without going through the interface.",
        ],
      },
      {
        heading: "How it evolved",
        paragraphs: [
          "In later phases it stopped being only an agent launcher. It gained conversation with context, visualization, specialized agents, and the principle of using the organization's internal data before falling back on web search.",
          "The MVP was technically validated and became one of the foundations of a broader AI architecture inside the client.",
        ],
      },
    ],
    ctaHeading: "A similar process at your company?",
    translationStatus: "live",
  },
  {
    slug: "organismo-internacional",
    tag: "Public Sector / Multilateral",
    iconName: "seguridad",
    title: "Work with an international organization",
    summary: "Public portfolio, institutional scale.",
    caption: "Data auditing and inference pipelines",
    body: "Artificial intelligence work over the public portfolio of an international organization, plus a downloadable report.",
    narrative: [
      {
        heading: "The problem",
        paragraphs: [
          "The organization held a large public portfolio documented heterogeneously: different formats, different criteria, accumulated over years.",
          "With material like that you can read one project, but you cannot analyze the whole. The information existed and was public; what was missing was the ability to treat it systematically.",
        ],
      },
      {
        heading: "What we did",
        paragraphs: [
          "Auditing and preparation of the data, structuring of the material, and inference pipelines to process the portfolio documentation at scale.",
          "The work covered on the order of a thousand organizational units and a project history spanning some fifteen years, reviewing thousands of pages of documentation.",
        ],
      },
      {
        heading: "The result",
        paragraphs: [
          "The processed material was used to produce structured analysis supporting the organization's work, including a downloadable report.",
        ],
      },
    ],
    ctaHeading: "A similar process at your company?",
    translationStatus: "live",
  },
];

export const casosContent: Localized<CaseItem[]> = { es, en };

/** Copy propio del hub /casos (no de las fichas). */
export interface CasosHubContent {
  seo: { title: string; description: string };
  heading: string;
  cardLinkLabel: string;
  breadcrumb: { home: string; casos: string };
}

export const casosHubContent: Localized<CasosHubContent> = {
  es: {
    seo: {
      title: "Casos de éxito | Data Voices",
      description:
        "Portafolio de casos de Data Voices: Real Time Interview Agent, Normsy, Agent Launcher y trabajo con un organismo internacional.",
    },
    heading: "Casos",
    cardLinkLabel: "Ver caso de estudio",
    breadcrumb: { home: "Inicio", casos: "Casos" },
  },
  en: {
    seo: {
      title: "Case studies | Data Voices",
      description:
        "Data Voices case portfolio: Real Time Interview Agent, Normsy, Agent Launcher, and work with an international organization.",
    },
    heading: "Case studies",
    cardLinkLabel: "Read the case study",
    breadcrumb: { home: "Home", casos: "Case studies" },
  },
};

export function getCasos(locale: string): CaseItem[] {
  return locale === "en" ? en : es;
}

export function getCaseBySlug(slug: string, locale: string): CaseItem | undefined {
  return getCasos(locale).find((item) => item.slug === slug);
}

/** Los slugs son iguales en los dos idiomas — sirve para generateStaticParams y rutas. */
export const caseSlugs = es.map((item) => item.slug);
