import { SITE_URL } from "@/lib/constants";
import { blogAuthor, blogCategoryLabel, blogCopy, type BlogItem } from "@/content/blog/data";
import { SCHEMA_IDS } from "@/lib/seo/ids";
import { localizedUrl } from "@/lib/seo/metadata";

const WHY_AI_PROJECTS_FAIL = {
  keywords: ["why ai projects fail", "ai pilot to production", "ai maturity assessment"],
  schemaJobTitle: "Co-founder and CTO",
};

export function buildBlogGraph(post: BlogItem, locale: string, datePublished: string, dateModified: string, faqs: { question: string; answer: string }[]) {
  const copy = blogCopy(post, locale);
  const path = `/blog/${copy.slug}`;
  const url = localizedUrl(locale, path);
  const english = locale === "en" && Boolean(post.en);
  const exactEnglish = english && copy.slug === "why-ai-projects-fail";
  const authors = post.authors.map((author) => {
    const meta = blogAuthor(author, english ? "en" : "es");
    const person: Record<string, unknown> = {
      "@type": "Person",
      "@id": SCHEMA_IDS.person[author],
      name: meta.name,
      url: english ? localizedUrl("en", "/nosotros") : `${SITE_URL}/nosotros`,
      jobTitle: exactEnglish && author === "juanma" ? WHY_AI_PROJECTS_FAIL.schemaJobTitle : meta.jobTitle,
    };
    if (exactEnglish) person.worksFor = { "@id": SCHEMA_IDS.org };
    return person;
  });
  const blogUrl = english ? localizedUrl("en", "/blog") : `${SITE_URL}/blog`;
  const homeUrl = english ? localizedUrl("en", "/") : `${SITE_URL}/`;
  const breadcrumb = exactEnglish
    ? [
        { "@type": "ListItem", position: 1, name: "Home", item: homeUrl },
        { "@type": "ListItem", position: 2, name: "Blog", item: blogUrl },
        { "@type": "ListItem", position: 3, name: copy.title, item: url },
      ]
    : [
        { "@type": "ListItem", position: 1, name: english ? "Home" : "Inicio", item: homeUrl },
        { "@type": "ListItem", position: 2, name: "Blog", item: blogUrl },
        { "@type": "ListItem", position: 3, name: blogCategoryLabel(english ? "en" : "es", post.category), item: blogUrl },
        { "@type": "ListItem", position: 4, name: copy.breadcrumbTitle, item: url },
      ];
  const article: Record<string, unknown> = {
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: copy.title,
    description: copy.excerpt,
    inLanguage: english ? "en" : "es-AR",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    datePublished,
    dateModified,
    author: exactEnglish ? authors : authors.length === 1 ? authors[0] : authors,
    publisher: {
      "@type": "Organization",
      "@id": SCHEMA_IDS.org,
      name: "Data Voices",
      ...(exactEnglish ? { url: SITE_URL } : {}),
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logopng1.png` },
    },
    image: { "@type": "ImageObject", url: `${SITE_URL}/og/default.png`, width: 1200, height: 630 },
    articleSection: blogCategoryLabel(english ? "en" : "es", post.category),
    ...(exactEnglish ? { keywords: WHY_AI_PROJECTS_FAIL.keywords } : {}),
  };
  return [
    article,
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: breadcrumb,
    },
    {
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      inLanguage: english ? "en" : "es-AR",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ];
}
