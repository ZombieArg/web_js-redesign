import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import { Link } from "@/i18n/navigation";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

interface BaseProps {
  variant?: Variant;
  size?: Size;
  iconRight?: ReactNode;
  className?: string;
  children: ReactNode;
}

type ButtonAsLink = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className"> & {
    href: string;
    external?: boolean;
  };

type ButtonAsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
    href?: undefined;
  };

type ButtonProps = ButtonAsLink | ButtonAsButton;

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm font-sans text-label-md tracking-[0.02em] transition-all duration-150 disabled:cursor-not-allowed disabled:bg-surface-container-high disabled:text-outline";

const variants: Record<Variant, string> = {
  primary: "bg-signal-orange text-white hover:bg-[#e64a17] hover:shadow-card-hover",
  secondary:
    "border border-brand-navy text-brand-navy bg-transparent hover:bg-brand-navy hover:text-white",
  ghost: "bg-transparent text-brand-navy px-2 hover:bg-surface-container-high",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-3",
  lg: "px-8 py-4 text-body-md",
};

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", iconRight, className, children } = props;
  const classes = clsx(base, variants[variant], variant !== "ghost" && sizes[size], className);

  if ("href" in props && props.href) {
    const { href, external, ...rest } = props;
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
          {iconRight}
        </a>
      );
    }
    return (
      // @ts-expect-error -- next-intl Link tipa href contra las rutas conocidas de routing.ts
      <Link href={href} className={classes} {...rest}>
        {children}
        {iconRight}
      </Link>
    );
  }

  const { ...rest } = props as ButtonAsButton;
  return (
    <button className={classes} {...rest}>
      {children}
      {iconRight}
    </button>
  );
}
