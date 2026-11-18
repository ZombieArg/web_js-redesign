import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { PrivacyDocument, parsePolicy } from "@/components/content/PrivacyDocument";
import { privacySource } from "@/content/privacy";
import { routing } from "@/i18n/routing";
import { buildMetadata } from "@/lib/seo/metadata";

const HREFLANG_PATHS = { es: "/privacidad", en: "/privacy" } as const;

function plain(text: string) {
  return text.replace(/\*\*/g, "");
}

function copyFor(locale: string) {
  const source = locale === "en" ? privacySource.en : privacySource.es;
  const blocks = parsePolicy(source);
  const h1 = blocks.find((block) => block.kind === "h1");
  const intro = blocks.find((block) => block.kind === "p");
  return {
    source,
    title: h1 && h1.kind === "h1" ? plain(h1.text) : "",
    description: intro && intro.kind === "p" ? plain(intro.lines[intro.lines.length - 1] ?? "") : "",
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const copy = copyFor(locale);
  return buildMetadata({
    locale,
    path: HREFLANG_PATHS.es,
    hrefLangPaths: HREFLANG_PATHS,
    title: copy.title,
    description: copy.description,
    emitAlternates: true,
  });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const copy = copyFor(locale);

  return (
    <section className="py-section">
      <Container>
        <PrivacyDocument source={copy.source} />
      </Container>
    </section>
  );
}
