import { Container } from "@/components/ui/Container";
import { KickerLabel } from "@/components/ui/KickerLabel";
import { Button } from "@/components/ui/Button";
import { StatRow } from "@/components/ui/StatRow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconTile } from "@/components/ui/IconTile";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { NumberedStep } from "@/components/ui/NumberedStep";
import { AccordionFAQ } from "@/components/ui/AccordionFAQ";
import { CtaBand } from "@/components/ui/CtaBand";
import { ViabilitySlot } from "@/components/sections/ViabilitySlot";
import { Link } from "@/i18n/navigation";
import type { ServicePageContent } from "@/content/types";

export function ServicePageTemplate({ content }: { content: ServicePageContent }) {
  const { iconName, hero, stats, definition, viability, adoptionModalities, buildProcess, faq, closingCta } = content;

  return (
    <>
      <section className="py-section">
        <Container>
          <div className="mb-6 flex items-center gap-3">
            <IconTile name={iconName} size={40} />
            <Badge tone="brand">{hero.breadcrumbLabel}</Badge>
          </div>
          <h1 className="max-w-[820px] text-display-lg-mobile text-brand-navy desktop:text-display-lg">
            {hero.h1}
          </h1>
          <p className="mt-6 max-w-[640px] text-body-lg text-on-surface-variant">{hero.subhead}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={hero.primaryCta.href} external={hero.primaryCta.external} variant="primary" size="lg">
              {hero.primaryCta.label}
            </Button>
            {hero.secondaryCta && (
              <Button href={hero.secondaryCta.href} external={hero.secondaryCta.external} variant="secondary" size="lg">
                {hero.secondaryCta.label}
              </Button>
            )}
          </div>

          {stats && (
            <div className="mt-16 border-t border-divider pt-10">
              <StatRow stats={stats} />
            </div>
          )}
        </Container>
      </section>

      <section className="py-section">
        <Container>
          <KickerLabel>{definition.kicker}</KickerLabel>
          <div className="rounded-xl border-l-[3px] border-l-signal-orange border-y border-r border-divider bg-surface-container-low p-8">
            <h2 className="text-headline-md text-brand-navy">{definition.heading}</h2>
            <p className="mt-4 max-w-[760px] text-body-lg text-on-surface-variant">{definition.body}</p>
          </div>
        </Container>
      </section>

      <ViabilitySlot slot={viability} />

      {adoptionModalities && (
        <section className="py-section">
          <Container>
            <SectionHeading kicker={adoptionModalities.kicker} title={adoptionModalities.heading} />
            <div className="grid grid-cols-1 gap-6 tablet:grid-cols-3">
              {adoptionModalities.items.map((item) => (
                <Card key={item.title}>
                  <Badge tone="brand" className="mb-4">
                    {item.tag}
                  </Badge>
                  <IconTile name={item.iconName} />
                  <h3 className="mt-4 text-headline-md text-brand-navy">{item.title}</h3>
                  <p className="mt-2 text-body-md text-on-surface-variant">{item.description}</p>
                  {item.specs && (
                    <ul className="mt-4 flex flex-col gap-1 rounded-sm bg-surface-container-low p-3 font-mono text-caption text-on-surface-variant">
                      {item.specs.map((spec) => (
                        <li key={spec}>{spec}</li>
                      ))}
                    </ul>
                  )}
                  {/* @ts-expect-error -- next-intl Link tipa href contra rutas conocidas de routing.ts */}
                  <Link href={item.link.href} className="card-link mt-4 inline-flex text-label-md text-signal-orange normal-case tracking-normal">
                    {item.link.label} →
                  </Link>
                </Card>
              ))}
            </div>
          </Container>
        </section>
      )}

      <section id="como-se-construye" className="py-section">
        <Container>
          <SectionHeading kicker={buildProcess.kicker} title={buildProcess.heading} />
          <div className="grid grid-cols-1 gap-4 tablet:grid-cols-2 desktop:grid-cols-5">
            {buildProcess.steps.map((step, i) => (
              <NumberedStep key={step.title} index={i + 1} title={step.title} caption={step.caption} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-section">
        <Container className="text-center">
          <SectionHeading kicker={faq.kicker} title={faq.heading} align="center" />
          <AccordionFAQ items={faq.items} />
        </Container>
      </section>

      <CtaBand
        kicker={closingCta.kicker}
        heading={closingCta.heading}
        subheading={closingCta.subhead}
        primaryCta={closingCta.primaryCta}
        secondaryCta={closingCta.secondaryCta}
        tone="navy"
      />
    </>
  );
}
