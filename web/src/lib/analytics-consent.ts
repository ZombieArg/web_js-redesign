import posthog from "posthog-js";
import { POSTHOG_KEY } from "@/lib/constants";
import { hasAnalyticsConsent } from "@/lib/consent";
import { clearPersistedAttribution, flushAttribution } from "@/lib/tracking";

const VENDOR_COOKIE = /^(?:_fbp|_fbc|fr|ph_.+)$/;
const META_STORAGE_KEYS = ["lastExternalReferrer", "lastExternalReferrerTime"];

/**
 * Persistencia según consentimiento.
 * Sin aceptación: memory + disable_persistence, que en posthog-js no escribe
 * cookies ni localStorage/sessionStorage y borra lo que hubiera quedado.
 * La grabación de sesiones queda apagada en los dos estados.
 */
export function analyticsPersistence() {
  const granted = hasAnalyticsConsent();
  return {
    granted,
    persistence: granted ? ("localStorage+cookie" as const) : ("memory" as const),
    disable_persistence: !granted,
    disable_session_recording: true as const,
  };
}

function expireCookie(name: string) {
  const host = window.location.hostname;
  const domains = new Set<string | undefined>([undefined, host]);
  if (host.includes(".")) domains.add(`.${host}`);
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  for (const domain of domains) {
    const domainAttr = domain ? `; domain=${domain}` : "";
    document.cookie = `${name}=; Max-Age=0; path=/${domainAttr}${secure}`;
  }
}

/** Borra cookies y almacenamiento de Meta y PostHog. No toca dv_consent. */
export function clearVendorTrackingStorage() {
  if (typeof window === "undefined") return;
  try {
    const names = document.cookie
      .split(";")
      .map((part) => part.split("=")[0]?.trim())
      .filter((name): name is string => !!name && VENDOR_COOKIE.test(name));
    for (const name of names) expireCookie(name);
  } catch {
    // Sin acceso a document.cookie el sitio sigue usable.
  }

  for (const store of [window.localStorage, window.sessionStorage]) {
    try {
      const keys: string[] = [];
      for (let index = 0; index < store.length; index += 1) {
        const key = store.key(index);
        if (key && (key.startsWith("ph_") || key.includes("posthog"))) keys.push(key);
      }
      for (const key of keys) store.removeItem(key);
      if (store === window.localStorage) {
        for (const key of META_STORAGE_KEYS) store.removeItem(key);
      }
    } catch {
      // Storage puede estar bloqueado.
    }
  }
  clearPersistedAttribution();
}

/** Aplica el modo de persistencia actual. No inicia la grabación de sesiones. */
export function applyAnalyticsConsent() {
  if (typeof window === "undefined") return;
  const options = analyticsPersistence();
  if (typeof window.fbq === "function") {
    window.fbq("consent", options.granted ? "grant" : "revoke");
  }
  if (options.granted) flushAttribution();
  if (POSTHOG_KEY && posthog.__loaded) {
    posthog.set_config({
      persistence: options.persistence,
      disable_persistence: options.disable_persistence,
      disable_session_recording: true,
    });
  }
  if (!options.granted) clearVendorTrackingStorage();
}
