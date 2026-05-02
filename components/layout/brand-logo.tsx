"use client"

import Link from "next/link"

import { cn } from "@/lib/utils"

/* -------------------------------------------------------------------------- */
/*  Types                                                                      */
/* -------------------------------------------------------------------------- */

type LogoSize = "6" | "7" | "8" | "9" | "10"

export interface BrandLogoProps {
  className?: string
  iconOnly?: boolean
  showText?: boolean
  size?: LogoSize
}

/* -------------------------------------------------------------------------- */
/*  Config                                                                     */
/* -------------------------------------------------------------------------- */

const brandName = "Clario"

const sizeClasses: Record<
  LogoSize,
  {
    mark: string
    icon: string
    text: string
  }
> = {
  "6": {
    mark: "size-6 rounded-lg",
    icon: "size-3",
    text: "text-sm",
  },
  "7": {
    mark: "size-7 rounded-lg",
    icon: "size-3.5",
    text: "text-sm",
  },
  "8": {
    mark: "size-8 rounded-xl",
    icon: "size-4",
    text: "text-[15px]",
  },
  "9": {
    mark: "size-9 rounded-xl",
    icon: "size-[18px]",
    text: "text-base",
  },
  "10": {
    mark: "size-10 rounded-2xl",
    icon: "size-5",
    text: "text-lg",
  },
}

/* -------------------------------------------------------------------------- */
/*  Logo Mark                                                                  */
/* -------------------------------------------------------------------------- */

function LogoMark({ size = "8" }: { size?: LogoSize }) {
  const sizes = sizeClasses[size]

  return (
    <span
      className={cn(
        "relative flex shrink-0 items-center justify-center overflow-hidden",
        "bg-primary text-primary-foreground shadow-lg shadow-primary/20",
        "ring-1 ring-white/15 transition-all duration-300",
        "group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-primary/30",
        sizes.mark
      )}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]"
      />

      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.35),transparent_38%)]"
      />

      {/* Veloran-inspired orbital mark */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={cn("relative", sizes.icon)}
        aria-hidden="true"
      >
        <path
          d="M12 3.75c-4.55 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 7.25a4.75 4.75 0 1 0 0 9.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.65"
        />
        <circle cx="16.7" cy="7.3" r="1.65" fill="currentColor" />
      </svg>
    </span>
  )
}

/* -------------------------------------------------------------------------- */
/*  Wordmark                                                                   */
/* -------------------------------------------------------------------------- */

function Wordmark({ size = "8" }: { size?: LogoSize }) {
  const sizes = sizeClasses[size]

  return (
    <span
      className={cn(
        "font-bold text-foreground transition-opacity duration-300 select-none group-hover:opacity-85",
        sizes.text
      )}
    >
      Cla
      <span className="bg-gradient-to-r from-primary via-primary to-primary/65 bg-clip-text text-transparent">
        rio
      </span>
    </span>
  )
}

/* -------------------------------------------------------------------------- */
/*  BrandLogo - clickable                                                       */
/* -------------------------------------------------------------------------- */

export function BrandLogo({
  className,
  showText = true,
  size = "8",
}: BrandLogoProps) {
  return (
    <Link
      href="/"
      aria-label={`${brandName} home`}
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-2xl transition-all duration-300 outline-none",
        "focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className
      )}
    >
      <LogoMark size={size} />
      {showText && <Wordmark size={size} />}
    </Link>
  )
}
/* -------------------------------------------------------------------------- */
/*  BrandMark - non-clickable                                                   */
/* -------------------------------------------------------------------------- */

export function BrandMark({
  className,
  showText = true,
  size = "8",
}: BrandLogoProps) {
  return (
    <div
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-2xl",
        className
      )}
      aria-label={brandName}
    >
      <LogoMark size={size} />
      {showText && <Wordmark size={size} />}
    </div>
  )
}
