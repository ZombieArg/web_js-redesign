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
 * Barra final, antes de next-intl.
 *
 * Con localePrefix "as-needed" el middleware reescribe el locale por defecto
 * (`/blog/<slug>/` → `/es/blog/<slug>`) y esa rewrite es un 200. Next solo
 * aplica el 308 de trailingSlash: false (el default; no hace falta setearlo)
 * cuando el proxy hace next(), que es el caso de `/en/.../`. En Netlify el
 * edge le pasa la barra al proxy (normalizeRequestURL solo la agrega si
 * trailingSlash es true) y el 200 del español queda en la caché Durable.
 * next.config tiene skipTrailingSlashRedirect para que `next start` no
 * redirija antes y pase por este mismo camino.
 *
 * Una regla splat en netlify.toml también redirigiría en el CDN, pero no corre
 * en `next start` y pisa redirects que genera el plugin de Next. El 200 nace
 * en esta rewrite, así que el 308 va acá.
 *
 * `/` no se toca: redirigir la home a sí misma hace loop.
 *
 * El 308 sale con Cache-Control y Netlify-CDN-Cache-Control en `no-cache`,
 * sin `durable`. @netlify/plugin-nextjs le agrega `durable` a los HTML
 * cacheables (headers.js → setCacheControlHeaders); no hay esa directiva en
 * netlify.toml, next.config ni este proxy. El 308 de `/en/.../` ya responde
 * `cache-control: no-cache` y `Netlify Durable; fwd=bypass`. Setear el header
 * de Netlify evita que el plugin le concatene `durable` a este redirect.
 */
function redirectTrailingSlash(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  if (pathname.length <= 1 || !pathname.endsWith("/")) return null;

  const bare = pathname.replace(/\/+$/, "") || "/";
  const response = NextResponse.redirect(new URL(`${bare}${search}`, request.url), 308);
  response.headers.set("Cache-Control", "no-cache");
  response.headers.set("Netlify-CDN-Cache-Control", "no-cache");
  return response;
}

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
  // Legacy primero: /data-ai/ ya resuelve al destino nuevo en un solo 308
  // (resolveLegacyRedirect normaliza una barra). El resto de las barras cae
  // en redirectTrailingSlash.
  const target = resolveLegacyRedirect(request.nextUrl.pathname);

  if (target) {
    const url = new URL(target, request.url);
    // Preserva querystring (campañas con utm_*, que es de donde más llegan
    // estas URLs viejas).
    url.search = request.nextUrl.search;
    return NextResponse.redirect(url, 308);
  }

  const slashRedirect = redirectTrailingSlash(request);
  if (slashRedirect) return slashRedirect;

  return intlMiddleware(request);
}

export const config = {
  // Excluye assets estáticos, API interna, el widget de Cecilia y archivos con extensión.
  matcher: ["/((?!api|_next|_vercel|cecilia/|.*\\..*).*)"],
};
