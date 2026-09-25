import posthog from "posthog-js";
import { POSTHOG_KEY } from "@/lib/constants";

/**
 * Wrapper único para eventos de producto. Los componentes llaman acá, no a
 * posthog directo: sin key configurada es un no-op silencioso (en local y
 * en cualquier entorno sin medición), y si algún día se cambia de
 * herramienta se toca un solo archivo.
 */
export function captureEvent(event: string, properties?: Record<string, unknown>) {
  if (!POSTHOG_KEY || typeof window === "undefined" || !posthog.__loaded) return;
  posthog.capture(event, properties);
}
