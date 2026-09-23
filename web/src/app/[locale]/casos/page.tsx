import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { IconTile } from "@/components/ui/IconTile";
import { JsonLd } from "@/components/seo/JsonLd";
import { Link } from "@/i18n/navigation";
import { buildMetadata } from "@/lib/seo/metadata";
import { SITE_URL } from "@/lib/constants";
import { casos } from "@/content/casos/data";
import { routing } from "@/i18n/routing";

const PATH = "/casos";

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
    title: "Casos de éxito | Data Voices",
    description: "Portafolio de casos de Data Voices: BID, Real Time Interview Agent, Normsy, Agent Launcher y Social Media Detoxifier.",
  });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <section className="py-section">
      <Container>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "CollectionPage",
                "@id": `${SITE_URL}${PATH}#webpage`,
                url: `${SITE_URL}${PATH}`,
                name: "Casos de éxito | Data Voices",
                inLanguage: locale,
              },
            ],
          }}
        />
        <SectionHeading kicker="Prueba" title="Casos" align="center" />
        <div className="grid grid-cols-1 gap-6 tablet:grid-cols-2">
          {casos.map((item) => (
            <Card key={item.slug} as="article">
              <div className="mb-4 flex items-center justify-between">
                <Badge tone="neutral">{item.tag}</Badge>
                <IconTile name={item.iconName} size={40} />
              </div>
              <h2 className="text-headline-md text-brand-navy">{item.title}</h2>
              <p className="mt-2 text-body-md text-on-surface-variant">{item.summary}</p>
              {item.caption && <p className="mt-3 text-caption text-outline">{item.caption}</p>}
              <Link
                href={{ pathname: "/casos/[slug]", params: { slug: item.slug } }}
                className="mt-4 inline-flex text-label-md text-signal-orange normal-case tracking-normal"
              >
                Ver caso de estudio →
              </Link>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
