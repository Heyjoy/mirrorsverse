import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Mirrorsverse - AI Technology Services";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0a0a1a 0%, #12102a 50%, #0a0a1a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "monospace",
          position: "relative",
        }}
      >
        {/* Grid dots */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, rgba(139,124,246,0.15) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        {/* Glow */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            width: "600px",
            height: "400px",
            borderRadius: "50%",
            background: "rgba(139,124,246,0.08)",
            filter: "blur(80px)",
          }}
        />
        {/* Brand */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
            position: "relative",
          }}
        >
          <div
            style={{
              fontSize: "24px",
              color: "#8b7cf6",
              letterSpacing: "0.1em",
            }}
          >
            MIRRORSVERSE
          </div>
          <div
            style={{
              fontSize: "64px",
              fontWeight: "bold",
              color: "#f0f0f5",
              textAlign: "center",
              lineHeight: 1.1,
            }}
          >
            Building Intelligent
            <br />
            Systems That Work
          </div>
          <div
            style={{
              fontSize: "20px",
              color: "rgba(240,240,245,0.5)",
            }}
          >
            北京镜界纪元科技有限公司 | AI Agent Development & Technical Services
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
