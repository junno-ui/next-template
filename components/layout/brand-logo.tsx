"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"

// ─── Shared types ─────────────────────────────────────────────────────────────

export interface BrandLogoProps {
  className?: string
  /** Show just the icon mark, no wordmark */
  iconOnly?: boolean
  /** Size of the icon container (Tailwind size-* token, e.g. "8") */
  size?: string
}

// ─── Shared inner visuals ─────────────────────────────────────────────────────

function LogoMark({ size = "8" }: { size?: string }) {
  return (
    <span
      className={cn(
        `relative flex size-${size} shrink-0 items-center justify-center overflow-hidden rounded-xl`,
        "bg-gradient-to-br from-primary/20 via-primary/10 to-transparent",
        "ring-1 ring-primary/20 transition-all duration-300",
        "group-hover:ring-primary/40 group-hover:shadow-[0_0_16px_0] group-hover:shadow-primary/20"
      )}
    >
      {/* Soft glow on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, color-mix(in oklch, var(--color-primary) 20%, transparent) 0%, transparent 70%)",
        }}
      />
      {/* SVG "N" spark mark */}
      <svg
        viewBox="0 0 20 20"
        fill="none"
        className="relative size-4 text-primary"
        aria-hidden
      >
        <rect x="3" y="3" width="3" height="14" rx="1.5" fill="currentColor" opacity="0.9" />
        <rect x="14" y="3" width="3" height="14" rx="1.5" fill="currentColor" opacity="0.9" />
        <path
          d="M6 3.5 L14 16.5"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.85"
        />
        <circle cx="16.5" cy="4" r="1.8" fill="currentColor" opacity="0.6" />
      </svg>
    </span>
  )
}

function Wordmark() {
  return (
    <span className="select-none text-[15px] font-bold tracking-tight text-foreground transition-opacity duration-200 group-hover:opacity-80">
      Nexus
      <span className="ml-[1px] bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
        UI
      </span>
    </span>
  )
}

// ─── BrandLogo — with Link wrapper (default) ──────────────────────────────────

/**
 * Full logo wrapped in a Next.js Link.
 * Use in the header nav and anywhere a clickable logo is needed.
 */
export function BrandLogo({ className, iconOnly = false, size = "8" }: BrandLogoProps) {
  return (
    <Link
      href="/"
      aria-label="NexusUI home"
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-primary/60",
        className
      )}
    >
      <LogoMark size={size} />
      {!iconOnly && <Wordmark />}
    </Link>
  )
}

// ─── BrandMark — without anchor (for nested use) ──────────────────────────────

/**
 * Same visual as BrandLogo but rendered as a plain <div>.
 * Use inside SheetTitle, modal headers, or any element that can't contain an <a>.
 */
export function BrandMark({ className, iconOnly = false, size = "8" }: BrandLogoProps) {
  return (
    <div
      className={cn(
        "group inline-flex items-center gap-2.5",
        className
      )}
    >
      <LogoMark size={size} />
      {!iconOnly && <Wordmark />}
    </div>
  )
}
