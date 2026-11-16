"use client";

import dynamic from "next/dynamic";

export const CookieBanner = dynamic(
  () => import("@/components/consent/CookieBanner").then((mod) => mod.CookieBanner),
  { ssr: false },
);

export const MetaPixel = dynamic(
  () => import("@/components/analytics/MetaPixel").then((mod) => mod.MetaPixel),
  { ssr: false },
);
