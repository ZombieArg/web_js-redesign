import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import { routing } from "@/i18n/routing";

interface BuildMetadataArgs {
  locale: string;
  /** Path sin locale, ej. "/servicios/asistentes-ia" o "/". */
  path: string;
  title: string;
  description: string;
  /** 'pending' => noindex + se excluye de alternates/sitemap. */
  translationStatus?: "live" | "pending";
  image?: string;
}

function localizedUrl(locale: string, path: string) {
  const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
  const clean = path === "/" ? "" : path;
  return `${SITE_URL}${prefix}${clean}` || SITE_URL;
}

export function buildMetadata({
  locale,
  path,
  title,
  description,
  translationStatus = "live",
  image,
}: BuildMetadataArgs): Metadata {
  const canonical = localizedUrl(locale, path);
  const isPending = locale !== routing.defaultLocale && translationStatus === "pending";

  const languages: Record<string, string> = {};
  if (!isPending) {
    for (const l of routing.locales) {
      // La versión es siempre "live" (fuente de verdad); en solo se agrega si no está pending.
      if (l !== routing.defaultLocale && l !== locale && translationStatus === "pending") continue;
      languages[l] = localizedUrl(l, path);
    }
  }

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: Object.keys(languages).length ? languages : undefined,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Data Voices",
      locale: locale === "es" ? "es_AR" : "en_US",
      type: "website",
      images: [{ url: image ?? `${SITE_URL}/og/default.jpg` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image ?? `${SITE_URL}/og/default.jpg`],
    },
    robots: isPending ? { index: false, follow: true } : { index: true, follow: true },
  };
}
