import { ImageResponse } from "next/og";

// Fallback global de OG image (brief SEO/GEO ítem 6: "/og/default.jpg" no
// existía, 404 en todas las páginas). Se genera on-demand con next/og en vez
// de depender de un archivo estático que alguien tenía que subir a mano —
// vive en /opengraph-image (fuera de [locale], un solo fallback para todo el
// sitio). Páginas que en el futuro tengan imagen propia pasan `image` a
// buildMetadata() y este fallback deja de usarse en esa ruta.

export const alt = "Data Voices — Inteligencia artificial para empresas";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          backgroundColor: "#2b3674",
          padding: "80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div style={{ width: "20px", height: "20px", borderRadius: "9999px", backgroundColor: "#ff5722" }} />
          <div style={{ fontSize: 32, fontWeight: 700, color: "#ff5722", letterSpacing: "0.05em", textTransform: "uppercase" }}>
            Data Voices
          </div>
        </div>
        <div style={{ display: "flex", marginTop: "32px", fontSize: 64, fontWeight: 700, color: "#ffffff", lineHeight: 1.15, maxWidth: "920px" }}>
          Inteligencia artificial para empresas
        </div>
        <div style={{ display: "flex", marginTop: "24px", fontSize: 30, fontWeight: 400, color: "#97a1e7" }}>
          Asistentes de IA · Datos · Software a medida
        </div>
      </div>
    ),
    { ...size }
  );
}
