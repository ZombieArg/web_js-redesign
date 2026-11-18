export const CONSENT_STORAGE_KEY = "dv_consent";

export type ConsentChoice = "granted" | "denied";

export type StoredConsent = {
  value: ConsentChoice;
  date: string;
};

const listeners = new Set<(consent: StoredConsent | null) => void>();

function isChoice(value: unknown): value is ConsentChoice {
  return value === "granted" || value === "denied";
}

export function readConsent(): StoredConsent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return null;
    const record = parsed as { value?: unknown; date?: unknown };
    if (!isChoice(record.value) || typeof record.date !== "string" || record.date.length === 0) return null;
    return { value: record.value, date: record.date };
  } catch {
    return null;
  }
}

export function hasAnalyticsConsent(): boolean {
  return readConsent()?.value === "granted";
}

export function writeConsent(value: ConsentChoice): StoredConsent {
  const record: StoredConsent = { value, date: new Date().toISOString() };
  window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(record));
  listeners.forEach((listener) => listener(record));
  return record;
}

export function subscribeConsent(listener: (consent: StoredConsent | null) => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}
