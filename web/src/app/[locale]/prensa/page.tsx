import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildMetadata } from "@/lib/seo/metadata";
import { prensa } from "@/content/prensa/data";
import { routing } from "@/i18n/routing";

import infobae from "@/assets/press/infobae-nota.jpg";
import c5n from "@/assets/press/c5n-nota.jpg";
import perfil from "@/assets/press/perfil-nota.jpg";
import puntal from "@/assets/press/puntal-nota.jpg";

const IMAGES = { infobae, c5n, perfil, puntal };

const PATH = "/prensa";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    locale,
    path: PATH,
    title: "Prensa | Data Voices",
    description: "Data Voices en los medios.",
  });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <section className="py-section">
      <Container>
        <SectionHeading kicker="Reputación" title="Prensa" align="center" />
        <div className="grid grid-cols-1 gap-6 tablet:grid-cols-2">
          {prensa.map((item) => (
            <a
              key={item.slug}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-xl border border-divider bg-surface-container-lowest shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card-hover"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={IMAGES[item.imageKey as keyof typeof IMAGES]}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="text-label-md text-signal-orange">{item.source}</span>
                <h2 className="mt-2 text-body-md font-semibold text-brand-navy">{item.title}</h2>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
