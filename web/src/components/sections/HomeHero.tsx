import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import type { HomeContent } from "@/content/types";

export function HomeHero({ hero }: { hero: HomeContent["hero"] }) {
  return (
    <section className="py-section">
      <Container>
        <div className="grid items-start gap-10 min-[1280px]:grid-cols-[minmax(0,1.15fr)_minmax(240px,0.85fr)] min-[1280px]:gap-12">
          <div>
            <Badge tone="brand" className="mb-6">
              {hero.badge}
            </Badge>
            <h1 className="max-w-[820px] text-display-lg-mobile text-brand-navy desktop:text-display-lg">{hero.h1}</h1>
            <p className="mt-6 max-w-[600px] text-body-lg text-on-surface-variant">{hero.subhead}</p>
            <div className="mt-8">
              <Button href={hero.cta.href} data-cta-id="hero_diagnostico" data-cta-location="hero" data-cta-section="home" variant="primary" size="lg">
                {hero.cta.label}
              </Button>
            </div>
          </div>
          <Image
            src="/images/equipo/equipo-data-voices-mesa.webp"
            alt={hero.photoAlt}
            width={1200}
            height={1200}
            priority
            loading="eager"
            fetchPriority="high"
            sizes="(min-width: 1280px) 480px, (min-width: 1024px) calc(100vw - 160px), calc(100vw - 32px)"
            className="aspect-square h-auto w-full max-w-[520px] rounded-xl object-cover"
          />
        </div>
      </Container>
    </section>
  );
}
