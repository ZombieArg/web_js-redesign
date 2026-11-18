"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { consentCopyFor } from "@/content/consent";
import { readConsent, type ConsentChoice } from "@/lib/consent";
import { useConsent } from "@/components/consent/ConsentProvider";

const actionClass =
  "inline-flex h-11 w-full items-center justify-center rounded-sm bg-brand-navy px-6 font-sans text-label-md text-white transition-colors hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary desktop:w-40";

export function CookieBanner() {
  const locale = useLocale();
  const copy = consentCopyFor(locale);
  const { bannerOpen, choose } = useConsent();
  // Este componente se monta solo en el cliente (ssr: false). El estado inicial
  // puede leer localStorage sin desfasar la hidratación.
  const [needsChoice, setNeedsChoice] = useState(() => readConsent() === null);
  const regionRef = useRef<HTMLElement>(null);
  const open = needsChoice || bannerOpen;

  useEffect(() => {
    if (bannerOpen) regionRef.current?.focus();
  }, [bannerOpen]);

  function onChoose(value: ConsentChoice) {
    setNeedsChoice(false);
    choose(value);
  }

  if (!open) return null;

  return (
    <section
      ref={regionRef}
      role="region"
      aria-labelledby="cookie-consent-message"
      tabIndex={-1}
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-divider bg-surface-container-lowest pb-[max(1rem,env(safe-area-inset-bottom))] shadow-[0_-6px_24px_rgba(43,54,116,0.12)] outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-primary"
    >
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-4 px-margin-mobile py-4 desktop:flex-row desktop:items-end desktop:justify-between desktop:gap-10 desktop:px-margin-desktop desktop:py-5">
        <div className="max-w-[68ch]">
          <p id="cookie-consent-message" className="text-body-md text-on-surface">
            {copy.banner}
          </p>
          <Link
            href="/privacidad"
            className="mt-3 inline-flex font-sans text-body-md font-semibold text-brand-navy underline decoration-1 underline-offset-4 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            {copy.privacy}
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3 desktop:flex desktop:shrink-0">
          <button type="button" className={actionClass} onClick={() => onChoose("granted")}>
            {copy.accept}
          </button>
          <button type="button" className={actionClass} onClick={() => onChoose("denied")}>
            {copy.reject}
          </button>
        </div>
      </div>
    </section>
  );
}
