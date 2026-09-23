import type { SVGProps } from "react";

export function UsuariosIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="M17 20v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 5 18.5V20" />
      <path d="M9.5 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
      <path d="M19 20v-1.5a3.2 3.2 0 0 0-2.2-3.05" />
      <path d="M15.5 5.1a3 3 0 0 1 0 5.8" />
    </svg>
  );
}
