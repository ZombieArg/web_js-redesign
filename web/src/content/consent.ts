import type { AppLocale } from "@/i18n/routing";

/** Textos del banner y del footer. La política está en content/privacy.ts. */
export const consentCopy = {
  es: {
    banner:
      "Usamos cookies de medición (PostHog) y de publicidad (Meta) para entender cómo se usa el sitio y medir nuestras campañas. Solo se activan si las aceptás.",
    accept: "Aceptar",
    reject: "Rechazar",
    privacy: "Política de privacidad",
    preferences: "Preferencias de cookies",
  },
  en: {
    banner:
      "We use analytics (PostHog) and advertising (Meta) cookies to understand how the site is used and to measure our campaigns. They only load if you accept.",
    accept: "Accept",
    reject: "Reject",
    privacy: "Privacy policy",
    preferences: "Cookie preferences",
  },
} as const;

export function consentCopyFor(locale: string) {
  const key: AppLocale = locale === "en" ? "en" : "es";
  return consentCopy[key];
}
