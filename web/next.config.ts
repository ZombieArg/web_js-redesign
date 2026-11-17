import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import { LEGACY_REDIRECTS } from "./src/lib/legacy-redirects";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  // Fija la raíz del workspace explícitamente (client/ vive en el mismo
  // repo, en un path hermano — evita que Turbopack la infiera mal).
  turbopack: {
    root: __dirname,
  },
  // trailingSlash queda en false (el default): las URLs canónicas no llevan
  // barra. El 308 de Next no alcanza en Netlify: el edge le entrega la barra
  // al proxy y next-intl reescribe el locale por defecto a un 200. El redirect
  // lo hace proxy.ts. Este flag apaga el 308 automático para que `next start`
  // pase por el mismo camino.
  skipTrailingSlashRedirect: true,
  // Fallback para self-hosted. En la práctica los resuelve proxy.ts antes,
  // porque el middleware corre primero y con localePrefix "as-needed" reescribe
  // el path — ver el comentario largo ahí. Se derivan del mismo módulo para que
  // las dos capas no se desincronicen.
  async redirects() {
    return Object.entries(LEGACY_REDIRECTS).flatMap(([source, destination]) => [
      { source, destination, permanent: true },
      { source: `/en${source}`, destination: `/en${destination}`, permanent: true },
    ]);
  },
};

export default withNextIntl(nextConfig);
