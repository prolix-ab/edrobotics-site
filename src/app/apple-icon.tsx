import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1c0000",
        }}
      >
        <svg width="118" height="118" viewBox="0 0 100 100" fill="#e63131">
          <polygon points="10,17 10,83 47,50" />
          <polygon points="40,5 40,95 92,50" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
