import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-background pb-20 pt-16 text-foreground lg:pb-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_0%,var(--primary),transparent_38%),radial-gradient(circle_at_80%_14%,var(--ring),transparent_35%)] opacity-20" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-primary/15 blur-3xl" />

      <div className="container mx-auto space-y-14 px-4 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.35fr_0.95fr]">
          <div className="space-y-8">
            <span className="inline-flex items-center rounded-full border border-border bg-card/40 px-3 py-1 text-xs text-muted-foreground">
              Welcome to PowerMarketing
            </span>

            <div className="space-y-5">
              <h1 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                Optimize Your
                <br />
                Digital Marketing Strategy
              </h1>
              <p className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                Track campaign performance, analyze key metrics, and make data-driven decisions
                all in one intuitive dashboard.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button variant="outline" className="h-10 rounded-full px-5">
                Explore Features
              </Button>
              <Button className="h-10 rounded-full px-5">
                Try for free now
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border/70 pt-4 text-xs text-muted-foreground">
              <span className="text-foreground/80">Trusted by 300+ businesses</span>
              {["instagram", "shopify", "hubspot", "cnbc", "stripe"].map((brand) => (
                <span key={brand} className="uppercase tracking-[0.14em]">
                  {brand}
                </span>
              ))}
            </div>
          </div>

          <div id="pricing" className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {[
              { plan: "Startup", price: "$60", note: "For small teams launching to market." },
              {
                plan: "Scaleup",
                price: "$100",
                note: "For growing businesses with high ambitions.",
                featured: true,
              },
              { plan: "Enterprise", price: "Custom", note: "For teams needing advanced control." },
            ].map((tier) => (
              <article
                key={tier.plan}
                className={`rounded-2xl border p-4 ${
                  tier.featured
                    ? "border-primary/45 bg-gradient-to-b from-primary/15 to-card/40"
                    : "border-border bg-card/40"
                }`}
              >
                <p className="text-xs text-muted-foreground">{tier.plan}</p>
                <div className="mt-2 flex items-end gap-1">
                  <p className="text-3xl font-semibold">{tier.price}</p>
                  {tier.price !== "Custom" ? (
                    <span className="pb-1 text-xs text-muted-foreground">/month</span>
                  ) : null}
                </div>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{tier.note}</p>
                <ul className="mt-3 space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Check className="size-3.5 text-primary" />
                    Analytics reporting
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-3.5 text-primary" />
                    Dashboard access
                  </li>
                </ul>
                <Button variant="outline" className="mt-4 h-8 w-full rounded-full text-xs">
                  Choose this plan
                </Button>
              </article>
            ))}
          </div>
        </div>

        <div id="about" className="grid gap-4 md:grid-cols-4">
          <article className="rounded-2xl border border-border bg-card/40 p-5">
            <p className="text-xs text-muted-foreground">Delivered</p>
            <p className="mt-3 text-3xl font-semibold">$12,199</p>
            <p className="mt-2 text-xs text-primary">Last month +3.6%</p>
          </article>
          <article className="rounded-2xl border border-border bg-card/40 p-5">
            <p className="text-xs text-muted-foreground">Track Performance at a Glance</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Monitor key metrics in one place for faster optimization.
            </p>
          </article>
          <article className="rounded-2xl border border-border bg-card/40 p-5 md:col-span-2">
            <div className="flex items-center justify-between">
              <p className="text-xs text-muted-foreground">Realtime Analytics</p>
              <p className="text-[11px] text-muted-foreground">Updated 5m ago</p>
            </div>
            <div className="mt-4 flex h-24 items-end gap-2">
              {[26, 42, 28, 52, 44, 71, 63].map((bar, index) => (
                <div
                  key={`${bar}-${index}`}
                  className="w-full rounded-t-sm bg-gradient-to-t from-primary/35 to-primary/80"
                  style={{ height: `${bar}%` }}
                />
              ))}
            </div>
          </article>
        </div>

        <div id="features" className="grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-border bg-card/40 p-5 md:col-span-2">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm font-medium">Performance Overview</p>
              <p className="text-xs text-muted-foreground">Last 7 days</p>
            </div>
            <div className="flex h-32 items-end gap-3">
              {[35, 48, 64, 57, 72, 68, 76].map((bar, index) => (
                <div key={index} className="w-full rounded-t-md bg-muted/40">
                  <div
                    className="w-full rounded-t-md bg-gradient-to-t from-primary/65 to-primary"
                    style={{ height: `${bar}%` }}
                  />
                </div>
              ))}
            </div>
          </article>
          <article className="rounded-2xl border border-border bg-card/40 p-5">
            <p className="text-sm font-medium">Campaign Overview</p>
            <div className="relative mx-auto mt-4 size-32 rounded-full bg-[conic-gradient(var(--primary)_0_45%,var(--ring)_45%_75%,var(--muted-foreground)_75%_100%)] p-4">
              <div className="flex size-full items-center justify-center rounded-full bg-background text-center text-xs text-muted-foreground">
                12,563
                <br />
                Active users
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
              <div className="rounded-lg border border-border bg-muted/25 p-2 text-muted-foreground">
                CTR 4.8%
              </div>
              <div className="rounded-lg border border-border bg-muted/25 p-2 text-muted-foreground">
                CAC -12%
              </div>
            </div>
          </article>
        </div>

        <div
          id="contact"
          className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border bg-card/40 px-5 py-4"
        >
          <div>
            <p className="text-sm font-medium">Trusted by 300+ businesses</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Ready to grow your brand with confidence?
            </p>
          </div>
          <Button className="h-10 rounded-full px-5">
            Book a demo
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
