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
          "radial-gradient(circle at 26% 18%, rgba(255,255,255,0.42), transparent 32%), radial-gradient(circle at 78% 76%, rgba(34,211,238,0.5), transparent 36%), linear-gradient(135deg, #f97316 0%, #fb923c 34%, #0ea5e9 66%, #0f172a 100%)",
        borderRadius: "8px",
        boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.22)",
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
