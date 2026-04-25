"use client"

import { Icon } from "@iconify/react"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

/* -------------------------------------------------------------------------- */
/*  Data                                                                       */
/* -------------------------------------------------------------------------- */

const features = [
  {
    title: "Executive Snapshot",
    label: "Overview",
    description:
      "See revenue, pipeline health, and growth momentum in one focused executive view.",
    icon: "solar:graph-up-bold-duotone",
    visual: "snapshot",
    className: "lg:col-span-4 lg:row-span-2",
    hover: "hover:-translate-y-2 hover:rotate-[0.35deg]",
  },
  {
    title: "Live Signal Tracking",
    label: "Realtime",
    description:
      "Spot meaningful changes earlier with signals your team can trust.",
    icon: "solar:pulse-2-bold-duotone",
    visual: "signals",
    className: "lg:col-span-4",
    hover: "hover:-translate-y-1 hover:translate-x-1",
  },
  {
    title: "Team Workflow",
    label: "Workflow",
    description:
      "Move from insight to action with a cleaner operating rhythm.",
    icon: "solar:route-bold-duotone",
    visual: "steps",
    className: "lg:col-span-4",
    hover: "hover:-translate-y-1 hover:-translate-x-1",
  },
  {
    title: "Campaign Health",
    label: "Channels",
    description:
      "Compare channel performance without switching tools.",
    icon: "solar:megaphone-bold-duotone",
    visual: "progress",
    className: "lg:col-span-2",
    hover: "hover:-translate-y-1 hover:scale-[1.02]",
  },
  {
    title: "Smart Reports",
    label: "Reports",
    description:
      "Create summaries stakeholders understand quickly.",
    icon: "solar:document-text-bold-duotone",
    visual: "reports",
    className: "lg:col-span-3",
    hover: "hover:-translate-y-1 hover:-rotate-[0.45deg]",
  },
  {
    title: "Automation",
    label: "Automate",
    description:
      "Notify the right people when important changes happen.",
    icon: "solar:bolt-bold-duotone",
    visual: "automation",
    className: "lg:col-span-3",
    hover: "hover:-translate-y-2 hover:rotate-[-0.35deg]",
  },
]

/* -------------------------------------------------------------------------- */
/*  Visuals                                                                    */
/* -------------------------------------------------------------------------- */

function FeatureVisual({ type }: { type: string }) {
  if (type === "snapshot") {
    return (
      <div className="mt-6 space-y-4">
        <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs text-white/40">Revenue this month</p>
              <p className="mt-1 text-3xl font-bold tracking-tight text-white">
                $12,199
              </p>
            </div>

            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              +20.8%
            </span>
          </div>

          <p className="mt-3 text-xs leading-5 text-white/45">
            Growth is driven by stronger activation and expansion revenue.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-xs font-semibold text-white">Performance trend</p>
            <span className="flex items-center gap-1.5 text-[10px] text-white/40">
              <span className="size-1.5 rounded-full bg-primary" />
              Live
            </span>
          </div>

          <div className="flex h-36 items-end gap-1.5">
            {[42, 58, 46, 72, 62, 80, 66, 86, 74, 92, 78, 96].map(
              (height, index) => (
                <div key={index} className="group/bar flex flex-1 items-end">
                  <div
                    className="w-full rounded-t-lg bg-gradient-to-t from-primary/35 to-primary/80 transition-all duration-500 group-hover/bar:from-primary/60 group-hover/bar:to-primary"
                    style={{
                      height: `${height}%`,
                      transitionDelay: `${index * 24}ms`,
                    }}
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    )
  }

  if (type === "signals") {
    return (
      <div className="mt-6 grid gap-2">
        {[
          ["Trial conversion", "+18.4%", "text-primary"],
          ["Churn risk", "-6.2%", "text-red-400"],
          ["Expansion intent", "+11.7%", "text-primary"],
        ].map(([label, value, color], index) => (
          <div
            key={label}
            className="group/row flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.035] px-3 py-3 transition-all duration-300 hover:translate-x-1 hover:border-primary/20 hover:bg-white/[0.055]"
            style={{ transitionDelay: `${index * 45}ms` }}
          >
            <span className="flex items-center gap-2 text-sm text-white/65">
              <span className="size-1.5 rounded-full bg-primary/70 transition-transform duration-300 group-hover/row:scale-150" />
              {label}
            </span>

            <span className={cn("text-sm font-bold", color)}>{value}</span>
          </div>
        ))}
      </div>
    )
  }

  if (type === "steps") {
    return (
      <div className="mt-6 grid grid-cols-2 gap-2">
        {[
          ["Collect", "solar:database-bold-duotone"],
          ["Analyze", "solar:chart-2-bold-duotone"],
          ["Act", "solar:bolt-bold-duotone"],
          ["Report", "solar:document-text-bold-duotone"],
        ].map(([label, icon], index) => (
          <div
            key={label}
            className="group/step rounded-2xl border border-white/10 bg-white/[0.035] p-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:bg-primary/10"
            style={{ transitionDelay: `${index * 45}ms` }}
          >
            <div className="flex size-9 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover/step:scale-110 group-hover/step:rotate-3 group-hover/step:bg-primary group-hover/step:text-primary-foreground">
              <Icon icon={icon} className="size-4" />
            </div>

            <p className="mt-3 text-sm font-semibold text-white">{label}</p>
          </div>
        ))}
      </div>
    )
  }

  if (type === "progress") {
    return (
      <div className="mt-6 grid gap-3">
        {[
          ["Organic", "82%", "bg-primary"],
          ["Paid", "64%", "bg-chart-2"],
          ["Direct", "52%", "bg-white/35"],
        ].map(([label, width, color]) => (
          <div key={label} className="group/progress">
            <div className="mb-1 flex justify-between text-xs">
              <span className="text-white/45">{label}</span>
              <span className="font-semibold text-white/75">{width}</span>
            </div>

            <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
              <div
                className={cn(
                  "h-full rounded-full transition-all duration-700 group-hover/progress:brightness-125",
                  color
                )}
                style={{ width }}
              />
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (type === "reports") {
    return (
      <div className="mt-6 grid gap-2">
        {[
          ["Revenue summary", "Ready"],
          ["Risk report", "Updated"],
          ["Board view", "Shared"],
        ].map(([label, status], index) => (
          <div
            key={label}
            className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.035] px-3 py-3 transition-all duration-300 hover:-translate-x-1 hover:border-primary/20 hover:bg-white/[0.055]"
            style={{ transitionDelay: `${index * 45}ms` }}
          >
            <span className="text-sm text-white/65">{label}</span>

            <span className="rounded-full bg-white/[0.06] px-2.5 py-1 text-[10px] font-semibold text-white/55">
              {status}
            </span>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="mt-6 grid grid-cols-3 gap-2">
      {[
        ["Trigger", "solar:bell-bold-duotone"],
        ["Analyze", "solar:magnifer-zoom-in-bold-duotone"],
        ["Notify", "solar:letter-bold-duotone"],
      ].map(([label, icon], index) => (
        <div
          key={label}
          className="group/auto rounded-2xl border border-white/10 bg-white/[0.035] p-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:bg-primary/10"
          style={{ transitionDelay: `${index * 55}ms` }}
        >
          <div className="flex size-9 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover/auto:scale-110 group-hover/auto:rotate-6 group-hover/auto:bg-primary group-hover/auto:text-primary-foreground">
            <Icon icon={icon} className="size-4" />
          </div>

          <p className="mt-3 text-xs font-semibold text-white">{label}</p>
        </div>
      ))}
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Card                                                                       */
/* -------------------------------------------------------------------------- */

function BentoCard({
  feature,
  index,
}: {
  feature: (typeof features)[number]
  index: number
}) {
  return (
    <article
      className={cn(
        "group relative flex min-h-[300px] flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.025] p-5 shadow-2xl shadow-black/[0.12] backdrop-blur-xl transition-all duration-500",
        "hover:border-primary/25 hover:bg-white/[0.045] hover:shadow-2xl hover:shadow-primary/10",
        feature.className,
        feature.hover
      )}
      style={{
        animationDelay: `${index * 80}ms`,
      }}
    >
      {/* gradient hover wash */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* top shine */}
      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* corner glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-primary/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative flex items-start justify-between gap-4">
        <div>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
            <span className="size-1.5 rounded-full bg-primary" />
            {feature.label}
          </div>

          <h3 className="text-xl font-bold tracking-tight text-white">
            {feature.title}
          </h3>

          <p className="mt-3 text-sm leading-6 text-white/58">
            {feature.description}
          </p>
        </div>

        <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/15 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-primary group-hover:text-primary-foreground">
          <Icon icon={feature.icon} className="size-5" />
        </div>
      </div>

      <div className="relative mt-auto">
        <FeatureVisual type={feature.visual} />
      </div>
    </article>
  )
}

/* -------------------------------------------------------------------------- */
/*  Main Component                                                             */
/* -------------------------------------------------------------------------- */

export default function FeaturesSection() {
  return (
    <section id="features" className="relative isolate overflow-hidden py-28">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 bg-hex-dots opacity-20" />

        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />

        <div className="absolute left-1/2 top-0 h-[480px] w-[min(90vw,980px)] -translate-x-1/2 rounded-full bg-primary/[0.08] blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[420px] w-[640px] rounded-full bg-chart-2/[0.06] blur-[100px]" />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_20%,transparent_10%,rgba(0,0,0,0.42)_72%,rgba(0,0,0,0.75)_100%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/[0.03] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary backdrop-blur-xl">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/70" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            Features
          </div>

          <h2 className="text-balance text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl md:text-5xl">
            A smarter bento workspace for{" "}
            <span className="bg-gradient-to-r from-orange-300 via-cyan-300 to-orange-300 bg-clip-text text-transparent">
              modern growth teams.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-white/60">
            Simple dashboards, smart signals, and automated reporting designed
            to help your team move faster with less noise.
          </p>
        </div>

        {/* Real Bento Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12 lg:grid-rows-2">
          {features.map((feature, index) => (
            <BentoCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex flex-col items-center justify-center gap-4 text-center">
          <p className="max-w-xl text-sm leading-6 text-white/45">
            Build a cleaner operating rhythm with dashboards, signals, reports,
            and automation in one polished workspace.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#pricing"
              className={cn(
                buttonVariants({ size: "lg" }),
                "group rounded-full px-7 text-sm font-semibold shadow-xl shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-primary/30"
              )}
            >
              Start free today
              <Icon
                icon="solar:arrow-right-bold"
                className="ml-1.5 size-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="#contact"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "group rounded-full border-white/10 bg-white/[0.03] px-7 text-sm text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:bg-white/[0.05]"
              )}
            >
              Talk to our team
              <Icon
                icon="solar:chat-round-dots-bold"
                className="ml-1.5 size-4 transition-transform duration-300 group-hover:scale-110"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}