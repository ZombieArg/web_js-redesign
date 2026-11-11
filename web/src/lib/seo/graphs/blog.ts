import { SITE_URL } from "@/lib/constants";
import { blogAuthor, blogCategoryLabel, blogCopy, type BlogItem } from "@/content/blog/data";
import { SCHEMA_IDS } from "@/lib/seo/ids";
import { localizedUrl } from "@/lib/seo/metadata";

export function buildBlogGraph(post: BlogItem, locale: string, datePublished: string, dateModified: string, faqs: { question: string; answer: string }[]) {
  const copy = blogCopy(post, locale);
  const path = `/blog/${copy.slug}`;
  const url = localizedUrl(locale, path);
  const authors = post.authors.map((author) => {
    const meta = blogAuthor(author, locale);
    return {
      "@type": "Person",
      "@id": SCHEMA_IDS.person[author],
      name: meta.name,
      url: locale === "en" ? localizedUrl("en", "/nosotros") : `${SITE_URL}/nosotros`,
      jobTitle: meta.jobTitle,
    };
  });
  const blogUrl = locale === "en" ? localizedUrl("en", "/blog") : `${SITE_URL}/blog`;
  return [
    {
      "@type": "BlogPosting",
      "@id": `${url}#article`,
      headline: copy.title,
      description: copy.excerpt,
      url,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      image: { "@type": "ImageObject", url: `${SITE_URL}/og/default.png`, width: 1200, height: 630 },
      datePublished,
      dateModified,
      inLanguage: locale === "en" ? "en" : "es-AR",
      articleSection: blogCategoryLabel(locale, post.category),
      author: authors.length === 1 ? authors[0] : authors,
      publisher: {
        "@type": "Organization", "@id": SCHEMA_IDS.org, name: "Data Voices",
        logo: { "@type": "ImageObject", url: `${SITE_URL}/logopng1.png` },
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: locale === "en" ? "Home" : "Inicio", item: locale === "en" ? localizedUrl("en", "/") : `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Blog", item: blogUrl },
        { "@type": "ListItem", position: 3, name: blogCategoryLabel(locale, post.category), item: blogUrl },
        { "@type": "ListItem", position: 4, name: copy.breadcrumbTitle, item: url },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      inLanguage: locale === "en" ? "en" : "es-AR",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ];
}
