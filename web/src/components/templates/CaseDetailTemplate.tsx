import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { IconTile } from "@/components/ui/IconTile";
import { CtaBand } from "@/components/ui/CtaBand";
import type { CaseItem } from "@/content/types";

/**
 * Renderiza texto largo, métricas y video de forma condicional — sin esos
 * campos (brief §2.2, pendiente de Íntimo Growth), no rompe ni muestra
 * relleno inventado.
 */
export function CaseDetailTemplate({ item }: { item: CaseItem }) {
  return (
    <>
      <section className="py-section">
        <Container>
          <div className="mb-6 flex items-center gap-3">
            <IconTile name={item.iconName} />
            <Badge tone="brand">{item.tag}</Badge>
          </div>
          <h1 className="max-w-[760px] text-display-lg-mobile text-brand-navy desktop:text-headline-lg">
            {item.title}
          </h1>
          <p className="mt-6 max-w-[640px] text-body-lg text-on-surface-variant">{item.summary}</p>

          {item.body && <p className="mt-6 max-w-[720px] text-body-md text-on-surface-variant">{item.body}</p>}

          {item.highlights && (
            <ul className="mt-8 grid grid-cols-1 gap-3 tablet:grid-cols-2">
              {item.highlights.map((h) => (
                <li
                  key={h.text}
                  className="rounded-lg border border-divider bg-surface-container-lowest px-4 py-3 text-body-md text-on-surface-variant"
                >
                  <span aria-hidden="true" className="mr-2">
                    {h.emoji}
                  </span>
                  {h.text}
                </li>
              ))}
            </ul>
          )}

          {item.metrics && (
            <div className="mt-8 grid grid-cols-1 gap-6 tablet:grid-cols-3">
              {item.metrics.map((metric) => (
                <div key={metric.label}>
                  <p className="text-headline-lg text-brand-navy">{metric.value}</p>
                  <p className="mt-1 text-body-md text-on-surface-variant">{metric.label}</p>
                </div>
              ))}
            </div>
          )}

          {item.videoEmbedUrl && (
            <div className="mt-8 aspect-video w-full max-w-[720px] overflow-hidden rounded-xl border border-divider">
              <iframe
                src={item.videoEmbedUrl}
                title={item.title}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          )}

          {item.productUrl && (
            <a href={item.productUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex text-label-md text-signal-orange normal-case tracking-normal">
              Visitar producto →
            </a>
          )}
        </Container>
      </section>

      <CtaBand
        heading="¿Un proceso parecido en tu empresa?"
        primaryCta={{ label: "Pedí un diagnóstico gratuito", href: "/contacto" }}
        tone="navy"
      />
    </>
  );
}
