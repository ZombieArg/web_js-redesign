"use client";

import { useLocale } from "next-intl";
import { consentCopyFor } from "@/content/consent";
import { useConsent } from "@/components/consent/ConsentProvider";

export function CookiePreferencesButton() {
  const locale = useLocale();
  const copy = consentCopyFor(locale);
  const { openBanner } = useConsent();

  return (
    <button
      type="button"
      onClick={openBanner}
      className="text-left font-sans text-caption text-white/80 underline-offset-4 hover:text-white hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
    >
      {copy.preferences}
    </button>
  );
}
