"use client"

import { Icon } from "@iconify/react"

import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"

export function TemplateBanner({ onDismiss }: { onDismiss: () => void }) {
  return (
    <div className="fixed inset-x-0 top-0 z-60 border-b border-orange-300/30 bg-[linear-gradient(110deg,oklch(0.97_0.07_72),oklch(0.91_0.12_52),oklch(0.86_0.12_34))] text-stone-950 shadow-lg shadow-orange-950/10 dark:border-orange-400/20 dark:bg-[linear-gradient(110deg,oklch(0.24_0.05_34),oklch(0.22_0.06_52),oklch(0.18_0.04_70))] dark:text-orange-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 py-3 sm:px-6">
        <div className="flex min-w-0 items-center gap-3 sm:gap-4">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-2xl bg-white/55 text-orange-700 shadow-sm ring-1 ring-orange-900/10 dark:bg-white/10 dark:text-orange-200 dark:ring-white/15">
            <Icon icon="solar:rocket-bold-duotone" className="size-5" />
          </span>

          <p className="min-w-0 truncate text-sm font-medium">
            <span className="font-black">Free Clario template.</span> Claim it
            on Junno UI and launch faster.
          </p>

          <Button
            asChild
            variant="secondary"
            size="sm"
            className="hidden h-8 rounded-full bg-stone-950 px-4 text-xs font-bold text-white shadow-lg shadow-stone-950/10 hover:bg-stone-800 sm:inline-flex dark:bg-white dark:text-stone-950 dark:hover:bg-white/90"
          >
            <a href={siteConfig.templateUrl} target="_blank" rel="noreferrer">
              Claim free
            </a>
          </Button>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <Button
            asChild
            variant="secondary"
            size="sm"
            className="h-8 rounded-full bg-stone-950 px-3 text-xs font-bold text-white shadow-lg shadow-stone-950/10 hover:bg-stone-800 sm:hidden dark:bg-white dark:text-stone-950 dark:hover:bg-white/90"
          >
            <a href={siteConfig.templateUrl} target="_blank" rel="noreferrer">
              Claim
            </a>
          </Button>

          <Button
            type="button"
            variant="ghost"
            size="icon-sm"
            onClick={onDismiss}
            className="size-8 rounded-full text-stone-800/70 hover:bg-white/40 hover:text-stone-950 dark:text-orange-50/70 dark:hover:bg-white/10 dark:hover:text-white"
            aria-label="Dismiss free template banner"
          >
            <Icon icon="mdi:close" className="size-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
