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
