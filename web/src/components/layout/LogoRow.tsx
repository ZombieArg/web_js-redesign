import Image, { type StaticImageData } from "next/image";

export function LogoRow({
  heading,
  logos,
}: {
  heading: string;
  logos: { src: StaticImageData; alt: string }[];
}) {
  return (
    <div className="border-t border-divider py-10">
      <p className="mb-6 text-label-md text-outline">{heading}</p>
      <div className="flex flex-wrap items-center gap-x-12 gap-y-6">
        {logos.map((logo) => (
          <Image
            key={logo.alt}
            src={logo.src}
            alt={logo.alt}
            className="h-8 w-auto object-contain grayscale opacity-60 transition-all duration-200 hover:grayscale-0 hover:opacity-100"
          />
        ))}
      </div>
    </div>
  );
}
