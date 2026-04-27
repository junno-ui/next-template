"use client"

import { Icon } from "@iconify/react"

import { siteConfig } from "@/config/site"
import { BrandMark } from "./brand-logo"

type TemplateFloatingButtonProps = {
  showText?: boolean
}

export function TemplateFloatingButton({
  showText = true,
}: TemplateFloatingButtonProps) {
  return (
    <a
      href={siteConfig.templateUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Claim the free Clario template on Junno UI"
      className="group fixed right-4 bottom-4 z-50 flex max-w-[calc(100vw-2rem)] items-center gap-3 overflow-hidden rounded-2xl border border-white/15 bg-background/85 px-3 py-2.5 text-foreground shadow-[0_18px_60px_rgba(0,0,0,0.22)] ring-1 ring-black/5 backdrop-blur-2xl transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/25 hover:bg-background/95 hover:shadow-[0_22px_70px_rgba(0,0,0,0.28)] sm:right-6 sm:bottom-6 sm:px-4 dark:border-white/10 dark:bg-black/55 dark:text-white dark:ring-white/10 dark:hover:bg-black/70"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,oklch(0.72_0.16_55_/_18%),transparent_38%)] opacity-90 transition-opacity duration-300 group-hover:opacity-100"
      />

      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/45 to-transparent dark:via-white/25"
      />

      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/10 to-transparent opacity-60 dark:from-white/8"
      />

      <span className="relative flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/70 shadow-sm ring-1 ring-black/5 dark:bg-white/10 dark:ring-white/10">
        <BrandMark />
      </span>

      {showText && (
        <span className="relative hidden min-w-0 text-left sm:block">
          <span className="mb-1.5 inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-[9px] font-black tracking-[0.18em] text-primary uppercase ring-1 ring-primary/15">
            Free template
          </span>

          <span className="block text-[13px] leading-none font-semibold tracking-[-0.01em]">
            Claim Clario
          </span>

          <span className="mt-1.5 flex items-center gap-1 text-[11px] leading-none font-medium text-muted-foreground">
            Available on Junno UI
            <Icon
              icon="solar:arrow-right-up-linear"
              className="size-3 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </span>
        </span>
      )}
    </a>
  )
}
