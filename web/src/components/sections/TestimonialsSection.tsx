import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import type { HomeContent } from "@/content/types";
import robRomero from "@/assets/testimonials/rob-romero.jpeg";
import ulisesGuibelalde from "@/assets/testimonials/ulises-guibelalde.png";

const PHOTOS: Record<string, typeof robRomero> = {
  "rob-romero": robRomero,
  "ulises-guibelalde": ulisesGuibelalde,
};

export function TestimonialsSection({ testimonials }: { testimonials: HomeContent["testimonials"] }) {
  // Ningún testimonio se renderiza con imagen rota ni placeholder disfrazado:
  // si no hay foto real en PHOTOS, se omite el <Image>, nunca un <img> roto.
  return (
    <section className="py-section">
      <Container>
        <SectionHeading title={testimonials.heading} align="center" />
        <div className="grid grid-cols-1 gap-6 tablet:grid-cols-2">
          {testimonials.items.map((item) => {
            const photo = item.photoKey ? PHOTOS[item.photoKey] : undefined;
            return (
              <Card key={item.author}>
                <p className="text-body-lg text-on-surface-variant">“{item.quote}”</p>
                <div className="mt-6 flex items-center gap-3">
                  {photo && (
                    <Image
                      src={photo}
                      alt={item.author}
                      width={44}
                      height={44}
                      className="h-11 w-11 rounded-full object-cover"
                    />
                  )}
                  <div>
                    <p className="text-body-md font-semibold text-on-surface">{item.author}</p>
                    <p className="text-caption text-on-surface-variant">{item.role}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
