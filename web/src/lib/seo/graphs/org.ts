import { SITE_URL, CONTACT, SOCIAL, ORG } from "@/lib/constants";
import { SCHEMA_IDS } from "@/lib/seo/ids";

export function buildOrgNode() {
  return {
    "@type": ["Organization", "ProfessionalService"],
    "@id": SCHEMA_IDS.org,
    name: ORG.name,
    legalName: ORG.legalName,
    url: `${SITE_URL}/`,
    logo: { "@type": "ImageObject", url: `${SITE_URL}/logopng1.png` },
    description:
      "Consultora argentina de inteligencia artificial: implementación de IA, desarrollo de software a medida y agentes de IA para empresas.",
    foundingDate: ORG.foundingDate,
    areaServed: [
      { "@type": "Country", name: "Argentina" },
      { "@type": "Country", name: "México" },
      { "@type": "Country", name: "Colombia" },
      { "@type": "Country", name: "Chile" },
      { "@type": "Country", name: "Perú" },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: CONTACT.city,
      addressRegion: CONTACT.region,
      addressCountry: CONTACT.country,
    },
    email: CONTACT.email,
    telephone: CONTACT.phoneDisplay,
    sameAs: [SOCIAL.linkedin, `${SITE_URL}/`],
    founder: [{ "@id": SCHEMA_IDS.person.juanma }, { "@id": SCHEMA_IDS.person.eduardo }],
    knowsAbout: [
      "Inteligencia artificial para empresas",
      "Agentes de IA",
      "Chatbot de WhatsApp para empresas",
      "Desarrollo de software con IA",
      "Implementación de IA",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: CONTACT.email,
      telephone: CONTACT.phoneDisplay,
      availableLanguage: ["es", "en"],
    },
  };
}

export function buildWebsiteNode() {
  return {
    "@type": "WebSite",
    "@id": SCHEMA_IDS.website,
    url: `${SITE_URL}/`,
    name: ORG.name,
    inLanguage: "es-AR",
    publisher: { "@id": SCHEMA_IDS.org },
  };
}
