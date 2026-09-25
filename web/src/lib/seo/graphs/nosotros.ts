import { SITE_URL } from "@/lib/constants";
import { SCHEMA_IDS } from "@/lib/seo/ids";
import { SOCIAL_PROFILES } from "@/lib/seo/social-profiles";
import { localizedUrl } from "@/lib/seo/metadata";
import type { NosotrosContent } from "@/content/types";
import juanmaPhoto from "@/assets/team/juan-manuel-ortiz-de-zarate.jpg";
import eduardoPhoto from "@/assets/team/eduardo-pan.jpg";

// El .src del import estatico trae el hash de build, asi que la URL del schema
// apunta siempre al archivo servido y no se desincroniza si se cambia la foto.
const PERSON_IMAGE = { juanma: juanmaPhoto.src, eduardo: eduardoPhoto.src };

export function buildNosotrosGraph(content: NosotrosContent, locale: string) {
  const webPageNode = {
    "@type": "AboutPage",
    "@id": `${SITE_URL}/nosotros#webpage`,
    url: localizedUrl(locale, "/nosotros"),
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
    url: localizedUrl(locale, "/nosotros"),
    description: person.bio,
    image: `${SITE_URL}${PERSON_IMAGE[person.slug]}`,
    // sameAs: falta el LinkedIn de cada persona (feedback SEO/GEO ítem 12) —
    // pendiente de que nos pasen las URLs, ver SOCIAL_PROFILES.
    ...(SOCIAL_PROFILES[person.slug]?.length ? { sameAs: SOCIAL_PROFILES[person.slug] } : {}),
  }));

  return [webPageNode, { "@id": SCHEMA_IDS.org }, ...people];
}
