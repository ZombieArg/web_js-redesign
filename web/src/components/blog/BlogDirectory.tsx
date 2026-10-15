"use client";

import { useState } from "react";
import { Link } from "@/i18n/navigation";
import { blogAuthors, blogCategoryLabels, type BlogCategory, type BlogItem } from "@/content/blog/data";

const filters: { label: string; value: BlogCategory | "todas" }[] = [
  { label: "Todas", value: "todas" },
  { label: "Evaluar proveedores", value: "proveedores" },
  { label: "Agentes y asistentes", value: "agentes" },
  { label: "Implementación", value: "implementacion" },
];

export function BlogDirectory({ posts }: { posts: BlogItem[] }) {
  const [filter, setFilter] = useState<BlogCategory | "todas">("todas");
  const visible = filter === "todas" ? posts : posts.filter((post) => post.category === filter);

  return <>
    <div className="mt-10 flex flex-wrap gap-2 border-b border-divider pb-7" role="group" aria-label="Filtrar artículos">
      {filters.map((item) => <button
        key={item.value}
        type="button"
        aria-pressed={filter === item.value}
        onClick={() => setFilter(item.value)}
        className={`rounded-full border px-4 py-2 text-label-md transition-colors ${filter === item.value ? "border-brand-navy bg-brand-navy text-white" : "border-divider bg-white text-brand-navy hover:border-brand-navy"}`}
      >{item.label}</button>)}
    </div>
    <div className="divide-y divide-divider" aria-live="polite">
      {visible.map((post) => <article key={post.slug} className="py-8 desktop:py-10">
        <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-caption text-slate-gray">
          <span className="rounded-xs bg-primary-fixed px-2 py-1 font-semibold text-brand-navy">{blogCategoryLabels[post.category]}</span>
          <span>{post.authors.map((author) => blogAuthors[author].shortName).join(" y ")}</span>
          <span aria-hidden="true">·</span>
          <span>{post.readingMinutes} min de lectura</span>
        </div>
        <h2 className="max-w-[850px] text-[25px] font-semibold leading-tight text-brand-navy desktop:text-headline-md">
          <Link href={{ pathname: "/blog/[slug]", params: { slug: post.slug } }} className="hover:underline hover:underline-offset-4">{post.title}</Link>
        </h2>
        <p className="mt-3 max-w-[800px] text-body-md text-on-surface-variant desktop:text-body-lg">{post.excerpt}</p>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: post.slug } }} className="mt-4 inline-block text-label-md text-brand-navy underline-offset-4 hover:underline">Leer artículo →</Link>
      </article>)}
    </div>
  </>;
}
