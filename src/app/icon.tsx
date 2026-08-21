import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: 7,
        }}
      >
        <svg width="21" height="21" viewBox="0 0 100 100" fill="#e63131">
          <polygon points="10,17 10,83 47,50" />
          <polygon points="40,5 40,95 92,50" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
