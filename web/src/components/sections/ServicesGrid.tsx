import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { IconTile } from "@/components/ui/IconTile";
import { Link } from "@/i18n/navigation";
import type { HomeContent } from "@/content/types";

export function ServicesGrid({ services }: { services: HomeContent["services"] }) {
  return (
    <section className="py-section">
      <Container>
        <SectionHeading title={services.heading} align="center" />
        <div className="grid grid-cols-1 gap-6 tablet:grid-cols-2">
          {services.items.map((item) => (
            <Card key={item.title}>
              <IconTile name={item.iconName} />
              <h3 className="mt-4 text-headline-md text-brand-navy">{item.title}</h3>
              <p className="mt-2 text-body-md text-on-surface-variant">{item.description}</p>
              {/* @ts-expect-error -- next-intl Link tipa href contra rutas conocidas de routing.ts */}
              <Link href={item.href} className="mt-4 inline-flex text-label-md text-signal-orange normal-case tracking-normal">
                {item.linkLabel} →
              </Link>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
