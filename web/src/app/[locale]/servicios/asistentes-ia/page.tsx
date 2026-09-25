import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import { TranslationPendingNotice } from "@/components/ui/TranslationPendingNotice";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildServiceGraph } from "@/lib/seo/graphs/service";
import { asistentesIaContent } from "@/content/servicios/asistentes-ia";
import { resolveContent } from "@/content/types";
import { routing } from "@/i18n/routing";

const PATH = "/servicios/asistentes-ia";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const { content, translationStatus } = resolveContent(locale, asistentesIaContent);
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
  const { content, translationStatus } = resolveContent(locale, asistentesIaContent);

  return (
    <>
      {translationStatus === "pending" && <TranslationPendingNotice />}
      <JsonLd data={{ "@context": "https://schema.org", "@graph": buildServiceGraph(content, PATH, locale) }} />
      <ServicePageTemplate content={content} />
    </>
  );
}
