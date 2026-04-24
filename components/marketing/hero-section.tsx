"use client"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Icon } from "@iconify/react"

const features = [
  {
    icon: "mdi:folder-outline",
    title: "Smart Organization",
    description:
      "Streamline your workflow and boost productivity with our intuitive organization tools.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: "mdi:cellphone-link",
    title: "Cross-Device Syncing",
    description:
      "Seamlessly sync your bookmarks across all devices, ensuring access to your sites no matter the device.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: "mdi:magnify",
    title: "Full-Text Search",
    description:
      "Quickly find bookmarks by title, tags, or through a powerful full-text search of page contents.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: "mdi:tag-outline",
    title: "Tagging System",
    description:
      "Organize your bookmarks with custom tags for effortless retrieval and organization.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
]

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute top-0 left-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/4 rounded-full bg-primary/[0.04] blur-3xl" />
        <div className="absolute right-0 bottom-0 h-[400px] w-[600px] translate-x-1/4 rounded-full bg-primary/[0.03] blur-3xl" />
      </div>

      {/* Hero Content */}
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 pt-24 pb-16">
        {/* Announcement Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/50 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-sm transition-colors hover:border-border hover:text-foreground">
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60" />
            <span className="relative inline-flex size-2 rounded-full bg-primary" />
          </span>
          Now in public beta — see what&apos;s new
          <Icon icon="mdi:arrow-right" className="size-3.5" />
        </div>

        {/* Heading */}
        <h1 className="mx-auto max-w-3xl text-center text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl">
          Driving excellence{" "}
          <span className="bg-gradient-to-r from-foreground/80 to-foreground/40 bg-clip-text text-transparent">
            in all aspects
          </span>{" "}
          of your business.
        </h1>

        {/* Subheading */}
        <p className="mx-auto mt-6 max-w-xl text-center text-base leading-relaxed text-muted-foreground sm:text-lg">
          Push the boundaries of innovation and optimization with our platform.
          Excel in your operations and deliver exceptional value to your
          customers.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#"
            className={cn(
              buttonVariants({ size: "lg" }),
              "rounded-full px-6 gap-2 shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 transition-shadow"
            )}
          >
            Get Started Free
            <Icon icon="mdi:arrow-right" className="size-4" />
          </a>
          <a
            href="#"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "rounded-full px-6 gap-2"
            )}
          >
            <Icon icon="mdi:play-circle-outline" className="size-4" />
            Watch Demo
          </a>
        </div>

        {/* Social proof */}
        <div className="mt-10 flex items-center gap-3 text-sm text-muted-foreground">
          <div className="flex -space-x-2">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex size-7 items-center justify-center rounded-full border-2 border-background bg-muted text-[10px] font-medium text-muted-foreground"
              >
                {String.fromCharCode(65 + i)}
              </div>
            ))}
          </div>
          <span>
            Trusted by <strong className="text-foreground">2,500+</strong>{" "}
            teams
          </span>
        </div>

        {/* Hero Dashboard Preview */}
        <div className="relative mx-auto mt-16 w-full max-w-4xl">
          {/* Glow behind the card */}
          <div
            className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-primary/10 via-transparent to-primary/5 blur-2xl"
            aria-hidden="true"
          />

          <div className="overflow-hidden rounded-xl border border-border/60 bg-card shadow-2xl shadow-black/[0.06] dark:shadow-black/30">
            {/* Mock window chrome */}
            <div className="flex items-center gap-2 border-b border-border/60 bg-muted/40 px-4 py-3">
              <div className="flex gap-1.5">
                <span className="block size-2.5 rounded-full bg-red-400/70" />
                <span className="block size-2.5 rounded-full bg-yellow-400/70" />
                <span className="block size-2.5 rounded-full bg-green-400/70" />
              </div>
              <div className="mx-auto flex h-6 w-64 items-center justify-center rounded-md bg-background/60 px-3 text-xs text-muted-foreground">
                <Icon icon="mdi:lock" className="mr-1.5 size-3 opacity-50" />
                app.techloop.dev
              </div>
            </div>

            {/* Dashboard placeholder */}
            <div className="grid grid-cols-3 gap-4 p-6">
              {/* Stat cards */}
              {[
                { label: "Total Revenue", value: "$45,231", change: "+20.1%" },
                { label: "Subscriptions", value: "+2,350", change: "+180.1%" },
                { label: "Active Now", value: "+573", change: "+201" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg border border-border/50 bg-background p-4"
                >
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                  <p className="mt-1 text-xl font-bold text-foreground">
                    {stat.value}
                  </p>
                  <p className="mt-0.5 text-xs text-emerald-500">
                    {stat.change}
                  </p>
                </div>
              ))}

              {/* Chart placeholder */}
              <div className="col-span-2 flex h-40 items-end gap-2 rounded-lg border border-border/50 bg-background p-4">
                {[40, 65, 45, 80, 55, 70, 90, 60, 75, 85, 50, 95].map(
                  (h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t bg-primary/20 transition-all hover:bg-primary/40"
                      style={{ height: `${h}%` }}
                    />
                  )
                )}
              </div>

              {/* Activity list */}
              <div className="flex flex-col gap-2 rounded-lg border border-border/50 bg-background p-4">
                <p className="text-xs font-medium text-foreground">
                  Recent Activity
                </p>
                {["New user signup", "Payment received", "Report generated"].map(
                  (item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-xs text-muted-foreground"
                    >
                      <span className="size-1.5 rounded-full bg-primary/50" />
                      {item}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div
        id="features"
        className="mx-auto max-w-5xl px-6 py-24"
      >
        <div className="mb-12 text-center">
          <p className="text-sm font-medium tracking-wide text-primary/80 uppercase">
            Features
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything you need to move faster
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            A suite of powerful tools designed to help your team collaborate,
            organize, and ship without friction.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative flex items-start gap-4 rounded-xl border border-border/50 bg-card/50 p-6 transition-all duration-300 hover:border-border hover:bg-card hover:shadow-md hover:shadow-black/[0.03] dark:hover:shadow-white/[0.02]"
            >
              <div
                className={cn(
                  "flex size-10 shrink-0 items-center justify-center rounded-lg transition-colors",
                  feature.bg
                )}
              >
                <Icon
                  icon={feature.icon}
                  className={cn("size-5", feature.color)}
                />
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
