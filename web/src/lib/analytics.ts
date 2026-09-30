import posthog from "posthog-js";
import { POSTHOG_KEY } from "@/lib/constants";
import { attributionContext, pageContext } from "@/lib/tracking";

/**
 * Wrapper único para eventos de producto. Los componentes llaman acá, no a
 * posthog directo: sin key configurada es un no-op silencioso (en local y
 * en cualquier entorno sin medición), y si algún día se cambia de
 * herramienta se toca un solo archivo.
 */
export function captureEvent(event: string, properties?: Record<string, unknown>) {
  if (!POSTHOG_KEY || typeof window === "undefined" || !posthog.__loaded) return;
  try {
    posthog.capture(event, {
      ...attributionContext(),
      ...pageContext(window.location.pathname),
      ...properties,
    });
  } catch {
    // Una falla de medición no debe cambiar el resultado del formulario.
  }
}
