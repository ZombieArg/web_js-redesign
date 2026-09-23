import { casos } from "@/content/casos/data";
import type { TranslationStatus } from "@/content/types";

export interface RouteEntry {
  path: string;
  priority: number;
  translationStatus: TranslationStatus;
}

/**
 * Registro central de rutas — consumido por sitemap.ts y llms.txt/route.ts.
 * `translationStatus: 'pending'` excluye la entrada `en` (ver lib/seo/metadata.ts).
 */
export const ROUTES: RouteEntry[] = [
  { path: "/", priority: 1, translationStatus: "pending" },
  { path: "/servicios/asistentes-ia", priority: 0.9, translationStatus: "pending" },
  { path: "/cecilia", priority: 0.9, translationStatus: "pending" },
  { path: "/servicios/ia-sobre-datos", priority: 0.8, translationStatus: "pending" },
  { path: "/servicios/desarrollo-software-ia", priority: 0.8, translationStatus: "pending" },
  { path: "/servicios/consultoria", priority: 0.8, translationStatus: "pending" },
  { path: "/casos", priority: 0.7, translationStatus: "pending" },
  ...casos.map((item) => ({
    path: `/casos/${item.slug}`,
    priority: 0.6,
    translationStatus: item.translationStatus,
  })),
  { path: "/prensa", priority: 0.4, translationStatus: "pending" },
  { path: "/nosotros", priority: 0.7, translationStatus: "pending" },
  { path: "/contacto", priority: 0.6, translationStatus: "pending" },
  // /blog se excluye del sitemap: sin posts todavía (content/blog/data.ts).
];
