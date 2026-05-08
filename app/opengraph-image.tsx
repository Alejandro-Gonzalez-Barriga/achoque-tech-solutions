import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px",
          background:
            "radial-gradient(900px circle at 20% 20%, rgba(59,130,246,0.28), transparent 55%), radial-gradient(900px circle at 80% 30%, rgba(167,139,250,0.22), transparent 55%), radial-gradient(1000px circle at 30% 85%, rgba(99,102,241,0.18), transparent 55%), linear-gradient(180deg, #020617, #050A18)",
          color: "white",
          fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 18,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background:
                "radial-gradient(circle at 30% 20%, rgba(59,130,246,0.85), transparent 55%), radial-gradient(circle at 80% 25%, rgba(167,139,250,0.85), transparent 55%), linear-gradient(180deg, #050A18, #020617)",
              boxShadow: "0 0 0 1px rgba(255,255,255,0.10) inset",
            }}
          >
            <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: "-0.04em" }}>
              ATS
            </div>
          </div>
          <div style={{ fontSize: 24, opacity: 0.9, fontWeight: 600 }}>
            {siteConfig.name}
          </div>
        </div>

        <div
          style={{
            marginTop: 26,
            display: "flex",
            flexDirection: "column",
            fontSize: 62,
            fontWeight: 800,
            letterSpacing: "-0.04em",
            lineHeight: 1.05,
          }}
        >
          <div style={{ display: "flex" }}>Software Development &</div>
          <div style={{ display: "flex" }}>Technology Consulting</div>
        </div>

        <div style={{ marginTop: 22, fontSize: 24, opacity: 0.82, maxWidth: 820, lineHeight: 1.35 }}>
          Build premium web, mobile, cloud, and AI-enabled products—fast, secure, and production-ready.
        </div>

        <div style={{ marginTop: 34, display: "flex", gap: 10, flexWrap: "wrap" }}>
          {["Web", "Mobile", "Cloud", "AI Integrations"].map((t) => (
            <div
              key={t}
              style={{
                fontSize: 18,
                padding: "10px 14px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}

