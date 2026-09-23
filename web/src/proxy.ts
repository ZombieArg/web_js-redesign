import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Excluye assets estáticos, API interna, el widget de Cecilia y archivos con extensión.
  matcher: ["/((?!api|_next|_vercel|cecilia/|.*\\..*).*)"],
};
