import type { Metadata } from "next";
import { SITE_URL, NOINDEX_ALL } from "@/lib/constants";
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
  /** Default: public/og/default.png (imagen estática — ver nota abajo). */
  image?: string;
}

// OG image: se probó con /opengraph-image (next/og, ImageResponse
// generado on-demand) pero devolvía 404 en Netlify — el runtime de Netlify
// para Next.js no está sirviendo esa convención de metadata route todavía
// (mismo bug de fondo que el de middleware/edge functions). Se resolvió
// generando UNA VEZ un PNG estático real con el mismo código de
// ImageResponse (ver git log de este archivo si hace falta regenerarlo) y
// sirviéndolo como public/og/default.png — cero dependencia del runtime.

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
      images: [{ url: image ?? `${SITE_URL}/og/default.png`, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image ?? `${SITE_URL}/og/default.png`],
    },
    robots: NOINDEX_ALL
      ? { index: false, follow: false }
      : isPending
        ? { index: false, follow: true }
        : { index: true, follow: true },
  };
}
