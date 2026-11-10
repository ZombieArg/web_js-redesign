"use client";

import { useState } from "react";
import { Link } from "@/i18n/navigation";
import { captureEvent } from "@/lib/analytics";
import { blogAuthor, blogCategoryLabel, blogCopy, type BlogCategory, type BlogItem } from "@/content/blog/data";

const categoryTrackingValue: Record<BlogCategory, string> = {
  proveedores: "evaluar-proveedores",
  agentes: "agentes-asistentes",
  implementacion: "implementacion",
};

export function BlogDirectory({ posts, locale = "es" }: { posts: BlogItem[]; locale?: string }) {
  const english = locale === "en";
  const filters: { label: string; value: BlogCategory | "todas"; trackingValue: string }[] = english
    ? [
      { label: "All", value: "todas", trackingValue: "todas" },
      { label: "Evaluating vendors", value: "proveedores", trackingValue: "evaluar-proveedores" },
      { label: "AI agents and assistants", value: "agentes", trackingValue: "agentes-asistentes" },
      { label: "Implementation", value: "implementacion", trackingValue: "implementacion" },
    ]
    : [
      { label: "Todas", value: "todas", trackingValue: "todas" },
      { label: "Evaluar proveedores", value: "proveedores", trackingValue: "evaluar-proveedores" },
      { label: "Agentes y asistentes", value: "agentes", trackingValue: "agentes-asistentes" },
      { label: "Implementación", value: "implementacion", trackingValue: "implementacion" },
    ];
  const [filter, setFilter] = useState<BlogCategory | "todas">("todas");
  const visible = filter === "todas" ? posts : posts.filter((post) => post.category === filter);

  function selectFilter(item: (typeof filters)[number]) {
    if (filter === item.value) return;
    captureEvent("blog_filter_click", { filter: item.trackingValue });
    setFilter(item.value);
  }

  return <>
    <div className="mt-10 flex flex-wrap gap-2 border-b border-divider pb-7" role="group" aria-label={english ? "Filter articles" : "Filtrar artículos"}>
      {filters.map((item) => <button
        key={item.value}
        type="button"
        data-blog-filter={item.trackingValue}
        aria-pressed={filter === item.value}
        onClick={() => selectFilter(item)}
        className={`rounded-full border px-4 py-2 text-label-md transition-colors ${filter === item.value ? "border-brand-navy bg-brand-navy text-white" : "border-divider bg-white text-brand-navy hover:border-brand-navy"}`}
      >{item.label}</button>)}
    </div>
    <div className="divide-y divide-divider" aria-live="polite">
      {visible.map((post) => {
        const copy = blogCopy(post, english ? "en" : "es");
        return <article key={copy.slug} className="py-8 desktop:py-10">
          <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-caption text-slate-gray">
            <span className="rounded-xs bg-primary-fixed px-2 py-1 font-semibold text-brand-navy">{blogCategoryLabel(english ? "en" : "es", post.category)}</span>
            <span>{post.authors.map((author) => blogAuthor(author, english ? "en" : "es").shortName).join(english ? " and " : " y ")}</span>
            <span aria-hidden="true">·</span>
            <span>{post.readingMinutes} {english ? "min read" : "min de lectura"}</span>
          </div>
          <h2 className="max-w-[850px] text-[25px] font-semibold leading-tight text-brand-navy desktop:text-headline-md">
            <Link href={{ pathname: "/blog/[slug]", params: { slug: copy.slug } }} data-post-slug={copy.slug} data-post-category={categoryTrackingValue[post.category]} className="hover:underline hover:underline-offset-4">{copy.title}</Link>
          </h2>
          <p className="mt-3 max-w-[800px] text-body-md text-on-surface-variant desktop:text-body-lg">{copy.excerpt}</p>
          <Link href={{ pathname: "/blog/[slug]", params: { slug: copy.slug } }} data-post-slug={copy.slug} data-post-category={categoryTrackingValue[post.category]} className="mt-4 inline-block text-label-md text-brand-navy underline-offset-4 hover:underline">{english ? "Read article →" : "Leer artículo →"}</Link>
        </article>;
      })}
    </div>
  </>;
}
