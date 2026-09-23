"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Button } from "@/components/ui/Button";

const SERVICE_LINKS = [
  { key: "asistentesIa", href: "/servicios/asistentes-ia" },
  { key: "iaSobreDatos", href: "/servicios/ia-sobre-datos" },
  { key: "desarrolloSoftwareIa", href: "/servicios/desarrollo-software-ia" },
  { key: "consultoria", href: "/servicios/consultoria" },
] as const;

export function Header() {
  const t = useTranslations("nav");
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-divider bg-neutral-base/80 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] w-full max-w-[1280px] items-center justify-between gap-8 px-margin-mobile desktop:px-margin-desktop">
        <Logo />

        <nav className="hidden items-center gap-8 desktop:flex">
          <div
            className="group relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className="text-label-md normal-case tracking-normal text-on-surface-variant hover:text-brand-navy"
              aria-expanded={servicesOpen}
            >
              {t("servicesLabel")}
            </button>
            {servicesOpen && (
              <div className="absolute left-0 top-full w-64 rounded-md border border-divider bg-surface-container-lowest py-2 shadow-card-hover">
                {SERVICE_LINKS.map((item) => (
                  <Link
                    key={item.key}
                    href={item.href}
                    className="block px-4 py-2 text-body-md text-on-surface-variant hover:bg-surface-container-low hover:text-brand-navy"
                  >
                    {t(`services.${item.key}`)}
                  </Link>
                ))}
                <Link
                  href="/cecilia"
                  className="block px-4 py-2 text-body-md text-on-surface-variant hover:bg-surface-container-low hover:text-brand-navy"
                >
                  Cecilia
                </Link>
              </div>
            )}
          </div>

          <Link href="/casos" className="text-label-md normal-case tracking-normal text-on-surface-variant hover:text-brand-navy">
            {t("casos")}
          </Link>
          <Link href="/nosotros" className="text-label-md normal-case tracking-normal text-on-surface-variant hover:text-brand-navy">
            {t("nosotros")}
          </Link>
          <Link href="/contacto" className="text-label-md normal-case tracking-normal text-on-surface-variant hover:text-brand-navy">
            {t("contacto")}
          </Link>
          <LanguageSwitcher />
        </nav>

        <div className="hidden desktop:block">
          <Button href="/contacto" variant="primary">
            {t("cta")}
          </Button>
        </div>

        <button
          type="button"
          className="text-brand-navy desktop:hidden"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? t("closeMenu") : t("openMenu")}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            {mobileOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <nav className="flex flex-col gap-1 border-t border-divider bg-neutral-base px-margin-mobile py-4 desktop:hidden">
          {SERVICE_LINKS.map((item) => (
            <Link key={item.key} href={item.href} className="py-2 text-body-md text-on-surface-variant">
              {t(`services.${item.key}`)}
            </Link>
          ))}
          <Link href="/cecilia" className="py-2 text-body-md text-on-surface-variant">
            Cecilia
          </Link>
          <Link href="/casos" className="py-2 text-body-md text-on-surface-variant">
            {t("casos")}
          </Link>
          <Link href="/nosotros" className="py-2 text-body-md text-on-surface-variant">
            {t("nosotros")}
          </Link>
          <Link href="/contacto" className="py-2 text-body-md text-on-surface-variant">
            {t("contacto")}
          </Link>
          <div className="mt-2 flex items-center justify-between">
            <LanguageSwitcher />
          </div>
          <Button href="/contacto" variant="primary" className="mt-3 w-full">
            {t("cta")}
          </Button>
        </nav>
      )}
    </header>
  );
}
