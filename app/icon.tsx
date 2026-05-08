import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "64px",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 16,
          background:
            "radial-gradient(circle at 30% 20%, rgba(59,130,246,0.85), transparent 55%), radial-gradient(circle at 80% 25%, rgba(167,139,250,0.85), transparent 55%), linear-gradient(180deg, #050A18, #020617)",
          color: "white",
          fontWeight: 700,
          letterSpacing: "-0.04em",
          fontSize: 26,
          boxShadow: "0 0 0 1px rgba(255,255,255,0.08) inset",
        }}
      >
        ATS
      </div>
    ),
    size,
  );
}

