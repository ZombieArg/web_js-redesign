/** Datos de adquisición sin información personal del formulario. */
const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;
type UtmKey = (typeof UTM_KEYS)[number];
type Touch = { landing_page: string; referrer: string; origen: string } & Record<UtmKey, string>;

const FIRST_TOUCH_KEY = "dv_first_touch";
const LAST_TOUCH_KEY = "dv_last_touch";
const VISIT_KEY = "dv_visit_started";
const CTA_KEY = "dv_entry_cta_id";
const SERVICE_KEY = "dv_service_interest";

function readTouch(key: string): Touch | null {
  try {
    const value = window.localStorage.getItem(key);
    if (!value) return null;
    const parsed: unknown = JSON.parse(value);
    return parsed && typeof parsed === "object" && "landing_page" in parsed ? parsed as Touch : null;
  } catch {
    return null;
  }
}

function externalReferrer(referrer: string): string {
  if (!referrer) return "";
  try {
    const url = new URL(referrer);
    return url.origin === window.location.origin ? "" : `${url.origin}${url.pathname}`;
  } catch {
    return "";
  }
}

function makeTouch(): Touch {
  const params = new URLSearchParams(window.location.search);
  const utms = Object.fromEntries(UTM_KEYS.map((key) => [key, params.get(key)?.slice(0, 200) ?? ""])) as Record<UtmKey, string>;
  const referrer = externalReferrer(document.referrer);
  let referrerHost = "";
  if (referrer) referrerHost = new URL(referrer).hostname;

  // Conservamos la fuente observable. La clasificación de 7 reglas del ticket
  // de tracking requiere su tabla exacta; no inferimos categorías de negocio.
  const origen = utms.utm_source.trim().toLowerCase() || referrerHost || "direct";
  return { ...utms, referrer, origen, landing_page: window.location.pathname };
}

export function updateTouches(): void {
  if (typeof window === "undefined") return;
  try {
    const first = readTouch(FIRST_TOUCH_KEY);
    const last = readTouch(LAST_TOUCH_KEY);
    const newVisit = !window.sessionStorage.getItem(VISIT_KEY);
    const params = new URLSearchParams(window.location.search);
    const hasCampaign = UTM_KEYS.some((key) => params.has(key));
    if (newVisit) window.sessionStorage.setItem(VISIT_KEY, "1");
    if (!first || !last || newVisit || hasCampaign) {
      const touch = makeTouch();
      if (!first) window.localStorage.setItem(FIRST_TOUCH_KEY, JSON.stringify(touch));
      if (!last || newVisit || hasCampaign) window.localStorage.setItem(LAST_TOUCH_KEY, JSON.stringify(touch));
    }
  } catch {
    // Navegadores con almacenamiento bloqueado siguen usando el sitio.
  }
}

export function pageContext(pathname: string): { page_path: string; lang: string; page_type: string } {
  const lang = pathname === "/en" || pathname.startsWith("/en/") ? "en" : "es";
  const path = lang === "en" ? pathname.replace(/^\/en/, "") || "/" : pathname;
  const page_type = path === "/" ? "home"
    : path === "/contacto" ? "contact"
    : path === "/nosotros" ? "about"
    : path === "/prensa" ? "press"
    : path === "/cecilia" ? "product"
    : path.startsWith("/servicios/") ? "service"
    : path.startsWith("/casos/") ? "case_detail"
    : path === "/casos" ? "case_list"
    : path.startsWith("/blog") ? "blog"
    : "other";
  return { page_path: pathname, lang, page_type };
}

export function attributionContext(): Record<string, string> {
  if (typeof window === "undefined") return {};
  const first = readTouch(FIRST_TOUCH_KEY);
  const last = readTouch(LAST_TOUCH_KEY);
  const props: Record<string, string> = {
    origen: last?.origen ?? "direct",
    first_referrer: first?.referrer ?? "",
    last_referrer: last?.referrer ?? "",
    landing_page: first?.landing_page ?? window.location.pathname,
  };
  for (const key of UTM_KEYS) {
    props[`first_${key}`] = first?.[key] ?? "";
    props[`last_${key}`] = last?.[key] ?? "";
  }
  try {
    props.entry_cta_id = window.sessionStorage.getItem(CTA_KEY) ?? "";
    props.service_interest = window.sessionStorage.getItem(SERVICE_KEY) ?? "";
  } catch {
    props.entry_cta_id = "";
    props.service_interest = "";
  }
  return props;
}

export function rememberEntryCta(id: string): void {
  try { window.sessionStorage.setItem(CTA_KEY, id); } catch { /* Storage bloqueado. */ }
}

export function rememberServiceInterest(slug: string): void {
  try { window.sessionStorage.setItem(SERVICE_KEY, slug); } catch { /* Storage bloqueado. */ }
}
