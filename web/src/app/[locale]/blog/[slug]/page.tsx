import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { TranslationPendingNotice } from "@/components/ui/TranslationPendingNotice";
import { ArticleBody, articleSections, readArticle } from "@/content/blog/markdown";
import { BLOG_PUBLIC, blogAuthors, blogCategoryLabels, visibleBlogPosts } from "@/content/blog/data";
import { NOINDEX_ALL } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo/metadata";
import { routing } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string; slug: string }> };

export const dynamicParams = false;

const visualSteps: Record<string, [string, string, string]> = {
  "como-elegir-consultora-inteligencia-artificial": ["Evidencia", "Método", "Responsables"],
  "agente-de-ia-vs-chatbot": ["Canal", "Fuente de verdad", "Acción permitida"],
  "como-elegir-chatbot-whatsapp-ia": ["Acceso oficial", "Datos propios", "Derivación"],
  "por-que-fallan-los-proyectos-de-ia": ["Proceso", "Piloto", "Producción"],
  "no-code-vs-desarrollo-a-medida-ia": ["No-code", "Producto", "A medida"],
};

export function generateStaticParams() {
  return routing.locales.flatMap((locale) => visibleBlogPosts.map((post) => ({ locale, slug: post.slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = visibleBlogPosts.find((item) => item.slug === slug);
  if (!post) return { robots: { index: false, follow: false } };
  return buildMetadata({ locale, path: `/blog/${slug}`, title: `${post.seoTitle} | Data Voices`, description: post.excerpt, translationStatus: post.translationStatus, noindex: !BLOG_PUBLIC });
}

export default async function Page({ params }: Props) {
  const { locale, slug } = await params;
  const post = visibleBlogPosts.find((item) => item.slug === slug);
  if (!post) notFound();
  setRequestLocale(locale);

  const blocks = readArticle(post.slug);
  const sections = articleSections(blocks);
  const related = visibleBlogPosts.filter((item) => item.slug !== post.slug).sort((a, b) => Number(b.category === post.category) - Number(a.category === post.category)).slice(0, 3);

  return <>
    {locale === "en" && <TranslationPendingNotice />}
    <div className="bg-neutral-base py-10 desktop:py-14">
      <Container>
        <nav className="mb-10 text-caption text-slate-gray" aria-label="Ruta de navegación"><Link href="/" className="underline hover:text-brand-navy">Inicio</Link><span aria-hidden="true"> › </span><Link href="/blog" className="underline hover:text-brand-navy">Blog</Link><span aria-hidden="true"> › </span><span>{blogCategoryLabels[post.category]}</span></nav>
        <div className="grid gap-10 desktop:grid-cols-[220px_minmax(0,1fr)] desktop:gap-12">
          <aside className="hidden desktop:block">
            <nav className="sticky top-28 rounded-lg border border-divider bg-white p-5" aria-label="En esta guía">
              <p className="mb-4 text-caption font-semibold uppercase tracking-wider text-slate-gray">En esta guía</p>
              <ol className="space-y-3 text-caption leading-snug text-brand-navy">{sections.map((section, index) => <li key={section.id}><a href={`#${section.id}`} className="hover:underline">{index + 1}. {section.text}</a></li>)}</ol>
            </nav>
          </aside>
          <article className="min-w-0 max-w-[820px]">
            <span className="rounded-xs bg-primary-fixed px-2 py-1 text-caption font-semibold text-brand-navy">{blogCategoryLabels[post.category]}</span>
            <h1 className="mt-4 text-display-lg-mobile text-brand-navy desktop:text-[48px] desktop:leading-[1.12]">{post.title}</h1>
            <p className="mt-5 text-body-md text-on-surface-variant">Por {post.authors.map((author, index) => <span key={author}>{index > 0 && " y "}<Link href="/nosotros" className="font-semibold text-brand-navy underline underline-offset-2">{blogAuthors[author].name}</Link></span>)} <span className="mx-2 text-slate-gray">·</span> {post.readingMinutes} min de lectura</p>
            {(!BLOG_PUBLIC || NOINDEX_ALL) && <p className="mt-2 text-caption text-slate-gray">Borrador para revisión editorial</p>}
            <div className="mt-8 rounded-sm border-l-4 border-brand-navy bg-white p-6 shadow-card">
              <p className="mb-2 text-caption font-semibold uppercase tracking-wider text-slate-gray">Respuesta directa</p>
              <p className="text-body-lg leading-relaxed text-brand-navy">{post.lead}</p>
            </div>
            <details className="mt-6 rounded-sm border border-divider bg-white p-5 desktop:hidden"><summary className="cursor-pointer font-semibold text-brand-navy">En esta guía</summary><ol className="mt-4 space-y-3 text-body-md text-brand-navy">{sections.map((section, index) => <li key={section.id}><a href={`#${section.id}`}>{index + 1}. {section.text}</a></li>)}</ol></details>
            <figure className="mt-8 overflow-hidden rounded-lg border border-divider bg-white" aria-label={`Esquema de ${post.title}`}>
              <div className="bg-brand-navy px-6 py-5 text-white"><span className="text-caption uppercase tracking-widest text-white/70">Mapa de decisión</span><p className="mt-1 text-headline-md">Del problema a una decisión concreta</p></div>
              <div className="grid gap-3 p-5 tablet:grid-cols-3">{visualSteps[post.slug].map((step, index) => <div key={step} className="rounded-sm bg-surface-container-low p-4"><span className="text-caption font-semibold text-slate-gray">0{index + 1}</span><p className="mt-3 text-label-md text-brand-navy">{step}</p></div>)}</div>
            </figure>
            <ArticleBody blocks={blocks} />
            <div className="mt-14 rounded-lg border border-divider bg-white p-7 desktop:p-9"><h2 className="text-headline-md text-brand-navy">¿Tenés un proceso concreto para revisar?</h2><p className="mt-3 text-body-md text-on-surface-variant">Llevalo a una primera conversación con el equipo.</p><Button href="/contacto" data-cta-id="cierre_diagnostico" data-cta-location="blog_article" className="mt-6">Pedí un diagnóstico gratuito</Button></div>
          </article>
        </div>
        <section className="mt-16 border-t border-divider pt-10"><h2 className="text-headline-md text-brand-navy">Notas relacionadas</h2><div className="mt-6 grid gap-4 tablet:grid-cols-3">{related.map((item) => <Link key={item.slug} href={{ pathname: "/blog/[slug]", params: { slug: item.slug } }} className="rounded-sm border border-divider bg-white p-5 text-brand-navy shadow-card transition-shadow hover:shadow-card-hover"><span className="text-caption text-slate-gray">{blogCategoryLabels[item.category]}</span><h3 className="mt-3 text-body-lg font-semibold leading-snug">{item.title}</h3><span className="mt-4 inline-block text-label-md">Leer artículo →</span></Link>)}</div></section>
      </Container>
    </div>
  </>;
}
