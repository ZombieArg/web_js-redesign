import clsx from "clsx";
import { Link } from "@/i18n/navigation";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { RelatedGuideLink, RelatedGuidesBlock } from "@/content/types";

function blogHref(href: string): { pathname: "/blog/[slug]"; params: { slug: string } } {
  const slug = href.startsWith("/blog/") ? href.slice("/blog/".length) : href;
  return { pathname: "/blog/[slug]", params: { slug } };
}

function GuideCard({ link }: { link: RelatedGuideLink }) {
  return (
    <Card as="article" className="h-full">
      <h3 className="text-body-lg font-semibold leading-snug text-brand-navy">
        <Link href={blogHref(link.href)} className="text-brand-navy underline-offset-4 hover:underline">
          {link.anchor}
        </Link>
      </h3>
      <p className="mt-2 text-body-md text-on-surface-variant">{link.line}</p>
    </Card>
  );
}

/** Lista de notas internas. El título es h2, el mismo nivel que el resto de las secciones. */
export function RelatedGuidesSection({ guides }: { guides: RelatedGuidesBlock }) {
  const columns =
    guides.links.length >= 3
      ? "tablet:grid-cols-2 desktop:grid-cols-3"
      : guides.links.length === 2
        ? "tablet:grid-cols-2"
        : "max-w-[760px]";

  return (
    <section className="py-section">
      <Container>
        <SectionHeading title={guides.title} />
        <ul className={clsx("grid grid-cols-1 gap-6", columns)}>
          {guides.links.map((link) => (
            <li key={link.href}>
              <GuideCard link={link} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
