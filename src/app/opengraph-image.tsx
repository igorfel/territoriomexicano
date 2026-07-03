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
          background: "linear-gradient(135deg, #171210 0%, #2a201a 100%)",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            fontSize: 24,
            letterSpacing: 12,
            textTransform: "uppercase",
            color: "#c98a5e",
          }}
        >
          Natal · Ponta Negra & Tirol
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 92,
            color: "#f2e7d0",
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
            color: "#c98a5e",
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
            color: "#a8947a",
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
            background:
              "linear-gradient(90deg, #93301f 0 20%, #e3a458 20% 40%, #5c6142 40% 60%, #b65c38 60% 80%, #5aa39a 80% 100%)",
            display: "flex",
          }}
        />
      </div>
    ),
    size,
  );
}
