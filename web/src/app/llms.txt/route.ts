import { SITE_URL, CONTACT, SOCIAL, ORG } from "@/lib/constants";
import { ROUTES } from "@/lib/routes";
import { casos } from "@/content/casos/data";

export const dynamic = "force-static";

const LABELS: Record<string, string> = {
  "/": "Home",
  "/servicios/asistentes-ia": "Agentes de IA",
  "/cecilia": "Cecilia (chatbot WhatsApp)",
  "/servicios/ia-sobre-datos": "IA sobre datos",
  "/servicios/desarrollo-software-ia": "Desarrollo de software con IA",
  "/servicios/consultoria": "Consultoría e implementación",
  "/casos": "Casos",
  "/prensa": "Prensa",
  "/nosotros": "Nosotros",
  "/contacto": "Contacto / diagnóstico",
};

export function GET() {
  const pages = ROUTES.filter((r) => LABELS[r.path]).map(
    (r) => `- ${LABELS[r.path]}: ${SITE_URL}${r.path === "/" ? "/" : r.path}`,
  );

  const caseNames = casos.map((c) => `- ${c.title}`).join("\n");

  const body = `# ${ORG.name}
> Consultora argentina de inteligencia artificial: implementación de IA, desarrollo de software a medida y agentes de IA para empresas.
> Identidad pública: consultora, no agencia.

Sitio: ${SITE_URL}/
Contacto: ${CONTACT.email} · ${CONTACT.phoneDisplay}
LinkedIn: ${SOCIAL.linkedin}
Diagnóstico gratuito de IA: ${SITE_URL}/contacto

## Líneas de servicio
- Asistentes de IA (agentes conversacionales, WhatsApp, voz)
- IA sobre tus datos (RAG, respuestas con fuente citada)
- Desarrollo de software con IA (MVP y soporte a medida)
- Consultoría e implementación de IA (diagnóstico, capacitación)

## Páginas
${pages.join("\n")}

## Casos citables
${caseNames}

## Personas
- Juan Manuel Ortiz de Zárate — co-fundador, CTO
- Eduardo Pan — co-fundador, Senior Software Developer
`;

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
