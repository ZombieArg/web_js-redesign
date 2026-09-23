import { SITE_URL, CONTACT, SOCIAL, ORG } from "@/lib/constants";
import { ROUTES } from "@/lib/routes";

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

  const body = `# ${ORG.name}
> Consultora argentina de inteligencia artificial: implementación de IA, desarrollo de software a medida y agentes de IA para empresas.

Sitio: ${SITE_URL}/
Contacto: ${CONTACT.email} · ${CONTACT.phoneDisplay}
LinkedIn: ${SOCIAL.linkedin}

## Páginas
${pages.join("\n")}

## Personas
- Juan Manuel Ortiz de Zárate — co-fundador, CTO
- Eduardo Pan — co-fundador, Senior Software Developer
`;

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
