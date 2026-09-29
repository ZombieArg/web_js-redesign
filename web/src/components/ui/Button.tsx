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
  // Las props propias del componente se sacan acá para que NO lleguen al DOM.
  // Antes se hacía `const { ...rest } = props`, que no excluye nada: className
  // del llamador quedaba en rest y, al spreadearse después de className={classes},
  // pisaba todos los estilos del botón (un submit con className quedaba sin fondo
  // ni padding). variant y size además llegaban al elemento como atributos.
  const { variant = "primary", size = "md", iconRight, className, children, ...rest } = props;
  const classes = clsx(base, variants[variant], variant !== "ghost" && sizes[size], className);

  if ("href" in rest && rest.href) {
    const { href, external, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement> & {
      href: string;
      external?: boolean;
    };
    if (external) {
      return (
        // El spread va primero y className después, para que un className
        // entrante no pueda volver a pisar los estilos.
        <a {...anchorRest} href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
          {iconRight}
        </a>
      );
    }
    return (
      // @ts-expect-error -- next-intl Link tipa href contra las rutas conocidas de routing.ts
      <Link {...anchorRest} href={href} className={classes}>
        {children}
        {iconRight}
      </Link>
    );
  }

  return (
    <button {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)} className={classes}>
      {children}
      {iconRight}
    </button>
  );
}
