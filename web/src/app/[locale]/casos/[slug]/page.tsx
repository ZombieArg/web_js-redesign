import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { CaseDetailTemplate } from "@/components/templates/CaseDetailTemplate";
import { TranslationPendingNotice } from "@/components/ui/TranslationPendingNotice";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildCaseGraph } from "@/lib/seo/graphs/casos";
import { caseSlugs, getCaseBySlug, casosHubContent } from "@/content/casos/data";
import { resolveContent } from "@/content/types";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) => caseSlugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const item = getCaseBySlug(slug, locale);
  if (!item) return {};
  const { content } = resolveContent(locale, casosHubContent);
  return buildMetadata({
    locale,
    path: `/casos/${slug}`,
    title: `${item.title} | ${content.breadcrumb.casos} | Data Voices`,
    // body es el resumen corto, no la narrativa — ver el comentario en CaseItem.
    description: item.body ?? item.summary,
    translationStatus: item.translationStatus,
  });
}

export default async function Page({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const item = getCaseBySlug(slug, locale);
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
