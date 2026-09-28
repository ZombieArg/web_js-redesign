import { SITE_URL } from "@/lib/constants";
import { SCHEMA_IDS } from "@/lib/seo/ids";
import { casosHubContent } from "@/content/casos/data";
import { resolveContent } from "@/content/types";
import type { CaseItem } from "@/content/types";

export function buildCaseGraph(item: CaseItem, locale: string) {
  const { content } = resolveContent(locale, casosHubContent);

  const workNode: Record<string, unknown> = {
    "@type": "CreativeWork",
    "@id": SCHEMA_IDS.work(item.slug),
    name: item.title,
    url: `${SITE_URL}/casos/${item.slug}`,
    inLanguage: locale,
    creator: { "@id": SCHEMA_IDS.org },
    description: item.body ?? item.summary,
  };

  // El premio se marca explícitamente en el contenido. Antes se detectaba
  // buscando "award" dentro del texto del destacado, que fallaba con cualquier
  // redacción que no incluyera esa palabra (y con el español).
  const award = item.highlights?.find((h) => h.isAward);
  if (award) workNode.award = award.text;

  const breadcrumbNode = {
    "@type": "BreadcrumbList",
    "@id": SCHEMA_IDS.breadcrumb(`/casos/${item.slug}`),
    itemListElement: [
      { "@type": "ListItem", position: 1, name: content.breadcrumb.home, item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: content.breadcrumb.casos, item: `${SITE_URL}/casos` },
      { "@type": "ListItem", position: 3, name: item.title, item: `${SITE_URL}/casos/${item.slug}` },
    ],
  };

  return [workNode, breadcrumbNode];
}
