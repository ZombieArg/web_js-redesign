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
- Formulario de contacto conectado al CRM Data Voices mediante `/api/contact`,
  Route Handler del servidor que envía campos estructurados e `event_id` estable
  a `/api/inbound/web`. Requiere `CRM_INGEST_URL` y `CRM_WEB_INGEST_TOKEN` en Netlify.
  El email de aviso es opcional y se envía después de confirmar el alta en CRM.
  `netlify/edge-functions/contact-rate-limit.ts` limita a cinco solicitudes por IP y minuto en Netlify; verificar que la regla aparezca en el log del deploy. El honeypot sigue activo.
- `netlify.toml` listo para un sitio Netlify nuevo apuntando a esta carpeta.
- Datos de contacto unificados en `lib/constants.ts` (el sitio legacy tenía 4 números distintos).

## Qué está hecho, además (segunda pasada)

- **Traducción al inglés de las 7 páginas de copy nuevo** (Home, 4 líneas de servicio, Cecilia,
  Nosotros, Contacto): `en` dejó de ser `null` en los 7 `src/content/*.ts`, con traducción real
  completa (no generada por máquina ni resumida). `lib/routes.ts` deriva `translationStatus` del
  contenido mismo (`en !== null` → `"live"`), así que `sitemap.xml` (hreflang `en`), `robots`/
  `noindex` y `llms.txt` se actualizaron solos, sin tocar nada a mano. Verificado con
  `next build && next start` + `curl` en las 7 rutas `/en/*` (H1 real en inglés en el HTML crudo) y
  en `sitemap.xml` (alternate hreflang `en` presente en esas 7, ausente en las que siguen
  pendientes).
  Deliberadamente **no** traducidas: Casos, Blog, Prensa — es contenido placeholder que va a ser
  reemplazado por el copy final de Íntimo Growth, traducirlo ahora sería trabajo descartable.
- **Widget de chat de Cecilia: removido, no es necesario.** `public/cecilia/index.js` nunca existió
  (ni en este repo ni en el legacy — `client/index.html` lo referenciaba con una ruta rota que
  jamás funcionó). Se eliminó `CeciliaWidgetLoader.tsx` y su uso en el layout raíz en vez de dejarlo
  como punto de enganche pendiente.

## Qué queda pendiente — real, no maquillado

1. **Casos de éxito.** Las 5 fichas tienen datos reales-parciales (resumen, algún highlight) pero
   sin narrativa larga, métricas ni video — eso depende del copy de Íntimo Growth (brief §2.2).
   `CaseDetailTemplate.tsx` ya soporta esos campos, se agregan en `content/casos/data.ts` sin tocar
   el template.
2. **Blog.** Hay cinco notas en `content/blog/data.ts` para revisión en preview. Su publicación
   depende de `NEXT_PUBLIC_BLOG_PUBLIC=true` y de la aprobación editorial.
3. **Prensa.** Hub funcional con links de salida a las 4 notas reales. Convertirlas en "páginas
   propias" (`/prensa/[slug]`) es trabajo de copy, no técnico — la ruta ni el tipo están armados
   todavía porque no hay contenido propio que mostrar ahí (evita fabricar una página vacía).
4. **Capacitación.** Vive como bloque dentro de `/servicios/consultoria` (fallback explícito de la
   Estrategia SEO/GEO §3.7). Separarla a `/capacitacion` es una decisión de arquitectura del sitio
   pendiente de Data Voices, no algo que haya que resolver en este código.
5. **Demo interactivo del bot** (`webBot.ts`/`Hero.tsx` del sitio legacy) — no está en el mockup
   nuevo, se dejó fuera de este sprint a propósito.
6. **Deploy real.** `netlify.toml` está listo. Falta verificar el sitio, rama y SHA publicados en
   Netlify antes de integrar el formulario del CRM en producción.
7. **Assets.** Falta la foto de Leopoldo Reyes (testimonio omitido del array por esa razón, no por
   error) y el logo de "M4" (mencionado en el copy de Home, sin archivo disponible — se omitió de
   `logoRow` en vez de mostrar un logo roto).

## Deploy a Netlify — qué falta para hacerlo

`netlify.toml` usa `npm run build:netlify`, publica `.next` y ejecuta el plugin de Next. La rama
`feat/crm-web-ingest` agrega `/api/contact`; antes de publicarla hay que resolver el merge pendiente,
confirmar el SHA que sirve Netlify y configurar `CRM_INGEST_URL` y `CRM_WEB_INGEST_TOKEN` como
variables de servidor. El CRM de destino corre en Hetzner. La validación local del formulario y sus
reintentos no sustituye una prueba del deploy publicado.

## Decisión técnica que se apartó del plan original

El plan asumía Tailwind v3 (`tailwind.config.ts` con `theme.extend`). `create-next-app` instaló
Tailwind v4 por default, que configura el theme vía `@theme` en CSS. Se adoptó tal cual: es el
approach recomendado hoy por el propio framework y mapea mejor a variables CSS que ya queríamos
declarar. Ver el bloque de comentarios al inicio de `src/app/globals.css` para el detalle de cómo
se tradujo cada token del design system.
