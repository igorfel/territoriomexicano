import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — Restaurante Mexicano em Natal`;
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
          alignItems: "center",
          background: "linear-gradient(135deg, #0c0a08 0%, #1f1913 100%)",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            fontSize: 24,
            letterSpacing: 12,
            textTransform: "uppercase",
            color: "#c9a25e",
          }}
        >
          Natal · Ponta Negra & Tirol
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 92,
            color: "#ece1cd",
            textAlign: "center",
            lineHeight: 1.05,
          }}
        >
          Território
        </div>
        <div
          style={{
            fontSize: 92,
            fontStyle: "italic",
            color: "#c9a25e",
            textAlign: "center",
            lineHeight: 1.05,
          }}
        >
          Mexicano
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 28,
            color: "#b3a488",
          }}
        >
          Rodízio · Tacos · Margaritas
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 10,
            background: "linear-gradient(90deg, #c2593a, #e0762e, #c9a25e)",
            display: "flex",
          }}
        />
      </div>
    ),
    size,
  );
}
