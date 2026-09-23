import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import type { HomeContent } from "@/content/types";

export function HomeHero({ hero }: { hero: HomeContent["hero"] }) {
  return (
    <section className="py-section">
      <Container>
        <Badge tone="brand" className="mb-6">
          {hero.badge}
        </Badge>
        <h1 className="max-w-[820px] text-display-lg-mobile text-brand-navy desktop:text-display-lg">{hero.h1}</h1>
        <p className="mt-6 max-w-[600px] text-body-lg text-on-surface-variant">{hero.subhead}</p>
        <div className="mt-8">
          <Button href={hero.cta.href} variant="primary" size="lg">
            {hero.cta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
