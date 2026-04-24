"use client"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Icon } from "@iconify/react"

/* -------------------------------------------------------------------------- */
/*  Trusted-By Logos                                                          */
/* -------------------------------------------------------------------------- */
const trustedLogos = [
  { icon: "mdi:instagram", name: "Instagram" },
  { icon: "mdi:shopify", name: "Shopify" },
  { icon: "mdi:hubspot", name: "HubSpot" },
  { icon: "mdi:television-classic", name: "CNBC" },
  { icon: "mdi:newspaper-variant-outline", name: "Business Insider" },
  { icon: "mdi:credit-card-outline", name: "Stripe" },
]

/* -------------------------------------------------------------------------- */
/*  Dashboard sidebar nav items                                               */
/* -------------------------------------------------------------------------- */
const sidebarItems = [
  { icon: "mdi:view-dashboard-outline", label: "Dashboard", active: true },
  { icon: "mdi:package-variant-closed", label: "Products", active: false },
  { icon: "mdi:cart-outline", label: "Orders", active: false },
  { icon: "mdi:bullhorn-outline", label: "Campaigns", active: false },
  { icon: "mdi:account-group-outline", label: "Customers", active: false },
  { icon: "mdi:chart-bar", label: "Analytics", active: false },
  { icon: "mdi:cog-outline", label: "Settings", active: false },
]

/* -------------------------------------------------------------------------- */
/*  Component                                                                 */
/* -------------------------------------------------------------------------- */
export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* ── Animated gradient background ───────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 -z-20" aria-hidden="true">
        {/* Dot grid pattern */}
        <div className="absolute inset-0 bg-dots opacity-40" />

        {/* Animated gradient orbs */}
        <div className="absolute top-[-15%] left-1/2 h-[800px] w-[1100px] -translate-x-1/2 rounded-full bg-gradient-to-br from-primary/[0.07] via-chart-2/[0.04] to-transparent blur-[120px] animate-glow-pulse" />
        <div className="absolute right-[-10%] bottom-[10%] h-[500px] w-[700px] rounded-full bg-gradient-to-tl from-primary/[0.05] to-chart-2/[0.03] blur-[100px] animate-glow-pulse delay-200" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[50%] left-[-8%] h-[400px] w-[400px] rounded-full bg-chart-2/[0.04] blur-[100px] animate-glow-pulse" style={{ animationDelay: '4s' }} />
      </div>

      {/* ── Hero Content ────────────────────────────────────────────────── */}
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 pt-28 pb-12">
        {/* Welcome badge */}
        <div className="animate-fade-up mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-medium tracking-wide text-primary backdrop-blur-sm sm:text-sm">
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60" />
            <span className="relative inline-flex size-2 rounded-full bg-primary" />
          </span>
          Welcome to PixarMarketing
          <Icon icon="mdi:arrow-right" className="size-3 opacity-60" />
        </div>

        {/* Heading */}
        <h1 className="animate-fade-up delay-100 mx-auto max-w-4xl text-center text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[3.75rem]">
          Optimize Your
          <br />
          <span className="bg-gradient-to-r from-foreground via-foreground/70 to-foreground/40 bg-clip-text text-transparent">
            Digital Marketing Strategy
          </span>
        </h1>

        {/* Subheading */}
        <p className="animate-fade-up delay-200 mx-auto mt-6 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground sm:text-base">
          Track campaign performance, analyze key metrics, and make data-driven
          decisions—all in one intuitive dashboard.
        </p>

        {/* CTAs */}
        <div className="animate-fade-up delay-300 mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#features"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "group rounded-full border-border/40 px-6 text-sm transition-all hover:bg-muted/50 hover:border-border/60"
            )}
          >
            Explore Features
            <Icon icon="mdi:arrow-down" className="ml-1 size-3.5 transition-transform group-hover:translate-y-0.5" />
          </a>
          <a
            href="#pricing"
            className={cn(
              buttonVariants({ size: "lg" }),
              "group rounded-full px-6 text-sm shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/35 hover:scale-[1.02] active:scale-[0.98]"
            )}
          >
            Try for Free Now
            <Icon icon="mdi:arrow-right" className="ml-1 size-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* ── Dashboard Preview ─────────────────────────────────────────── */}
        <div className="animate-slide-up-fade delay-500 relative mx-auto mt-16 w-full max-w-5xl">
          {/* Glow behind the dashboard */}
          <div
            className="pointer-events-none absolute -inset-8 -z-10 rounded-3xl bg-gradient-to-b from-primary/[0.08] via-transparent to-transparent blur-3xl animate-glow-pulse"
            aria-hidden="true"
          />

          <div className="overflow-hidden rounded-xl border border-border/30 bg-card/80 shadow-2xl shadow-black/20 backdrop-blur-sm transition-transform duration-500 hover:shadow-3xl">
            <div className="flex">
              {/* ── Sidebar ──────────────────────────────────────────── */}
              <aside className="hidden w-48 shrink-0 border-r border-border/20 bg-card/60 md:block">
                <div className="flex items-center gap-2 border-b border-border/20 px-4 py-3.5">
                  <div className="flex size-6 items-center justify-center rounded-md bg-primary/15">
                    <Icon icon="mdi:chart-timeline-variant-shimmer" className="size-3.5 text-primary" />
                  </div>
                  <span className="text-xs font-semibold text-foreground">Pixar Marketing</span>
                </div>
                <nav className="flex flex-col gap-0.5 p-2">
                  {sidebarItems.map((item) => (
                    <div
                      key={item.label}
                      className={cn(
                        "flex items-center gap-2.5 rounded-lg px-3 py-2 text-[11px] font-medium transition-all duration-200",
                        item.active
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground/70 hover:bg-muted/30 hover:text-muted-foreground"
                      )}
                    >
                      <Icon icon={item.icon} className="size-3.5" />
                      {item.label}
                    </div>
                  ))}
                </nav>
              </aside>

              {/* ── Main content area ────────────────────────────────── */}
              <div className="flex-1 p-4 md:p-5">
                {/* Top bar */}
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">Dashboard</h3>
                    <p className="text-[10px] text-muted-foreground/60">Here is a friendly report and perfect data here</p>
                  </div>
                  <div className="hidden items-center gap-2 sm:flex">
                    <div className="flex h-7 w-36 items-center gap-1.5 rounded-lg border border-border/20 bg-muted/30 px-2.5 text-[10px] text-muted-foreground/50">
                      <Icon icon="mdi:magnify" className="size-3" />
                      Search...
                    </div>
                    <div className="flex gap-0.5 rounded-lg border border-border/20 bg-muted/20 p-0.5">
                      {["Monthly", "Weekly", "Daily"].map((p, i) => (
                        <span key={p} className={cn("rounded-md px-2 py-1 text-[10px] font-medium transition-colors", i === 0 ? "bg-primary/15 text-primary" : "text-muted-foreground/50")}>{p}</span>
                      ))}
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="flex size-7 items-center justify-center rounded-lg border border-border/20 text-muted-foreground/50 transition-colors hover:text-muted-foreground">
                        <Icon icon="mdi:bell-outline" className="size-3.5" />
                      </div>
                      <div className="flex size-7 items-center justify-center rounded-full bg-primary/15">
                        <Icon icon="mdi:account" className="size-3.5 text-primary" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats row */}
                <div className="mb-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {[
                    { label: "Delivered", value: "$12,199", change: "▲ 20%", icon: "mdi:check-circle-outline" },
                    { label: "Spend", value: "$1,010", change: "▼ 5%", icon: "mdi:cash-multiple" },
                    { label: "Clicked", value: "$12,344", change: "▲ 12%", icon: "mdi:cursor-default-click-outline" },
                    { label: "Subscribe", value: "$41,010", change: "▲ 8%", icon: "mdi:account-plus-outline" },
                  ].map((stat) => (
                    <div key={stat.label} className="group rounded-lg border border-border/15 bg-muted/20 p-3 transition-all duration-200 hover:border-border/30 hover:bg-muted/30">
                      <div className="flex items-center justify-between">
                        <p className="text-[10px] text-muted-foreground/60">{stat.label}</p>
                        <Icon icon={stat.icon} className="size-3 text-muted-foreground/30 transition-colors group-hover:text-muted-foreground/50" />
                      </div>
                      <p className="mt-1 text-lg font-bold text-foreground">{stat.value}</p>
                      <p className={cn("mt-0.5 text-[10px] font-medium", stat.change.startsWith("▲") ? "text-primary" : "text-red-400")}>{stat.change}</p>
                    </div>
                  ))}
                </div>

                {/* Charts row */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-5">
                  <div className="rounded-lg border border-border/15 bg-muted/20 p-3 sm:col-span-3">
                    <div className="mb-3 flex items-center justify-between">
                      <p className="text-[11px] font-semibold text-foreground">Performance Overview</p>
                      <div className="flex gap-2">
                        <span className="flex items-center gap-1 text-[9px] text-muted-foreground/60"><span className="size-1.5 rounded-full bg-primary" />Revenue</span>
                        <span className="flex items-center gap-1 text-[9px] text-muted-foreground/60"><span className="size-1.5 rounded-full bg-chart-2" />Expenses</span>
                      </div>
                    </div>
                    <div className="flex h-28 items-end gap-1.5">
                      {[{h1:45,h2:30},{h1:65,h2:40},{h1:55,h2:35},{h1:80,h2:50},{h1:70,h2:45},{h1:60,h2:38},{h1:90,h2:55},{h1:75,h2:48},{h1:85,h2:52},{h1:65,h2:42},{h1:70,h2:35},{h1:95,h2:60}].map((bar, i) => (
                        <div key={i} className="flex flex-1 items-end gap-[1px]">
                          <div className="flex-1 rounded-t-sm bg-primary/30 transition-all duration-200 hover:bg-primary/50" style={{ height: `${bar.h1}%` }} />
                          <div className="flex-1 rounded-t-sm bg-chart-2/25 transition-all duration-200 hover:bg-chart-2/40" style={{ height: `${bar.h2}%` }} />
                        </div>
                      ))}
                    </div>
                    <div className="mt-1.5 flex justify-between text-[8px] text-muted-foreground/40">
                      {["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].map(m => <span key={m}>{m}</span>)}
                    </div>
                  </div>

                  <div className="rounded-lg border border-border/15 bg-muted/20 p-3 sm:col-span-2">
                    <p className="mb-3 text-[11px] font-semibold text-foreground">Top Seller by Country</p>
                    <div className="flex flex-col gap-2">
                      {[
                        { country: "United States", flag: "🇺🇸", pct: 42, color: "bg-primary" },
                        { country: "Germany", flag: "🇩🇪", pct: 28, color: "bg-chart-2" },
                        { country: "Japan", flag: "🇯🇵", pct: 18, color: "bg-chart-3" },
                        { country: "France", flag: "🇫🇷", pct: 12, color: "bg-chart-4" },
                      ].map(c => (
                        <div key={c.country}>
                          <div className="mb-1 flex items-center justify-between">
                            <span className="flex items-center gap-1.5 text-[10px] text-muted-foreground/70"><span>{c.flag}</span>{c.country}</span>
                            <span className="text-[10px] font-medium text-foreground/80">{c.pct}%</span>
                          </div>
                          <div className="h-1.5 overflow-hidden rounded-full bg-muted/30">
                            <div className={cn("h-full rounded-full transition-all duration-700", c.color)} style={{ width: `${c.pct}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Trusted By Section ──────────────────────────────────────────── */}
      <div className="border-t border-border/10 py-14">
        <div className="mx-auto max-w-5xl px-6">
          <p className="mb-2 text-center text-[10px] font-medium tracking-widest text-muted-foreground/40 uppercase">
            Integrated
          </p>
          <p className="mb-10 text-center text-xl font-semibold text-foreground sm:text-2xl">
            Trusted by <span className="text-primary">300+</span> businesses
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {trustedLogos.map((logo) => (
              <div
                key={logo.name}
                className="group flex items-center gap-2 text-muted-foreground/30 transition-all duration-300 hover:text-muted-foreground/60 hover:scale-105"
              >
                <Icon icon={logo.icon} className="size-5 transition-transform duration-300 group-hover:scale-110" />
                <span className="text-sm font-semibold tracking-tight">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
