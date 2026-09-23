import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { ProductPageTemplate } from "@/components/templates/ProductPageTemplate";
import { TranslationPendingNotice } from "@/components/ui/TranslationPendingNotice";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildCeciliaGraph } from "@/lib/seo/graphs/cecilia";
import { ceciliaContent } from "@/content/cecilia";
import { resolveContent } from "@/content/types";
import { routing } from "@/i18n/routing";

const PATH = "/cecilia";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const { content, translationStatus } = resolveContent(locale, ceciliaContent);
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
  const { content, translationStatus } = resolveContent(locale, ceciliaContent);

  return (
    <>
      {translationStatus === "pending" && <TranslationPendingNotice />}
      <JsonLd data={{ "@context": "https://schema.org", "@graph": buildCeciliaGraph(content, locale) }} />
      <ProductPageTemplate content={content} />
    </>
  );
}
