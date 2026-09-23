import clsx from "clsx";
import { Button } from "./Button";
import { Container } from "./Container";

interface CtaData {
  label: string;
  href: string;
  external?: boolean;
}

export function CtaBand({
  kicker,
  heading,
  subheading,
  primaryCta,
  secondaryCta,
  tone = "navy",
}: {
  kicker?: string;
  heading: string;
  subheading?: string;
  primaryCta: CtaData;
  secondaryCta?: CtaData;
  tone?: "navy" | "light";
}) {
  const dark = tone === "navy";
  return (
    <section className={clsx("py-section", dark ? "bg-brand-navy" : "bg-surface-container-low")}>
      <Container className="flex flex-col items-center gap-6 text-center">
        {kicker && (
          <span className={clsx("text-label-md", dark ? "text-white/70" : "text-signal-orange")}>
            {kicker}
          </span>
        )}
        <h2 className={clsx("max-w-[640px] text-headline-lg", dark ? "text-white" : "text-brand-navy")}>
          {heading}
        </h2>
        {subheading && (
          <p className={clsx("max-w-[560px] text-body-lg", dark ? "text-white/80" : "text-on-surface-variant")}>
            {subheading}
          </p>
        )}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button href={primaryCta.href} external={primaryCta.external} variant="primary" size="lg">
            {primaryCta.label}
          </Button>
          {secondaryCta && (
            <Button
              href={secondaryCta.href}
              external={secondaryCta.external}
              variant="secondary"
              size="lg"
              className={dark ? "!border-white !text-white hover:!bg-white hover:!text-brand-navy" : undefined}
            >
              {secondaryCta.label}
            </Button>
          )}
        </div>
      </Container>
    </section>
  );
}
