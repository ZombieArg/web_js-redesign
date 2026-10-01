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
      person_profiles: "identified_only",
    });
  }
  return true;
}

function PageviewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    updateTouches();
    if (!initPostHog()) return;
    if (pageContext(pathname).page_type === "servicio") {
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

      const submit = target.closest<HTMLButtonElement>("button[data-cta-id]");
      if (submit && submit.type === "submit" && submit.dataset.ctaLocation === "form") {
        captureEvent("cta_diagnostico_click", {
          cta_id: submit.dataset.ctaId,
          cta_location: submit.dataset.ctaLocation,
          cta_section: submit.dataset.ctaSection ?? null,
        });
        return;
      }
      const link = target.closest<HTMLAnchorElement>("a[href]");
      if (!link) return;
      const href = link.getAttribute("href") ?? "";
      const channel = link.dataset.contactChannel;
      if (channel && link.dataset.contactLocation
        && ((channel === "email" && href.startsWith("mailto:"))
          || (channel === "phone" && href.startsWith("tel:"))
          || (channel === "whatsapp" && href.includes("wa.me/")))) {
        captureEvent("contact_click", { channel, location: link.dataset.contactLocation });
      } else if (link.dataset.serviceSlug && /^\/(?:en\/)?servicios\//.test(href)) {
        const slug = link.dataset.serviceSlug;
        rememberServiceInterest(slug);
        captureEvent("service_interest_click", {
          service_slug: slug,
          location: link.dataset.ctaLocation ?? (link.closest("header") ? "header" : link.closest("footer") ? "footer" : "body"),
        });
      } else if (link.dataset.caseSlug && /^\/(?:en\/)?casos(?:\/|$)/.test(href)) {
        captureEvent("case_interest_click", { case_slug: link.dataset.caseSlug });
      } else if (link.dataset.ctaId && link.dataset.ctaLocation && /^\/(?:en\/)?contacto\/?$/.test(href)) {
        rememberEntryCta(link.dataset.ctaId);
        captureEvent("cta_diagnostico_click", {
          cta_id: link.dataset.ctaId,
          cta_location: link.dataset.ctaLocation,
          cta_section: link.dataset.ctaSection ?? null,
        });
      } else if (link.dataset.ctaLocation && /^\/(?:en\/)?cecilia\/?$/.test(href)) {
        captureEvent("cecilia_interest_click", { cta_location: link.dataset.ctaLocation });
      }
    }
    document.addEventListener("click", trackClick);
    return () => document.removeEventListener("click", trackClick);
  }, []);

  return null;
}

export function PostHogProvider() {
  return <PageviewTracker />;
}
