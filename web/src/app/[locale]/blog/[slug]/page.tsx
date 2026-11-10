import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HeadJsonLd } from "@/components/seo/HeadJsonLd";
import { TranslationPendingNotice } from "@/components/ui/TranslationPendingNotice";
import { ArticleBody, articleFaqSection, articleSections, readArticle } from "@/content/blog/markdown";
import { BLOG_PUBLIC, blogAuthor, blogCategoryLabel, blogCategoryTrackingValue, blogCopy, blogPostForSlug, publishedBlogPosts, visibleBlogPosts, type BlogCategory } from "@/content/blog/data";
import { buildMetadata, localizedUrl } from "@/lib/seo/metadata";
import { buildBlogGraph } from "@/lib/seo/graphs/blog";

type Props = { params: Promise<{ locale: string; slug: string }> };

export const dynamicParams = false;

const relatedServices: Record<"es" | "en", Record<BlogCategory, { href: "/servicios/consultoria" | "/servicios/asistentes-ia" | "/servicios/ia-sobre-datos"; slug: string; label: string }[]>> = {
  es: {
    proveedores: [
      { href: "/servicios/consultoria", slug: "consultoria", label: "Implementación de inteligencia artificial" },
      { href: "/servicios/ia-sobre-datos", slug: "ia-sobre-datos", label: "Inteligencia artificial aplicada a tus procesos y datos" },
    ],
    agentes: [
      { href: "/servicios/asistentes-ia", slug: "asistentes-ia", label: "Agentes de IA para empresas" },
      { href: "/servicios/ia-sobre-datos", slug: "ia-sobre-datos", label: "Inteligencia artificial aplicada a tus procesos y datos" },
    ],
    implementacion: [
      { href: "/servicios/consultoria", slug: "consultoria", label: "Implementación de inteligencia artificial" },
      { href: "/servicios/ia-sobre-datos", slug: "ia-sobre-datos", label: "Inteligencia artificial aplicada a tus procesos y datos" },
    ],
  },
  en: {
    proveedores: [
      { href: "/servicios/consultoria", slug: "consultoria", label: "AI implementation" },
      { href: "/servicios/ia-sobre-datos", slug: "ia-sobre-datos", label: "Artificial intelligence applied to your processes and data" },
    ],
    agentes: [
      { href: "/servicios/asistentes-ia", slug: "asistentes-ia", label: "AI agents for businesses" },
      { href: "/servicios/ia-sobre-datos", slug: "ia-sobre-datos", label: "Artificial intelligence applied to your processes and data" },
    ],
    implementacion: [
      { href: "/servicios/consultoria", slug: "consultoria", label: "AI implementation" },
      { href: "/servicios/ia-sobre-datos", slug: "ia-sobre-datos", label: "Artificial intelligence applied to your processes and data" },
    ],
  },
};

export function generateStaticParams() {
  return visibleBlogPosts.flatMap((post) => [
    { locale: "es", slug: post.slug },
    { locale: "en", slug: post.en?.slug ?? post.slug },
  ]);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = blogPostForSlug(slug, locale);
  if (!post) return { robots: { index: false, follow: false } };
  const copy = blogCopy(post, locale);
  const hrefLangPaths = post.en
    ? { es: `/blog/${post.slug}`, en: `/blog/${post.en.slug}` }
    : undefined;
  const metadata = buildMetadata({
    locale,
    path: `/blog/${copy.slug}`,
    hrefLangPaths,
    title: `${copy.seoTitle} | Data Voices`,
    description: copy.excerpt,
    translationStatus: post.translationStatus,
    noindex: !BLOG_PUBLIC,
  });
  // Las notas sin traducción en inglés conservan el metadata anterior (sin og:type article).
  if (locale !== "es" && !post.en) return metadata;
  const contentLocale = post.en && locale === "en" ? "en" : "es";
  return {
    ...metadata,
    openGraph: {
      ...metadata.openGraph,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.modifiedAt ?? post.publishedAt,
      authors: [localizedUrl(contentLocale, "/nosotros")],
      section: blogCategoryLabel(contentLocale, post.category),
    },
  };
}

export default async function Page({ params }: Props) {
  const { locale, slug } = await params;
  const post = blogPostForSlug(slug, locale);
  if (!post) notFound();
  setRequestLocale(locale);

  const english = locale === "en" && Boolean(post.en);
  const copy = blogCopy(post, locale);
  const blocks = readArticle(copy.slug);
  const sections = articleSections(blocks);
  const firstHeadingIndex = blocks.findIndex((block) => block.type === "heading");
  const introBlocks = firstHeadingIndex < 0 ? blocks : blocks.slice(0, firstHeadingIndex);
  const articleBlocks = firstHeadingIndex < 0 ? [] : blocks.slice(firstHeadingIndex);
  const faqSection = articleFaqSection(articleBlocks);
  const relatedPool = english ? publishedBlogPosts.filter((item) => item.en) : publishedBlogPosts;
  const related = relatedPool.filter((item) => item.slug !== post.slug).sort((a, b) => Number(b.category === post.category) - Number(a.category === post.category)).slice(0, 3);
  const services = relatedServices[english ? "en" : "es"][post.category];

  return <>
    {locale === "en" && !post.en && <TranslationPendingNotice />}
    {(locale === "es" || english) && post.publishedAt && faqSection && <HeadJsonLd data={{ "@context": "https://schema.org", "@graph": buildBlogGraph(post, english ? "en" : "es", post.publishedAt, post.modifiedAt ?? post.publishedAt, faqSection.items) }} />}
    <div className="bg-neutral-base py-10 desktop:py-14">
      <Container>
        <nav className="mb-10 text-caption text-slate-gray" aria-label={english ? "Breadcrumb" : "Ruta de navegación"}><Link href="/" className="underline hover:text-brand-navy">{english ? "Home" : "Inicio"}</Link><span aria-hidden="true"> › </span><Link href="/blog" className="underline hover:text-brand-navy">Blog</Link><span aria-hidden="true"> › </span><Link href="/blog" className="underline hover:text-brand-navy">{blogCategoryLabel(english ? "en" : "es", post.category)}</Link><span aria-hidden="true"> › </span><span>{copy.breadcrumbTitle}</span></nav>
        <div className="mx-auto max-w-[820px]">
          <article className="min-w-0 max-w-[820px]">
            <span className="rounded-xs bg-primary-fixed px-2 py-1 text-caption font-semibold text-brand-navy">{blogCategoryLabel(english ? "en" : "es", post.category)}</span>
            <h1 className="mt-4 text-display-lg-mobile text-brand-navy desktop:text-[48px] desktop:leading-[1.12]">{copy.title}</h1>
            <p className="mt-5 text-body-md text-on-surface-variant">{english ? "By" : "Por"} {post.authors.map((author, index) => {
              const meta = blogAuthor(author, english ? "en" : "es");
              return <span key={author}>{index > 0 && " "}<Link href="/nosotros" className="font-semibold text-brand-navy underline underline-offset-2">{meta.shortName}</Link>{author === "juanma" && ` (${meta.name})`}, {meta.jobTitle}{meta.credentials && `. ${meta.credentials}`}{index === post.authors.length - 1 ? "." : ";"}</span>;
            })} <span className="mx-2 text-slate-gray">·</span> {post.readingMinutes} {english ? "min read" : "min de lectura"}</p>
            <div className="mt-8 rounded-sm border-l-4 border-brand-navy bg-white p-6 shadow-card">
              <p className="text-body-lg leading-relaxed text-brand-navy">{copy.lead}</p>
            </div>
            {introBlocks.length > 0 && <div className="mt-8"><ArticleBody blocks={introBlocks} /></div>}
            <nav className="mt-5 text-body-md text-brand-navy" aria-label={english ? "In this guide" : "En esta guía"}>
              <ul className="list-disc space-y-1 pl-6">{sections.map((section) => <li key={section.id}><a href={`#${section.id}`} className="underline underline-offset-2 hover:text-secondary">{section.text}</a></li>)}</ul>
            </nav>
            {faqSection ? <>
              <ArticleBody blocks={faqSection.before} />
              <section className="blog-prose" aria-labelledby={faqSection.heading.id}>
                <h2 id={faqSection.heading.id}>{faqSection.heading.text}</h2>
                {faqSection.items.map((item) => <details key={item.id} open className="blog-faq"><summary data-faq-id={item.id}>{item.question}</summary><ArticleBody blocks={item.answerBlocks} /></details>)}
              </section>
              <ArticleBody blocks={faqSection.after} />
            </> : <ArticleBody blocks={articleBlocks} />}
            <div className="mt-14 rounded-lg border border-divider bg-white p-7 desktop:p-9"><h2 className="text-headline-md text-brand-navy">{english ? "Have a specific process to review?" : "¿Tenés un proceso concreto para revisar?"}</h2><p className="mt-3 text-body-md text-on-surface-variant">{english ? "Bring it to a first conversation with the team." : "Llevalo a una primera conversación con el equipo."}</p><Button href="/contacto" data-cta-id="blog_post_cierre_diagnostico" data-cta-location="blog_article" className="mt-6">{english ? "Get a free diagnostic" : "Pedí un diagnóstico gratuito"}</Button></div>
          </article>
        </div>
        <section className="mt-16 rounded-lg border border-divider bg-white p-7 desktop:p-9" aria-labelledby="servicios-relacionados"><h2 id="servicios-relacionados" className="text-headline-md text-brand-navy">{english ? "Related services" : "Servicios relacionados"}</h2><div className="mt-5 flex flex-col gap-3 tablet:flex-row tablet:gap-8">{services.map((service) => <Link key={service.slug} href={service.href} data-service-slug={service.slug} data-cta-location="blog_article" className="text-body-lg font-semibold text-brand-navy underline underline-offset-2">{service.label} →</Link>)}</div></section>
        {related.length > 0 && <section className="mt-16 border-t border-divider pt-10"><h2 className="text-headline-md text-brand-navy">{english ? "Related notes" : "Notas relacionadas"}</h2><div className="mt-6 grid gap-4 tablet:grid-cols-3">{related.map((item) => {
          const itemCopy = blogCopy(item, english ? "en" : "es");
          return <Link key={item.slug} href={{ pathname: "/blog/[slug]", params: { slug: itemCopy.slug } }} data-post-slug={itemCopy.slug} data-post-category={blogCategoryTrackingValue[item.category]} className="rounded-sm border border-divider bg-white p-5 text-brand-navy shadow-card transition-shadow hover:shadow-card-hover"><span className="text-caption text-slate-gray">{blogCategoryLabel(english ? "en" : "es", item.category)}</span><h3 className="mt-3 text-body-lg font-semibold leading-snug">{itemCopy.title}</h3><span className="mt-4 inline-block text-label-md">{english ? "Read article →" : "Leer artículo →"}</span></Link>;
        })}</div></section>}
      </Container>
    </div>
  </>;
}
