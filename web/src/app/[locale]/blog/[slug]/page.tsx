import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HeadJsonLd } from "@/components/seo/HeadJsonLd";
import { TranslationPendingNotice } from "@/components/ui/TranslationPendingNotice";
import { ArticleBody, articleFaqSection, articleSections, readArticle } from "@/content/blog/markdown";
import { BLOG_PUBLIC, blogAuthors, blogCategoryLabels, blogCategoryTrackingValue, publishedBlogPosts, visibleBlogPosts } from "@/content/blog/data";
import { SITE_URL } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildBlogGraph } from "@/lib/seo/graphs/blog";
import { routing } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string; slug: string }> };

export const dynamicParams = false;

const relatedServices = {
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
} as const;

export function generateStaticParams() {
  return routing.locales.flatMap((locale) => visibleBlogPosts.map((post) => ({ locale, slug: post.slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = visibleBlogPosts.find((item) => item.slug === slug);
  if (!post) return { robots: { index: false, follow: false } };
  const metadata = buildMetadata({ locale, path: `/blog/${slug}`, title: `${post.seoTitle} | Data Voices`, description: post.excerpt, translationStatus: post.translationStatus, noindex: !BLOG_PUBLIC });
  if (locale !== "es") return metadata;
  return { ...metadata, openGraph: { ...metadata.openGraph, type: "article", publishedTime: post.publishedAt, modifiedTime: post.modifiedAt ?? post.publishedAt, authors: [`${SITE_URL}/nosotros`], section: blogCategoryLabels[post.category] } };
}

export default async function Page({ params }: Props) {
  const { locale, slug } = await params;
  const post = visibleBlogPosts.find((item) => item.slug === slug);
  if (!post) notFound();
  setRequestLocale(locale);

  const blocks = readArticle(post.slug);
  const sections = articleSections(blocks);
  const firstHeadingIndex = blocks.findIndex((block) => block.type === "heading");
  const introBlocks = firstHeadingIndex < 0 ? blocks : blocks.slice(0, firstHeadingIndex);
  const articleBlocks = firstHeadingIndex < 0 ? [] : blocks.slice(firstHeadingIndex);
  const faqSection = articleFaqSection(articleBlocks);
  const related = publishedBlogPosts.filter((item) => item.slug !== post.slug).sort((a, b) => Number(b.category === post.category) - Number(a.category === post.category)).slice(0, 3);

  return <>
    {locale === "en" && <TranslationPendingNotice />}
    {locale === "es" && post.publishedAt && faqSection && <HeadJsonLd data={{ "@context": "https://schema.org", "@graph": buildBlogGraph(post, locale, post.publishedAt, post.modifiedAt ?? post.publishedAt, faqSection.items) }} />}
    <div className="bg-neutral-base py-10 desktop:py-14">
      <Container>
        <nav className="mb-10 text-caption text-slate-gray" aria-label="Ruta de navegación"><Link href="/" className="underline hover:text-brand-navy">Inicio</Link><span aria-hidden="true"> › </span><Link href="/blog" className="underline hover:text-brand-navy">Blog</Link><span aria-hidden="true"> › </span><Link href="/blog" className="underline hover:text-brand-navy">{blogCategoryLabels[post.category]}</Link><span aria-hidden="true"> › </span><span>{post.breadcrumbTitle}</span></nav>
        <div className="mx-auto max-w-[820px]">
          <article className="min-w-0 max-w-[820px]">
            <span className="rounded-xs bg-primary-fixed px-2 py-1 text-caption font-semibold text-brand-navy">{blogCategoryLabels[post.category]}</span>
            <h1 className="mt-4 text-display-lg-mobile text-brand-navy desktop:text-[48px] desktop:leading-[1.12]">{post.title}</h1>
            <p className="mt-5 text-body-md text-on-surface-variant">Por {post.authors.map((author, index) => <span key={author}>{index > 0 && " "}<Link href="/nosotros" className="font-semibold text-brand-navy underline underline-offset-2">{blogAuthors[author].shortName}</Link>{author === "juanma" && ` (${blogAuthors[author].name})`}, {blogAuthors[author].jobTitle}{blogAuthors[author].credentials && `. ${blogAuthors[author].credentials}`}{index === post.authors.length - 1 ? "." : ";"}</span>)} <span className="mx-2 text-slate-gray">·</span> {post.readingMinutes} min de lectura</p>
            {post.publishedAt && <p className="mt-2 text-caption text-slate-gray"><time dateTime={post.modifiedAt ?? post.publishedAt}>Actualizado el {new Intl.DateTimeFormat("es-AR", { day: "numeric", month: "long", year: "numeric", timeZone: "America/Argentina/Buenos_Aires" }).format(new Date(`${(post.modifiedAt ?? post.publishedAt).slice(0, 10)}T12:00:00-03:00`))}</time></p>}
            <div className="mt-8 rounded-sm border-l-4 border-brand-navy bg-white p-6 shadow-card">
              <p className="text-body-lg leading-relaxed text-brand-navy">{post.lead}</p>
            </div>
            {introBlocks.length > 0 && <div className="mt-8"><ArticleBody blocks={introBlocks} /></div>}
            <nav className="mt-5 text-body-md text-brand-navy" aria-label="En esta guía">
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
            <div className="mt-14 rounded-lg border border-divider bg-white p-7 desktop:p-9"><h2 className="text-headline-md text-brand-navy">¿Tenés un proceso concreto para revisar?</h2><p className="mt-3 text-body-md text-on-surface-variant">Llevalo a una primera conversación con el equipo.</p><Button href="/contacto" data-cta-id="blog_post_cierre_diagnostico" data-cta-location="blog_article" className="mt-6">Pedí un diagnóstico gratuito</Button></div>
          </article>
        </div>
        <section className="mt-16 rounded-lg border border-divider bg-white p-7 desktop:p-9" aria-labelledby="servicios-relacionados"><h2 id="servicios-relacionados" className="text-headline-md text-brand-navy">Servicios relacionados</h2><div className="mt-5 flex flex-col gap-3 tablet:flex-row tablet:gap-8">{relatedServices[post.category].map((service) => <Link key={service.slug} href={service.href} data-service-slug={service.slug} data-cta-location="blog_article" className="text-body-lg font-semibold text-brand-navy underline underline-offset-2">{service.label} →</Link>)}</div></section>
        {related.length > 0 && <section className="mt-16 border-t border-divider pt-10"><h2 className="text-headline-md text-brand-navy">Notas relacionadas</h2><div className="mt-6 grid gap-4 tablet:grid-cols-3">{related.map((item) => <Link key={item.slug} href={{ pathname: "/blog/[slug]", params: { slug: item.slug } }} data-post-slug={item.slug} data-post-category={blogCategoryTrackingValue[item.category]} className="rounded-sm border border-divider bg-white p-5 text-brand-navy shadow-card transition-shadow hover:shadow-card-hover"><span className="text-caption text-slate-gray">{blogCategoryLabels[item.category]}</span><h3 className="mt-3 text-body-lg font-semibold leading-snug">{item.title}</h3><span className="mt-4 inline-block text-label-md">Leer artículo →</span></Link>)}</div></section>}
      </Container>
    </div>
  </>;
}
