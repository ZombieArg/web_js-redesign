import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import type { HomeContent } from "@/content/types";

export function WhoWeAreCard({ whoWeAre }: { whoWeAre: HomeContent["whoWeAre"] }) {
  return (
    <section className="py-16">
      <Container>
        <Card className="flex flex-col gap-6 desktop:flex-row desktop:items-center desktop:justify-between">
          <div className="max-w-[640px]">
            <h2 className="text-headline-md text-brand-navy">{whoWeAre.heading}</h2>
            <p className="mt-4 text-body-md text-on-surface-variant">{whoWeAre.body}</p>
          </div>
          <div className="flex flex-col gap-3">
            {whoWeAre.badges.map((badge) => (
              <Badge key={badge} tone="neutral" className="justify-start">
                {badge}
              </Badge>
            ))}
          </div>
        </Card>
      </Container>
    </section>
  );
}
