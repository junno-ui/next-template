"use client"

import { Icon } from "@iconify/react"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import React from "react"

/* -------------------------------------------------------------------------- */
/*  Data                                                                       */
/* -------------------------------------------------------------------------- */

const sidebarItems = [
  { icon: "solar:widget-5-bold-duotone", label: "Dashboard", active: true },
  { icon: "solar:box-minimalistic-bold", label: "Products", active: false },
  {
    icon: "solar:cart-large-minimalistic-bold",
    label: "Orders",
    active: false,
  },
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
      <div className="bg-luxury-grid absolute inset-0 opacity-20" />
      <div className="bg-hero-pattern absolute inset-0 opacity-15" />
      <div className="bg-noise-weave absolute inset-0 opacity-[0.07]" />

      <div className="absolute top-0 left-1/2 h-[560px] w-[min(92vw,1120px)] -translate-x-1/2 rounded-full bg-primary/[0.11] blur-[140px]" />
      <div className="absolute top-[20%] left-[10%] h-[380px] w-[380px] rounded-full bg-primary/[0.055] blur-[120px]" />
      <div className="absolute top-[30%] right-[8%] h-[360px] w-[360px] rounded-full bg-chart-2/[0.055] blur-[120px]" />
      <div className="absolute bottom-[8%] left-1/2 h-[280px] w-[780px] -translate-x-1/2 rounded-full bg-primary/[0.06] blur-[110px]" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_74%_54%_at_50%_22%,transparent_8%,rgba(255,255,255,0.24)_64%,rgba(255,255,255,0.82)_100%)] dark:bg-[radial-gradient(ellipse_74%_54%_at_50%_22%,transparent_8%,rgba(0,0,0,0.34)_64%,rgba(0,0,0,0.78)_100%)]" />

      <div className="absolute top-0 left-1/2 h-px w-[min(86vw,900px)] -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/35 to-transparent" />
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Small pieces                                                               */
/* -------------------------------------------------------------------------- */

function HeroBadge() {
  return (
    <div className="animate-fade-up inline-flex items-center gap-2 rounded-full bg-background/80 px-4 py-2 text-[11px] font-semibold tracking-[0.22em] text-primary uppercase shadow-xl ring-1 shadow-black/10 ring-primary/20 backdrop-blur-xl dark:bg-white/[0.035] dark:shadow-black/20">
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
          <strong className="font-semibold text-foreground dark:text-white">
            2,400+
          </strong>{" "}
          teams
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
    <div className="group relative overflow-hidden rounded-[1.5rem] bg-background/72 p-4 text-left ring-1 ring-border/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-background/90 hover:shadow-2xl hover:shadow-primary/10 hover:ring-primary/25 dark:bg-white/[0.025] dark:ring-white/10 dark:hover:bg-white/[0.05]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,120,40,0.14),transparent_42%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative flex items-start justify-between gap-3">
        <div>
          <p className="text-[11px] font-medium tracking-[0.18em] text-muted-foreground uppercase dark:text-white/45">
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
  const [activeMenu, setActiveMenu] = React.useState(sidebarItems[0].label)
  const [activePeriod, setActivePeriod] = React.useState("Monthly")

  const activeItem =
    sidebarItems.find((item) => item.label === activeMenu) ?? sidebarItems[0]

  const pageMeta: Record<string, { title: string; description: string }> = {
    Dashboard: {
      title: "Dashboard",
      description: "Real-time analytics overview",
    },
    Products: {
      title: "Products",
      description: "Track product performance and inventory",
    },
    Orders: {
      title: "Orders",
      description: "Monitor purchases, refunds, and revenue",
    },
    Campaigns: {
      title: "Campaigns",
      description: "Compare channels and campaign health",
    },
    Customers: {
      title: "Customers",
      description: "Understand segments and customer behavior",
    },
    Analytics: {
      title: "Analytics",
      description: "Discover trends across your business",
    },
    Settings: {
      title: "Settings",
      description: "Manage workspace and team preferences",
    },
  }

  const currentPage = pageMeta[activeMenu] ?? pageMeta.Dashboard

  return (
    <div className="group relative min-h-[620px] overflow-hidden rounded-[2.35rem] bg-background/78 shadow-[0_30px_100px_rgba(15,23,42,0.14)] ring-1 ring-border/45 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:bg-background/90 hover:shadow-[0_36px_130px_rgba(15,23,42,0.18)] hover:ring-primary/25 dark:bg-white/[0.035] dark:shadow-[0_30px_100px_rgba(0,0,0,0.42)] dark:ring-white/10 dark:hover:bg-white/[0.05] dark:hover:shadow-[0_36px_130px_rgba(0,0,0,0.55)]">
      {/* Ambient dashboard background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/72 to-muted/55 dark:from-white/[0.05] dark:via-white/[0.025] dark:to-primary/[0.04]" />
        <div className="absolute top-0 left-1/2 h-80 w-[82%] -translate-x-1/2 rounded-full bg-primary/[0.09] blur-[110px]" />
        <div className="absolute right-[-10%] bottom-[-18%] h-72 w-96 rounded-full bg-chart-2/[0.09] blur-[100px]" />
        <div className="absolute top-[38%] left-[-12%] h-72 w-80 rounded-full bg-primary/[0.055] blur-[110px]" />
        <div className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" />
      </div>

      <div className="flex min-h-[620px]">
        {/* Sidebar */}
        <aside className="hidden w-60 shrink-0 flex-col bg-muted/25 ring-1 ring-border/35 backdrop-blur-xl md:flex dark:bg-black/10 dark:ring-white/[0.06]">
          {/* Brand */}
          <div className="flex items-center gap-3 px-4 py-5">
            <div className="flex size-9 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-sm ring-1 shadow-primary/10 ring-primary/15">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="size-4.5"
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

            <div>
              <p className="text-sm font-bold tracking-tight text-foreground dark:text-white">
                Clario
              </p>
              <p className="text-[11px] text-muted-foreground">Growth OS</p>
            </div>
          </div>

          {/* Menu */}
          <nav className="flex flex-col gap-1.5 px-2.5">
            {sidebarItems.map((item, index) => {
              const active = activeMenu === item.label

              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => setActiveMenu(item.label)}
                  className={cn(
                    "group/menu flex items-center justify-between rounded-2xl px-3.5 py-3 text-left text-xs font-semibold transition-all duration-300",
                    active
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                      : "text-muted-foreground hover:translate-x-0.5 hover:bg-background/75 hover:text-foreground dark:hover:bg-white/[0.06] dark:hover:text-white"
                  )}
                  style={{ transitionDelay: `${index * 8}ms` }}
                >
                  <span className="flex items-center gap-2.5">
                    <Icon
                      icon={item.icon}
                      className={cn(
                        "size-4 transition-transform duration-300",
                        active ? "scale-110" : "group-hover/menu:scale-110"
                      )}
                    />
                    {item.label}
                  </span>

                  {active && (
                    <span className="size-1.5 rounded-full bg-primary-foreground/80" />
                  )}
                </button>
              )
            })}
          </nav>

          {/* Sidebar insight card */}
          <div className="mt-auto p-3">
            <div className="rounded-[1.5rem] bg-primary/10 p-4 ring-1 ring-primary/15">
              <div className="flex items-center gap-2 text-[11px] font-semibold text-primary">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60" />
                  <span className="relative inline-flex size-2 rounded-full bg-primary" />
                </span>
                Live sync
              </div>

              <p className="mt-2 text-[11px] leading-5 text-muted-foreground">
                Data refreshed 2 min ago across connected channels.
              </p>

              <div className="mt-4 rounded-2xl bg-background/55 p-3 ring-1 ring-border/40 dark:bg-white/[0.04] dark:ring-white/10">
                <div className="flex items-center justify-between text-[10px]">
                  <span className="text-muted-foreground">Health</span>
                  <span className="font-semibold text-primary">98%</span>
                </div>

                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted dark:bg-white/[0.07]">
                  <div className="h-full w-[98%] rounded-full bg-primary" />
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main */}
        <div className="min-w-0 flex-1 p-4 sm:p-5 md:p-6">
          {/* Top bar */}
          <div className="mb-5 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/15 md:hidden">
                <Icon icon={activeItem.icon} className="size-5" />
              </div>

              <div>
                <h3 className="text-base font-bold tracking-tight text-foreground dark:text-white">
                  {currentPage.title}
                </h3>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {currentPage.description}
                </p>
              </div>
            </div>

            <div className="hidden items-center gap-2 sm:flex">
              <div className="flex h-9 w-40 items-center gap-1.5 rounded-2xl bg-background/65 px-3 text-[11px] text-muted-foreground ring-1 ring-border/45 transition-all duration-300 hover:bg-background hover:ring-primary/20 dark:bg-white/[0.04] dark:ring-white/10 dark:hover:bg-white/[0.07]">
                <Icon icon="solar:magnifer-linear" className="size-3.5" />
                Search...
              </div>

              <div className="flex gap-0.5 rounded-2xl bg-background/65 p-1 ring-1 ring-border/45 dark:bg-white/[0.04] dark:ring-white/10">
                {["Monthly", "Weekly", "Daily"].map((period) => {
                  const active = activePeriod === period

                  return (
                    <button
                      key={period}
                      type="button"
                      onClick={() => setActivePeriod(period)}
                      className={cn(
                        "rounded-xl px-3 py-1.5 text-[11px] font-semibold transition-all duration-300",
                        active
                          ? "bg-primary text-primary-foreground shadow-sm shadow-primary/20"
                          : "text-muted-foreground hover:text-foreground dark:hover:text-white"
                      )}
                    >
                      {period}
                    </button>
                  )
                })}
              </div>

              <button
                type="button"
                className="flex size-9 items-center justify-center rounded-2xl bg-background/65 text-muted-foreground ring-1 ring-border/45 transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:ring-primary/20 dark:bg-white/[0.04] dark:ring-white/10"
                aria-label="Notifications"
              >
                <Icon icon="solar:bell-bold-duotone" className="size-4" />
              </button>

              <button
                type="button"
                className="flex size-9 items-center justify-center rounded-full bg-gradient-to-br from-primary/25 to-chart-2/15 text-primary ring-1 ring-primary/15 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/15"
                aria-label="User profile"
              >
                <Icon icon="solar:user-bold" className="size-4" />
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="mb-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {dashboardStats.map((stat) => (
              <div
                key={stat.label}
                className="group min-h-[118px] rounded-[1.5rem] bg-background/65 p-4 shadow-sm ring-1 shadow-black/[0.03] ring-border/45 transition-all duration-300 hover:-translate-y-0.5 hover:bg-background hover:ring-primary/20 dark:bg-white/[0.035] dark:shadow-black/20 dark:ring-white/10 dark:hover:bg-white/[0.06]"
              >
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-[10px] font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                    {stat.label}
                  </p>

                  <div className="flex size-8 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-105 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon icon={stat.icon} className="size-4" />
                  </div>
                </div>

                <p className="text-xl font-bold tracking-tight text-foreground dark:text-white">
                  {stat.value}
                </p>

                <p
                  className={cn(
                    "mt-1 text-[11px] font-semibold",
                    stat.up ? "text-primary" : "text-red-500 dark:text-red-400"
                  )}
                >
                  {stat.change} vs last month
                </p>
              </div>
            ))}
          </div>

          {/* Content grid */}
          <div className="grid min-h-[310px] grid-cols-1 gap-3 lg:grid-cols-5">
            {/* Chart */}
            <div className="rounded-[1.5rem] bg-background/65 p-4 shadow-sm ring-1 shadow-black/[0.03] ring-border/45 transition-all duration-300 hover:bg-background hover:ring-primary/20 lg:col-span-3 dark:bg-white/[0.035] dark:shadow-black/20 dark:ring-white/10 dark:hover:bg-white/[0.06]">
              <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-bold tracking-tight text-foreground dark:text-white">
                    Performance Overview
                  </p>
                  <p className="mt-1 text-[11px] text-muted-foreground">
                    Revenue and spend trend by month
                  </p>
                </div>

                <div className="flex shrink-0 gap-3">
                  <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
                    <span className="size-1.5 rounded-full bg-primary" />
                    Revenue
                  </span>
                  <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
                    <span className="size-1.5 rounded-full bg-chart-2" />
                    Expenses
                  </span>
                </div>
              </div>

              <div className="relative flex h-44 items-end gap-1.5 rounded-2xl bg-muted/35 px-3 pt-4 pb-5 dark:bg-black/10">
                <div className="pointer-events-none absolute inset-x-3 bottom-12 h-px bg-border/50 dark:bg-white/10" />
                <div className="pointer-events-none absolute inset-x-3 bottom-24 h-px bg-border/40 dark:bg-white/10" />
                <div className="pointer-events-none absolute inset-x-3 bottom-36 h-px bg-border/30 dark:bg-white/10" />

                {chartBars.map((bar, index) => (
                  <div
                    key={index}
                    className="group/bar relative z-10 flex flex-1 items-end gap-[2px]"
                  >
                    <div
                      className="flex-1 rounded-t-md bg-primary/45 transition-all duration-500 group-hover/bar:bg-primary/80 dark:bg-primary/35"
                      style={{ height: `${bar.h1}%` }}
                    />
                    <div
                      className="flex-1 rounded-t-md bg-chart-2/35 transition-all duration-500 group-hover/bar:bg-chart-2/70 dark:bg-chart-2/25"
                      style={{ height: `${bar.h2}%` }}
                    />
                  </div>
                ))}
              </div>

              <div className="mt-2 flex justify-between px-1 text-[9px] text-muted-foreground/65">
                {months.map((month) => (
                  <span key={month}>{month}</span>
                ))}
              </div>
            </div>

            {/* Countries */}
            <div className="rounded-[1.5rem] bg-background/65 p-4 shadow-sm ring-1 shadow-black/[0.03] ring-border/45 transition-all duration-300 hover:bg-background hover:ring-primary/20 lg:col-span-2 dark:bg-white/[0.035] dark:shadow-black/20 dark:ring-white/10 dark:hover:bg-white/[0.06]">
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <p className="text-sm font-bold tracking-tight text-foreground dark:text-white">
                    Top by Country
                  </p>
                  <p className="mt-1 text-[11px] text-muted-foreground">
                    Active users by location
                  </p>
                </div>

                <div className="rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-semibold text-primary">
                  Live
                </div>
              </div>

              <div className="flex flex-col gap-4">
                {countries.map((country) => (
                  <div key={country.country} className="group/country">
                    <div className="mb-1.5 flex items-center justify-between">
                      <span className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="text-sm">{country.flag}</span>
                        {country.country}
                      </span>

                      <span className="text-xs font-bold text-foreground/80 dark:text-white/80">
                        {country.pct}%
                      </span>
                    </div>

                    <div className="h-2 overflow-hidden rounded-full bg-muted/80 dark:bg-white/[0.06]">
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

              <div className="mt-5 rounded-2xl bg-primary/10 p-3 ring-1 ring-primary/15">
                <div className="flex items-center justify-between">
                  <p className="text-[11px] font-semibold text-primary">
                    Growth signal
                  </p>
                  <Icon
                    icon="solar:graph-up-bold-duotone"
                    className="size-4 text-primary"
                  />
                </div>
                <p className="mt-1 text-[11px] leading-5 text-muted-foreground">
                  Germany traffic is up 14% compared to the previous period.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom activity row */}
          <div className="mt-3 grid gap-3 lg:grid-cols-3">
            {[
              [
                "New campaign launched",
                "2 min ago",
                "solar:rocket-bold-duotone",
              ],
              [
                "Revenue report generated",
                "8 min ago",
                "solar:document-text-bold-duotone",
              ],
              [
                "Customer segment synced",
                "12 min ago",
                "solar:database-bold-duotone",
              ],
            ].map(([title, time, icon]) => (
              <div
                key={title}
                className="flex items-center gap-3 rounded-2xl bg-background/60 p-3 text-left ring-1 ring-border/40 transition-all duration-300 hover:-translate-y-0.5 hover:bg-background hover:ring-primary/20 dark:bg-white/[0.03] dark:ring-white/10 dark:hover:bg-white/[0.055]"
              >
                <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon icon={icon} className="size-4" />
                </div>

                <div className="min-w-0">
                  <p className="truncate text-xs font-semibold text-foreground dark:text-white">
                    {title}
                  </p>
                  <p className="mt-0.5 text-[10px] text-muted-foreground">
                    {time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile menu */}
          <div className="mt-3 flex gap-2 overflow-x-auto pb-1 md:hidden">
            {sidebarItems.map((item) => {
              const active = activeMenu === item.label

              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => setActiveMenu(item.label)}
                  className={cn(
                    "flex shrink-0 items-center gap-1.5 rounded-full px-3 py-2 text-[10px] font-semibold transition-all duration-300",
                    active
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                      : "bg-background/65 text-muted-foreground ring-1 ring-border/45 hover:text-foreground dark:bg-white/[0.04] dark:ring-white/10 dark:hover:text-white"
                  )}
                >
                  <Icon icon={item.icon} className="size-3.5" />
                  {item.label}
                </button>
              )
            })}
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

      <div className="mx-auto max-w-7xl px-4 pt-32 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto flex min-h-screen max-w-6xl flex-col items-center">
          {/* Hero content */}
          <div className="relative w-full text-center">
            <HeroBadge />

            <div className="animate-fade-up relative mx-auto mt-5 max-w-3xl px-4 delay-100">
              <p className="mx-auto max-w-xl text-xs leading-5 font-medium text-foreground/70 sm:text-sm dark:text-white/60">
                Modern analytics, automation, and reporting tools for SaaS teams
              </p>
              <h1 className="mx-auto mt-4 max-w-3xl text-center text-3xl leading-tight font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl dark:text-white">
                Turn scattered data
                <span className="block">into</span>
                <span className="relative inline-block">
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-1.5 h-3 rounded-full bg-linear-to-r from-primary/40 via-cyan-300/20 to-primary/40 blur-xl"
                  />
                  <span className="relative bg-linear-to-r from-orange-200 via-cyan-200 to-orange-200 bg-clip-text text-transparent">
                    clear decisions
                  </span>
                </span>
              </h1>

              <p className="mx-auto mt-4 max-w-xl text-center text-sm leading-6 text-muted-foreground dark:text-white/70">
                Bring dashboards, campaigns, and insights into one fast, clean
                workspace.
              </p>

              <div className="mt-6 flex flex-col items-center justify-center gap-2 sm:flex-row">
                <a
                  href="#pricing"
                  className={cn(
                    buttonVariants({ size: "sm" }),
                    "rounded-full px-6 text-xs font-semibold shadow-md transition-all hover:scale-[1.02]"
                  )}
                >
                  Start free
                </a>

                <a
                  href="#features"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "sm" }),
                    "rounded-full px-6 text-xs"
                  )}
                >
                  Features
                </a>
              </div>

              <div className="mt-3 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[10px] text-muted-foreground dark:text-white/50">
                <span>No card</span>
                <span>•</span>
                <span>14-day trial</span>
                <span>•</span>
                <span>Cancel anytime</span>
              </div>

              <div className="mt-6 grid max-w-3xl gap-2 sm:grid-cols-3">
                {heroStats.map((item) => (
                  <HeroStatCard key={item.label} {...item} />
                ))}
              </div>
            </div>
          </div>

          {/* Product preview */}
          {/* Product preview */}
          <div className="animate-slide-up-fade relative mx-auto mt-16 w-full max-w-7xl delay-300">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-10 -z-10 rounded-[3rem] bg-[radial-gradient(circle_at_top,rgba(255,120,40,0.14),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(6,182,212,0.10),transparent_35%)] blur-3xl"
            />

            <div className="relative overflow-hidden rounded-[2.5rem] bg-background/72 p-4 shadow-2xl ring-1 shadow-black/20 ring-border/40 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:bg-background/90 hover:ring-primary/20 sm:p-5 dark:bg-white/[0.025] dark:ring-white/10 dark:hover:bg-white/[0.035]">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent"
              />

              <div className="mb-5 flex flex-wrap items-center justify-between gap-3 rounded-[1.75rem] bg-background/80 px-5 py-4 ring-1 ring-border/40 dark:bg-white/[0.025] dark:ring-white/10">
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.2em] text-primary uppercase">
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
