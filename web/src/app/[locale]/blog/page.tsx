import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { BlogDirectory } from "@/components/blog/BlogDirectory";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo/metadata";
import { BLOG_PUBLIC, visibleBlogPosts } from "@/content/blog/data";
import { routing } from "@/i18n/routing";

export function generateStaticParams() { return routing.locales.map((locale) => ({ locale })); }

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const english = locale === "en";
  return buildMetadata({
    locale,
    path: "/blog",
    title: english
      ? "Blog: guides to evaluate and implement AI in companies | Data Voices"
      : "Blog: guías para evaluar e implementar IA en empresas | Data Voices",
    description: english
      ? "Criteria and questions for choosing an AI consultancy, agents vs chatbots, WhatsApp chatbots. Practical guides for deciding before hiring."
      : "Criterios y preguntas para elegir consultora de IA, agentes vs chatbots, chatbots de WhatsApp. Guías prácticas para decidir antes de contratar.",
    translationStatus: "live",
    noindex: !BLOG_PUBLIC,
  });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("translation");

  const english = locale === "en";
  const posts = english ? visibleBlogPosts.filter((post) => post.en && post.translationStatus === "live") : visibleBlogPosts;
  if (!posts.length) return <section className="py-section"><Container><h1 className="text-center text-headline-lg text-brand-navy">Blog</h1><p className="mt-6 text-center text-body-lg text-on-surface-variant">{t("comingSoon")}</p></Container></section>;

  return <>
    <div className="bg-neutral-base py-12 desktop:py-16">
      <Container className="max-w-[960px]">
        <nav className="text-caption text-slate-gray" aria-label={english ? "Breadcrumb" : "Ruta de navegación"}><Link href="/" className="underline hover:text-brand-navy">{english ? "Home" : "Inicio"}</Link><span aria-hidden="true"> › </span>Blog</nav>
        <div className="mt-8">
          <h1 className="text-display-lg-mobile text-brand-navy desktop:text-display-lg">{english ? "Data Voices blog" : "Blog de Data Voices"}</h1>
          <p className="mt-5 max-w-[720px] text-body-lg text-on-surface-variant">{english ? "Guides to evaluate and implement AI in companies, with criteria you can use before hiring or building." : "Guías para evaluar e implementar IA en empresas, con criterios que podés usar antes de contratar o construir."}</p>
        </div>
        <BlogDirectory posts={posts} locale={locale} />
        <div className="mt-12 rounded-lg border border-divider bg-white p-7 desktop:p-10">
          <h2 className="text-headline-md text-brand-navy">{english ? "Have a specific process to review?" : "¿Tenés un proceso concreto para revisar?"}</h2>
          <p className="mt-3 text-body-md text-on-surface-variant">{english ? "Bring it to a first conversation with the team." : "Llevalo a una primera conversación con el equipo."}</p>
          <Button href="/contacto" data-cta-id="blog_index_cierre_diagnostico" data-cta-location="blog" className="mt-6">{english ? "Get a free diagnostic" : "Pedí un diagnóstico gratuito"}</Button>
        </div>
      </Container>
    </div>
  </>;
}
