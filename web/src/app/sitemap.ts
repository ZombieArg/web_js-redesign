import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { ROUTES } from "@/lib/routes";
import { routing } from "@/i18n/routing";
import { blogDatesForSlug, confirmedEditorialDate } from "@/content/blog/data";
import { PAGE_LAST_MODIFIED } from "@/lib/seo/page-last-modified";

function urlFor(locale: string, path: string) {
  const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
  return `${SITE_URL}${prefix}${path === "/" ? "" : path}` || SITE_URL;
}

function lastModifiedFor(path: string): string | undefined {
  const slug = /^\/blog\/([^/]+)$/.exec(path)?.[1];
  if (slug) {
    const dates = blogDatesForSlug(slug);
    if (!dates) throw new Error(`Sitemap: no hay datos de la nota ${path}`);
    // Pendiente: se omite lastModified. No usar la fecha del build ni inventar una.
    return confirmedEditorialDate(dates.dateModified);
  }
  const fixed = PAGE_LAST_MODIFIED[path];
  if (!fixed) throw new Error(`Sitemap: falta lastModified fijo para ${path} en src/lib/seo/page-last-modified.ts`);
  return fixed;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.flatMap((route) => {
    const esUrl = urlFor("es", route.path);
    const languages: Record<string, string> = { es: esUrl };
    if (route.translationStatus === "live") {
      languages.en = urlFor("en", route.enPath ?? route.path);
    }
    // Notas con slug distinto, y el índice /blog, publican también la URL /en.
    // x-default apunta a la versión en español. El resto de las rutas live
    // conserva el sitemap anterior (es + en, sin un segundo <loc>).
    const separateEnglishUrl = route.path === "/blog" || Boolean(route.enPath);
    if (separateEnglishUrl && route.translationStatus === "live") {
      languages["x-default"] = esUrl;
    }

    const spanishLastModified = lastModifiedFor(route.path);
    const spanish = {
      url: esUrl,
      ...(spanishLastModified ? { lastModified: spanishLastModified } : {}),
      changeFrequency: "weekly" as const,
      priority: route.priority,
      alternates: { languages },
    };
    if (!separateEnglishUrl || route.translationStatus !== "live") return [spanish];
    const englishPath = route.enPath ?? route.path;
    const englishLastModified = lastModifiedFor(englishPath);
    return [
      spanish,
      {
        url: urlFor("en", englishPath),
        ...(englishLastModified ? { lastModified: englishLastModified } : {}),
        changeFrequency: "weekly" as const,
        priority: route.priority,
        alternates: { languages },
      },
    ];
  });
}
