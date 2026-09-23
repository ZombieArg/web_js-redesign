import { iconMap, type IconName } from "./icon-map";

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
  /** Texto accesible. Si se omite, el ícono se marca decorativo (aria-hidden). */
  title?: string;
}

/**
 * API pública única para los 12 íconos del design system. Nunca importar
 * los componentes SVG individuales fuera de components/icons/.
 */
export function Icon({ name, size = 24, className, title }: IconProps) {
  const Glyph = iconMap[name];
  if (!Glyph) return null;

  if (title) {
    return <Glyph width={size} height={size} className={className} role="img" aria-label={title} />;
  }
  return <Glyph width={size} height={size} className={className} aria-hidden="true" focusable="false" />;
}
