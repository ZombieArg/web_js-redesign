# Data Voices — sitio nuevo (Next.js)

Reconstrucción SSR/SSG del sitio, Pilar 01 · punto 1 del brief técnico. Ver el plan completo en
`C:\Users\White\.claude\plans\revisar-este-repo-hay-enumerated-map.md`.

Next.js 16 (App Router) + React 19 + TypeScript + Tailwind v4 (tokens vía `@theme` en
`src/app/globals.css`, no `tailwind.config.ts` — Tailwind v4 no lo usa por default) + `next-intl` v4
(bilingüe es/en, `localePrefix: "as-needed"`).

## Cómo correr

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm run start
npm run lint
```

Variables de entorno: copiar `.env.example` a `.env.local` (opcional — todas tienen fallback
funcional a los valores de producción, ver `src/lib/constants.ts`).

## Qué está hecho (verificado con `next build` + `next start` + `curl`)

- Las 12 páginas del mapa de sitio, en ambos locales (24 rutas SSG): Home, 4 líneas de servicio,
  Cecilia, Nosotros, Contacto, Casos (hub + 5 fichas), Prensa (hub), Blog (hub vacío).
- Copy final transcripto tal cual de los 7 docs entregados (Home, 4 Servicios, Nosotros, Contacto)
  a `src/content/*.ts`, tipado — ver ahí mismo comentarios sobre decisiones de mapeo cuando el copy
  no calzaba 1:1 con un bloque del mockup (ej. "Capacitación" dentro de Consultoría).
- Design system completo (colores, tipografía, radios, sombras, breakpoints) como tokens de
  Tailwind v4 en `globals.css`, con las reglas de uso de marca documentadas ahí mismo.
- Los 12 íconos, extraídos literalmente del bundle `Set de Iconos (standalone).html`.
- SEO: `generateMetadata` por página con canonical/hreflang, `sitemap.xml`, `robots.txt`,
  `llms.txt` (generado desde `lib/routes.ts`, no estático a mano).
- Schema/GEO: JSON-LD por `@graph` según el anexo de Íntimo Growth — Organization+WebSite
  (global), Service+FAQPage (cada servicio y Cecilia), Person×2 (Nosotros), CreativeWork+Breadcrumb
  (cada caso). Verificado que el `@id` de cada nodo coincide con la URL canónica `es`.
- Redirects legacy (`/data-ai`, `/software-dev`, `/consulting` → `/servicios/...`, ambos locales).
- Formulario de contacto conectado al mismo backend que el sitio legacy
  (`ceciliabot.datavoices.com.ar/api/send-email`), sin cambios de contrato.
- `netlify.toml` listo para un sitio Netlify nuevo apuntando a esta carpeta.
- Datos de contacto unificados en `lib/constants.ts` (el sitio legacy tenía 4 números distintos).

## Qué queda pendiente — real, no maquillado

1. **Traducción al inglés.** Las 7 páginas de copy nuevo están solo en es-AR. `/en/*` muestra el
   contenido en español con un aviso ("This page is not translated yet") y `noindex`, sin mezclar
   idiomas ni inventar traducción. Reemplazar `en: null` por el objeto real en cada
   `src/content/*.ts` cuando llegue la traducción — el resto (metadata, sitemap, hreflang) se
   actualiza solo vía el flag `translationStatus`.
2. **Widget de chat de Cecilia.** `public/cecilia/index.js` no existe — ni en este repo nuevo ni en
   el sitio legacy (`client/index.html` lo referencia con una ruta rota que nunca funcionó). El
   punto de enganche está listo (`CeciliaWidgetLoader.tsx`, carga `/cecilia/index.js` vía
   `next/script`), pero hace falta el bundle real del equipo de producto de Cecilia.
3. **Casos de éxito.** Las 5 fichas tienen datos reales-parciales (resumen, algún highlight) pero
   sin narrativa larga, métricas ni video — eso depende del copy de Íntimo Growth (brief §2.2).
   `CaseDetailTemplate.tsx` ya soporta esos campos, se agregan en `content/casos/data.ts` sin tocar
   el template.
4. **Blog.** Sin posts todavía (brief §2.1). El hub muestra "Próximamente"; agregar entradas a
   `content/blog/data.ts` cuando haya copy.
5. **Prensa.** Hub funcional con links de salida a las 4 notas reales. Convertirlas en "páginas
   propias" (`/prensa/[slug]`) es trabajo de copy, no técnico — la ruta ni el tipo están armados
   todavía porque no hay contenido propio que mostrar ahí (evita fabricar una página vacía).
6. **Capacitación.** Vive como bloque dentro de `/servicios/consultoria` (fallback explícito de la
   Estrategia SEO/GEO §3.7). Separarla a `/capacitacion` es una decisión de arquitectura del sitio
   pendiente de Data Voices, no algo que haya que resolver en este código.
7. **Demo interactivo del bot** (`webBot.ts`/`Hero.tsx` del sitio legacy) — no está en el mockup
   nuevo, se dejó fuera de este sprint a propósito.
8. **Deploy real.** `netlify.toml` está listo pero no se creó ni conectó ningún sitio de Netlify
   todavía (paso manual, fuera del alcance de este commit).
9. **Assets.** Falta la foto de Leopoldo Reyes (testimonio omitido del array por esa razón, no por
   error) y el logo de "M4" (mencionado en el copy de Home, sin archivo disponible — se omitió de
   `logoRow` en vez de mostrar un logo roto).

## Decisión técnica que se apartó del plan original

El plan asumía Tailwind v3 (`tailwind.config.ts` con `theme.extend`). `create-next-app` instaló
Tailwind v4 por default, que configura el theme vía `@theme` en CSS. Se adoptó tal cual: es el
approach recomendado hoy por el propio framework y mapea mejor a variables CSS que ya queríamos
declarar. Ver el bloque de comentarios al inicio de `src/app/globals.css` para el detalle de cómo
se tradujo cada token del design system.
