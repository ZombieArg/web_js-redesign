import type { AppLocale } from "@/i18n/routing";

/**
 * Único lugar de los textos de consentimiento y de la política.
 * El banner y el footer ya tienen el copy aprobado. La política sigue
 * en placeholder hasta que COPY la escriba y DV la valide.
 */
export const consentCopy = {
  es: {
    banner:
      "Usamos cookies de medición (PostHog) y de publicidad (Meta) para entender cómo se usa el sitio y medir nuestras campañas. Solo se activan si las aceptás.",
    accept: "Aceptar",
    reject: "Rechazar",
    privacy: "Política de privacidad",
    preferences: "Preferencias de cookies",
    privacyH1: "[H1 POLÍTICA DE PRIVACIDAD ES — lo escribe COPY, lo valida DV]",
    privacyBody: "[TEXTO POLÍTICA DE PRIVACIDAD ES — lo escribe COPY, lo valida DV]",
  },
  en: {
    banner:
      "We use analytics (PostHog) and advertising (Meta) cookies to understand how the site is used and to measure our campaigns. They only load if you accept.",
    accept: "Accept",
    reject: "Reject",
    privacy: "Privacy policy",
    preferences: "Cookie preferences",
    privacyH1: "[H1 PRIVACY POLICY EN — lo escribe COPY, lo valida DV]",
    privacyBody: "[TEXTO PRIVACY POLICY EN — lo escribe COPY, lo valida DV]",
  },
} as const;

export function consentCopyFor(locale: string) {
  const key: AppLocale = locale === "en" ? "en" : "es";
  return consentCopy[key];
}
