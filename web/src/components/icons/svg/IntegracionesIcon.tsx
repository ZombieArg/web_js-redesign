import type { SVGProps } from "react";

export function IntegracionesIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="M9 15l-2.5 2.5a2.5 2.5 0 0 1-3.5-3.5L5.5 11.5" />
      <path d="M15 9l2.5-2.5a2.5 2.5 0 0 1 3.5 3.5L18.5 12.5" />
      <path d="M8.5 15.5l7-7" />
    </svg>
  );
}
