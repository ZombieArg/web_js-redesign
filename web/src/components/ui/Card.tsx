import type { ReactNode } from "react";
import clsx from "clsx";

export function Card({
  children,
  className,
  as: Component = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "article";
}) {
  return (
    <Component
      className={clsx(
        "rounded-xl border border-divider bg-surface-container-lowest p-8 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card-hover",
        className,
      )}
    >
      {children}
    </Component>
  );
}
