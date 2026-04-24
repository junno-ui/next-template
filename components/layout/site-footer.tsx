import { siteConfig } from "@/config/site"
import { Icon } from "@iconify/react"
import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t border-border/10 bg-background py-12 md:py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Brand */}
          <div className="flex flex-col items-center gap-3 md:items-start">
            <div className="flex items-center gap-2.5">
              <div className="flex size-8 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20">
                <Icon
                  icon="mdi:chart-timeline-variant-shimmer"
                  className="size-4 text-primary"
                />
              </div>
              <span className="text-sm font-semibold text-foreground">
                {siteConfig.name}
              </span>
            </div>
            <p className="max-w-xs text-center text-xs leading-relaxed text-muted-foreground/60 md:text-left">
              Track campaign performance, analyze key metrics, and make
              data-driven decisions.
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-xs font-medium text-muted-foreground/50 transition-colors hover:text-foreground"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-xs font-medium text-muted-foreground/50 transition-colors hover:text-foreground"
            >
              Privacy
            </Link>
            <a
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground/30 transition-colors hover:text-foreground"
            >
              <Icon icon="mdi:twitter" className="size-4" />
            </a>
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground/30 transition-colors hover:text-foreground"
            >
              <Icon icon="mdi:github" className="size-4" />
            </a>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-8 border-t border-border/10 pt-6 text-center">
          <p className="text-[11px] text-muted-foreground/30">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved. Built by JunZ.
          </p>
        </div>
      </div>
    </footer>
  )
}
