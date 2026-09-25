import type { IconName } from "@/components/icons/icon-map";

export type TranslationStatus = "live" | "pending";

/**
 * Envoltorio genérico para contenido bilingüe. `en: null` es el estado real
 * hoy para las 7 páginas nuevas (copy solo en es-AR) — `resolveContent`
 * hace explícito el fallback, nunca se mezcla idioma silenciosamente.
 */
export interface Localized<T> {
  es: T;
  en: T | null;
}

export function resolveContent<T>(locale: string, localized: Localized<T>): {
  content: T;
  translationStatus: TranslationStatus;
} {
  if (locale === "en" && localized.en) {
    return { content: localized.en, translationStatus: "live" };
  }
  return { content: localized.es, translationStatus: locale === "en" ? "pending" : "live" };
}

export interface CtaData {
  label: string;
  href: string;
  external?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqSection {
  kicker: string;
  heading: string;
  items: FaqItem[];
}

export interface NumberedStepData {
  title: string;
  caption?: string;
}

export interface ComparisonCardData {
  tag: string;
  items: string[];
  link?: { label: string; href: string };
}

export type ViabilitySlot =
  | { kind: "matrix"; heading: string; positive: ComparisonCardData; negative: ComparisonCardData }
  | { kind: "signals"; heading: string; items: string[] }
  | {
      kind: "mvpSupport";
      heading: string;
      mvp: { title: string; body: string };
      support: { title: string; body: string };
      disambiguation: { text: string; linkLabel: string; href: string };
    };

export interface ModalityCardData {
  tag: string;
  iconName: IconName;
  title: string;
  description: string;
  specs?: string[];
  link: { label: string; href: string };
}

export interface SeoContent {
  title: string;
  description: string;
}

export interface ServicePageContent {
  slug: "asistentes-ia" | "ia-sobre-datos" | "desarrollo-software-ia" | "consultoria";
  iconName: IconName;
  seo: SeoContent;
  hero: {
    breadcrumbLabel: string;
    h1: string;
    subhead: string;
    primaryCta: CtaData;
    secondaryCta?: CtaData;
  };
  stats?: { value: string; label: string }[];
  definition: { kicker: string; heading: string; body: string };
  viability: ViabilitySlot | null;
  adoptionModalities?: { kicker: string; heading: string; items: ModalityCardData[] };
  buildProcess: { kicker: string; heading: string; steps: NumberedStepData[] };
  faq: FaqSection;
  closingCta: {
    kicker: string;
    heading: string;
    subhead: string;
    primaryCta: CtaData;
    secondaryCta?: CtaData;
  };
}

export interface ProductPageContent {
  seo: SeoContent;
  hero: { breadcrumbLabel: string; h1: string; subhead: string; primaryCta: CtaData; secondaryCta?: CtaData };
  definition: { kicker: string; heading: string; body: string };
  specs: { kicker: string; heading: string; items: { title: string; description: string }[] };
  faq: FaqSection;
  closingCta: ServicePageContent["closingCta"];
}

export interface HomeContent {
  seo: SeoContent;
  hero: { badge: string; h1: string; subhead: string; cta: CtaData };
  logoRow: { heading: string; logos: { key: string; alt: string }[] };
  whoWeAre: { heading: string; body: string; badges: string[] };
  services: {
    heading: string;
    items: { iconName: IconName; title: string; description: string; href: string; linkLabel: string }[];
  };
  howWeWork: { heading: string; steps: NumberedStepData[] };
  cases: {
    heading: string;
    linkLabel: string;
    items: { tag: string; title: string; description: string; caption?: string; href: string }[];
  };
  testimonials: {
    heading: string;
    subheading: string;
    items: { quote: string; author: string; role: string; photoKey?: string }[];
  };
  faq: FaqSection;
  closingCta: { heading: string; primaryCta: CtaData };
}

export interface PersonContent {
  slug: "juanma" | "eduardo";
  name: string;
  jobTitle: string;
  /** Alt de la foto. Es contenido, se traduce; la imagen se mapea por slug en la pagina. */
  photoAlt: string;
  bio: string;
}

export interface NosotrosContent {
  seo: SeoContent;
  hero: { h1: string; subhead: string };
  entityParagraph: string;
  people: PersonContent[];
  /** Nota del eje institucional. El heading es contenido (localizable), no markup. */
  institutionalNote: { heading: string; text: string; linkLabel: string; href: string };
  closingCta: CtaData;
}

export interface ContactoContent {
  seo: SeoContent;
  hero: { h1: string; subhead: string };
  afterSubmitNote: string;
}

export interface CaseItem {
  slug: string;
  tag: string;
  iconName: IconName;
  title: string;
  summary: string;
  caption?: string;
  body?: string;
  highlights?: { emoji: string; text: string }[];
  metrics?: { label: string; value: string }[];
  productUrl?: string;
  videoEmbedUrl?: string;
  translationStatus: TranslationStatus;
}

export interface PressItem {
  slug: string;
  source: string;
  /** Título real en cada idioma (Prensa_DataVoices_ES_EN.md) — no es traducción automática. */
  title: { es: string; en: string };
  date: { es: string; en: string };
  url: string;
  imageKey: string;
}

/** Copy propio del hub /prensa (distinto de las 4 PressItem, que son solo metadata de tarjeta). */
export interface PrensaContent {
  seo: SeoContent;
  hero: { h1: string; subhead: string };
  intro: string;
  sectionHeading: string;
  closing: { heading: string; cta: CtaData };
}
