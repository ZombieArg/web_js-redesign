import { casos } from "@/content/casos/data";
import { homeContent } from "@/content/home";
import { ceciliaContent } from "@/content/cecilia";
import { asistentesIaContent } from "@/content/servicios/asistentes-ia";
import { iaSobreDatosContent } from "@/content/servicios/ia-sobre-datos";
import { desarrolloSoftwareIaContent } from "@/content/servicios/desarrollo-software-ia";
import { consultoriaContent } from "@/content/servicios/consultoria";
import { nosotrosContent } from "@/content/nosotros";
import { contactoContent } from "@/content/contacto";
import type { Localized, TranslationStatus } from "@/content/types";

export interface RouteEntry {
  path: string;
  priority: number;
  translationStatus: TranslationStatus;
}

// El estado de traducción se deriva del contenido real (en !== null), no de
// un flag hardcodeado — evita que sitemap/llms.txt queden desactualizados
// cuando se agrega una traducción a content/*.ts.
function statusOf(localized: Localized<unknown>): TranslationStatus {
  return localized.en ? "live" : "pending";
}

export const ROUTES: RouteEntry[] = [
  { path: "/", priority: 1, translationStatus: statusOf(homeContent) },
  { path: "/servicios/asistentes-ia", priority: 0.9, translationStatus: statusOf(asistentesIaContent) },
  { path: "/cecilia", priority: 0.9, translationStatus: statusOf(ceciliaContent) },
  { path: "/servicios/ia-sobre-datos", priority: 0.8, translationStatus: statusOf(iaSobreDatosContent) },
  {
    path: "/servicios/desarrollo-software-ia",
    priority: 0.8,
    translationStatus: statusOf(desarrolloSoftwareIaContent),
  },
  { path: "/servicios/consultoria", priority: 0.8, translationStatus: statusOf(consultoriaContent) },
  { path: "/casos", priority: 0.7, translationStatus: "pending" },
  ...casos.map((item) => ({
    path: `/casos/${item.slug}`,
    priority: 0.6,
    translationStatus: item.translationStatus,
  })),
  { path: "/prensa", priority: 0.4, translationStatus: "pending" as const },
  { path: "/nosotros", priority: 0.7, translationStatus: statusOf(nosotrosContent) },
  { path: "/contacto", priority: 0.6, translationStatus: statusOf(contactoContent) },
  // /blog se excluye del sitemap: sin posts todavía (content/blog/data.ts).
];
