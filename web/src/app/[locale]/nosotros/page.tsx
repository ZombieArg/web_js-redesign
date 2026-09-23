import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { CtaBand } from "@/components/ui/CtaBand";
import { IconTile } from "@/components/ui/IconTile";
import { TranslationPendingNotice } from "@/components/ui/TranslationPendingNotice";
import { JsonLd } from "@/components/seo/JsonLd";
import { Link } from "@/i18n/navigation";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildNosotrosGraph } from "@/lib/seo/graphs/nosotros";
import { nosotrosContent } from "@/content/nosotros";
import { resolveContent } from "@/content/types";
import { routing } from "@/i18n/routing";

const PATH = "/nosotros";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const { content, translationStatus } = resolveContent(locale, nosotrosContent);
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
  const { content, translationStatus } = resolveContent(locale, nosotrosContent);

  return (
    <>
      {translationStatus === "pending" && <TranslationPendingNotice />}
      <JsonLd data={{ "@context": "https://schema.org", "@graph": buildNosotrosGraph(content, locale) }} />

      <section className="py-section">
        <Container>
          <h1 className="max-w-[760px] text-display-lg-mobile text-brand-navy desktop:text-display-lg">
            {content.hero.h1}
          </h1>
          <p className="mt-6 max-w-[640px] text-body-lg text-on-surface-variant">{content.hero.subhead}</p>
          <p className="mt-10 max-w-[760px] text-body-md text-on-surface-variant">{content.entityParagraph}</p>
        </Container>
      </section>

      <section className="py-section">
        <Container>
          <div className="grid grid-cols-1 gap-6 tablet:grid-cols-2">
            {content.people.map((person) => (
              <Card key={person.slug}>
                <IconTile name="usuarios" />
                <h2 className="mt-4 text-headline-md text-brand-navy">{person.name}</h2>
                <p className="text-label-md text-signal-orange normal-case tracking-normal">{person.jobTitle}</p>
                <p className="mt-3 text-body-md text-on-surface-variant">{person.bio}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-section">
        <Container>
          <div className="rounded-xl border-l-[3px] border-l-signal-orange border-y border-r border-divider bg-surface-container-low p-8">
            <div className="mb-4 flex items-center gap-3">
              <IconTile name="seguridad" />
              <h2 className="text-headline-md text-brand-navy">Eje BID</h2>
            </div>
            <p className="max-w-[640px] text-body-md text-on-surface-variant">{content.bidNote.text}</p>
            {/* @ts-expect-error -- next-intl Link tipa href contra rutas conocidas de routing.ts */}
            <Link href={content.bidNote.href} className="mt-4 inline-flex text-label-md text-signal-orange normal-case tracking-normal">
              {content.bidNote.linkLabel} →
            </Link>
          </div>
        </Container>
      </section>

      <CtaBand heading={content.closingCta.label} primaryCta={content.closingCta} tone="navy" />
    </>
  );
}
