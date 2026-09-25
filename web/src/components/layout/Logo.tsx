import { Link } from "@/i18n/navigation";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className ?? ""}`} aria-label="Data Voices">
      <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-signal-orange" />
      <span className="font-wordmark text-[17px] font-bold text-brand-navy">Data Voices</span>
    </Link>
  );
}
