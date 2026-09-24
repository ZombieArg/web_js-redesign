import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

// Feedback SEO/GEO ítem 1 (noindex del preview): se probó acá, seteando
// X-Robots-Tag por host — en Netlify las páginas SSG se sirven como asset
// estático por una vía separada del middleware y el header se pierde. Se
// resuelve en build-time vía NOINDEX_ALL (lib/constants.ts + lib/seo/metadata.ts),
// horneado como <meta name="robots"> en el HTML de cada página.
export default createMiddleware(routing);

export const config = {
  // Excluye assets estáticos, API interna, el widget de Cecilia y archivos con extensión.
  matcher: ["/((?!api|_next|_vercel|cecilia/|.*\\..*).*)"],
};
