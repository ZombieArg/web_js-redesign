import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { CONTACT } from "@/lib/constants";

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
          <div className="flex items-center gap-2">
            <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-signal-orange" />
            <span className="font-wordmark text-[17px] font-bold text-white">Data Voices</span>
          </div>
          <p className="mt-4 max-w-xs text-body-md text-white/70">{t("footer.tagline")}</p>
          <p className="mt-4 text-caption text-white/50">{t("footer.cityLine")}</p>
        </div>

        <div>
          <p className="text-label-md text-white/60">{t("footer.servicesHeading")}</p>
          <ul className="mt-4 flex flex-col gap-2">
            {SERVICE_LINKS.map((item) => (
              <li key={item.key}>
                <Link href={item.href} className="text-body-md text-white/80 hover:text-white">
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
              <Link href="/contacto" className="text-body-md text-white/80 hover:text-white">
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
            <li>{CONTACT.phoneDisplay}</li>
            <li>{CONTACT.city}, Argentina</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 flex w-full max-w-[1280px] flex-col gap-2 border-t border-white/10 px-margin-mobile pt-6 text-caption text-white/50 desktop:flex-row desktop:items-center desktop:justify-between desktop:px-margin-desktop">
        <p>© {new Date().getFullYear()} {t("footer.rights")}</p>
        <div className="flex gap-4">
          <span>{t("footer.legal")}</span>
          <span>{t("footer.privacy")}</span>
        </div>
      </div>
    </footer>
  );
}
