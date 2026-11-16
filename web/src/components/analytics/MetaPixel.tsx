"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { hasAnalyticsConsent, subscribeConsent } from "@/lib/consent";
import { metaPixelBootstrap } from "@/lib/meta-pixel";

let lastPageViewKey = "";

export function MetaPixel() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  // ssr: false: el primer render del cliente ya conoce el consentimiento guardado.
  const [granted, setGranted] = useState(hasAnalyticsConsent);

  useEffect(() => subscribeConsent(() => {
    setGranted(hasAnalyticsConsent());
  }), []);

  useEffect(() => {
    if (!granted) {
      lastPageViewKey = "";
      return;
    }
    const query = searchParams.toString();
    const key = `${pathname}${query ? `?${query}` : ""}`;
    let cancelled = false;
    let timer = 0;
    const attempt = () => {
      if (cancelled) return;
      if (typeof window.fbq !== "function") {
        timer = window.setTimeout(attempt, 50);
        return;
      }
      // El bootstrap ya encoló el PageView de esta URL. No repetirlo.
      if (window.__dvMetaInitialPageView === key) {
        lastPageViewKey = key;
        window.__dvMetaInitialPageView = undefined;
        return;
      }
      if (lastPageViewKey === key) return;
      lastPageViewKey = key;
      window.fbq("track", "PageView");
    };
    attempt();
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [granted, pathname, searchParams]);

  if (!granted) return null;

  return (
    <Script id="meta-pixel" strategy="afterInteractive">
      {metaPixelBootstrap()}
    </Script>
  );
}
