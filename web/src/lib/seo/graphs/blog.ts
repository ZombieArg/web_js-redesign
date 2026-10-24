import { SITE_URL } from "@/lib/constants";
import { SCHEMA_IDS } from "@/lib/seo/ids";
import { localizedUrl } from "@/lib/seo/metadata";
import { blogAuthors, blogCategoryLabels, type BlogItem } from "@/content/blog/data";

export function buildBlogGraph(post: BlogItem, locale: string, datePublished: string, dateModified: string, faqs: { question: string; answer: string }[]) {
  const path = `/blog/${post.slug}`;
  const url = localizedUrl(locale, path);
  const authors = post.authors.map((author) => ({
    "@type": "Person",
    "@id": SCHEMA_IDS.person[author],
    name: blogAuthors[author].name,
    url: `${SITE_URL}/nosotros`,
    jobTitle: blogAuthors[author].jobTitle,
  }));
  return [
    {
      "@type": "BlogPosting",
      "@id": `${url}#article`,
      headline: post.title,
      description: post.excerpt,
      url,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      image: { "@type": "ImageObject", url: `${SITE_URL}/og/default.png`, width: 1200, height: 630 },
      datePublished,
      dateModified,
      inLanguage: "es-AR",
      articleSection: blogCategoryLabels[post.category],
      author: authors.length === 1 ? authors[0] : authors,
      publisher: {
        "@type": "Organization", "@id": SCHEMA_IDS.org, name: "Data Voices",
        logo: { "@type": "ImageObject", url: `${SITE_URL}/logopng1.png` },
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": SCHEMA_IDS.breadcrumb(path),
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
        { "@type": "ListItem", position: 3, name: post.title, item: url },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": SCHEMA_IDS.faq(path),
      inLanguage: "es-AR",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ];
}
