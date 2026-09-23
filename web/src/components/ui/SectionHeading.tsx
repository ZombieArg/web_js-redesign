import clsx from "clsx";
import { KickerLabel } from "./KickerLabel";

export function SectionHeading({
  kicker,
  title,
  subtitle,
  align = "left",
}: {
  kicker?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={clsx("mb-12 max-w-[760px]", align === "center" && "mx-auto text-center")}>
      {kicker && <KickerLabel>{kicker}</KickerLabel>}
      <h2 className="text-headline-md text-brand-navy desktop:text-headline-lg">{title}</h2>
      {subtitle && <p className="mt-4 text-body-lg text-on-surface-variant">{subtitle}</p>}
    </div>
  );
}
