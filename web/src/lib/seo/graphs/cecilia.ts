import { SCHEMA_IDS } from "@/lib/seo/ids";
import { buildFaqNode } from "@/lib/seo/graphs/service";
import { localizedUrl } from "@/lib/seo/metadata";
import type { ProductPageContent } from "@/content/types";

export function buildCeciliaGraph(content: ProductPageContent, locale: string) {
  const productNode = {
    "@type": ["Service", "SoftwareApplication"],
    "@id": SCHEMA_IDS.ceciliaProduct,
    name: "Cecilia",
    alternateName: "Cecilia chatbot WhatsApp",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Customer support chatbot",
    operatingSystem: "Web",
    url: localizedUrl(locale, "/cecilia"),
    description: content.seo.description,
    provider: { "@id": SCHEMA_IDS.org },
    featureList: content.specs.items.map((item) => item.title),
    inLanguage: locale,
  };

  return [productNode, buildFaqNode(content.faq, "/cecilia")];
}
