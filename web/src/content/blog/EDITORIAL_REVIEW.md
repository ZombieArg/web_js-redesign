# Revisión editorial del blog

Las cinco notas están disponibles en el preview `https://datavoices-redesign-preview.netlify.app/blog`. Las notas 1 y 2 provienen de borradores completos del ZIP; la nota 3 sigue el contenido y los títulos del PDF de revisión; las notas 4 y 5 se redactaron a partir de briefs. El contenido solo muestra tablas y otros elementos presentes en el Markdown. Los comentarios editoriales del Markdown se omiten del HTML servido.

La fecha original de publicación de las cinco notas es el 27 de octubre de 2026. `publishedAt` conserva esa fecha y `modifiedAt` registra el día real de cada edición. Ambas fechas se conservan en los metadatos Open Graph y los datos estructurados; ninguna fecha se muestra en el cuerpo de las notas.

Cada nota tiene `BlogPosting`, `BreadcrumbList` de cuatro niveles y `FAQPage` en un único `<script type="application/ld+json">` dentro del `<head>`. El FAQ se genera desde las preguntas y respuestas visibles. Los comentarios de autoría, respuesta directa, FAQ y schema de los briefs ya no se emiten en el HTML. El rótulo visual «Respuesta directa» también se quitó.

## Paso a producción

El sitio principal mantiene `NEXT_PUBLIC_BLOG_PUBLIC` vacío hasta el despliegue autorizado. El preview usa `NEXT_PUBLIC_BLOG_PUBLIC=true` y `NEXT_PUBLIC_NOINDEX_ALL=true`. Al publicar en producción, configurar `NEXT_PUBLIC_BLOG_PUBLIC=true`, dejar `NEXT_PUBLIC_NOINDEX_ALL` vacío y confirmar `NEXT_PUBLIC_SITE_URL=https://datavoices.com.ar`. Las notas con `isPublished` se agregan al sitemap mediante `ROUTES` cuando el blog está habilitado.

El primer lanzamiento (31 de octubre de 2026) publica tres notas: consultora de IA, agente vs chatbot y chatbot de WhatsApp. «Por qué fallan los proyectos de IA» y «No-code vs desarrollo a medida» tienen `isPublished: false`: en producción devuelven 404, no aparecen en `/blog`, en notas relacionadas, en el sitemap ni en `llms.txt`. El preview las sigue mostrando.

Verificar en producción las URLs publicadas, el índice `/blog`, el sitemap, `robots`, canonical, hreflang, Open Graph y JSON-LD. La versión en inglés sigue pendiente de traducción y no debe indexarse como contenido equivalente.

Antes del despliegue de producción, confirmar con Data Voices la versión final de autoría, afirmaciones, casos e integraciones. Revisar la [política de WhatsApp](https://whatsappbusiness.com/policy/), sus [precios](https://whatsappbusiness.com/resources/faq/) y el [comunicado de IDC/Lenovo](https://news.lenovo.com/pressroom/press-releases/research-reveals-ai-is-paying-off-cios-arent-ready/) si las notas aún los citan. La imagen Open Graph es por ahora la imagen general del sitio.
