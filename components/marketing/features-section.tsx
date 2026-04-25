"use client"

import { cn } from "@/lib/utils"
import { Icon } from "@iconify/react"
import { buttonVariants } from "@/components/ui/button"
import React from "react"

/* -------------------------------------------------------------------------- */
/*  Bento Feature Cards Data                                                  */
/* -------------------------------------------------------------------------- */
const bentoCards = [
  {
    id: "delivered",
    title: "Delivered",
    stat: "$12,199",
    sub: "Last week: ▲ 0.8%",
    description:
      "Track Performance at a Glance — Monitor key metrics in real time and make data-driven decisions with ease.",
    span: "md:col-span-2 md:row-span-2",
    visual: "stat-card",
  },
  {
    id: "analytics",
    title: "Real-Time Analytics",
    stat: null,
    description:
      "Gain deeper insights into customer behavior and campaign performance, enabling you to optimize strategies on the go.",
    span: "md:col-span-2",
    visual: "line-chart",
  },
  {
    id: "data-insights",
    title: "Data Insights for Smarter Decisions",
    stat: null,
    description:
      "Leverage in-depth analytics to uncover trends, optimize performance, and drive better business outcomes with confidence.",
    span: "md:col-span-2",
    visual: "area-chart",
  },
  {
    id: "campaign",
    title: "Campaign Performance in One View",
    stat: null,
    description:
      "Track key metrics and trends in real time from a single dashboard.",
    span: "md:col-span-2",
    visual: "donut-chart",
  },
]

/* -------------------------------------------------------------------------- */
/*  Mini visualizations                                                       */
/* -------------------------------------------------------------------------- */

function StatCardVisual() {
  return (
    <div className="flex flex-col gap-3">
      {/* Big stat */}
      <div className="rounded-xl border border-border/15 bg-muted/20 p-4">
        <p className="text-[10px] text-muted-foreground/60">Delivered</p>
        <p className="mt-1 text-2xl font-bold text-foreground">$12,199</p>
        <p className="mt-0.5 text-[10px] text-primary">Last week: ▲ 0.8%</p>
      </div>
      {/* Mini bar chart */}
      <div className="flex h-20 items-end gap-1 rounded-xl border border-border/15 bg-muted/20 p-3">
        {[60, 80, 45, 90, 70, 55, 85, 65, 75, 50, 88, 95].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t bg-primary/25 transition-colors hover:bg-primary/45"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>
  )
}

function LineChartVisual() {
  return (
    <div className="mt-3 flex h-24 flex-col justify-end rounded-xl border border-border/15 bg-muted/20 p-3">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] text-muted-foreground/50">Real-time customers</span>
        <span className="text-sm font-bold text-foreground">1,027</span>
      </div>
      {/* Line-ish visualization */}
      <div className="flex h-12 items-end gap-0.5">
        {[30, 45, 35, 55, 50, 65, 45, 70, 60, 75, 55, 80, 65, 85, 70, 90].map(
          (h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t bg-primary/20 transition-colors hover:bg-primary/40"
              style={{ height: `${h}%` }}
            />
          )
        )}
      </div>
    </div>
  )
}

function AreaChartVisual() {
  return (
    <div className="mt-3 rounded-xl border border-border/15 bg-muted/20 p-3">
      <p className="mb-2 text-[10px] font-medium text-muted-foreground/60">
        Performance Overview
      </p>
      <div className="flex h-16 items-end gap-0.5">
        {[20, 35, 25, 50, 40, 55, 45, 65, 50, 70, 55, 75, 60, 80, 65, 85].map(
          (h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t bg-chart-2/25 transition-colors hover:bg-chart-2/45"
              style={{ height: `${h}%` }}
            />
          )
        )}
      </div>
      {/* Stat row */}
      <div className="mt-2 grid grid-cols-3 gap-2">
        {[
          { label: "Views", value: "24K" },
          { label: "Clicks", value: "3.2K" },
          { label: "Conv.", value: "540" },
        ].map((s) => (
          <div key={s.label} className="text-center">
            <p className="text-[9px] text-muted-foreground/40">{s.label}</p>
            <p className="text-xs font-semibold text-foreground">{s.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function DonutChartVisual() {
  return (
    <div className="mt-3 flex items-center gap-4 rounded-xl border border-border/15 bg-muted/20 p-4">
      {/* Donut ring */}
      <div className="relative flex size-20 shrink-0 items-center justify-center">
        <svg viewBox="0 0 36 36" className="size-full -rotate-90">
          <circle
            cx="18"
            cy="18"
            r="14"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            className="text-muted/30"
          />
          <circle
            cx="18"
            cy="18"
            r="14"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeDasharray="88"
            strokeDashoffset="30"
            strokeLinecap="round"
            className="text-primary"
          />
          <circle
            cx="18"
            cy="18"
            r="14"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeDasharray="88"
            strokeDashoffset="60"
            strokeLinecap="round"
            className="text-chart-2"
          />
        </svg>
        <div className="absolute flex flex-col items-center">
          <span className="text-sm font-bold text-foreground">12,563</span>
          <span className="text-[8px] text-muted-foreground/50">Total</span>
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-col gap-1.5">
        {[
          { label: "Organic", value: "5,320", color: "bg-primary" },
          { label: "Referral", value: "3,870", color: "bg-chart-2" },
          { label: "Direct", value: "3,373", color: "bg-muted-foreground/20" },
        ].map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <span className={cn("size-2 rounded-full", item.color)} />
            <span className="text-[10px] text-muted-foreground/60">
              {item.label}
            </span>
            <span className="text-[10px] font-medium text-foreground/80">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

const visuals: Record<string, React.ReactNode> = {
  "stat-card": <StatCardVisual />,
  "line-chart": <LineChartVisual />,
  "area-chart": <AreaChartVisual />,
  "donut-chart": <DonutChartVisual />,
}

/* -------------------------------------------------------------------------- */
/*  Component                                                                 */
/* -------------------------------------------------------------------------- */
export default function FeaturesSection() {
  return (
    <section id="features" className="relative overflow-hidden py-28">
      {/* ── Background ── */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        {/* Hex-dots pattern */}
        <div className="absolute inset-0 bg-hex-dots opacity-60" />
        {/* Fade edges */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
        {/* Glow orbs */}
        <div className="animate-drift absolute top-[-10%] left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/[0.06] blur-[100px]" />
        <div
          className="animate-drift absolute bottom-[-5%] right-[-10%] h-[400px] w-[600px] rounded-full bg-chart-2/[0.05] blur-[90px]"
          style={{ animationDelay: "8s", animationDirection: "reverse" }}
        />
      </div>

      <div className="mx-auto max-w-5xl px-6">
        {/* Section header */}
        <div className="mb-14 text-center">
          <p className="animate-fade-up mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
            Features
          </p>
          <h2 className="animate-fade-up delay-100 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything you need to{" "}
            <span className="gradient-text-primary">do business</span>
          </h2>
          <p className="animate-fade-up delay-200 mx-auto mt-4 max-w-xl text-[15px] text-muted-foreground">
            Track campaign performance, analyze key metrics, and make
            data-driven decisions — all in one intuitive dashboard.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {bentoCards.map((card, i) => (
            <div
              key={card.id}
              className={cn(
                "group relative flex flex-col overflow-hidden rounded-2xl border border-border/20 bg-card/50 p-5 transition-all duration-300",
                "hover:-translate-y-0.5 hover:border-primary/20 hover:bg-card/80 hover:shadow-lg hover:shadow-primary/5",
                card.span
              )}
              style={{ animationDelay: `${200 + i * 80}ms` }}
            >
              {/* Subtle inner glow on hover */}
              <div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-primary/[0.04] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <h3 className="text-sm font-semibold text-foreground">
                {card.title}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground/70">
                {card.description}
              </p>
              {visuals[card.visual]}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <a
            href="#contact"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "group rounded-full border-border/30 px-8 text-sm transition-all hover:border-primary/30 hover:bg-muted/30"
            )}
          >
            Talk to us
            <Icon icon="solar:arrow-right-bold" className="ml-1.5 size-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  )
}
