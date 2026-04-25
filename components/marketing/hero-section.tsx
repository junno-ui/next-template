"use client"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Icon } from "@iconify/react"

/* -------------------------------------------------------------------------- */
/*  Data                                                                       */
/* -------------------------------------------------------------------------- */

const trustedLogos = [
  { icon: "simple-icons:stripe", name: "Stripe" },
  { icon: "simple-icons:shopify", name: "Shopify" },
  { icon: "simple-icons:notion", name: "Notion" },
  { icon: "simple-icons:figma", name: "Figma" },
  { icon: "simple-icons:vercel", name: "Vercel" },
  { icon: "simple-icons:linear", name: "Linear" },
]

const sidebarItems = [
  { icon: "solar:widget-5-bold-duotone", label: "Dashboard", active: true },
  { icon: "solar:box-minimalistic-bold", label: "Products", active: false },
  { icon: "solar:cart-large-minimalistic-bold", label: "Orders", active: false },
  { icon: "solar:megaphone-bold-duotone", label: "Campaigns", active: false },
  { icon: "solar:users-group-rounded-bold", label: "Customers", active: false },
  { icon: "solar:chart-2-bold-duotone", label: "Analytics", active: false },
  { icon: "solar:settings-bold-duotone", label: "Settings", active: false },
]

const heroStats = [
  {
    label: "Conversion lift",
    value: "+28%",
    description: "Average increase after launch",
    icon: "solar:graph-up-bold-duotone",
  },
  {
    label: "Setup time",
    value: "12 min",
    description: "Connect tools and go live",
    icon: "solar:clock-circle-bold-duotone",
  },
  {
    label: "Teams onboarded",
    value: "2.4k+",
    description: "Growing teams use it daily",
    icon: "solar:users-group-rounded-bold-duotone",
  },
]

const dashboardStats = [
  {
    label: "Revenue",
    value: "$12,199",
    change: "+20%",
    up: true,
    icon: "solar:dollar-minimalistic-bold-duotone",
  },
  {
    label: "Spend",
    value: "$1,010",
    change: "-5%",
    up: false,
    icon: "solar:wallet-money-bold-duotone",
  },
  {
    label: "Clicks",
    value: "12,344",
    change: "+12%",
    up: true,
    icon: "solar:cursor-bold-duotone",
  },
  {
    label: "Signups",
    value: "1,042",
    change: "+8%",
    up: true,
    icon: "solar:user-plus-bold-duotone",
  },
]

const chartBars = [
  { h1: 45, h2: 30 },
  { h1: 65, h2: 40 },
  { h1: 55, h2: 35 },
  { h1: 80, h2: 50 },
  { h1: 70, h2: 45 },
  { h1: 60, h2: 38 },
  { h1: 90, h2: 55 },
  { h1: 75, h2: 48 },
  { h1: 85, h2: 52 },
  { h1: 65, h2: 42 },
  { h1: 70, h2: 35 },
  { h1: 95, h2: 60 },
]

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

const countries = [
  { country: "United States", flag: "🇺🇸", pct: 42, color: "bg-primary" },
  { country: "Germany", flag: "🇩🇪", pct: 28, color: "bg-chart-2" },
  { country: "Japan", flag: "🇯🇵", pct: 18, color: "bg-chart-3" },
  { country: "France", flag: "🇫🇷", pct: 12, color: "bg-chart-4" },
]

/* -------------------------------------------------------------------------- */
/*  Background                                                                 */
/* -------------------------------------------------------------------------- */

function HeroBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 -z-20 overflow-hidden"
      aria-hidden="true"
    >
      {/* softer base background */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 bg-luxury-grid opacity-30" />
      <div className="absolute inset-0 bg-hero-pattern opacity-20" />
      <div className="absolute inset-0 bg-noise-weave opacity-10" />

      {/* controlled glow */}
      <div className="absolute left-1/2 top-0 h-[520px] w-[min(90vw,1100px)] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute left-[14%] top-[18%] h-[360px] w-[360px] rounded-full bg-primary/8 blur-[110px]" />
      <div className="absolute right-[10%] top-[28%] h-[340px] w-[340px] rounded-full bg-chart-2/8 blur-[120px]" />
      <div className="absolute bottom-[8%] left-1/2 h-[260px] w-[760px] -translate-x-1/2 rounded-full bg-primary/8 blur-[100px]" />

      {/* vignette for readability */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_50%_25%,transparent_10%,rgba(0,0,0,0.28)_65%,rgba(0,0,0,0.72)_100%)]" />

      {/* very subtle lines */}
      <div className="absolute left-[8%] top-10 h-[520px] w-px rotate-[24deg] bg-gradient-to-b from-transparent via-primary/20 to-transparent opacity-30" />
      <div className="absolute right-[12%] top-0 h-[420px] w-px -rotate-[22deg] bg-gradient-to-b from-transparent via-chart-2/20 to-transparent opacity-30" />

      {/* edge rings */}
      <div className="absolute -left-40 bottom-0 size-[520px] rounded-full border border-white/[0.04]" />
      <div className="absolute -right-36 top-10 size-[480px] rounded-full border border-white/[0.04]" />
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Small pieces                                                               */
/* -------------------------------------------------------------------------- */

function HeroBadge() {
  return (
    <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/[0.03] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary shadow-lg shadow-black/20 backdrop-blur-xl">
      <span className="relative flex size-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/70" />
        <span className="relative inline-flex size-2 rounded-full bg-primary" />
      </span>
      New SaaS dashboard experience
    </div>
  )
}

function TrustPills() {
  return (
    <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
      <div className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/70 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.05]">
        <div className="flex -space-x-1.5">
          {["bg-primary/90", "bg-chart-2/80", "bg-chart-3/70", "bg-chart-4/70"].map((c, i) => (
            <div
              key={i}
              className={cn("size-6 rounded-full border-2 border-black transition-transform duration-300 group-hover:-translate-y-0.5", c)}
              style={{ transitionDelay: `${i * 40}ms` }}
            />
          ))}
        </div>
        <span>
          Trusted by <strong className="font-semibold text-white">2,400+</strong> teams
        </span>
      </div>

      <div className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/70 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.05]">
        <div className="flex text-amber-400">
          {Array.from({ length: 5 }).map((_, i) => (
            <Icon
              key={i}
              icon="solar:star-bold"
              className="size-3.5 transition-transform duration-300 group-hover:scale-110"
              style={{ transitionDelay: `${i * 30}ms` }}
            />
          ))}
        </div>
        <span className="font-medium text-white/80">Rated 5.0 by product teams</span>
      </div>
    </div>
  )
}

function HeroStatCard({
  label,
  value,
  description,
  icon,
}: {
  label: string
  value: string
  description: string
  icon: string
}) {
  return (
    <div className="group relative overflow-hidden rounded-[1.4rem] border border-white/10 bg-white/[0.02] p-4 text-left backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:bg-white/[0.04] hover:shadow-[0_14px_40px_rgba(0,0,0,0.25)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,120,40,0.12),transparent_40%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative flex items-start justify-between gap-3">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/45">
            {label}
          </p>
          <p className="mt-2 text-2xl font-bold tracking-tight text-white">
            {value}
          </p>
        </div>

        <div className="flex size-10 items-center justify-center rounded-2xl bg-primary/12 text-primary transition-all duration-300 group-hover:scale-105 group-hover:bg-primary group-hover:text-primary-foreground">
          <Icon icon={icon} className="size-5" />
        </div>
      </div>

      <p className="relative mt-2 text-xs leading-5 text-white/55">
        {description}
      </p>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Dashboard Preview                                                          */
/* -------------------------------------------------------------------------- */

function DashboardPreview() {
  return (
    <div className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#0c0c0d]/90 shadow-[0_24px_80px_rgba(0,0,0,0.32)] ring-1 ring-white/5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_90px_rgba(0,0,0,0.42)]">
      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden w-52 shrink-0 flex-col border-r border-white/8 bg-white/[0.02] md:flex">
          <div className="flex items-center gap-2 border-b border-white/8 px-4 py-4">
            <div className="flex size-7 items-center justify-center rounded-xl bg-primary/15 text-primary">
              <svg viewBox="0 0 20 20" fill="none" className="size-3.5" aria-hidden="true">
                <rect x="3" y="3" width="3" height="14" rx="1.5" fill="currentColor" opacity="0.9" />
                <rect x="14" y="3" width="3" height="14" rx="1.5" fill="currentColor" opacity="0.9" />
                <path d="M6 3.5 L14 16.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.85" />
              </svg>
            </div>
            <span className="text-xs font-bold text-white">NexusUI</span>
          </div>

          <nav className="flex flex-col gap-1 p-2">
            {sidebarItems.map((item, i) => (
              <div
                key={item.label}
                className={cn(
                  "flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-[11px] font-medium transition-all duration-300",
                  item.active
                    ? "bg-primary/12 text-primary"
                    : "text-white/45 hover:translate-x-0.5 hover:bg-white/[0.03] hover:text-white/75"
                )}
                style={{ transitionDelay: `${i * 8}ms` }}
              >
                <Icon icon={item.icon} className="size-3.5" />
                {item.label}
              </div>
            ))}
          </nav>

          <div className="mt-auto p-2">
            <div className="rounded-2xl border border-primary/15 bg-primary/8 p-3">
              <div className="flex items-center gap-2 text-[10px] font-semibold text-primary">
                <span className="size-1.5 rounded-full bg-primary" />
                Live sync
              </div>
              <p className="mt-1 text-[10px] leading-4 text-white/45">
                Data refreshed 2 min ago
              </p>
            </div>
          </div>
        </aside>

        {/* Main area */}
        <div className="min-w-0 flex-1 p-4 md:p-5">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <h3 className="text-sm font-semibold text-white">Dashboard</h3>
              <p className="text-[10px] text-white/40">Real-time analytics overview</p>
            </div>

            <div className="hidden items-center gap-2 sm:flex">
              <div className="flex h-8 w-36 items-center gap-1.5 rounded-xl border border-white/8 bg-white/[0.02] px-3 text-[10px] text-white/35 transition-all duration-300 hover:border-primary/20 hover:bg-white/[0.04]">
                <Icon icon="solar:magnifer-linear" className="size-3" />
                Search...
              </div>

              <div className="flex gap-0.5 rounded-xl border border-white/8 bg-white/[0.02] p-0.5">
                {["Monthly", "Weekly", "Daily"].map((p, i) => (
                  <span
                    key={p}
                    className={cn(
                      "rounded-lg px-2.5 py-1 text-[10px] font-medium transition-all duration-300",
                      i === 0
                        ? "bg-primary/15 text-primary"
                        : "text-white/35 hover:text-white/70"
                    )}
                  >
                    {p}
                  </span>
                ))}
              </div>

              <div className="flex size-8 items-center justify-center rounded-xl border border-white/8 text-white/35 transition-all duration-300 hover:border-primary/20 hover:bg-primary/10 hover:text-primary">
                <Icon icon="solar:bell-bold-duotone" className="size-3.5" />
              </div>

              <div className="flex size-8 items-center justify-center rounded-full bg-gradient-to-br from-primary/30 to-chart-2/20 text-primary ring-1 ring-primary/10">
                <Icon icon="solar:user-bold" className="size-3.5" />
              </div>
            </div>
          </div>

          <div className="mb-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {dashboardStats.map((stat) => (
              <div
                key={stat.label}
                className="group rounded-2xl border border-white/8 bg-white/[0.02] p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:bg-white/[0.04]"
              >
                <div className="mb-1.5 flex items-center justify-between">
                  <p className="text-[10px] font-medium text-white/40">{stat.label}</p>
                  <Icon
                    icon={stat.icon}
                    className="size-3.5 text-white/20 transition-all duration-300 group-hover:text-primary/60"
                  />
                </div>

                <p className="text-base font-bold text-white">{stat.value}</p>

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

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-5">
            <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-3 transition-all duration-300 hover:border-primary/20 sm:col-span-3">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-[11px] font-semibold text-white">Performance Overview</p>
                <div className="flex gap-3">
                  <span className="flex items-center gap-1 text-[9px] text-white/40">
                    <span className="size-1.5 rounded-full bg-primary" />
                    Revenue
                  </span>
                  <span className="flex items-center gap-1 text-[9px] text-white/40">
                    <span className="size-1.5 rounded-full bg-chart-2" />
                    Expenses
                  </span>
                </div>
              </div>

              <div className="flex h-24 items-end gap-1">
                {chartBars.map((bar, i) => (
                  <div key={i} className="group/bar flex flex-1 items-end gap-[1px]">
                    <div
                      className="flex-1 rounded-t-sm bg-primary/35 transition-all duration-500 group-hover/bar:bg-primary/70"
                      style={{ height: `${bar.h1}%` }}
                    />
                    <div
                      className="flex-1 rounded-t-sm bg-chart-2/25 transition-all duration-500 group-hover/bar:bg-chart-2/55"
                      style={{ height: `${bar.h2}%` }}
                    />
                  </div>
                ))}
              </div>

              <div className="mt-1.5 flex justify-between text-[8px] text-white/28">
                {months.map((m) => (
                  <span key={m}>{m}</span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-3 transition-all duration-300 hover:border-primary/20 sm:col-span-2">
              <p className="mb-3 text-[11px] font-semibold text-white">Top by Country</p>
              <div className="flex flex-col gap-2.5">
                {countries.map((c) => (
                  <div key={c.country} className="group">
                    <div className="mb-1 flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-[10px] text-white/45">
                        <span>{c.flag}</span>
                        {c.country}
                      </span>
                      <span className="text-[10px] font-semibold text-white/80">{c.pct}%</span>
                    </div>

                    <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                      <div
                        className={cn("h-full rounded-full transition-all duration-700 group-hover:brightness-110", c.color)}
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
/*  Trusted section                                                            */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*  Main component                                                             */
/* -------------------------------------------------------------------------- */

export default function HeroSection() {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      <HeroBackground />

      <div className="mx-auto max-w-7xl px-4 pb-20 pt-28 sm:px-6 lg:px-8">
        <div className="mx-auto flex min-h-screen max-w-5xl flex-col items-center">
          {/* Hero text block */}
          <div className="relative w-full text-center">
            <HeroBadge />

            <div className="animate-fade-up delay-100 relative mt-6 overflow-hidden rounded-[2rem] border border-white/10 bg-black/45 p-6 shadow-[0_24px_100px_rgba(0,0,0,0.40)] backdrop-blur-2xl sm:p-8 md:p-10 lg:p-12">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,128,32,0.08),transparent_35%)]" />

              <p className="relative mx-auto max-w-2xl text-sm font-medium leading-6 text-white/60">
                Modern analytics, automation, and reporting tools for SaaS teams that want a cleaner workflow and faster decisions.
              </p>

              <h1 className="relative mx-auto mt-5 max-w-4xl text-balance text-4xl font-bold leading-[0.95] tracking-[-0.05em] text-white sm:text-5xl md:text-6xl lg:text-[5rem]">
                Turn scattered data
                <span className="mt-2 block">into</span>
                <span className="relative mt-2 block">
                  <span className="absolute inset-x-10 bottom-3 h-5 rounded-full bg-[linear-gradient(90deg,rgba(255,122,24,0.45),rgba(6,182,212,0.35),rgba(255,122,24,0.45))] blur-2xl" />
                  <span className="relative bg-gradient-to-r from-orange-300 via-cyan-300 to-orange-300 bg-clip-text text-transparent">
                    clear decisions
                  </span>
                </span>
              </h1>

              <p className="relative mx-auto mt-6 max-w-2xl text-[15px] leading-7 text-white/68 sm:text-base">
                Bring dashboards, campaigns, customer insights, and performance reports into one polished workspace built for speed, clarity, and growth.
              </p>

              {/* CTA */}
              <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="#pricing"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "group relative overflow-hidden rounded-full px-7 text-sm font-semibold shadow-xl shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-primary/35"
                  )}
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                  Start free today
                  <Icon
                    icon="solar:arrow-right-bold"
                    className="ml-1.5 size-4 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>

                <a
                  href="#features"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "group rounded-full border-white/12 bg-white/[0.03] px-7 text-sm text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:bg-white/[0.05]"
                  )}
                >
                  Explore features
                  <Icon
                    icon="solar:arrow-down-bold"
                    className="ml-1.5 size-3.5 transition-transform duration-300 group-hover:translate-y-0.5"
                  />
                </a>
              </div>

              {/* helper line */}
              <div className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-white/42">
                <span>No credit card required</span>
                <span className="hidden h-1 w-1 rounded-full bg-white/20 sm:inline-block" />
                <span>14-day free trial</span>
                <span className="hidden h-1 w-1 rounded-full bg-white/20 sm:inline-block" />
                <span>Cancel anytime</span>
              </div>

              <TrustPills />

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {heroStats.map((item) => (
                  <HeroStatCard
                    key={item.label}
                    label={item.label}
                    value={item.value}
                    description={item.description}
                    icon={item.icon}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Product preview */}
          <div className="animate-slide-up-fade delay-300 relative mx-auto mt-10 w-full max-w-6xl">
            <div className="pointer-events-none absolute -inset-8 -z-10 rounded-[2.5rem] bg-[radial-gradient(circle_at_top,rgba(255,120,40,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(6,182,212,0.10),transparent_35%)] blur-3xl" />

            <div className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/[0.03] p-4 backdrop-blur-2xl sm:p-5">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-[1.5rem] border border-white/10 bg-white/[0.02] px-4 py-3">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                    Product preview
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    Cleaner structure, stronger hierarchy, better visual rhythm
                  </p>
                </div>

                <div className="flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/70" />
                    <span className="relative inline-flex size-2 rounded-full bg-primary" />
                  </span>
                  Live preview
                </div>
              </div>

              <DashboardPreview />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}