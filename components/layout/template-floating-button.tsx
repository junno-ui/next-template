"use client"

import * as React from "react"

import { Icon } from "@/components/ui/app-icon"
import { useToast } from "@/components/ui/toast"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

type TemplateFloatingButtonProps = {
  showText?: boolean
  className?: string
}

export function TemplateFloatingButton({
  showText = true,
  className,
}: TemplateFloatingButtonProps) {
  const { toast } = useToast()
  const [open, setOpen] = React.useState(false)

  return (
    <div
      className={cn(
        "fixed right-4 bottom-4 z-60 sm:right-6 sm:bottom-6",
        className
      )}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocusCapture={() => setOpen(true)}
      onBlurCapture={(event) => {
        if (
          !event.relatedTarget ||
          !event.currentTarget.contains(event.relatedTarget as Node)
        ) {
          setOpen(false)
        }
      }}
    >
      <div
        role="status"
        className={cn(
          "absolute right-0 bottom-[calc(100%+0.75rem)] w-[min(19rem,calc(100vw-2rem))]",
          "translate-y-2 scale-95 opacity-0 blur-sm",
          "pointer-events-none transition-all duration-300 ease-out",
          open && "pointer-events-auto translate-y-0 scale-100 opacity-100 blur-0"
        )}
      >
        <div className="relative overflow-hidden rounded-[1.25rem] bg-background/94 p-4 text-left shadow-[0_22px_70px_rgba(15,23,42,0.16)] ring-1 ring-border/45 backdrop-blur-2xl dark:bg-black/82 dark:shadow-black/45 dark:ring-white/12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,oklch(0.72_0.16_55/14%),transparent_42%)]"
          />
          <span
            aria-hidden="true"
            className="absolute right-5 -bottom-1 size-3 rotate-45 border-r border-b border-border/45 bg-background dark:bg-black dark:border-white/12"
          />
          <p className="relative text-sm font-semibold text-foreground dark:text-white">
            Claim Clario for free
          </p>
          <p className="relative mt-1.5 text-sm leading-6 text-muted-foreground dark:text-white/58">
            Open Junno UI, copy the template, then customize the sections and
            theme for your product.
          </p>
          <div className="relative mt-3 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            <Icon
              icon="solar:check-circle-bold-duotone"
              className="size-4 text-primary"
            />
            Free
            <span className="size-1 rounded-full bg-border" />
            Next.js ready
            <span className="size-1 rounded-full bg-border" />
            Themeable
          </div>
        </div>
      </div>

      <a
        href={siteConfig.templateUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Claim the free Clario template on Junno UI"
        onClick={() =>
          toast({
            title: "Opening Junno UI",
            description: "The free Clario template will open in a new tab.",
            tone: "info",
          })
        }
        className={cn(
          "relative inline-flex min-h-12 items-center justify-center gap-2 overflow-hidden rounded-full",
          "bg-foreground px-4 text-sm font-semibold text-background dark:bg-white dark:text-black",
          "shadow-[0_16px_48px_rgba(15,23,42,0.22)] ring-1 ring-border/30 dark:shadow-black/40 dark:ring-white/20",
          "transition-all duration-300 ease-out",
          "hover:-translate-y-1 hover:bg-primary hover:text-primary-foreground hover:shadow-[0_22px_64px_rgba(15,23,42,0.26)]",
          "focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none",
          "active:translate-y-0 active:scale-[0.98]",
          open && "-translate-y-1 bg-primary text-primary-foreground shadow-[0_22px_64px_rgba(15,23,42,0.26)]",
          !showText && "size-12 px-0",
          showText && "h-12 sm:h-[3.25rem] sm:px-5"
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute inset-0 translate-x-[-120%] bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-700",
            open && "translate-x-[120%]"
          )}
        />
        <span className="relative flex size-8 items-center justify-center rounded-full bg-background/12 ring-1 ring-background/15 dark:bg-black/8 dark:ring-black/10">
          <Icon
            icon="solar:download-minimalistic-bold-duotone"
            className="size-4.5"
          />
        </span>
        {showText && (
          <span className="relative hidden leading-none sm:inline">
            Claim free
          </span>
        )}
      </a>
    </div>
  )
}
