import clsx from "clsx";
import { Icon } from "@/components/icons/Icon";
import type { IconName } from "@/components/icons/icon-map";

export function IconTile({
  name,
  variant = "default",
  size = 48,
  className,
}: {
  name: IconName;
  variant?: "default" | "filled";
  size?: number;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "flex shrink-0 items-center justify-center rounded-md",
        variant === "filled" ? "bg-brand-navy text-white" : "bg-primary-fixed text-icon-navy",
        className,
      )}
      style={{ width: size, height: size }}
    >
      <Icon name={name} size={Math.round(size * 0.46)} />
    </div>
  );
}
