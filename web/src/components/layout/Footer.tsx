import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Logo } from "@/components/layout/Logo";
import { CONTACT, SOCIAL, whatsappHref } from "@/lib/constants";

const SERVICE_LINKS = [
  { key: "asistentesIa", href: "/servicios/asistentes-ia" },
  { key: "iaSobreDatos", href: "/servicios/ia-sobre-datos" },
  { key: "desarrolloSoftwareIa", href: "/servicios/desarrollo-software-ia" },
  { key: "consultoria", href: "/servicios/consultoria" },
] as const;

export function Footer() {
  const t = useTranslations();

  return (
    <footer className="bg-brand-navy py-16 text-white">
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-10 px-margin-mobile desktop:grid-cols-4 desktop:px-margin-desktop">
        <div>
          <Logo tone="inverse" />
          <p className="mt-4 max-w-xs text-body-md text-white/70">{t("footer.tagline")}</p>
          <p className="mt-4 text-caption text-white/50">{t("footer.cityLine")}</p>
          <p className="mt-6 text-label-md text-white/60">{t("footer.socialHeading")}</p>
          <div className="mt-3 flex flex-wrap gap-4 text-body-md text-white/80">
            <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white">
              LinkedIn
            </a>
            <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white">
              Instagram
            </a>
          </div>
        </div>

        <div>
          <p className="text-label-md text-white/60">{t("footer.servicesHeading")}</p>
          <ul className="mt-4 flex flex-col gap-2">
            {SERVICE_LINKS.map((item) => (
              <li key={item.key}>
                <Link href={item.href} data-service-slug={item.href.split("/").pop()} className="text-body-md text-white/80 hover:text-white">
                  {t(`nav.services.${item.key}`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-label-md text-white/60">{t("footer.institutionalHeading")}</p>
          <ul className="mt-4 flex flex-col gap-2">
            <li>
              <Link href="/nosotros" className="text-body-md text-white/80 hover:text-white">
                {t("footer.institutional.nosotros")}
              </Link>
            </li>
            <li>
              <Link href="/casos" className="text-body-md text-white/80 hover:text-white">
                {t("footer.institutional.casos")}
              </Link>
            </li>
            {/* Blog fuera del footer hasta que haya posts reales (feedback SEO/GEO ítem 2) */}
            <li>
              <Link href="/prensa" className="text-body-md text-white/80 hover:text-white">
                {t("footer.institutional.prensa")}
              </Link>
            </li>
            <li>
              <Link href="/contacto" data-cta-id="footer_diagnostic" className="text-body-md text-white/80 hover:text-white">
                {t("footer.institutional.diagnostico")}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-label-md text-white/60">{t("footer.contactHeading")}</p>
          <ul className="mt-4 flex flex-col gap-2 text-body-md text-white/80">
            <li>
              <a href={`mailto:${CONTACT.email}`} className="hover:text-white">
                {CONTACT.email}
              </a>
            </li>
            <li>
              <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                {CONTACT.phoneDisplay} (WhatsApp)
              </a>
              <a href={`tel:${CONTACT.phoneE164}`} className="ml-3 hover:text-white">
                {t("contactLinks.call")}
              </a>
            </li>
            <li>{CONTACT.city}, Argentina</li>
          </ul>
        </div>
      </div>

      {/* Términos y Privacidad se sacaron (29/09/2026): eran texto sin link a
          ninguna página. No se fabrica una Terms of Service / Privacy Policy
          — es contenido legal real, no copy de producto. Vuelven cuando haya
          páginas reales para linkear. */}
      <div className="mx-auto mt-12 flex w-full max-w-[1280px] flex-col gap-2 border-t border-white/10 px-margin-mobile pt-6 text-caption text-white/50 desktop:flex-row desktop:items-center desktop:justify-between desktop:px-margin-desktop">
        <p>© {new Date().getFullYear()} {t("footer.rights")}</p>
      </div>
    </footer>
  );
}
