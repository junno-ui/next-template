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
    <section className="relative overflow-hidden py-10">
      <div className="mx-auto max-w-5xl px-6">
        <div className="surface-panel relative overflow-hidden rounded-[1.75rem] px-6 py-8">
          <div className="pointer-events-none absolute inset-0 bg-cross-pattern opacity-25" aria-hidden="true" />
          <p className="mb-7 text-center text-[10px] font-medium tracking-[0.28em] text-muted-foreground/40 uppercase">
            Trusted by industry leaders
          </p>

          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background via-background/85 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background via-background/85 to-transparent" />

            <div className="flex animate-[scroll_30s_linear_infinite] gap-12">
              {[...logos, ...logos].map((logo, i) => (
                <div
                  key={`${logo.name}-${i}`}
                  className="flex shrink-0 items-center gap-2.5 text-muted-foreground/30 transition-all duration-300 hover:scale-105 hover:text-muted-foreground/70"
                >
                  <Icon icon={logo.icon} className="size-6" />
                  <span className="text-sm font-semibold tracking-tight whitespace-nowrap">
                    {logo.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
