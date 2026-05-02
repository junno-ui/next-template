"use client"

import { Icon } from "@/components/ui/app-icon"

import { JunnoMark } from "@/components/layout/junno-mark"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/toast"
import { siteConfig } from "@/config/site"

export function TemplateBanner({ onDismiss }: { onDismiss: () => void }) {
  const { toast } = useToast()
  const announceTemplate = () =>
    toast({
      title: "Opening Junno UI",
      description: "Grab the free Clario template and customize it your way.",
      tone: "info",
    })

  return (
    <div className="fixed inset-x-0 top-0 z-60 border-b border-orange-300/30 bg-[linear-gradient(110deg,oklch(0.97_0.07_72),oklch(0.91_0.12_52),oklch(0.86_0.12_34))] text-stone-950 shadow-lg shadow-orange-950/10 dark:border-orange-400/20 dark:bg-[linear-gradient(110deg,oklch(0.24_0.05_34),oklch(0.22_0.06_52),oklch(0.18_0.04_70))] dark:text-orange-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 py-3 sm:px-6">
        <div className="flex min-w-0 items-center gap-3 sm:gap-4">
          <JunnoMark className="size-9 bg-stone-950 text-orange-50 shadow-sm ring-orange-900/10 dark:bg-white dark:text-stone-950 dark:ring-white/15" />

          <p className="min-w-0 truncate text-sm font-medium">
            <span className="font-black">Created free by Junno UI.</span> Use
            Clario to launch a sharper SaaS page faster.
          </p>

          <Button
            asChild
            variant="secondary"
            size="sm"
            className="hidden h-8 rounded-full bg-stone-950 px-4 text-xs font-bold text-white shadow-lg shadow-stone-950/10 hover:bg-stone-800 sm:inline-flex dark:bg-white dark:text-stone-950 dark:hover:bg-white/90"
          >
            <a
              href={siteConfig.templateUrl}
              target="_blank"
              rel="noreferrer"
              onClick={announceTemplate}
            >
              Get free
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
            <a
              href={siteConfig.templateUrl}
              target="_blank"
              rel="noreferrer"
              onClick={announceTemplate}
            >
              Get
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
