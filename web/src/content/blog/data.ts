import type { Localized, TranslationStatus } from "../types";

export interface BlogItem {
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  publishedAt: string;
  authorSlug: "juanma" | "eduardo";
  translationStatus: TranslationStatus;
}

/**
 * Sin posts todavía (brief §2.1: Blog depende de copy de Íntimo Growth).
 * El hub renderiza el estado "Próximamente" en vez de una ruta vacía o
 * rota. La Estrategia SEO/GEO §3.10 ya define las 6 notas del primer
 * ciclo — se cargan acá cuando estén escritas, sin tocar el template.
 */
export const blogPosts: BlogItem[] = [];

export type { Localized };
