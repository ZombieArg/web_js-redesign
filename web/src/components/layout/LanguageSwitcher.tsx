"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useParams } from "next/navigation";

export function LanguageSwitcher() {
  const t = useTranslations("languageSwitcher");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  function switchTo(next: "es" | "en") {
    router.replace(
      // @ts-expect-error -- pathname es dinámico según la ruta actual
      { pathname, params },
      { locale: next },
    );
  }

  return (
    <div className="flex items-center gap-1 text-label-md normal-case tracking-normal" aria-label={t("label")}>
      <button
        type="button"
        onClick={() => switchTo("es")}
        aria-current={locale === "es" ? "true" : undefined}
        className={locale === "es" ? "text-brand-navy" : "text-outline hover:text-brand-navy"}
      >
        ES
      </button>
      <span aria-hidden="true" className="text-outline-variant">
        /
      </span>
      <button
        type="button"
        onClick={() => switchTo("en")}
        aria-current={locale === "en" ? "true" : undefined}
        className={locale === "en" ? "text-brand-navy" : "text-outline hover:text-brand-navy"}
      >
        EN
      </button>
    </div>
  );
}
