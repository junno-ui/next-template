"use client"

import { Icon } from "@/components/ui/app-icon"

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
    <div className="fixed inset-x-0 top-0 z-60 border-b border-primary/30 bg-primary text-primary-foreground shadow-[0_12px_36px_rgba(15,23,42,0.16)] dark:border-white/10 dark:shadow-black/35">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/25"
      />

      <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <div className="flex min-w-0 items-center gap-3 sm:gap-4">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-2xl bg-white/16 text-white shadow-lg shadow-black/10 ring-1 ring-white/22">
            <Icon icon="solar:gift-bold-duotone" className="size-5" />
          </span>

          <div className="min-w-0">
            <p className="truncate text-sm font-semibold leading-5 sm:text-[15px]">
              Free Clario SaaS landing template
            </p>
            <p className="hidden truncate text-xs leading-5 text-primary-foreground/78 sm:block">
              Created by Junno UI with polished sections, motion, and theme-ready UI.
            </p>
          </div>

          <Button
            asChild
            variant="default"
            size="sm"
            className="hidden rounded-full bg-white px-4 text-xs text-primary shadow-lg shadow-black/10 hover:bg-white/92 sm:inline-flex"
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
            variant="default"
            size="sm"
            className="rounded-full bg-white px-3 text-xs text-primary shadow-lg shadow-black/10 hover:bg-white/92 sm:hidden"
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
            className="rounded-full text-primary-foreground/72 hover:bg-white/12 hover:text-white"
            aria-label="Dismiss free template banner"
          >
            <Icon icon="mdi:close" className="size-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
