"use client"

import { Icon } from "@iconify/react"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

/* -------------------------------------------------------------------------- */
/*  Data                                                                       */
/* -------------------------------------------------------------------------- */

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

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
]

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
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-luxury-grid opacity-20" />
      <div className="absolute inset-0 bg-hero-pattern opacity-15" />
      <div className="absolute inset-0 bg-noise-weave opacity-[0.07]" />

      <div className="absolute left-1/2 top-0 h-[560px] w-[min(92vw,1120px)] -translate-x-1/2 rounded-full bg-primary/[0.11] blur-[140px]" />
      <div className="absolute left-[10%] top-[20%] h-[380px] w-[380px] rounded-full bg-primary/[0.055] blur-[120px]" />
      <div className="absolute right-[8%] top-[30%] h-[360px] w-[360px] rounded-full bg-chart-2/[0.055] blur-[120px]" />
      <div className="absolute bottom-[8%] left-1/2 h-[280px] w-[780px] -translate-x-1/2 rounded-full bg-primary/[0.06] blur-[110px]" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_74%_54%_at_50%_22%,transparent_8%,rgba(255,255,255,0.24)_64%,rgba(255,255,255,0.82)_100%)] dark:bg-[radial-gradient(ellipse_74%_54%_at_50%_22%,transparent_8%,rgba(0,0,0,0.34)_64%,rgba(0,0,0,0.78)_100%)]" />

      <div className="absolute left-1/2 top-0 h-px w-[min(86vw,900px)] -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/35 to-transparent" />
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Small pieces                                                               */
/* -------------------------------------------------------------------------- */

function HeroBadge() {
  return (
    <div className="animate-fade-up inline-flex items-center gap-2 rounded-full bg-background/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary shadow-xl shadow-black/10 ring-1 ring-primary/20 backdrop-blur-xl dark:bg-white/[0.035] dark:shadow-black/20">
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
      <div className="group flex items-center gap-2 rounded-full bg-background/80 px-4 py-2 text-sm text-foreground/75 ring-1 ring-border/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-background hover:ring-primary/20 dark:bg-white/[0.035] dark:text-white/70 dark:ring-white/10 dark:hover:bg-white/[0.055]">
        <div className="flex -space-x-1.5">
          {[
            "bg-primary/90",
            "bg-chart-2/80",
            "bg-chart-3/70",
            "bg-chart-4/70",
          ].map((color, index) => (
            <div
              key={color}
              className={cn(
                "size-6 rounded-full ring-2 ring-background transition-transform duration-300 group-hover:-translate-y-0.5 dark:ring-black",
                color
              )}
              style={{ transitionDelay: `${index * 40}ms` }}
            />
          ))}
        </div>

        <span>
          Trusted by{" "}
          <strong className="font-semibold text-foreground dark:text-white">2,400+</strong> teams
        </span>
      </div>

      <div className="group flex items-center gap-2 rounded-full bg-background/80 px-4 py-2 text-sm text-foreground/75 ring-1 ring-border/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-background hover:ring-primary/20 dark:bg-white/[0.035] dark:text-white/70 dark:ring-white/10 dark:hover:bg-white/[0.055]">
        <div className="flex text-amber-400">
          {Array.from({ length: 5 }).map((_, index) => (
            <Icon
              key={index}
              icon="solar:star-bold"
              className="size-3.5 transition-transform duration-300 group-hover:scale-110"
              style={{ transitionDelay: `${index * 30}ms` }}
            />
          ))}
        </div>

        <span className="font-medium text-foreground/85 dark:text-white/80">
          Rated 5.0 by product teams
        </span>
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
    <div className="group relative overflow-hidden rounded-[1.5rem] bg-background/72 p-4 text-left ring-1 ring-border/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-background/90 hover:ring-primary/25 hover:shadow-2xl hover:shadow-primary/10 dark:bg-white/[0.025] dark:ring-white/10 dark:hover:bg-white/[0.05]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,120,40,0.14),transparent_42%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative flex items-start justify-between gap-3">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground dark:text-white/45">
            {label}
          </p>
          <p className="mt-2 text-2xl font-bold tracking-tight text-foreground dark:text-white">
            {value}
          </p>
        </div>

        <div className="flex size-10 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/15 transition-all duration-300 group-hover:scale-105 group-hover:bg-primary group-hover:text-primary-foreground">
          <Icon icon={icon} className="size-5" />
        </div>
      </div>

      <p className="relative mt-2 text-xs leading-5 text-muted-foreground dark:text-white/55">
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
    <div className="overflow-hidden rounded-[2rem] bg-slate-950/95 shadow-[0_28px_90px_rgba(0,0,0,0.45)] ring-1 ring-border/40 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_32px_110px_rgba(0,0,0,0.55)] hover:ring-primary/20 dark:ring-white/10">
      <div className="flex">
        <aside className="hidden w-52 shrink-0 flex-col bg-white/[0.025] md:flex">
          <div className="flex items-center gap-2 px-4 py-4 ring-1 ring-white/[0.04]">
            <div className="flex size-8 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="size-4"
                aria-hidden="true"
              >
                <path
                  d="M5.5 6.5 12 18 18.5 6.5"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.25 6.5 12 11.25 14.75 6.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.65"
                />
              </svg>
            </div>

            <span className="text-xs font-bold text-white">Clario</span>
          </div>

          <nav className="flex flex-col gap-1 p-2">
            {sidebarItems.map((item, index) => (
              <div
                key={item.label}
                className={cn(
                  "flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-[11px] font-medium transition-all duration-300",
                  item.active
                    ? "bg-primary/12 text-primary ring-1 ring-primary/10"
                    : "text-white/45 hover:translate-x-0.5 hover:bg-white/[0.04] hover:text-white/75"
                )}
                style={{ transitionDelay: `${index * 8}ms` }}
              >
                <Icon icon={item.icon} className="size-3.5" />
                {item.label}
              </div>
            ))}
          </nav>

          <div className="mt-auto p-2">
            <div className="rounded-2xl bg-primary/8 p-3 ring-1 ring-primary/15">
              <div className="flex items-center gap-2 text-[10px] font-semibold text-primary">
                <span className="relative flex size-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
                </span>
                Live sync
              </div>
              <p className="mt-1 text-[10px] leading-4 text-white/45">
                Data refreshed 2 min ago
              </p>
            </div>
          </div>
        </aside>

        <div className="min-w-0 flex-1 p-4 md:p-5">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <h3 className="text-sm font-semibold text-white">Dashboard</h3>
              <p className="text-[10px] text-white/40">
                Real-time analytics overview
              </p>
            </div>

            <div className="hidden items-center gap-2 sm:flex">
              <div className="flex h-8 w-36 items-center gap-1.5 rounded-xl bg-white/[0.035] px-3 text-[10px] text-white/35 ring-1 ring-white/10 transition-all duration-300 hover:bg-white/[0.055] hover:ring-primary/20">
                <Icon icon="solar:magnifer-linear" className="size-3" />
                Search...
              </div>

              <div className="flex gap-0.5 rounded-xl bg-white/[0.035] p-0.5 ring-1 ring-white/10">
                {["Monthly", "Weekly", "Daily"].map((period, index) => (
                  <span
                    key={period}
                    className={cn(
                      "rounded-lg px-2.5 py-1 text-[10px] font-medium transition-all duration-300",
                      index === 0
                        ? "bg-primary/15 text-primary"
                        : "text-white/35 hover:text-white/70"
                    )}
                  >
                    {period}
                  </span>
                ))}
              </div>

              <div className="flex size-8 items-center justify-center rounded-xl bg-white/[0.035] text-white/35 ring-1 ring-white/10 transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:ring-primary/20">
                <Icon icon="solar:bell-bold-duotone" className="size-3.5" />
              </div>

              <div className="flex size-8 items-center justify-center rounded-full bg-gradient-to-br from-primary/30 to-chart-2/20 text-primary ring-1 ring-primary/15">
                <Icon icon="solar:user-bold" className="size-3.5" />
              </div>
            </div>
          </div>

          <div className="mb-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {dashboardStats.map((stat) => (
              <div
                key={stat.label}
                className="group rounded-2xl bg-white/[0.025] p-3 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.05] hover:ring-primary/20"
              >
                <div className="mb-1.5 flex items-center justify-between">
                  <p className="text-[10px] font-medium text-white/40">
                    {stat.label}
                  </p>
                  <Icon
                    icon={stat.icon}
                    className="size-3.5 text-white/20 transition-all duration-300 group-hover:text-primary/70"
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
            <div className="rounded-2xl bg-white/[0.025] p-3 ring-1 ring-white/10 transition-all duration-300 hover:bg-white/[0.04] hover:ring-primary/20 sm:col-span-3">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-[11px] font-semibold text-white">
                  Performance Overview
                </p>

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
                {chartBars.map((bar, index) => (
                  <div
                    key={index}
                    className="group/bar flex flex-1 items-end gap-[1px]"
                  >
                    <div
                      className="flex-1 rounded-t-sm bg-primary/35 transition-all duration-500 group-hover/bar:bg-primary/75"
                      style={{ height: `${bar.h1}%` }}
                    />
                    <div
                      className="flex-1 rounded-t-sm bg-chart-2/25 transition-all duration-500 group-hover/bar:bg-chart-2/60"
                      style={{ height: `${bar.h2}%` }}
                    />
                  </div>
                ))}
              </div>

              <div className="mt-1.5 flex justify-between text-[8px] text-white/28">
                {months.map((month) => (
                  <span key={month}>{month}</span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-white/[0.025] p-3 ring-1 ring-white/10 transition-all duration-300 hover:bg-white/[0.04] hover:ring-primary/20 sm:col-span-2">
              <p className="mb-3 text-[11px] font-semibold text-white">
                Top by Country
              </p>

              <div className="flex flex-col gap-2.5">
                {countries.map((country) => (
                  <div key={country.country} className="group/country">
                    <div className="mb-1 flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-[10px] text-white/45">
                        <span>{country.flag}</span>
                        {country.country}
                      </span>
                      <span className="text-[10px] font-semibold text-white/80">
                        {country.pct}%
                      </span>
                    </div>

                    <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                      <div
                        className={cn(
                          "h-full rounded-full transition-all duration-700 group-hover/country:brightness-125",
                          country.color
                        )}
                        style={{ width: `${country.pct}%` }}
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
/*  Main component                                                             */
/* -------------------------------------------------------------------------- */

export default function HeroSection() {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      <HeroBackground />

      <div className="mx-auto max-w-7xl px-4 pb-20 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto flex min-h-screen max-w-6xl flex-col items-center">
          {/* Hero content */}
          <div className="relative w-full text-center">
            <HeroBadge />

            <div className="animate-fade-up delay-100 relative mx-auto mt-7 max-w-5xl">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[420px] w-[min(90vw,900px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.10] blur-[120px]"
              />

              <p className="mx-auto max-w-2xl text-sm font-medium leading-6 text-foreground/70 dark:text-white/62 sm:text-base">
                Modern analytics, automation, and reporting tools for SaaS teams
                that want cleaner workflows and faster decisions.
              </p>

              <h1 className="mx-auto mt-6 max-w-5xl text-balance text-5xl font-bold leading-[0.9] tracking-[-0.065em] text-foreground dark:text-white sm:text-6xl md:text-7xl lg:text-[6.25rem]">
                Turn scattered data
                <span className="block">into</span>
                <span className="relative inline-block">
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-3 h-6 rounded-full bg-gradient-to-r from-primary/45 via-cyan-300/25 to-primary/45 blur-2xl sm:bottom-4 sm:h-8"
                  />
                  <span className="relative bg-gradient-to-r from-orange-200 via-cyan-200 to-orange-200 bg-clip-text text-transparent">
                    clear decisions
                  </span>
                </span>
              </h1>

              <p className="mx-auto mt-7 max-w-2xl text-pretty text-[15px] leading-7 text-muted-foreground dark:text-white/70 sm:text-base">
                Bring dashboards, campaigns, customer insights, and performance
                reports into one polished workspace built for speed, clarity,
                and growth.
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="#pricing"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "group relative overflow-hidden rounded-full px-8 text-sm font-semibold shadow-xl shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-primary/35 active:scale-[0.98]"
                  )}
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]"
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
                    "group rounded-full bg-background/80 px-8 text-sm text-foreground ring-1 ring-border/40 transition-all duration-300 hover:-translate-y-0.5 hover:bg-background hover:ring-primary/25 active:scale-[0.98] dark:bg-white/[0.035] dark:text-white dark:ring-white/10 dark:hover:bg-white/[0.06]"
                  )}
                >
                  Explore features
                  <Icon
                    icon="solar:arrow-down-bold"
                    className="ml-1.5 size-3.5 transition-transform duration-300 group-hover:translate-y-0.5"
                  />
                </a>
              </div>

              <div className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-muted-foreground dark:text-white/45">
                <span>No credit card required</span>
                <span className="hidden size-1 rounded-full bg-border sm:block dark:bg-white/20" />
                <span>14-day free trial</span>
                <span className="hidden size-1 rounded-full bg-border sm:block dark:bg-white/20" />
                <span>Cancel anytime</span>
              </div>

              <TrustPills />

              <div className="mx-auto mt-9 grid max-w-4xl gap-3 sm:grid-cols-3">
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
          <div className="animate-slide-up-fade delay-300 relative mx-auto mt-14 w-full max-w-6xl">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-8 -z-10 rounded-[2.75rem] bg-[radial-gradient(circle_at_top,rgba(255,120,40,0.14),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(6,182,212,0.10),transparent_35%)] blur-3xl"
            />

            <div className="relative overflow-hidden rounded-[2.35rem] bg-background/72 p-4 shadow-2xl shadow-black/20 ring-1 ring-border/40 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:bg-background/90 hover:ring-primary/20 dark:bg-white/[0.025] dark:ring-white/10 dark:hover:bg-white/[0.035] sm:p-5">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent"
              />

              <div className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-[1.5rem] bg-background/80 px-4 py-3 ring-1 ring-border/40 dark:bg-white/[0.025] dark:ring-white/10">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                    Product preview
                  </p>
                  <p className="mt-1 text-sm font-semibold text-foreground dark:text-white">
                    Cleaner structure, stronger hierarchy, better visual rhythm
                  </p>
                </div>

                <div className="flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary ring-1 ring-primary/20">
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
