import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { BlogDirectory } from "@/components/blog/BlogDirectory";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { TranslationPendingNotice } from "@/components/ui/TranslationPendingNotice";
import { buildMetadata } from "@/lib/seo/metadata";
import { BLOG_PUBLIC, visibleBlogPosts } from "@/content/blog/data";
import { routing } from "@/i18n/routing";

export function generateStaticParams() { return routing.locales.map((locale) => ({ locale })); }

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({ locale, path: "/blog", title: "Blog: guías para evaluar e implementar IA en empresas | Data Voices", description: "Criterios y preguntas para elegir consultora de IA, agentes vs chatbots, chatbots de WhatsApp. Guías prácticas para decidir antes de contratar.", translationStatus: "pending", noindex: !BLOG_PUBLIC });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("translation");

  if (!visibleBlogPosts.length) return <section className="py-section"><Container><h1 className="text-center text-headline-lg text-brand-navy">Blog</h1><p className="mt-6 text-center text-body-lg text-on-surface-variant">{t("comingSoon")}</p></Container></section>;

  return <>
    {locale === "en" && <TranslationPendingNotice />}
    <div className="bg-neutral-base py-12 desktop:py-16">
      <Container className="max-w-[960px]">
        <nav className="text-caption text-slate-gray" aria-label="Ruta de navegación"><Link href="/" className="underline hover:text-brand-navy">Inicio</Link><span aria-hidden="true"> › </span>Blog</nav>
        <div className="mt-8">
          <h1 className="text-display-lg-mobile text-brand-navy desktop:text-display-lg">Blog de Data Voices</h1>
          <p className="mt-5 max-w-[720px] text-body-lg text-on-surface-variant">Guías para evaluar e implementar IA en empresas, con criterios que podés usar antes de contratar o construir.</p>
        </div>
        <BlogDirectory posts={visibleBlogPosts} />
        <div className="mt-12 rounded-lg border border-divider bg-white p-7 desktop:p-10">
          <h2 className="text-headline-md text-brand-navy">¿Tenés un proceso concreto para revisar?</h2>
          <p className="mt-3 text-body-md text-on-surface-variant">Llevalo a una primera conversación con el equipo.</p>
          <Button href="/contacto" data-cta-id="blog_index_cierre_diagnostico" data-cta-location="blog" className="mt-6">Pedí un diagnóstico gratuito</Button>
        </div>
      </Container>
    </div>
  </>;
}
