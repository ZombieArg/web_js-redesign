import Script from "next/script";

/**
 * Widget de chat de Cecilia, sitewide.
 *
 * PENDIENTE REAL (no inventado): en el sitio legacy, client/index.html carga
 * <script src="public/cecilia/index.js"> pero ese archivo NO existe en el
 * repo y la ruta ni siquiera es válida para un build (relativa, sin "/"
 * inicial) — es una integración rota heredada, no un bundle funcional que
 * se pueda copiar. Este componente deja el punto de enganche listo
 * (`/cecilia/index.js` servido desde `public/`) para cuando el equipo
 * entregue el bundle real del widget; hasta entonces, next/script falla en
 * silencio (404) sin romper la página. No confundir con el demo
 * interactivo de bot (webBot.ts legacy), que queda fuera de este sprint.
 */
export function CeciliaWidgetLoader() {
  return <Script src="/cecilia/index.js" strategy="afterInteractive" />;
}
