import type { SVGProps } from "react";

export function CeciliaIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="M21 12a8 8 0 1 1-3.3-6.47" />
      <path d="M21 4v5h-5" />
      <path d="M9 10h.01" />
      <path d="M15 10h.01" />
      <path d="M8 15c1 1 2.2 1.5 4 1.5s3-.5 4-1.5" />
    </svg>
  );
}
