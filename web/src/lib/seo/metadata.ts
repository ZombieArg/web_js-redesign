import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import { routing } from "@/i18n/routing";

interface BuildMetadataArgs {
  locale: string;
  /** Path sin locale, ej. "/servicios/asistentes-ia" o "/". */
  path: string;
  title: string;
  description: string;
  /** 'pending' => noindex + se excluye de alternates/sitemap SOLO en el locale no-default (en). */
  translationStatus?: "live" | "pending";
  /**
   * noindex forzado en TODOS los locales, sin importar translationStatus.
   * Para features que no están listas todavía (ej. Blog sin posts) —
   * translationStatus es por idioma, esto es "la página entera no se indexa".
   */
  noindex?: boolean;
  image?: string;
}

export function localizedUrl(locale: string, path: string) {
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
  noindex = false,
  image,
}: BuildMetadataArgs): Metadata {
  const canonical = localizedUrl(locale, path);
  const isPending = noindex || (locale !== routing.defaultLocale && translationStatus === "pending");

  const languages: Record<string, string> = {};
  if (!isPending) {
    for (const l of routing.locales) {
      // La versión es siempre "live" (fuente de verdad); en solo se agrega si no está pending.
      if (l !== routing.defaultLocale && l !== locale && translationStatus === "pending") continue;
      languages[l] = localizedUrl(l, path);
    }
    // x-default: Google lo pide en el <head> (vía este mapa), no solo en el header HTTP.
    // Apunta siempre a la versión es (idioma por defecto del sitio).
    languages["x-default"] = localizedUrl(routing.defaultLocale, path);
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
      images: [{ url: image ?? `${SITE_URL}/opengraph-image`, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image ?? `${SITE_URL}/opengraph-image`],
    },
    robots: isPending ? { index: false, follow: true } : { index: true, follow: true },
  };
}
