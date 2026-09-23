import { SITE_URL } from "@/lib/constants";
import { SCHEMA_IDS } from "@/lib/seo/ids";
import type { NosotrosContent } from "@/content/types";

export function buildNosotrosGraph(content: NosotrosContent, locale: string) {
  const webPageNode = {
    "@type": "AboutPage",
    "@id": `${SITE_URL}/nosotros#webpage`,
    url: `${SITE_URL}/nosotros`,
    name: content.seo.title,
    inLanguage: locale,
    isPartOf: { "@id": SCHEMA_IDS.website },
  };

  const people = content.people.map((person) => ({
    "@type": "Person",
    "@id": SCHEMA_IDS.person[person.slug],
    name: person.name,
    jobTitle: person.jobTitle,
    worksFor: { "@id": SCHEMA_IDS.org },
    url: `${SITE_URL}/nosotros`,
    description: person.bio,
  }));

  return [webPageNode, { "@id": SCHEMA_IDS.org }, ...people];
}
