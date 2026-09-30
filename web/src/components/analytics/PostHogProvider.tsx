"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import posthog from "posthog-js";
import { POSTHOG_HOST, POSTHOG_KEY } from "@/lib/constants";
import { captureEvent } from "@/lib/analytics";
import { attributionContext, pageContext, rememberEntryCta, rememberServiceInterest, updateTouches } from "@/lib/tracking";

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
      autocapture: false,
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
    updateTouches();
    if (pageContext(pathname).page_type === "service") {
      rememberServiceInterest(pathname.split("/").pop() ?? "");
    }
    posthog.register({ ...attributionContext(), ...pageContext(pathname) });
    const query = searchParams.toString();
    posthog.capture("$pageview", {
      $current_url: window.location.origin + pathname + (query ? `?${query}` : ""),
    });
  }, [pathname, searchParams]);

  useEffect(() => {
    function trackClick(event: MouseEvent) {
      if (!(event.target instanceof Element)) return;
      const target = event.target;
      const faq = target.closest<HTMLElement>("[data-faq-id]");
      if (faq) {
        const details = faq.closest("details");
        if (details && !details.open) captureEvent("faq_open", { faq_id: faq.dataset.faqId });
        return;
      }

      const link = target.closest<HTMLAnchorElement>("a[href]");
      if (!link) return;
      const href = link.getAttribute("href") ?? "";
      if (href.startsWith("tel:")) {
        captureEvent("phone_click");
      } else if (href.includes("wa.me/")) {
        captureEvent("whatsapp_click");
      } else if (link.dataset.serviceSlug) {
        rememberServiceInterest(link.dataset.serviceSlug);
        captureEvent("service_click", { service_slug: link.dataset.serviceSlug });
      } else if (link.dataset.caseSlug) {
        captureEvent("case_click", { case_slug: link.dataset.caseSlug });
      } else if (link.dataset.ctaId) {
        if (href.endsWith("/contacto") || href.endsWith("/en/contacto")) {
          rememberEntryCta(`${window.location.pathname}:${link.dataset.ctaId}`);
        }
        captureEvent("cta_click", { cta_id: link.dataset.ctaId });
      }
    }
    document.addEventListener("click", trackClick);
    return () => document.removeEventListener("click", trackClick);
  }, []);

  return null;
}

export function PostHogProvider() {
  if (!POSTHOG_KEY) return null;
  return <PageviewTracker />;
}
