import type { SVGProps } from "react";

export function SoftwareIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="M9 8l-5 4 5 4" />
      <path d="M15 8l5 4-5 4" />
    </svg>
  );
}
