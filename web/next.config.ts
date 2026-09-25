import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  // Fija la raíz del workspace explícitamente (client/ vive en el mismo
  // repo, en un path hermano — evita que Turbopack la infiera mal).
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      { source: "/data-ai", destination: "/servicios/ia-sobre-datos", permanent: true },
      { source: "/software-dev", destination: "/servicios/desarrollo-software-ia", permanent: true },
      { source: "/consulting", destination: "/servicios/consultoria", permanent: true },
      { source: "/en/data-ai", destination: "/en/servicios/ia-sobre-datos", permanent: true },
      {
        source: "/en/software-dev",
        destination: "/en/servicios/desarrollo-software-ia",
        permanent: true,
      },
      { source: "/en/consulting", destination: "/en/servicios/consultoria", permanent: true },
      // Renombre del caso (24/09/2026): el cliente pidió no nombrar al organismo.
      { source: "/casos/bid", destination: "/casos/organismo-internacional", permanent: true },
      { source: "/en/casos/bid", destination: "/en/casos/organismo-internacional", permanent: true },
      // /cecilia se mantiene igual (URL histórica) — sin redirect, excluida a propósito.
    ];
  },
};

export default withNextIntl(nextConfig);
