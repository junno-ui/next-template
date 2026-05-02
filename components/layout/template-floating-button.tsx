import { Icon } from "@/components/ui/app-icon"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { BrandMark } from "./brand-logo"

type TemplateFloatingButtonProps = {
  showText?: boolean
  className?: string
}

export function TemplateFloatingButton({
  showText = true,
  className,
}: TemplateFloatingButtonProps) {
  return (
    <a
      href={siteConfig.templateUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Claim the free Clario template on Junno UI"
      className={cn(
        "group fixed right-4 bottom-4 z-50",
        "inline-flex items-center overflow-hidden",
        "rounded-[1.25rem] border border-border/70",
        "bg-background/90 text-foreground backdrop-blur-xl",
        "shadow-[0_18px_50px_rgba(0,0,0,0.16)]",
        "ring-1 ring-white/10",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-1 hover:border-primary/30 hover:bg-background",
        "hover:shadow-[0_24px_70px_rgba(0,0,0,0.22)]",
        "focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:outline-none",
        "focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "dark:border-white/10 dark:bg-black/60 dark:text-white dark:ring-white/10",
        "dark:hover:bg-black/75",
        showText
          ? "h-[68px] max-w-[calc(100vw-2rem)] gap-3 px-3.5 pr-4"
          : "size-14 justify-center",
        "sm:right-6 sm:bottom-6",
        className
      )}
    >
      <DecorativeBackground />

      <span
        className={cn(
          "relative flex shrink-0 items-center justify-center",
          "rounded-2xl bg-background/85 shadow-sm",
          "ring-1 ring-border/80 backdrop-blur",
          "transition-transform duration-300 ease-out",
          "group-hover:scale-105",
          "dark:bg-white/10 dark:ring-white/10",
          showText ? "size-11" : "size-10"
        )}
      >
        <BrandMark showText={false} size="7" />
      </span>

      {showText && (
        <span className="relative hidden min-w-0 flex-col justify-center sm:flex">
          <span
            className={cn(
              "mb-1.5 inline-flex w-fit items-center rounded-full",
              "bg-primary/10 px-2 py-0.5",
              "text-[9px] font-black tracking-[0.18em] text-primary uppercase",
              "ring-1 ring-primary/15"
            )}
          >
            Free template
          </span>

          <span className="truncate text-[13.5px] leading-none font-semibold tracking-[-0.015em]">
            Claim Clario
          </span>

          <span className="mt-1.5 inline-flex items-center gap-1 text-[11px] leading-none font-medium text-muted-foreground">
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

function DecorativeBackground() {
  return (
    <>
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0",
          "bg-[radial-gradient(circle_at_24%_0%,oklch(0.72_0.16_55/14%),transparent_42%)]",
          "opacity-90 transition-opacity duration-300 group-hover:opacity-100"
        )}
      />

      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-x-5 top-0 h-px",
          "bg-linear-to-r from-transparent via-white/55 to-transparent",
          "dark:via-white/25"
        )}
      />

      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0",
          "bg-linear-to-b from-white/10 via-white/[0.03] to-transparent",
          "opacity-70 dark:from-white/8"
        )}
      />
    </>
  )
}
