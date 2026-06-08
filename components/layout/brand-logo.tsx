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

const wrapperClasses: Record<LogoSize, string> = {
  "6": "p-1 rounded-lg",
  "7": "p-1.5 rounded-lg",
  "8": "p-2 rounded-xl",
  "9": "p-2.5 rounded-xl",
  "10": "p-3 rounded-2xl",
}

/* -------------------------------------------------------------------------- */
/*  BrandLogo — clickable                                                      */
/* -------------------------------------------------------------------------- */

export function BrandLogo({
  className,
  size = "8",
}: BrandLogoProps) {
  return (
    <Link
      href="/"
      aria-label="Home"
      className={cn(
        "group inline-flex items-center outline-none transition-all duration-300 rounded-md",
        "focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className
      )}
    >
      <Image
        src={logoPic}
        alt="Brand Logo"
        priority
        className={cn(
          "w-auto object-contain bg-primary text-primary-foreground shadow-lg shadow-primary/20", 
          heightClasses[size],
          wrapperClasses[size]
        )}
      />
    </Link>
  )
}

/* -------------------------------------------------------------------------- */
/*  BrandMark — non-clickable                                                  */
/* -------------------------------------------------------------------------- */

export function BrandMark({
  className,
  size = "8",
}: BrandLogoProps) {
  return (
    <div
      className={cn(
        "group inline-flex items-center",
        className
      )}
      aria-label="Brand Logo"
    >
      <Image
        src={logoPic}
        alt="Brand Logo"
        priority
        className={cn(
          "w-auto object-contain bg-primary text-primary-foreground shadow-lg shadow-primary/20", 
          heightClasses[size],
          wrapperClasses[size]
        )}
      />
    </div>
  )
}
