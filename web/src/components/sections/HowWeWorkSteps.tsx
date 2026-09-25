import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { NumberedStep } from "@/components/ui/NumberedStep";
import type { HomeContent } from "@/content/types";

export function HowWeWorkSteps({ howWeWork }: { howWeWork: HomeContent["howWeWork"] }) {
  return (
    <section className="py-section">
      <Container>
        <SectionHeading title={howWeWork.heading} align="center" />
        <div className="grid grid-cols-1 gap-4 tablet:grid-cols-2 desktop:grid-cols-4">
          {howWeWork.steps.map((step, i) => (
            <NumberedStep key={step.title} index={i + 1} title={step.title} caption={step.caption} />
          ))}
        </div>
      </Container>
    </section>
  );
}
