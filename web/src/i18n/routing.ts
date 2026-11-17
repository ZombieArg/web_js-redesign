import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["es", "en"],
  defaultLocale: "es",
  // es sin prefijo (URL histórica del sitio), en con prefijo /en.
  localePrefix: "as-needed",
  // Feedback SEO/GEO ítem 9: Google pide no redirigir "/" según
  // Accept-Language del navegador (rompe el rastreo/cache de la home en
  // español). "/" queda siempre en es; a /en solo se entra explícito
  // (selector de idioma o tipeando la URL). hreflang + selector alcanzan.
  localeDetection: false,
  // next-intl arma un header HTTP Link con el slug de la request, repetido
  // en los dos idiomas. En el blog el slug se traduce, así que ese Link
  // apunta a un 404 (ej. /en/blog/agente-de-ia-vs-chatbot). El hreflang
  // correcto ya sale del <head> (metadata) y del sitemap.
  alternateLinks: false,
  pathnames: {
    "/": "/",
    "/cecilia": "/cecilia",
    "/servicios/asistentes-ia": "/servicios/asistentes-ia",
    "/servicios/ia-sobre-datos": "/servicios/ia-sobre-datos",
    "/servicios/desarrollo-software-ia": "/servicios/desarrollo-software-ia",
    "/servicios/consultoria": "/servicios/consultoria",
    "/casos": "/casos",
    "/casos/[slug]": "/casos/[slug]",
    "/blog": "/blog",
    "/blog/[slug]": "/blog/[slug]",
    "/prensa": "/prensa",
    "/prensa/[slug]": "/prensa/[slug]",
    "/nosotros": "/nosotros",
    "/contacto": "/contacto",
  },
});

export type AppLocale = (typeof routing.locales)[number];
