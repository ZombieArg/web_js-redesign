"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { readConsent, writeConsent, type ConsentChoice } from "@/lib/consent";

interface ConsentContextValue {
  bannerOpen: boolean;
  openBanner: () => void;
  choose: (value: ConsentChoice) => void;
}

const ConsentContext = createContext<ConsentContextValue | null>(null);

export function ConsentProvider({ children }: { children: ReactNode }) {
  const [bannerOpen, setBannerOpen] = useState(false);

  const openBanner = useCallback(() => setBannerOpen(true), []);

  const choose = useCallback((value: ConsentChoice) => {
    const previous = readConsent()?.value ?? null;
    writeConsent(value);
    setBannerOpen(false);
    // Recargar corta el píxel ya inyectado y vuelve a iniciar PostHog en memoria.
    if (previous === "granted" && value === "denied") window.location.reload();
  }, []);

  const value = useMemo(
    () => ({ bannerOpen, openBanner, choose }),
    [bannerOpen, openBanner, choose],
  );

  return <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>;
}

export function useConsent() {
  const context = useContext(ConsentContext);
  if (!context) throw new Error("useConsent debe usarse dentro de ConsentProvider");
  return context;
}
