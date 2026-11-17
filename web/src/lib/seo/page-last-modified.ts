/**
 * lastModified fijo de las páginas que no son una nota del blog.
 *
 * El sitemap no puede usar `new Date()`: eso publica la fecha del build
 * en cada generación. Cada path de abajo tiene su entrada. Hoy todas
 * apuntan a la misma fecha fija (no es la fecha del build). Para cambiar
 * una página, reemplazá solo su valor por una fecha ISO `YYYY-MM-DD`.
 *
 * La misma entrada vale para la URL en español y, si existe, la URL `/en`.
 * Las notas no van acá: su lastModified sale de `dateModified` en
 * `src/content/blog/data.ts`. Si esa fecha está pendiente, el sitemap
 * omite lastModified para esa URL.
 */
export const STATIC_PAGE_LAST_MODIFIED = "2026-10-31";

export const PAGE_LAST_MODIFIED: Record<string, string> = {
  "/": STATIC_PAGE_LAST_MODIFIED,
  "/servicios/asistentes-ia": STATIC_PAGE_LAST_MODIFIED,
  "/cecilia": STATIC_PAGE_LAST_MODIFIED,
  "/servicios/ia-sobre-datos": STATIC_PAGE_LAST_MODIFIED,
  "/servicios/desarrollo-software-ia": STATIC_PAGE_LAST_MODIFIED,
  "/servicios/consultoria": STATIC_PAGE_LAST_MODIFIED,
  "/casos": STATIC_PAGE_LAST_MODIFIED,
  "/casos/real-time-interview-agent": STATIC_PAGE_LAST_MODIFIED,
  "/casos/normsy": STATIC_PAGE_LAST_MODIFIED,
  "/casos/agent-launcher": STATIC_PAGE_LAST_MODIFIED,
  "/casos/organismo-internacional": STATIC_PAGE_LAST_MODIFIED,
  "/prensa": STATIC_PAGE_LAST_MODIFIED,
  "/nosotros": STATIC_PAGE_LAST_MODIFIED,
  "/contacto": STATIC_PAGE_LAST_MODIFIED,
  "/blog": STATIC_PAGE_LAST_MODIFIED,
};
