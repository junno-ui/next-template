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
    <section className="relative overflow-hidden border-y border-border/10 py-12">
      <div className="mx-auto max-w-5xl px-6">
        <p className="mb-8 text-center text-[10px] font-medium tracking-widest text-muted-foreground/40 uppercase">
          Trusted by industry leaders
        </p>

        {/* Scrolling logos row */}
        <div className="relative">
          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />

          <div className="flex animate-[scroll_30s_linear_infinite] gap-12">
            {/* Duplicate for seamless loop */}
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={`${logo.name}-${i}`}
                className="flex shrink-0 items-center gap-2.5 text-muted-foreground/25 transition-colors hover:text-muted-foreground/60"
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
    </section>
  )
}
