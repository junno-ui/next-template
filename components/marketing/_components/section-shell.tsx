"use client"

import * as React from "react"

import { Reveal } from "@/components/marketing/_components/reveal"
import { cn } from "@/lib/utils"

type SectionShellProps = {
  id?: string
  children: React.ReactNode
  className?: string
  containerClassName?: string
  background?: "none" | "soft" | "dense"
}

export function SectionShell({
  id,
  children,
  className,
  containerClassName,
  background = "soft",
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn("relative isolate overflow-hidden py-24 sm:py-28", className)}
    >
      {background !== "none" && (
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-background" />
          <div
            className={cn(
              "bg-hex-dots absolute inset-0",
              background === "dense" ? "opacity-[0.14]" : "opacity-[0.1]"
            )}
          />
          <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-background via-background/80 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_72%_48%_at_50%_20%,transparent_10%,rgba(255,255,255,0.34)_70%,rgba(255,255,255,0.82)_100%)] dark:bg-[radial-gradient(ellipse_72%_48%_at_50%_20%,transparent_10%,rgba(0,0,0,0.48)_70%,rgba(0,0,0,0.84)_100%)]" />
          <div className="absolute top-0 left-1/2 h-px w-[min(86vw,900px)] -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/35 to-transparent" />
        </div>
      )}

      <div className={cn("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", containerClassName)}>
        {children}
      </div>
    </section>
  )
}

type SectionHeaderProps = {
  eyebrow: string
  title: React.ReactNode
  description: string
  align?: "center" | "left"
  className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <Reveal
      className={cn(
        "mb-12 max-w-3xl sm:mb-14",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-background/80 px-4 py-2 text-[11px] font-semibold text-primary uppercase ring-1 ring-primary/20 backdrop-blur-xl dark:bg-white/[0.035]">
        <span className="relative flex size-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/70" />
          <span className="relative inline-flex size-2 rounded-full bg-primary" />
        </span>
        {eyebrow}
      </div>

      <h2 className="template-heading text-4xl leading-none font-bold text-balance text-foreground sm:text-5xl md:text-6xl dark:text-white">
        {title}
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-pretty text-muted-foreground sm:text-base dark:text-white/64">
        {description}
      </p>
    </Reveal>
  )
}
