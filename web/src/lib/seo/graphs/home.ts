import { SITE_URL } from "@/lib/constants";
import { SCHEMA_IDS } from "@/lib/seo/ids";
import { buildFaqNode } from "@/lib/seo/graphs/service";
import type { HomeContent } from "@/content/types";

export function buildHomeGraph(content: HomeContent, locale: string) {
  const webPageNode = {
    "@type": "WebPage",
    "@id": `${SITE_URL}/#webpage`,
    url: `${SITE_URL}/`,
    name: content.seo.title,
    inLanguage: locale,
    isPartOf: { "@id": SCHEMA_IDS.website },
    publisher: { "@id": SCHEMA_IDS.org },
  };

  return [webPageNode, buildFaqNode(content.faq, "/")];
}
