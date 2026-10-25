# Revisión editorial del blog

Los cinco artículos están disponibles para revisión en desarrollo y en `https://datavoices-redesign-preview.netlify.app/blog`. Los dos primeros provienen de borradores completos del ZIP; los otros tres fueron redactados a partir de briefs. Las cuatro imágenes del ZIP son capturas de referencia de escritorio y móvil, no ilustraciones finales de los artículos. El blog muestra solo tablas y otros elementos que estén en el Markdown; no genera mapas de decisión adicionales. Los comentarios `<!-- ... -->` del Markdown se conservan como comentarios en el HTML renderizado.

El contenido sigue sin publicarse en el sitio principal: allí `NEXT_PUBLIC_BLOG_PUBLIC` queda vacío, el blog no aparece en la navegación ni en el sitemap, el índice muestra «Próximamente» y las URLs de artículos responden 404. El sitio separado de preview tiene `NEXT_PUBLIC_BLOG_PUBLIC=true`, `NEXT_PUBLIC_NOINDEX_ALL=true` y URL canónica propia. Las notas ya no muestran el rótulo «Borrador para revisión editorial»; la versión en inglés continúa pendiente de traducción.

## Publicación de la nota 1

1. Revisar la nota 1 en preview y obtener el visto bueno editorial sobre autoría, afirmaciones y enlaces. Las otras cuatro notas siguen visibles en preview y no están marcadas como publicadas.
2. En el sitio de producción, configurar `NEXT_PUBLIC_BLOG_PUBLIC=true`, mantener `NEXT_PUBLIC_NOINDEX_ALL` vacío y fijar `NEXT_PUBLIC_BLOG_NOTA_01_PUBLISHED_AT` a la fecha y hora reales del deploy en Buenos Aires, con formato ISO 8601 y `-03:00`. Si falta esa fecha, ninguna nota se publica. `NEXT_PUBLIC_BLOG_NOTA_01_MODIFIED_AT` puede quedar vacío en el primer deploy.
3. Confirmar `NEXT_PUBLIC_SITE_URL=https://datavoices.com.ar`, desplegar y verificar la nota, `/blog`, el sitemap, `robots`, canonical, hreflang, Open Graph, JSON-LD y que las otras cuatro URLs de notas sigan sin publicarse.
4. Si se edita la nota después de publicarla, fijar `NEXT_PUBLIC_BLOG_NOTA_01_MODIFIED_AT` a la fecha y hora reales de esa edición. El texto «Actualizado el» y `dateModified` usan ese mismo valor.

La misma plantilla se usa en las notas 2 a 5: introducción completa, índice, FAQ desplegable, byline, breadcrumb, servicios y tracking. Las variables `NEXT_PUBLIC_BLOG_NOTA_0N_PUBLISHED_AT` y `NEXT_PUBLIC_BLOG_NOTA_0N_MODIFIED_AT` corresponden a: 02 `agente-de-ia-vs-chatbot`, 03 `como-elegir-chatbot-whatsapp-ia`, 04 `por-que-fallan-los-proyectos-de-ia`, 05 `no-code-vs-desarrollo-a-medida-ia`. Solo se publica cada nota al configurar su fecha real. Los comentarios HTML existentes en el Markdown se preservan. `markers.ts` repone los comentarios de autoría, respuesta directa, FAQ y schema de los briefs originales de las notas 1 y 2; para las notas 3 a 5 aplica el mismo esquema de marcadores por pedido editorial. Los marcadores `SCHEMA START` y `SCHEMA END` están en las cinco notas; el JSON-LD entre ellos se emite solo cuando la nota tiene fecha real de publicación. Los slots de imagen y cita pendiente no se muestran.

El JSON-LD se incluye en el HTML de la página como `<script type="application/ld+json">`, según la guía de Next.js 16 para App Router. Este framework lo serializa en el cuerpo del documento; los metadatos Open Graph y canonical sí van en `<head>`.

## Antes de habilitarlo en producción

1. Obtener la aprobación de Data Voices para autoría, afirmaciones sobre los casos y versiones finales de los cinco textos. En particular, revisar estados de producción de los casos, cifras y nombres de integraciones.
2. Revisar la política y los precios de WhatsApp el día de publicación. El texto evita prometer reglas estables y enlaza las páginas oficiales: [política](https://whatsappbusiness.com/policy/) y [preguntas de precios](https://whatsappbusiness.com/resources/faq/). No se afirma que Cecilia use la API oficial porque el material no lo confirma.
3. Revisar la cifra de IDC/Lenovo 2026 en el [comunicado original](https://news.lenovo.com/pressroom/press-releases/research-reveals-ai-is-paying-off-cios-arent-ready/). La cifra 2025 del brief se omitió porque el PDF primario no pudo verificarse en esta sesión.
4. Definir fechas reales de publicación y actualización para cada nota. Las fechas de octubre en los borradores eran marcadores; por eso no se muestran ni se emite `BlogPosting`/`FAQPage` hasta que se fijen fechas y se confirme el contenido. La nota 1 conserva una fecha de build solo en preview para revisar su schema; no marca la publicación en producción.
5. Si se desean imágenes sociales específicas, diseñar y cargar los cinco artes finales. La metadata usa por ahora la imagen OG general del sitio.
6. Confirmar la versión en inglés o mantener `/en/blog` con aviso de traducción pendiente y `noindex`.
7. Tras la revisión y las fechas, habilitar `NEXT_PUBLIC_BLOG_PUBLIC=true` solo en el entorno que se vaya a publicar. El schema de cada nota se genera desde su contenido y su fecha real.
