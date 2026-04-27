import { ImageResponse } from "next/og"

export const size = {
  width: 32,
  height: 32,
}

export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "radial-gradient(circle at top left, rgba(255,255,255,0.25), transparent 38%), linear-gradient(135deg, #1d4ed8, #0f172a 72%)",
        borderRadius: "8px",
      }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        width="18"
        height="18"
        aria-hidden="true"
      >
        <path
          d="M12 3.75c-4.55 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 7.25a4.75 4.75 0 1 0 0 9.5"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.75"
        />
        <circle cx="16.7" cy="7.3" r="1.65" fill="white" />
      </svg>
    </div>,
    size
  )
}
