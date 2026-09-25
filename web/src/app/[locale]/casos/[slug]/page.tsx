import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { CaseDetailTemplate } from "@/components/templates/CaseDetailTemplate";
import { TranslationPendingNotice } from "@/components/ui/TranslationPendingNotice";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildCaseGraph } from "@/lib/seo/graphs/casos";
import { casos, getCaseBySlug } from "@/content/casos/data";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) => casos.map((item) => ({ locale, slug: item.slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const item = getCaseBySlug(slug);
  if (!item) return {};
  return buildMetadata({
    locale,
    path: `/casos/${slug}`,
    title: `${item.title} | Casos | Data Voices`,
    description: item.body ?? item.summary,
    translationStatus: item.translationStatus,
  });
}

export default async function Page({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const item = getCaseBySlug(slug);
  if (!item) notFound();

  const isPending = locale !== routing.defaultLocale && item.translationStatus === "pending";

  return (
    <>
      {isPending && <TranslationPendingNotice />}
      <JsonLd data={{ "@context": "https://schema.org", "@graph": buildCaseGraph(item, locale) }} />
      <CaseDetailTemplate item={item} />
    </>
  );
}
