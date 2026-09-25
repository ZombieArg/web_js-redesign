import clsx from "clsx";
import { Link } from "@/i18n/navigation";

export function ComparisonCard({
  tone,
  tag,
  items,
  link,
}: {
  tone: "positive" | "negative";
  tag: string;
  items: string[];
  link?: { label: string; href: string };
}) {
  const positive = tone === "positive";
  return (
    <div
      className={clsx(
        "rounded-xl border p-6",
        positive ? "border-success-green/30 bg-success-green/5" : "border-divider bg-surface-container-low",
      )}
    >
      <span
        className={clsx(
          "inline-flex rounded-full px-3 py-1 text-label-md",
          positive ? "bg-success-green/15 text-success-green" : "border border-outline-variant text-on-surface-variant",
        )}
      >
        {tag}
      </span>
      <ul className="mt-4 flex flex-col gap-3">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-body-md text-on-surface-variant">
            <span aria-hidden="true" className={positive ? "text-success-green" : "text-outline"}>
              {positive ? "✓" : "–"}
            </span>
            {item}
          </li>
        ))}
      </ul>
      {link && (
        // @ts-expect-error -- next-intl Link tipa href contra rutas conocidas de routing.ts
        <Link href={link.href} className="mt-4 inline-flex text-label-md text-signal-orange normal-case tracking-normal">
          {link.label} →
        </Link>
      )}
    </div>
  );
}
