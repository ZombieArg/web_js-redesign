import { notFound } from "next/navigation";
import { blogPosts } from "@/content/blog/data";
import { routing } from "@/i18n/routing";

// blogPosts está vacío hoy (brief §2.1) — no genera params, cualquier
// slug resuelve 404 en vez de una ruta rota o contenido fabricado.
export function generateStaticParams() {
  return routing.locales.flatMap((locale) => blogPosts.map((post) => ({ locale, slug: post.slug })));
}

export default function Page() {
  notFound();
}
