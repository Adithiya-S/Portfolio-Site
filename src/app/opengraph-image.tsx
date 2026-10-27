import { ImageResponse } from "next/og";

export const alt = "Adithiya | Freelance Web Developer for Small Businesses";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          backgroundColor: "#0c0a08",
          color: "#ffffff",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "16px",
              height: "16px",
              borderRadius: "50%",
              backgroundColor: "#c9a45a",
            }}
          />
          <span
            style={{
              fontSize: "28px",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              color: "#c9a45a",
            }}
          >
            Adithiya .dev
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <h1
            style={{
              fontSize: "64px",
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: "-0.04em",
              color: "#ffffff",
              margin: 0,
            }}
          >
            Fast websites &amp; full-stack web apps.
          </h1>
          <p
            style={{
              fontSize: "26px",
              lineHeight: 1.4,
              color: "#a8a29e",
              margin: 0,
              maxWidth: "900px",
            }}
          >
            Direct engineering for small businesses and startups. 5 live projects in production.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "32px",
            borderTop: "1px solid #26221d",
            fontSize: "20px",
            color: "#78716c",
          }}
        >
          <span>Chennai, India · SRM IST Ramapuram</span>
          <span style={{ color: "#c9a45a" }}>Replies on WhatsApp in 12h</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
