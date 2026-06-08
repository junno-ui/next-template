import { Icon } from "@/components/ui/app-icon"

import { Reveal } from "@/components/marketing/_components/reveal"
import { brandLogos } from "@/content/landing-page"

export default function LogosSection() {
  return (
    <section className="relative isolate overflow-hidden py-16 sm:py-20">
      {/* Soft background glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Reveal className="mx-auto mb-9 max-w-2xl text-center">
          <p className="text-[10px] font-semibold text-primary uppercase">
            Trusted by industry leaders
          </p>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-muted-foreground/65">
            Used by teams across commerce, SaaS, product operations, and modern
            growth workflows.
          </p>
        </Reveal>

        {/* Marquee */}
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background via-background/90 to-transparent"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background via-background/90 to-transparent"
            aria-hidden="true"
          />

          <div className="flex w-max animate-[scroll_34s_linear_infinite] items-center gap-14 hover:[animation-play-state:paused]">
            {[...brandLogos, ...brandLogos].map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="group flex shrink-0 items-center gap-3 text-muted-foreground/35 transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:text-foreground"
              >
                <span className="flex size-9 items-center justify-center rounded-2xl bg-muted/25 text-muted-foreground/45 transition-all duration-300 group-hover:bg-primary/10 group-hover:text-primary">
                  <Icon
                    icon={logo.icon}
                    className="size-5 transition-transform duration-300 group-hover:scale-110"
                  />
                </span>

                <span className="text-sm font-semibold whitespace-nowrap">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Trust text */}
        <div className="mx-auto mt-9 flex max-w-2xl flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-muted-foreground/45">
          <span>Enterprise ready</span>
          <span className="hidden size-1 rounded-full bg-muted-foreground/25 sm:block" />
          <span>Secure workflows</span>
          <span className="hidden size-1 rounded-full bg-muted-foreground/25 sm:block" />
          <span>Fast onboarding</span>
        </div>
      </div>
    </section>
  )
}
