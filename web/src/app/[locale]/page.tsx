import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { HomeHero } from "@/components/sections/HomeHero";
import { WhoWeAreCard } from "@/components/sections/WhoWeAreCard";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { HowWeWorkSteps } from "@/components/sections/HowWeWorkSteps";
import { CasesGrid } from "@/components/sections/CasesGrid";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FaqAccordionSection } from "@/components/sections/FaqAccordionSection";
import { CtaBand } from "@/components/ui/CtaBand";
import { LogoRow } from "@/components/layout/LogoRow";
import { Container } from "@/components/ui/Container";
import { TranslationPendingNotice } from "@/components/ui/TranslationPendingNotice";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildHomeGraph } from "@/lib/seo/graphs/home";
import { homeContent } from "@/content/home";
import { resolveContent } from "@/content/types";
import { routing } from "@/i18n/routing";

import chpLogo from "@/assets/logos/chp-logo.png";
import municipioLobosLogo from "@/assets/logos/municipio-lobos.jpg";
import farmaciasLogo from "@/assets/logos/farmacias-del-pueblo-logo.png";
import padrePepeLogo from "@/assets/logos/mision-padre-pepe-logo.png";
import helarteLogo from "@/assets/logos/distribuidora-helarte.png";
import bahiaLobosLogo from "@/assets/logos/bahiadeloslobos.png";

// El logo del organismo internacional se retiró a pedido del cliente
// (24/09/2026) junto con toda mención explícita.
const LOGOS = {
  chp: chpLogo,
  municipioLobos: municipioLobosLogo,
  farmacias: farmaciasLogo,
  padrePepe: padrePepeLogo,
  helarte: helarteLogo,
  bahiaLobos: bahiaLobosLogo,
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const { content, translationStatus } = resolveContent(locale, homeContent);
  return buildMetadata({
    locale,
    path: "/",
    title: content.seo.title,
    description: content.seo.description,
    translationStatus,
  });
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const { content, translationStatus } = resolveContent(locale, homeContent);

  return (
    <>
      {translationStatus === "pending" && <TranslationPendingNotice />}
      <JsonLd data={{ "@context": "https://schema.org", "@graph": buildHomeGraph(content, locale) }} />

      <HomeHero hero={content.hero} />
      <Container>
        <LogoRow
          heading={content.logoRow.heading}
          logos={content.logoRow.logos.map((logo) => ({
            src: LOGOS[logo.key as keyof typeof LOGOS],
            alt: logo.alt,
          }))}
        />
      </Container>
      <WhoWeAreCard whoWeAre={content.whoWeAre} />
      <ServicesGrid services={content.services} />
      <HowWeWorkSteps howWeWork={content.howWeWork} />
      <CasesGrid cases={content.cases} />
      <TestimonialsSection testimonials={content.testimonials} />
      <FaqAccordionSection faq={content.faq} />
      <CtaBand heading={content.closingCta.heading} primaryCta={content.closingCta.primaryCta} tone="navy" />
    </>
  );
}
