import Image from "next/image";
import type { HomeContent } from "@/content/types";

/**
 * Archivos ya recortados y exportados en WebP. No reexportar ni recortar:
 * la terraza es el recorte ancho de la fila; la charla trae el único pie.
 */
const TEAM_PHOTOS = [
  {
    src: "/images/equipo/equipo-data-voices-terraza.webp",
    width: 960,
    height: 374,
    sizes: "(min-width: 1024px) 560px, 78vw",
  },
  {
    src: "/images/equipo/equipo-data-voices-conversacion.webp",
    width: 800,
    height: 623,
    sizes: "(min-width: 1024px) 280px, 78vw",
  },
  {
    src: "/images/equipo/charla-data-voices-media-party-buenos-aires.webp",
    width: 800,
    height: 623,
    sizes: "(min-width: 1024px) 280px, 78vw",
  },
] as const;

export function HomeTeamPhotos({ photos }: { photos: HomeContent["teamPhotos"] }) {
  return (
    <div className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-1 [scrollbar-color:var(--color-outline-variant)_transparent] [scrollbar-width:thin] desktop:grid desktop:grid-cols-[2fr_1fr_1fr] desktop:overflow-visible desktop:pb-0">
      {TEAM_PHOTOS.map((photo, index) => {
        const copy = photos[index];
        return (
          <figure
            key={photo.src}
            className="w-[min(78vw,320px)] shrink-0 snap-start desktop:w-auto desktop:min-w-0"
          >
            <div className="h-60 overflow-hidden rounded-xl">
              <Image
                src={photo.src}
                alt={copy.alt}
                width={photo.width}
                height={photo.height}
                sizes={photo.sizes}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            {copy.caption ? (
              <figcaption className="mt-2 text-caption text-on-surface-variant">{copy.caption}</figcaption>
            ) : null}
          </figure>
        );
      })}
    </div>
  );
}
