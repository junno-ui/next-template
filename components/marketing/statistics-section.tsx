"use client"

import { Icon } from "@iconify/react"

import { cn } from "@/lib/utils"

const stats = [
  {
    value: "10K+",
    label: "Active Teams",
    icon: "mdi:account-group-outline",
    description: "Operators rely on the platform every day.",
    accent: "from-primary/20",
    hover: "hover:-translate-y-2 hover:rotate-[0.35deg]",
  },
  {
    value: "50M+",
    label: "Signals Processed",
    icon: "mdi:send-outline",
    description: "Data points converted into clear decisions.",
    accent: "from-chart-2/20",
    hover: "hover:-translate-y-1 hover:translate-x-1",
  },
  {
    value: "99.9%",
    label: "Uptime",
    icon: "mdi:shield-check-outline",
    description: "Reliable infrastructure for critical workflows.",
    accent: "from-primary/20",
    hover: "hover:-translate-y-1 hover:-translate-x-1",
  },
  {
    value: "4.9/5",
    label: "User Rating",
    icon: "mdi:star-outline",
    description: "Loved for clarity, speed, and ease of use.",
    accent: "from-amber-400/20",
    hover: "hover:-translate-y-2 hover:rotate-[-0.35deg]",
  },
]

function StatCard({
  stat,
  index,
}: {
  stat: (typeof stats)[number]
  index: number
}) {
  return (
    <article
      className={cn(
        "animate-slide-up-fade group relative overflow-hidden rounded-[1.75rem] border border-border/40 bg-background/72 p-6 text-center shadow-2xl shadow-black/[0.10] backdrop-blur-xl transition-all duration-500 dark:border-white/10 dark:bg-white/[0.025]",
        "hover:border-primary/25 hover:bg-background/90 hover:shadow-primary/10 dark:hover:bg-white/[0.045]",
        stat.hover
      )}
      style={{
        animationDelay: `${240 + index * 90}ms`,
        animationFillMode: "both",
      }}
    >
      {/* soft hover wash */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 bg-gradient-to-br via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100",
          stat.accent
        )}
      />

      {/* top shine */}
      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* corner glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-primary/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative mx-auto mb-5 flex size-13 items-center justify-center rounded-2xl border border-border/40 bg-background/80 text-primary transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:border-primary/25 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/20 dark:border-white/10 dark:bg-white/[0.035]">
        <Icon icon={stat.icon} className="size-6" />
      </div>

      <p className="relative text-4xl font-bold tracking-[-0.04em] text-foreground dark:text-white">
        {stat.value}
      </p>

      <p className="relative mt-2 text-sm font-semibold text-foreground/85 dark:text-white/85">
        {stat.label}
      </p>

      <p className="relative mx-auto mt-3 max-w-[14rem] text-sm leading-6 text-muted-foreground dark:text-white/50">
        {stat.description}
      </p>
    </article>
  )
}

export default function StatisticsSection() {
  return (
    <section className="relative isolate overflow-hidden py-28">
      {/* Background */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 bg-hex-dots opacity-[0.14]" />

        <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-background to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-background to-transparent" />

        <div className="absolute left-1/2 top-1/2 h-[420px] w-[min(90vw,820px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.08] blur-[120px]" />
        <div className="absolute left-[-10%] top-[20%] h-[360px] w-[520px] rounded-full bg-chart-2/[0.045] blur-[110px]" />
        <div className="absolute right-[-10%] bottom-[12%] h-[360px] w-[520px] rounded-full bg-primary/[0.045] blur-[110px]" />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_45%,transparent_8%,rgba(255,255,255,0.34)_72%,rgba(255,255,255,0.82)_100%)] dark:bg-[radial-gradient(ellipse_70%_55%_at_50%_45%,transparent_8%,rgba(0,0,0,0.48)_72%,rgba(0,0,0,0.78)_100%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary backdrop-blur-xl dark:bg-white/[0.03]">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/70" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            By the numbers
          </div>

          <h2 className="text-balance text-3xl font-bold tracking-[-0.04em] text-foreground dark:text-white sm:text-4xl md:text-5xl">
            Trusted performance,{" "}
            <span className="bg-gradient-to-r from-orange-300 via-cyan-300 to-orange-300 bg-clip-text text-transparent">
              proven at scale.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-muted-foreground dark:text-white/60">
            Clear metrics help visitors understand credibility quickly and make
            the landing page feel more trustworthy from the first scan.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>

        {/* Bottom trust strip */}
        <div className="mx-auto mt-8 max-w-4xl rounded-[1.5rem] border border-border/40 bg-background/72 px-5 py-4 text-center backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.025]">
          <p className="text-sm leading-6 text-muted-foreground dark:text-white/52">
            Built for teams that need clarity, reliability, and fast decision
            cycles without adding more operational noise.
          </p>
        </div>
      </div>
    </section>
  )
}
