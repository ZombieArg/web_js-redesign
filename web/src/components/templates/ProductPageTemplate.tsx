import { Container } from "@/components/ui/Container";
import { KickerLabel } from "@/components/ui/KickerLabel";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AccordionFAQ } from "@/components/ui/AccordionFAQ";
import { CtaBand } from "@/components/ui/CtaBand";
import { Badge } from "@/components/ui/Badge";
import type { ProductPageContent } from "@/content/types";

/** Template liviano para /cecilia: hero + definición + specs + CTA, sin matriz ni stats. */
export function ProductPageTemplate({ content }: { content: ProductPageContent }) {
  const { hero, definition, specs, faq, closingCta } = content;

  return (
    <>
      <section className="py-section">
        <Container>
          <Badge tone="brand" className="mb-6">
            {hero.breadcrumbLabel}
          </Badge>
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

      <section className="py-section">
        <Container>
          <SectionHeading kicker={specs.kicker} title={specs.heading} />
          <div className="grid grid-cols-1 gap-4 tablet:grid-cols-3">
            {specs.items.map((item) => (
              <div key={item.title} className="rounded-xl border border-divider bg-surface-container-lowest p-6">
                <h3 className="text-body-md font-semibold text-brand-navy">{item.title}</h3>
                <p className="mt-1 text-body-md text-on-surface-variant">{item.description}</p>
              </div>
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
