/** Attribution data contains only campaign and domain information, never form fields. */
const FIRST_TOUCH_KEY = "dv_first_touch";
const LAST_TOUCH_KEY = "dv_last_touch";
const CTA_KEY = "dv_entry_cta_id";
const SERVICE_KEY = "dv_service_interest";
const TTL_MS = 90 * 24 * 60 * 60 * 1000;

export type Origin = "paid" | "email" | "ai_assistant" | "organico_buscador" | "social_organico" | "sitio_externo" | "directo";
export type Touch = {
  origen: Origin;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  referrer_domain: string;
  landing_page: string;
  ts: number;
};

const PAID = new Set(["cpc", "ppc", "paid", "paid_social", "display", "cpm"]);
const AI = ["chatgpt.com", "chat.openai.com", "gemini.google.com", "perplexity.ai", "claude.ai", "copilot.microsoft.com"];
const SEARCH = ["google.", "bing.com", "duckduckgo.com", "yahoo.", "brave.com"];
const SOCIAL = ["linkedin.com", "twitter.com", "x.com", "facebook.com", "instagram.com", "youtube.com"];
const SERVICE_SLUGS = new Set(["asistentes-ia", "ia-sobre-datos", "desarrollo-software-ia", "consultoria"]);
let initialReferrerConsumed = false;

function host(value: string): string {
  if (!value) return "";
  try {
    return new URL(value.includes("://") ? value : `https://${value}`).hostname.toLowerCase().replace(/^www\./, "");
  } catch {
    return "";
  }
}

function isOwnHost(value: string): boolean {
  const hostname = host(value);
  const current = host(window.location.hostname);
  return !hostname || hostname === current || hostname === "datavoices.com.ar"
    || hostname.endsWith(".datavoices.com.ar") || hostname.endsWith(".netlify.app");
}

function matches(hostname: string, domains: string[]): boolean {
  return domains.some((domain) => domain.endsWith(".")
    ? hostname.startsWith(domain) || hostname.includes(`.${domain}`)
    : hostname === domain || hostname.endsWith(`.${domain}`));
}

export function classifyOrigin(utmSource: string, utmMedium: string, referrerDomain: string, utmCampaign = ""): Origin {
  const source = utmSource.toLowerCase().trim();
  const medium = utmMedium.toLowerCase().trim();
  const referrer = host(referrerDomain);
  const sourceHost = host(source);
  if (PAID.has(medium)) return "paid";
  if (medium === "email" || source === "newsletter") return "email";
  if (medium === "ai" || matches(referrer, AI) || matches(sourceHost, AI)) return "ai_assistant";
  if (matches(referrer, SEARCH) || matches(sourceHost, SEARCH)
    || ["google", "bing", "duckduckgo", "yahoo", "brave"].includes(source)) return "organico_buscador";
  if (matches(referrer, SOCIAL) || matches(sourceHost, SOCIAL)
    || ["linkedin", "twitter", "x", "facebook", "instagram", "youtube"].includes(source)) return "social_organico";
  // An unmatched tagged visit is still attributed traffic, not a direct visit.
  if (referrer || source || medium || utmCampaign) return "sitio_externo";
  return "directo";
}

function readTouch(key: string): Touch | null {
  try {
    const value = window.localStorage.getItem(key);
    if (!value) return null;
    const parsed: unknown = JSON.parse(value);
    if (!parsed || typeof parsed !== "object") return null;
    const touch = parsed as Touch;
    if (typeof touch.ts !== "number" || !Number.isFinite(touch.ts)
      || Date.now() - touch.ts >= TTL_MS || touch.ts > Date.now()
      || typeof touch.origen !== "string" || typeof touch.utm_source !== "string"
      || typeof touch.utm_medium !== "string" || typeof touch.utm_campaign !== "string"
      || typeof touch.referrer_domain !== "string" || typeof touch.landing_page !== "string") return null;
    return touch;
  } catch {
    return null;
  }
}

function incomingTouch(): Touch {
  const params = new URLSearchParams(window.location.search);
  const utm_source = (params.get("utm_source") ?? "").trim().slice(0, 200);
  const utm_medium = (params.get("utm_medium") ?? "").trim().slice(0, 200);
  const utm_campaign = (params.get("utm_campaign") ?? "").trim().slice(0, 200);
  const referrer_domain = !initialReferrerConsumed && !isOwnHost(document.referrer)
    ? host(document.referrer) : "";
  initialReferrerConsumed = true;
  return {
    origen: classifyOrigin(utm_source, utm_medium, referrer_domain, utm_campaign),
    utm_source, utm_medium, utm_campaign, referrer_domain,
    landing_page: window.location.pathname,
    ts: Date.now(),
  };
}

export function updateTouches(): void {
  if (typeof window === "undefined") return;
  try {
    const first = readTouch(FIRST_TOUCH_KEY);
    const last = readTouch(LAST_TOUCH_KEY);
    const incoming = incomingTouch();
    if (!first) window.localStorage.setItem(FIRST_TOUCH_KEY, JSON.stringify(incoming));
    const hasUtm = !!(incoming.utm_source || incoming.utm_medium || incoming.utm_campaign);
    const utmChanged = hasUtm && !!last && (
      incoming.utm_source !== last.utm_source || incoming.utm_medium !== last.utm_medium
      || incoming.utm_campaign !== last.utm_campaign
    );
    const referrerChanged = !!incoming.referrer_domain && incoming.referrer_domain !== last?.referrer_domain;
    if (!last || utmChanged || referrerChanged) {
      window.localStorage.setItem(LAST_TOUCH_KEY, JSON.stringify(incoming));
    }
  } catch {
    // The site remains usable when browser storage is disabled.
  }
}

export function pageContext(pathname: string): { page_path: string; lang: "es" | "en"; page_type: string } {
  const lang = pathname === "/en" || pathname.startsWith("/en/") ? "en" : "es";
  const path = (lang === "en" ? pathname.replace(/^\/en/, "") : pathname).replace(/\/$/, "") || "/";
  const page_type = path === "/" ? "home"
    : path === "/contacto" ? "contacto"
    : path === "/cecilia" ? "cecilia"
    : path === "/nosotros" ? "nosotros"
    : path === "/casos" || path.startsWith("/casos/") ? "caso"
    : path === "/prensa" || path.startsWith("/prensa/") ? "prensa"
    : path.startsWith("/servicios/") ? "servicio"
    : "otro";
  return { page_path: pathname, lang, page_type };
}

export function attributionContext(): Record<string, string | null> {
  if (typeof window === "undefined") return {};
  const first = readTouch(FIRST_TOUCH_KEY);
  const last = readTouch(LAST_TOUCH_KEY);
  let entry_cta_id: string | null = null;
  try {
    entry_cta_id = window.sessionStorage.getItem(CTA_KEY);
  } catch { /* Storage may be disabled. */ }
  return {
    origen: first?.origen ?? "directo",
    first_utm_source: first?.utm_source ?? "",
    first_utm_medium: first?.utm_medium ?? "",
    first_utm_campaign: first?.utm_campaign ?? "",
    last_utm_source: last?.utm_source ?? "",
    last_utm_medium: last?.utm_medium ?? "",
    last_utm_campaign: last?.utm_campaign ?? "",
    first_referrer_domain: first?.referrer_domain ?? "",
    last_referrer_domain: last?.referrer_domain ?? "",
    landing_page: first?.landing_page ?? window.location.pathname,
    entry_cta_id,
  };
}

export function storedServiceInterest(): string | null {
  if (typeof window === "undefined") return null;
  try {
    const slug = window.sessionStorage.getItem(SERVICE_KEY);
    return slug && SERVICE_SLUGS.has(slug) ? slug : null;
  } catch {
    return null;
  }
}

export function rememberEntryCta(id: string): void {
  try { window.sessionStorage.setItem(CTA_KEY, id); } catch { /* Storage may be disabled. */ }
}

export function rememberServiceInterest(slug: string): void {
  if (!SERVICE_SLUGS.has(slug)) return;
  try { window.sessionStorage.setItem(SERVICE_KEY, slug); } catch { /* Storage may be disabled. */ }
}
