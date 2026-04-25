import { Icon } from "@iconify/react"

const logos = [
  { icon: "mdi:instagram", name: "Instagram" },
  { icon: "mdi:shopify", name: "Shopify" },
  { icon: "mdi:microsoft", name: "Microsoft" },
  { icon: "mdi:google", name: "Google" },
  { icon: "mdi:slack", name: "Slack" },
  { icon: "mdi:github", name: "GitHub" },
  { icon: "mdi:spotify", name: "Spotify" },
  { icon: "mdi:apple", name: "Apple" },
]

export default function LogosSection() {
  return (
    <section className="relative overflow-hidden py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden py-8">
          <div className="mb-8 text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-primary">
              Trusted by industry leaders
            </p>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-muted-foreground/65">
              Used by teams across commerce, SaaS, and product operations.
            </p>
          </div>

          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-background via-background/90 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-background via-background/90 to-transparent" />

            <div className="flex w-max animate-[scroll_32s_linear_infinite] items-center gap-12 hover:[animation-play-state:paused]">
              {[...logos, ...logos].map((logo, index) => (
                <div
                  key={`${logo.name}-${index}`}
                  className="group flex shrink-0 items-center gap-2.5 text-muted-foreground/35 transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:text-foreground"
                >
                  <Icon
                    icon={logo.icon}
                    className="size-6 transition-all duration-300 group-hover:scale-110 group-hover:text-primary"
                  />

                  <span className="whitespace-nowrap text-sm font-semibold tracking-tight">
                    {logo.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-8 flex max-w-xl flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-muted-foreground/45">
            <span>Enterprise ready</span>
            <span className="size-1 rounded-full bg-muted-foreground/25" />
            <span>Secure workflows</span>
            <span className="size-1 rounded-full bg-muted-foreground/25" />
            <span>Fast onboarding</span>
          </div>
        </div>
      </div>
    </section>
  )
}