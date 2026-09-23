import { SITE_URL } from "@/lib/constants";
import { SCHEMA_IDS } from "@/lib/seo/ids";
import type { ServicePageContent, FaqSection } from "@/content/types";

export function buildServiceGraph(content: ServicePageContent, path: string, locale: string) {
  const serviceNode = {
    "@type": "Service",
    "@id": SCHEMA_IDS.service(content.slug),
    name: content.hero.h1,
    serviceType: content.hero.breadcrumbLabel,
    url: `${SITE_URL}${path}`,
    description: content.seo.description,
    provider: { "@id": SCHEMA_IDS.org },
    areaServed: { "@type": "Country", name: "Argentina" },
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
