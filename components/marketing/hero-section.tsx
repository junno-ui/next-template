"use client"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Icon } from "@iconify/react"

/* -------------------------------------------------------------------------- */
/*  Data                                                                       */
/* -------------------------------------------------------------------------- */
const trustedLogos = [
  { icon: "simple-icons:stripe",    name: "Stripe" },
  { icon: "simple-icons:shopify",   name: "Shopify" },
  { icon: "simple-icons:notion",    name: "Notion" },
  { icon: "simple-icons:figma",     name: "Figma" },
  { icon: "simple-icons:vercel",    name: "Vercel" },
  { icon: "simple-icons:linear",    name: "Linear" },
]

const sidebarItems = [
  { icon: "solar:widget-5-bold-duotone",      label: "Dashboard",  active: true  },
  { icon: "solar:box-minimalistic-bold",       label: "Products",   active: false },
  { icon: "solar:cart-large-minimalistic-bold",label: "Orders",     active: false },
  { icon: "solar:megaphone-bold-duotone",      label: "Campaigns",  active: false },
  { icon: "solar:users-group-rounded-bold",    label: "Customers",  active: false },
  { icon: "solar:chart-2-bold-duotone",        label: "Analytics",  active: false },
  { icon: "solar:settings-bold-duotone",       label: "Settings",   active: false },
]

/* -------------------------------------------------------------------------- */
/*  Decorative SVG background element                                          */
/* -------------------------------------------------------------------------- */
function HeroBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 -z-20 overflow-hidden"
      aria-hidden="true"
    >
      {/* ── Pattern layer ── */}
      <div className="absolute inset-0 bg-hero-pattern opacity-100" />

      {/* ── Gradient vignette: fade edges to background ── */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,transparent_60%,var(--color-background)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />

      {/* ── Primary glow orb (center-top) ── */}
      <div className="animate-drift absolute -top-24 left-1/2 h-[700px] w-[1000px] -translate-x-1/2 rounded-full bg-gradient-to-br from-primary/[0.15] via-primary/[0.06] to-transparent blur-[100px]" />

      {/* ── Secondary orb (right) ── */}
      <div
        className="animate-drift absolute right-[-12%] top-[25%] h-[500px] w-[600px] rounded-full bg-gradient-to-tl from-chart-2/[0.10] via-chart-2/[0.04] to-transparent blur-[90px]"
        style={{ animationDelay: "6s", animationDirection: "reverse" }}
      />

      {/* ── Tertiary orb (left) ── */}
      <div
        className="animate-drift absolute bottom-[5%] left-[-8%] h-[400px] w-[500px] rounded-full bg-primary/[0.07] blur-[80px]"
        style={{ animationDelay: "12s" }}
      />

      {/* ── Decorative spinning ring (top-right corner) ── */}
      <div className="animate-spin-slow absolute -right-20 -top-20 size-[480px] rounded-full border border-primary/[0.06]" />
      <div
        className="animate-spin-slow absolute -right-12 -top-12 size-[340px] rounded-full border border-primary/[0.04]"
        style={{ animationDirection: "reverse", animationDuration: "30s" }}
      />

      {/* ── Decorative spinning ring (bottom-left) ── */}
      <div
        className="animate-spin-slow absolute -bottom-32 -left-32 size-[600px] rounded-full border border-chart-2/[0.05]"
        style={{ animationDuration: "35s" }}
      />

      {/* ── Floating accent dots ── */}
      {[
        { top: "18%",  left: "8%",   delay: "0s",   size: "size-1.5", color: "bg-primary/40"   },
        { top: "35%",  left: "92%",  delay: "1.2s", size: "size-1",   color: "bg-chart-2/50"   },
        { top: "62%",  left: "5%",   delay: "2.4s", size: "size-2",   color: "bg-primary/30"   },
        { top: "72%",  left: "88%",  delay: "0.8s", size: "size-1.5", color: "bg-chart-2/40"   },
        { top: "15%",  left: "75%",  delay: "3.5s", size: "size-1",   color: "bg-primary/50"   },
        { top: "50%",  left: "96%",  delay: "2s",   size: "size-1",   color: "bg-foreground/10" },
      ].map((d, i) => (
        <span
          key={i}
          className={cn("animate-twinkle absolute rounded-full", d.size, d.color)}
          style={{ top: d.top, left: d.left, animationDelay: d.delay }}
        />
      ))}
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Dashboard UI mock                                                          */
/* -------------------------------------------------------------------------- */
function DashboardPreview() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border/20 bg-card/80 shadow-2xl shadow-black/[0.12] backdrop-blur-sm ring-1 ring-white/5 transition-all duration-500 hover:shadow-black/[0.18]">
      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden w-48 shrink-0 flex-col border-r border-border/15 bg-card/60 md:flex">
          {/* Brand in sidebar */}
          <div className="flex items-center gap-2 border-b border-border/15 px-4 py-3.5">
            <div className="flex size-6 items-center justify-center rounded-lg bg-primary/15">
              <svg viewBox="0 0 20 20" fill="none" className="size-3.5 text-primary" aria-hidden>
                <rect x="3" y="3" width="3" height="14" rx="1.5" fill="currentColor" opacity="0.9" />
                <rect x="14" y="3" width="3" height="14" rx="1.5" fill="currentColor" opacity="0.9" />
                <path d="M6 3.5 L14 16.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.85" />
              </svg>
            </div>
            <span className="text-xs font-bold text-foreground">NexusUI</span>
          </div>

          {/* Nav items */}
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

        {/* Main area */}
        <div className="flex-1 p-4 md:p-5">
          {/* Top bar */}
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="text-sm font-semibold text-foreground">Dashboard</h3>
              <p className="text-[10px] text-muted-foreground/60">Real-time analytics overview</p>
            </div>
            <div className="hidden items-center gap-2 sm:flex">
              <div className="flex h-7 w-32 items-center gap-1.5 rounded-lg border border-border/20 bg-muted/30 px-2.5 text-[10px] text-muted-foreground/50">
                <Icon icon="solar:magnifer-linear" className="size-3" />
                Search…
              </div>
              <div className="flex gap-0.5 rounded-lg border border-border/20 bg-muted/20 p-0.5">
                {["Monthly", "Weekly", "Daily"].map((p, i) => (
                  <span
                    key={p}
                    className={cn(
                      "rounded-md px-2 py-1 text-[10px] font-medium transition-colors",
                      i === 0 ? "bg-primary/15 text-primary" : "text-muted-foreground/50"
                    )}
                  >
                    {p}
                  </span>
                ))}
              </div>
              <div className="flex size-7 items-center justify-center rounded-lg border border-border/20 text-muted-foreground/50">
                <Icon icon="solar:bell-bold-duotone" className="size-3.5" />
              </div>
              <div className="flex size-7 items-center justify-center rounded-full bg-gradient-to-br from-primary/30 to-chart-2/20 text-primary">
                <Icon icon="solar:user-bold" className="size-3.5" />
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div className="mb-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { label: "Revenue",   value: "$12,199", change: "+20%",  up: true,  icon: "solar:dollar-minimalistic-bold-duotone" },
              { label: "Spend",     value: "$1,010",  change: "−5%",   up: false, icon: "solar:wallet-money-bold-duotone"        },
              { label: "Clicks",    value: "12,344",  change: "+12%",  up: true,  icon: "solar:cursor-bold-duotone"              },
              { label: "Signups",   value: "1,042",   change: "+8%",   up: true,  icon: "solar:user-plus-bold-duotone"           },
            ].map((stat) => (
              <div
                key={stat.label}
                className="group rounded-xl border border-border/15 bg-muted/20 p-3 transition-all duration-200 hover:border-primary/20 hover:bg-muted/30 hover:shadow-sm"
              >
                <div className="mb-1.5 flex items-center justify-between">
                  <p className="text-[10px] font-medium text-muted-foreground/60">{stat.label}</p>
                  <Icon
                    icon={stat.icon}
                    className="size-3.5 text-muted-foreground/30 transition-colors group-hover:text-primary/50"
                  />
                </div>
                <p className="text-base font-bold text-foreground">{stat.value}</p>
                <p
                  className={cn(
                    "mt-0.5 text-[10px] font-semibold",
                    stat.up ? "text-primary" : "text-red-400"
                  )}
                >
                  {stat.change} vs last month
                </p>
              </div>
            ))}
          </div>

          {/* Charts row */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-5">
            {/* Bar chart */}
            <div className="rounded-xl border border-border/15 bg-muted/20 p-3 sm:col-span-3">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-[11px] font-semibold text-foreground">Performance Overview</p>
                <div className="flex gap-3">
                  <span className="flex items-center gap-1 text-[9px] text-muted-foreground/60">
                    <span className="size-1.5 rounded-full bg-primary" />Revenue
                  </span>
                  <span className="flex items-center gap-1 text-[9px] text-muted-foreground/60">
                    <span className="size-1.5 rounded-full bg-chart-2" />Expenses
                  </span>
                </div>
              </div>
              <div className="flex h-24 items-end gap-1">
                {[
                  {h1:45,h2:30},{h1:65,h2:40},{h1:55,h2:35},{h1:80,h2:50},
                  {h1:70,h2:45},{h1:60,h2:38},{h1:90,h2:55},{h1:75,h2:48},
                  {h1:85,h2:52},{h1:65,h2:42},{h1:70,h2:35},{h1:95,h2:60},
                ].map((bar, i) => (
                  <div key={i} className="flex flex-1 items-end gap-[1px]">
                    <div
                      className="flex-1 rounded-t-sm bg-primary/30 transition-all duration-300 hover:bg-primary/60"
                      style={{ height: `${bar.h1}%` }}
                    />
                    <div
                      className="flex-1 rounded-t-sm bg-chart-2/25 transition-all duration-300 hover:bg-chart-2/50"
                      style={{ height: `${bar.h2}%` }}
                    />
                  </div>
                ))}
              </div>
              <div className="mt-1.5 flex justify-between text-[8px] text-muted-foreground/40">
                {["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].map(m => (
                  <span key={m}>{m}</span>
                ))}
              </div>
            </div>

            {/* Country breakdown */}
            <div className="rounded-xl border border-border/15 bg-muted/20 p-3 sm:col-span-2">
              <p className="mb-3 text-[11px] font-semibold text-foreground">Top by Country</p>
              <div className="flex flex-col gap-2.5">
                {[
                  { country: "United States", flag: "🇺🇸", pct: 42, color: "bg-primary" },
                  { country: "Germany",       flag: "🇩🇪", pct: 28, color: "bg-chart-2" },
                  { country: "Japan",         flag: "🇯🇵", pct: 18, color: "bg-chart-3" },
                  { country: "France",        flag: "🇫🇷", pct: 12, color: "bg-chart-4" },
                ].map(c => (
                  <div key={c.country}>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-[10px] text-muted-foreground/70">
                        <span>{c.flag}</span>{c.country}
                      </span>
                      <span className="text-[10px] font-semibold text-foreground/80">{c.pct}%</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-muted/30">
                      <div
                        className={cn("h-full rounded-full transition-all duration-700", c.color)}
                        style={{ width: `${c.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Component                                                                  */
/* -------------------------------------------------------------------------- */
export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden">
      <HeroBackground />

      {/* ── Hero Content ─────────────────────────────────────────────────── */}
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 pt-28 pb-12">

        {/* Eyebrow badge */}
        <div className="animate-fade-up mb-8 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/[0.07] px-4 py-1.5 text-xs font-semibold tracking-wide text-primary backdrop-blur-sm sm:text-[13px]">
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/70" />
            <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
          </span>
          Now with AI-powered analytics
          <Icon icon="solar:arrow-right-bold" className="size-3 opacity-60" />
        </div>

        {/* Heading */}
        <h1 className="animate-fade-up delay-100 mx-auto max-w-4xl text-center text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-[4rem]">
          Launch, Scale &{" "}
          <span className="relative inline-block">
            <span className="gradient-text-primary">Grow Your SaaS</span>
            {/* Underline accent */}
            <svg
              aria-hidden
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 300 8"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M2 5.5 C60 2.5, 120 7, 180 4.5 C240 2, 280 6.5, 298 5"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="text-primary/40"
              />
            </svg>
          </span>
        </h1>

        {/* Subheading */}
        <p className="animate-fade-up delay-200 mx-auto mt-8 max-w-xl text-center text-[15px] leading-relaxed text-muted-foreground">
          The modern Next.js starter template for SaaS — beautiful UI,
          powerful analytics, and everything you need to ship fast.
        </p>

        {/* CTAs */}
        <div className="animate-fade-up delay-300 mt-9 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#pricing"
            className={cn(
              buttonVariants({ size: "lg" }),
              "group relative overflow-hidden rounded-full px-7 text-sm font-semibold shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-primary/40 active:scale-[0.98]"
            )}
          >
            {/* Shimmer overlay */}
            <span
              aria-hidden
              className="animate-shimmer pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent"
            />
            Get started free
            <Icon icon="solar:arrow-right-bold" className="ml-1.5 size-4 transition-transform group-hover:translate-x-0.5" />
          </a>

          <a
            href="#features"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "group rounded-full border-border/40 px-7 text-sm transition-all duration-300 hover:border-primary/30 hover:bg-muted/50"
            )}
          >
            Explore features
            <Icon icon="solar:arrow-down-bold" className="ml-1.5 size-3.5 transition-transform group-hover:translate-y-0.5" />
          </a>
        </div>

        {/* Social proof pill */}
        <div className="animate-fade-up delay-400 mt-6 flex items-center gap-2 text-[12px] text-muted-foreground/60">
          <div className="flex -space-x-1.5">
            {["bg-primary/80","bg-chart-2/80","bg-chart-3/70","bg-chart-4/70"].map((c, i) => (
              <div key={i} className={cn("size-6 rounded-full border-2 border-background", c)} />
            ))}
          </div>
          <span>Trusted by <strong className="text-foreground/80">2,400+</strong> teams worldwide</span>
          <div className="flex text-amber-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Icon key={i} icon="solar:star-bold" className="size-3" />
            ))}
          </div>
          <span className="text-foreground/60 font-medium">5.0</span>
        </div>

        {/* ── Dashboard Preview ─────────────────────────────────────────── */}
        <div className="animate-slide-up-fade delay-500 relative mx-auto mt-16 w-full max-w-5xl">
          {/* Glow behind the dashboard */}
          <div
            className="animate-glow-pulse pointer-events-none absolute -inset-10 -z-10 rounded-3xl bg-gradient-to-b from-primary/[0.12] via-chart-2/[0.06] to-transparent blur-3xl"
            aria-hidden="true"
          />
          {/* Frame border highlight */}
          <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-primary/20 via-border/10 to-transparent" aria-hidden />

          <DashboardPreview />
        </div>
      </div>

      {/* ── Trusted By ───────────────────────────────────────────────────── */}
      <div className="relative border-t border-border/10 py-14">
        {/* Subtle cross pattern on this strip */}
        <div className="pointer-events-none absolute inset-0 bg-cross-pattern opacity-40" aria-hidden />

        <div className="mx-auto max-w-5xl px-6">
          <p className="mb-8 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground/40">
            Loved by teams at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
            {trustedLogos.map((logo) => (
              <div
                key={logo.name}
                className="group flex items-center gap-2 text-muted-foreground/25 transition-all duration-300 hover:text-muted-foreground/60 hover:scale-105"
              >
                <Icon icon={logo.icon} className="size-5 transition-transform duration-300" />
                <span className="text-sm font-semibold tracking-tight">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
