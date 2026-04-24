"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Icon } from "@iconify/react"

const stats = [
  {
    value: "10K+",
    label: "Active Users",
    icon: "mdi:account-group-outline",
    description: "Marketers using our platform daily",
  },
  {
    value: "50M+",
    label: "Campaigns Sent",
    icon: "mdi:send-outline",
    description: "Emails delivered successfully",
  },
  {
    value: "99.9%",
    label: "Uptime",
    icon: "mdi:shield-check-outline",
    description: "Guaranteed server reliability",
  },
  {
    value: "4.9/5",
    label: "User Rating",
    icon: "mdi:star-outline",
    description: "Average across all platforms",
  },
]

export default function StatisticsSection() {
  return (
    <section className="relative py-24">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.04] blur-[120px] animate-glow-pulse" />
      </div>

      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-14 text-center">
          <p className="animate-fade-up mb-2 text-xs font-medium tracking-widest text-primary uppercase">
            By the Numbers
          </p>
          <h2 className="animate-fade-up delay-100 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Trusted by teams worldwide
          </h2>
          <p className="animate-fade-up delay-200 mx-auto mt-4 max-w-lg text-sm text-muted-foreground">
            Our platform powers marketing teams across the globe with reliable,
            high-performance tools.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="animate-slide-up-fade group relative flex flex-col items-center rounded-2xl border border-border/20 bg-card/40 p-8 text-center transition-all duration-300 hover:border-primary/20 hover:bg-card/70 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
              style={{ animationDelay: `${300 + i * 100}ms` }}
            >
              <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-b from-primary/[0.03] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/15 group-hover:shadow-md group-hover:shadow-primary/10">
                <Icon icon={stat.icon} className="size-6" />
              </div>
              <p className="text-3xl font-bold tracking-tight text-foreground">
                {stat.value}
              </p>
              <p className="mt-1 text-sm font-medium text-foreground/80">
                {stat.label}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground/60">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
