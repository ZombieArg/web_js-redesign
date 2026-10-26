"use client";

import { useRef } from "react";
import { useServerInsertedHTML } from "next/navigation";

export function HeadJsonLd({ data }: { data: object }) {
  const inserted = useRef(false);
  useServerInsertedHTML(() => {
    if (inserted.current) return null;
    inserted.current = true;
    return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
  });
  return null;
}
