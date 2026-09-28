import createMiddleware from "next-intl/middleware";
import { NextResponse, type NextRequest } from "next/server";
import { routing } from "./i18n/routing";
import { resolveLegacyRedirect } from "./lib/legacy-redirects";

// Feedback SEO/GEO ítem 1 (noindex del preview): se probó acá, seteando
// X-Robots-Tag por host — en Netlify las páginas SSG se sirven como asset
// estático por una vía separada del middleware y el header se pierde. Se
// resuelve en build-time vía NOINDEX_ALL (lib/constants.ts + lib/seo/metadata.ts),
// horneado como <meta name="robots"> en el HTML de cada página.

const intlMiddleware = createMiddleware(routing);

/**
 * Los redirects legacy se resuelven ACÁ, antes de next-intl, y esa precedencia
 * es el punto.
 *
 * Con localePrefix "as-needed" el middleware de next-intl reescribe "/data-ai" a
 * "/es/data-ai". El middleware corre antes que redirects() de next.config.ts, así
 * que para cuando Next evalúa las reglas el path ya se reescribió y ninguna
 * matchea: 404. Los /en/* no pasaban por esa reescritura (el prefijo ya es
 * válido) y por eso eran los únicos que funcionaban.
 *
 * Verificado en producción el 25/09/2026: /data-ai, /software-dev, /consulting y
 * /casos/bid daban 404; sus equivalentes /en/* daban 308.
 */
export default function proxy(request: NextRequest) {
  const target = resolveLegacyRedirect(request.nextUrl.pathname);

  if (target) {
    const url = new URL(target, request.url);
    // Preserva querystring (campañas con utm_*, que es de donde más llegan
    // estas URLs viejas).
    url.search = request.nextUrl.search;
    return NextResponse.redirect(url, 308);
  }

  return intlMiddleware(request);
}

export const config = {
  // Excluye assets estáticos, API interna, el widget de Cecilia y archivos con extensión.
  matcher: ["/((?!api|_next|_vercel|cecilia/|.*\\..*).*)"],
};
