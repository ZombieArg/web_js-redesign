# Revisión editorial del blog

Los cinco artículos están disponibles para revisión en desarrollo. Los dos primeros provienen de borradores completos del ZIP; los otros tres fueron redactados a partir de briefs. Las cuatro imágenes del ZIP son capturas de referencia de escritorio y móvil, no ilustraciones finales de los artículos. El blog usa diagramas hechos con componentes del sitio en vez de publicar esas capturas o los marcadores de imagen.

El contenido sigue sin publicarse: en builds de producción `NEXT_PUBLIC_BLOG_PUBLIC` queda vacío, el blog no aparece en la navegación ni en el sitemap, el índice muestra «Próximamente» y las URLs de artículos responden 404. Las vistas de desarrollo llevan `noindex` y muestran «Borrador para revisión editorial».

## Antes de habilitarlo en producción

1. Obtener la aprobación de Data Voices para autoría, afirmaciones sobre los casos y versiones finales de los cinco textos. En particular, revisar estados de producción de los casos, cifras y nombres de integraciones.
2. Revisar la política y los precios de WhatsApp el día de publicación. El texto evita prometer reglas estables y enlaza las páginas oficiales: [política](https://whatsappbusiness.com/policy/) y [preguntas de precios](https://whatsappbusiness.com/resources/faq/). No se afirma que Cecilia use la API oficial porque el material no lo confirma.
3. Revisar la cifra de IDC/Lenovo 2026 en el [comunicado original](https://news.lenovo.com/pressroom/press-releases/research-reveals-ai-is-paying-off-cios-arent-ready/). La cifra 2025 del brief se omitió porque el PDF primario no pudo verificarse en esta sesión.
4. Definir fechas reales de publicación y actualización para cada nota. Las fechas de octubre en los borradores eran marcadores; por eso no se muestran ni se emite `BlogPosting`/`FAQPage` hasta que se fijen fechas y se confirme el contenido.
5. Si se desean imágenes sociales específicas, diseñar y cargar los cinco artes finales. La metadata usa por ahora la imagen OG general del sitio.
6. Confirmar la versión en inglés o mantener `/en/blog` con aviso de traducción pendiente y `noindex`.
7. Tras la revisión y las fechas, completar el schema y habilitar `NEXT_PUBLIC_BLOG_PUBLIC=true` solo en el entorno que se vaya a publicar.
