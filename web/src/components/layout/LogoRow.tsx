import Image, { type StaticImageData } from "next/image";
import { Link } from "@/i18n/navigation";

/**
 * Logos de clientes a color y en tamaño real (antes iban en grayscale al 60%,
 * con color solo en hover — feedback de diseño del preview 28/09/2026).
 *
 * El bloque entero linkea al portafolio: quien reconoce un logo es el que más
 * probablemente quiera ver el caso.
 */
export function LogoRow({
  heading,
  logos,
  linkLabel,
}: {
  heading: string;
  logos: { src: StaticImageData; alt: string }[];
  linkLabel: string;
}) {
  return (
    <div className="border-t border-divider py-10">
      <div className="mb-6 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        <p className="text-label-md text-outline">{heading}</p>
        <Link
          href="/casos"
          className="text-label-md text-signal-orange normal-case tracking-normal hover:underline"
        >
          {linkLabel} →
        </Link>
      </div>
      <div className="flex flex-wrap items-center gap-x-12 gap-y-8">
        {logos.map((logo) => (
          <Image
            key={logo.alt}
            src={logo.src}
            alt={logo.alt}
            className="h-14 w-auto object-contain transition-opacity duration-200 hover:opacity-80"
          />
        ))}
      </div>
    </div>
  );
}
