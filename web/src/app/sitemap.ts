import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { ROUTES } from "@/lib/routes";
import { routing } from "@/i18n/routing";

function urlFor(locale: string, path: string) {
  const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
  return `${SITE_URL}${prefix}${path === "/" ? "" : path}` || SITE_URL;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => {
    const languages: Record<string, string> = { es: urlFor("es", route.path) };
    if (route.translationStatus === "live") {
      languages.en = urlFor("en", route.path);
    }

    return {
      url: urlFor(routing.defaultLocale, route.path),
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route.priority,
      alternates: { languages },
    };
  });
}
