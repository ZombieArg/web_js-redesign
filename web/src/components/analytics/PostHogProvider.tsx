"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import posthog from "posthog-js";
import { POSTHOG_HOST, POSTHOG_KEY } from "@/lib/constants";

/**
 * Medición del sitio (feedback SEO/GEO ítem 11). Se usa PostHog, no GTM/GA4.
 *
 * - Sin NEXT_PUBLIC_POSTHOG_KEY no se inicializa ni se carga nada: en local
 *   y en cualquier entorno sin la key, el sitio no manda un solo evento.
 * - capture_pageview va en "manual" porque con App Router + next-intl el
 *   pageview automático de posthog-js no ve los cambios de ruta del lado
 *   cliente. Se dispara acá con el pathname real (ya resuelto por locale).
 */
function initPostHog() {
  if (!POSTHOG_KEY || typeof window === "undefined") return false;
  if (!posthog.__loaded) {
    posthog.init(POSTHOG_KEY, {
      api_host: POSTHOG_HOST,
      capture_pageview: false,
      capture_pageleave: true,
      person_profiles: "identified_only",
    });
  }
  return true;
}

function PageviewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!initPostHog()) return;
    const query = searchParams.toString();
    posthog.capture("$pageview", {
      $current_url: window.location.origin + pathname + (query ? `?${query}` : ""),
    });
  }, [pathname, searchParams]);

  return null;
}

export function PostHogProvider() {
  if (!POSTHOG_KEY) return null;
  return <PageviewTracker />;
}
