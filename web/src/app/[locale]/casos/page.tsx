import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { IconTile } from "@/components/ui/IconTile";
import { JsonLd } from "@/components/seo/JsonLd";
import { Link } from "@/i18n/navigation";
import { buildMetadata, localizedUrl } from "@/lib/seo/metadata";
import { SITE_URL } from "@/lib/constants";
import { getCasos, casosHubContent } from "@/content/casos/data";
import { resolveContent } from "@/content/types";
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
  const { content, translationStatus } = resolveContent(locale, casosHubContent);
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
  const { content } = resolveContent(locale, casosHubContent);
  const casos = getCasos(locale);

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
                url: localizedUrl(locale, PATH),
                name: content.seo.title,
                inLanguage: locale,
              },
              {
                "@type": "BreadcrumbList",
                "@id": `${SITE_URL}${PATH}#breadcrumb`,
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: content.breadcrumb.home, item: `${SITE_URL}/` },
                  { "@type": "ListItem", position: 2, name: content.breadcrumb.casos, item: `${SITE_URL}${PATH}` },
                ],
              },
            ],
          }}
        />
        <div className="mb-12 max-w-[760px] text-center mx-auto">
          <h1 className="text-headline-md text-brand-navy desktop:text-headline-lg">{content.heading}</h1>
        </div>
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
                {content.cardLinkLabel} →
              </Link>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
