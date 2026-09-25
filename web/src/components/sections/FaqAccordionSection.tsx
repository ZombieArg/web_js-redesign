import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AccordionFAQ } from "@/components/ui/AccordionFAQ";
import type { FaqSection } from "@/content/types";

export function FaqAccordionSection({ faq }: { faq: FaqSection }) {
  return (
    <section className="py-section">
      <Container className="text-center">
        <SectionHeading kicker={faq.kicker} title={faq.heading} align="center" />
        <AccordionFAQ items={faq.items} />
      </Container>
    </section>
  );
}
