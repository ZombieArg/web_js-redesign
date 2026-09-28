/**
 * URLs viejas del sitio anterior (y el slug del caso renombrado el 24/09/2026).
 * Fuente única: la consume proxy.ts (que es donde efectivamente se resuelven) y
 * next.config.ts, para que no se dupliquen y se desincronicen.
 *
 * Clave = path sin prefijo de locale. El prefijo /en se conserva al redirigir.
 *
 * /cecilia se mantiene igual (URL histórica) — sin redirect, excluida a propósito.
 */
export const LEGACY_REDIRECTS: Record<string, string> = {
  "/data-ai": "/servicios/ia-sobre-datos",
  "/software-dev": "/servicios/desarrollo-software-ia",
  "/consulting": "/servicios/consultoria",
  "/casos/bid": "/casos/organismo-internacional",
  // Normsy y Social Media Detoxifier eran el mismo producto en dos etapas y
  // estaban publicados como dos casos: se fusionaron el 28/09/2026.
  "/casos/social-media-detoxifier": "/casos/normsy",
};

/**
 * Separa el prefijo de locale del resto del path y devuelve el destino si es
 * una URL legacy. Normaliza la barra final: /data-ai/ tiene que redirigir igual
 * que /data-ai, si no queda un 404 por un carácter.
 */
export function resolveLegacyRedirect(pathname: string): string | null {
  const match = pathname.match(/^\/(en)(\/.*)?$/);
  const prefix = match ? `/${match[1]}` : "";
  const rest = match ? (match[2] ?? "/") : pathname;
  const bare = rest.length > 1 ? rest.replace(/\/$/, "") : rest;

  const target = LEGACY_REDIRECTS[bare];
  return target ? `${prefix}${target}` : null;
}
