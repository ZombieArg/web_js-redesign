import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/icons/Icon";
import { Link } from "@/i18n/navigation";
import type { HomeContent } from "@/content/types";

export function CasesGrid({ cases }: { cases: HomeContent["cases"] }) {
  return (
    <section className="py-section">
      <Container>
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-headline-md text-brand-navy desktop:text-headline-lg">{cases.heading}</h2>
          <Link href="/casos" className="text-label-md text-signal-orange normal-case tracking-normal">
            {cases.linkLabel} →
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 tablet:grid-cols-2">
          {cases.items.map((item) => (
            <Card key={item.title} as="article">
              <div className="mb-4 flex items-center justify-between">
                <Badge tone="neutral">{item.tag}</Badge>
                <Icon name="integraciones" className="text-icon-navy" />
              </div>
              <h3 className="text-headline-md text-brand-navy">{item.title}</h3>
              <p className="mt-2 text-body-md text-on-surface-variant">{item.description}</p>
              {item.caption && <p className="mt-3 text-caption text-outline">{item.caption}</p>}
              {/* @ts-expect-error -- next-intl Link tipa href contra rutas conocidas de routing.ts */}
              <Link href={item.href} className="mt-4 inline-flex text-label-md text-signal-orange normal-case tracking-normal">
                Ver más →
              </Link>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
