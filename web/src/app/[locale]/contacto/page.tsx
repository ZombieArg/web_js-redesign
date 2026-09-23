import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { TranslationPendingNotice } from "@/components/ui/TranslationPendingNotice";
import { ContactForm } from "@/components/forms/ContactForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo/metadata";
import { SITE_URL, CONTACT } from "@/lib/constants";
import { SCHEMA_IDS } from "@/lib/seo/ids";
import { contactoContent } from "@/content/contacto";
import { resolveContent } from "@/content/types";
import { routing } from "@/i18n/routing";

const PATH = "/contacto";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const { content, translationStatus } = resolveContent(locale, contactoContent);
  return buildMetadata({
    locale,
    path: PATH,
    title: content.seo.title,
    description: content.seo.description,
    translationStatus,
  });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const { content, translationStatus } = resolveContent(locale, contactoContent);

  return (
    <>
      {translationStatus === "pending" && <TranslationPendingNotice />}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "ContactPage",
              "@id": `${SITE_URL}${PATH}#webpage`,
              url: `${SITE_URL}${PATH}`,
              name: content.seo.title,
              inLanguage: locale,
              about: {
                "@id": SCHEMA_IDS.org,
                contactPoint: { "@type": "ContactPoint", email: CONTACT.email, telephone: CONTACT.phoneDisplay },
              },
            },
          ],
        }}
      />

      <section className="py-section">
        <Container className="grid grid-cols-1 gap-12 desktop:grid-cols-2">
          <div>
            <h1 className="text-display-lg-mobile text-brand-navy">{content.hero.h1}</h1>
            <p className="mt-6 text-body-lg text-on-surface-variant">{content.hero.subhead}</p>
            <dl className="mt-10 flex flex-col gap-2 text-body-md text-on-surface-variant">
              <div>
                <dt className="sr-only">Email</dt>
                <dd>
                  <a href={`mailto:${CONTACT.email}`} className="text-brand-navy">
                    {CONTACT.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="sr-only">Teléfono</dt>
                <dd>{CONTACT.phoneDisplay}</dd>
              </div>
              <div>
                <dt className="sr-only">Ciudad</dt>
                <dd>datavoices.com.ar</dd>
              </div>
            </dl>
            <p className="mt-6 text-caption text-outline">{content.afterSubmitNote}</p>
          </div>

          <ContactForm />
        </Container>
      </section>
    </>
  );
}
