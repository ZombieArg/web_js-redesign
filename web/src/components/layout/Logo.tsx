import Image from "next/image";
import { Link } from "@/i18n/navigation";

/**
 * Isotipo real + wordmark. El isotipo es solo la marca (sin texto), así que
 * acompaña al wordmark en vez de duplicarlo. Vive en public/ porque es el mismo
 * archivo que sirve de favicon (src/app/icon.png es idéntico).
 *
 * tone="inverse" para fondos oscuros (footer): el naranja del isotipo funciona
 * igual sobre navy, solo cambia el color del wordmark.
 */
export function Logo({
  className,
  tone = "default",
}: {
  className?: string;
  tone?: "default" | "inverse";
}) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className ?? ""}`} aria-label="Data Voices">
      <Image
        src="/logopng1.png"
        alt=""
        width={284}
        height={275}
        className="h-6 w-auto"
        priority
      />
      <span
        className={`font-wordmark text-[17px] font-bold ${
          tone === "inverse" ? "text-white" : "text-brand-navy"
        }`}
      >
        Data Voices
      </span>
    </Link>
  );
}
