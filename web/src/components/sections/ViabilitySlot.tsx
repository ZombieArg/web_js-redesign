import { SectionHeading } from "@/components/ui/SectionHeading";
import { ComparisonCard } from "@/components/ui/ComparisonCard";
import { Container } from "@/components/ui/Container";
import { Link } from "@/i18n/navigation";
import type { ViabilitySlot as ViabilitySlotData } from "@/content/types";

export function ViabilitySlot({ slot }: { slot: ViabilitySlotData | null }) {
  if (!slot) return null;

  return (
    <section className="py-section">
      <Container>
        <SectionHeading kicker="Matriz de viabilidad" title={slot.heading} />

        {slot.kind === "matrix" && (
          <div className="grid grid-cols-1 gap-6 tablet:grid-cols-2">
            <ComparisonCard tone="positive" tag={slot.positive.tag} items={slot.positive.items} />
            <ComparisonCard tone="negative" tag={slot.negative.tag} items={slot.negative.items} link={slot.negative.link} />
          </div>
        )}

        {slot.kind === "signals" && (
          <ul className="grid grid-cols-1 gap-4 tablet:grid-cols-3">
            {slot.items.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-divider bg-surface-container-lowest p-6 text-body-md text-on-surface-variant"
              >
                {item}
              </li>
            ))}
          </ul>
        )}

        {slot.kind === "mvpSupport" && (
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 gap-6 tablet:grid-cols-2">
              <div className="rounded-xl border border-divider bg-surface-container-lowest p-6">
                <h3 className="text-body-md font-semibold text-brand-navy">{slot.mvp.title}</h3>
                <p className="mt-2 text-body-md text-on-surface-variant">{slot.mvp.body}</p>
              </div>
              <div className="rounded-xl border border-divider bg-surface-container-lowest p-6">
                <h3 className="text-body-md font-semibold text-brand-navy">{slot.support.title}</h3>
                <p className="mt-2 text-body-md text-on-surface-variant">{slot.support.body}</p>
              </div>
            </div>
            <p className="text-body-md text-on-surface-variant">
              {slot.disambiguation.text}{" "}
              {/* @ts-expect-error -- next-intl Link tipa href contra rutas conocidas de routing.ts */}
              <Link href={slot.disambiguation.href} className="text-signal-orange">
                {slot.disambiguation.linkLabel} →
              </Link>
            </p>
          </div>
        )}
      </Container>
    </section>
  );
}
