import type { ReactNode } from "react";
import clsx from "clsx";

type Tone = "neutral" | "brand" | "success" | "error";

const tones: Record<Tone, string> = {
  neutral: "bg-surface-container-high text-on-surface-variant",
  brand: "bg-primary-fixed text-on-primary-fixed",
  success: "bg-success-green/10 text-success-green",
  error: "bg-error-container text-on-error-container",
};

export function Badge({
  tone = "neutral",
  children,
  className,
}: {
  tone?: Tone;
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-3 py-1 text-label-md",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
