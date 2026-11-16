import type es from "./messages/es.json";

type Messages = typeof es;

declare global {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface IntlMessages extends Messages {}

  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: (...args: unknown[]) => void;
    __dvMetaInitialPageView?: string;
  }
}
