import type { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { SITE_URL } from "./lib/constants";

const intlMiddleware = createMiddleware(routing);
const PRODUCTION_HOST = new URL(SITE_URL).host;

export default function middleware(request: NextRequest) {
  const response = intlMiddleware(request);

  // Feedback SEO/GEO ítem 1: cualquier host que no sea el de producción
  // (el preview de Netlify, un dominio de staging, etc.) tiene que salir
  // noindex — las personas lo siguen viendo, los buscadores no. El header
  // gana siempre, sin depender de que cada página lo recuerde a mano.
  if (request.headers.get("host") !== PRODUCTION_HOST) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
  }

  return response;
}

export const config = {
  // Excluye assets estáticos, API interna, el widget de Cecilia y archivos con extensión.
  matcher: ["/((?!api|_next|_vercel|cecilia/|.*\\..*).*)"],
};
