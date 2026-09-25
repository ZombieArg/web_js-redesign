import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { CtaBand } from "@/components/ui/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata, localizedUrl } from "@/lib/seo/metadata";
import { SITE_URL } from "@/lib/constants";
import { prensa } from "@/content/prensa/data";
import { prensaPageContent } from "@/content/prensa/page-content";
import { resolveContent } from "@/content/types";
import { routing } from "@/i18n/routing";

import infobae from "@/assets/press/infobae-nota.jpg";
import c5n from "@/assets/press/c5n-nota.jpg";
import perfil from "@/assets/press/perfil-nota.jpg";
import puntal from "@/assets/press/puntal-nota.jpg";

const IMAGES = { infobae, c5n, perfil, puntal };

const PATH = "/prensa";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const { content, translationStatus } = resolveContent(locale, prensaPageContent);
  return buildMetadata({
    locale,
    path: PATH,
    title: content.seo.title,
    description: content.seo.description,
    translationStatus,
  });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const { content } = resolveContent(locale, prensaPageContent);
  const lang = locale === "en" ? "en" : "es";

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "CollectionPage",
              "@id": `${SITE_URL}${PATH}#webpage`,
              url: localizedUrl(locale, PATH),
              name: content.seo.title,
              inLanguage: locale,
            },
            {
              "@type": "BreadcrumbList",
              "@id": `${SITE_URL}${PATH}#breadcrumb`,
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Inicio", item: `${SITE_URL}/` },
                { "@type": "ListItem", position: 2, name: content.hero.h1, item: `${SITE_URL}${PATH}` },
              ],
            },
          ],
        }}
      />

      <section className="py-section">
        <Container>
          <h1 className="max-w-[760px] text-display-lg-mobile text-brand-navy desktop:text-display-lg">
            {content.hero.h1}
          </h1>
          <p className="mt-6 max-w-[640px] text-body-lg text-on-surface-variant">{content.hero.subhead}</p>
          <p className="mt-10 max-w-[760px] text-body-md text-on-surface-variant">{content.intro}</p>
        </Container>
      </section>

      <section className="py-section">
        <Container>
          <h2 className="mb-8 text-headline-md text-brand-navy desktop:text-headline-lg">{content.sectionHeading}</h2>
          <div className="grid grid-cols-1 gap-6 tablet:grid-cols-2">
            {prensa.map((item) => (
              <a
                key={item.slug}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group overflow-hidden rounded-xl border border-divider bg-surface-container-lowest shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card-hover"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={IMAGES[item.imageKey as keyof typeof IMAGES]}
                    alt={item.title[lang]}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="text-label-md text-signal-orange">
                    {item.source} · {item.date[lang]}
                  </span>
                  <h3 className="mt-2 text-body-md font-semibold text-brand-navy">{item.title[lang]}</h3>
                </div>
              </a>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand heading={content.closing.heading} primaryCta={content.closing.cta} tone="navy" />
    </>
  );
}
