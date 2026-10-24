// Marcadores editoriales presentes en los briefs originales de las notas 1 y 2.
// Los slots de imagen y cita pendiente no se emiten: todavía no tienen contenido aprobado.
export const blogHtmlMarkers: Record<string, {
  author: string;
  answer: string;
  faqStart: string;
  faqEnd: string;
  schemaStart: string;
  schemaEnd: string;
}> = {
  "como-elegir-consultora-inteligencia-artificial": {
    author: " BLOQUE DE AUTOR (debajo del H1) ",
    answer: " Respuesta directa citable (52 palabras): primer párrafo de la intro ",
    faqStart: " FAQ START · marcar con schema FAQPage · en seodraft va en el campo faqs ",
    faqEnd: " FAQ END ",
    schemaStart: " SCHEMA START ",
    schemaEnd: " SCHEMA END ",
  },
  "agente-de-ia-vs-chatbot": {
    author: " BLOQUE DE AUTORES (debajo del H1) ",
    answer: " Respuesta directa citable (53 palabras, literal del brief): primer párrafo de la intro ",
    faqStart: " FAQ START · visible en la página · schema FAQPage · en seodraft va también en el campo faqs ",
    faqEnd: " FAQ END ",
    schemaStart: " SCHEMA START ",
    schemaEnd: " SCHEMA END ",
  },
};
