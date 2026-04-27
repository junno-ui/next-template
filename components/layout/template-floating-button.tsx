"use client"

import { Icon } from "@iconify/react"

import { siteConfig } from "@/config/site"

export function TemplateFloatingButton() {
  return (
    <a
      href={siteConfig.templateUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Claim the free Clario template on Junno UI"
      className="group fixed right-4 bottom-4 z-50 flex max-w-[calc(100vw-2rem)] items-center gap-3 overflow-hidden rounded-[1.35rem] border border-white/20 bg-background/88 px-3 py-2.5 text-foreground shadow-2xl ring-1 shadow-black/20 ring-border/35 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-background hover:shadow-primary/25 sm:right-6 sm:bottom-6 sm:px-4 dark:bg-black/55 dark:text-white dark:ring-white/10 dark:hover:bg-black/70"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,oklch(0.75_0.18_55_/_20%),transparent_42%)] opacity-80"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-primary/55 to-transparent"
      />

      <span className="relative flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30">
        <span className="absolute inset-0 animate-ping rounded-full bg-primary/35" />
        <Icon
          icon="solar:gift-bold-duotone"
          className="relative size-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
        />
      </span>

      <span className="relative hidden text-left sm:block">
        <span className="mb-1 inline-flex rounded-full bg-primary/10 px-2 py-0.5 text-[9px] font-black tracking-[0.18em] text-primary uppercase ring-1 ring-primary/15">
          Gratis
        </span>
        <span className="block text-xs leading-none font-bold">
          Claim Clario template
        </span>
        <span className="mt-1 flex items-center gap-1 text-[11px] font-medium text-muted-foreground">
          Free on Junno UI
          <Icon
            icon="solar:arrow-right-up-linear"
            className="size-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </span>
      </span>
    </a>
  )
}
