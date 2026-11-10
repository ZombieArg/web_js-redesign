import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { ROUTES } from "@/lib/routes";
import { routing } from "@/i18n/routing";

function urlFor(locale: string, path: string) {
  const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
  return `${SITE_URL}${prefix}${path === "/" ? "" : path}` || SITE_URL;
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

    const spanish = {
      url: esUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route.priority,
      alternates: { languages },
    };
    if (!separateEnglishUrl || route.translationStatus !== "live") return [spanish];
    return [
      spanish,
      {
        url: urlFor("en", route.enPath ?? route.path),
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: route.priority,
        alternates: { languages },
      },
    ];
  });
}
