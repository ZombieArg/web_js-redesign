import type { SVGProps } from "react";

export function BusquedaIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx={10.5} cy={10.5} r={6.5} />
      <path d="M20 20l-4.8-4.8" />
    </svg>
  );
}
