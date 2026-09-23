import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildMetadata } from "@/lib/seo/metadata";
import { blogPosts } from "@/content/blog/data";
import { routing } from "@/i18n/routing";

const PATH = "/blog";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    locale,
    path: PATH,
    title: "Blog | Data Voices",
    description: "Notas de Data Voices sobre implementación de inteligencia artificial.",
    // Todavía no hay posts (brief §2.1) — no se indexa un hub vacío.
    translationStatus: blogPosts.length ? "live" : "pending",
  });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("translation");

  return (
    <section className="py-section">
      <Container>
        <SectionHeading kicker="Contenido" title="Blog" align="center" />
        {blogPosts.length === 0 && (
          <p className="text-center text-body-lg text-on-surface-variant">{t("comingSoon")}</p>
        )}
      </Container>
    </section>
  );
}
