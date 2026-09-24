import { SCHEMA_IDS } from "@/lib/seo/ids";
import { localizedUrl } from "@/lib/seo/metadata";
import type { ServicePageContent, FaqSection } from "@/content/types";

// Mismos 5 países que Organization.areaServed (org.ts) — antes decía solo
// Argentina en cada Service, inconsistente con la organización que los
// declara todos (feedback SEO/GEO ítem 12).
const AREA_SERVED = [
  { "@type": "Country", name: "Argentina" },
  { "@type": "Country", name: "México" },
  { "@type": "Country", name: "Colombia" },
  { "@type": "Country", name: "Chile" },
  { "@type": "Country", name: "Perú" },
];

export function buildServiceGraph(content: ServicePageContent, path: string, locale: string) {
  const serviceNode = {
    "@type": "Service",
    "@id": SCHEMA_IDS.service(content.slug),
    name: content.hero.h1,
    serviceType: content.hero.breadcrumbLabel,
    url: localizedUrl(locale, path),
    description: content.seo.description,
    provider: { "@id": SCHEMA_IDS.org },
    areaServed: AREA_SERVED,
    audience: { "@type": "BusinessAudience", audienceType: "Empresas" },
    inLanguage: locale,
  };

  return [serviceNode, buildFaqNode(content.faq, path)];
}

export function buildFaqNode(faq: FaqSection, path: string) {
  return {
    "@type": "FAQPage",
    "@id": SCHEMA_IDS.faq(path),
    mainEntity: faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
