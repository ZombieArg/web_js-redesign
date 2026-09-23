import { SITE_URL } from "@/lib/constants";
import { SCHEMA_IDS } from "@/lib/seo/ids";
import type { CaseItem } from "@/content/types";

export function buildCaseGraph(item: CaseItem, locale: string) {
  const workNode: Record<string, unknown> = {
    "@type": "CreativeWork",
    "@id": SCHEMA_IDS.work(item.slug),
    name: item.title,
    url: `${SITE_URL}/casos/${item.slug}`,
    inLanguage: locale,
    creator: { "@id": SCHEMA_IDS.org },
    description: item.body ?? item.summary,
  };

  const award = item.highlights?.find((h) => h.text.toLowerCase().includes("award"));
  if (award) workNode.award = award.text;

  const breadcrumbNode = {
    "@type": "BreadcrumbList",
    "@id": SCHEMA_IDS.breadcrumb(`/casos/${item.slug}`),
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Casos", item: `${SITE_URL}/casos` },
      { "@type": "ListItem", position: 3, name: item.title },
    ],
  };

  return [workNode, breadcrumbNode];
}
