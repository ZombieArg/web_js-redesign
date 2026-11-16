import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { consentCopyFor } from "@/content/consent";
import { routing } from "@/i18n/routing";
import { buildMetadata } from "@/lib/seo/metadata";

const HREFLANG_PATHS = { es: "/privacidad", en: "/privacy" } as const;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const copy = consentCopyFor(locale);
  return buildMetadata({
    locale,
    path: HREFLANG_PATHS.es,
    hrefLangPaths: HREFLANG_PATHS,
    title: copy.privacyH1,
    description: copy.privacyBody,
    noindex: true,
    emitAlternates: true,
  });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const copy = consentCopyFor(locale);

  return (
    <section className="py-section">
      <Container>
        <h1 className="max-w-[760px] text-headline-md text-brand-navy desktop:text-headline-lg">{copy.privacyH1}</h1>
        <p className="mt-6 max-w-[65ch] text-body-lg text-on-surface">{copy.privacyBody}</p>
      </Container>
    </section>
  );
}
