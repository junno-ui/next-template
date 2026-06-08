"use client"

import Link from "next/link"
import Image from "next/image"

import { cn } from "@/lib/utils"
import logoPic from "../../public/logo.png"

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

const heightClasses: Record<LogoSize, string> = {
  "6": "h-6",
  "7": "h-7",
  "8": "h-8",
  "9": "h-9",
  "10": "h-10",
}

const sizeClasses: Record<LogoSize, { mark: string; icon: string; text: string }> = {
  "6": { mark: "size-6 rounded-lg", icon: "size-3.5", text: "text-lg" },
  "7": { mark: "size-7 rounded-xl", icon: "size-4", text: "text-xl" },
  "8": { mark: "size-8 rounded-xl", icon: "size-5", text: "text-2xl" },
  "9": { mark: "size-9 rounded-2xl", icon: "size-5", text: "text-3xl" },
  "10": { mark: "size-10 rounded-2xl", icon: "size-6", text: "text-4xl" },
}

/* -------------------------------------------------------------------------- */
/*  Logo Mark                                                                  */
/* -------------------------------------------------------------------------- */

function LogoMark({ size = "8" }: { size?: LogoSize }) {
  const sizes = sizeClasses[size]
  const heightClass = heightClasses[size]

  return (
    <div className={cn("relative flex items-center justify-center p-1.5 bg-primary rounded-xl", heightClass, sizes.mark)}>
      <Image
        src={logoPic}
        alt="Brand Logo"
        className="w-auto h-full object-contain"
      />
    </div>
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
      Clario
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
      aria-label="Home"
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
        "group inline-flex items-center gap-2.5",
        className
      )}
      aria-label="Brand Logo"
    >
      <LogoMark size={size} />
      {showText && <Wordmark size={size} />}
    </div>
  )
}
