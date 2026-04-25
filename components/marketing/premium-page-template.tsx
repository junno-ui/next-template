import Link from "next/link"
import { Icon } from "@iconify/react"

import SiteHeader from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { ThemeCustomizer } from "@/components/theme"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { buttonVariants } from "@/components/ui/button"
import type { MarketingPageData } from "@/config/marketing-pages"
import { cn } from "@/lib/utils"

const previewCrew = [
  { name: "Amara", initials: "AM" },
  { name: "Kai", initials: "KI" },
  { name: "Lina", initials: "LN" },
]

const heroAccents = [
  "from-primary/16 via-primary/5 to-transparent",
  "from-chart-2/18 via-chart-2/5 to-transparent",
  "from-chart-3/16 via-chart-3/5 to-transparent",
]

export function PremiumPageTemplate({
  page,
}: {
  page: MarketingPageData
}) {
  const pageMood = page.path.length % heroAccents.length

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-20" aria-hidden="true">
        <div className="absolute inset-0 bg-radial-flares opacity-90" />
        <div className="absolute inset-0 bg-noise-weave opacity-35" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,oklch(1_0_0_/_30%)_84%,oklch(1_0_0_/_72%))] dark:bg-[linear-gradient(to_bottom,transparent,oklch(0.13_0.01_240_/_28%)_84%,oklch(0.13_0.01_240_/_76%))]" />
      </div>

      <SiteHeader />

      <main className="flex-1 pt-28 pb-18">
        <section className="relative">
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
            <div className="absolute inset-0 bg-luxury-grid opacity-65" />
            <div className="absolute inset-0 bg-noise-weave opacity-20" />
            <div className="absolute left-[12%] top-20 h-[26rem] w-[26rem] rounded-full bg-primary/[0.12] blur-[110px]" />
            <div className="absolute right-[8%] top-[12%] h-[20rem] w-[20rem] rounded-full bg-chart-2/[0.1] blur-[100px]" />
          </div>

          <div className="mx-auto max-w-6xl px-6">
            <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/45 bg-background/72 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary shadow-lg shadow-black/[0.04] backdrop-blur-xl dark:border-white/10">
                  <span className="size-2 rounded-full bg-primary" />
                  {page.eyebrow}
                </div>
                <div className="relative overflow-hidden rounded-[2rem] border border-white/45 bg-background/70 p-6 shadow-2xl shadow-black/[0.07] backdrop-blur-2xl dark:border-white/10 sm:p-8">
                  <div
                    className={cn(
                      "pointer-events-none absolute inset-0 bg-gradient-to-br opacity-100",
                      heroAccents[pageMood]
                    )}
                  />

                  <div className="relative">
                    <div className="mb-4 flex flex-wrap items-center gap-2 text-xs text-muted-foreground/70">
                      <span className="rounded-full border border-white/40 bg-background/60 px-3 py-1 dark:border-white/10">
                        {page.badge}
                      </span>
                      <span className="rounded-full border border-white/40 bg-background/60 px-3 py-1 dark:border-white/10">
                        Distinct page layout
                      </span>
                    </div>

                    <h1 className="max-w-3xl text-4xl font-bold leading-[1.02] tracking-tight sm:text-5xl lg:text-[4rem]">
                      {page.title}
                    </h1>
                    <p className="mt-5 max-w-2xl text-[15px] leading-7 text-muted-foreground sm:text-base">
                      {page.description}
                    </p>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                      <Link
                        href={page.primaryCta.href}
                        className={cn(
                          buttonVariants({ size: "lg" }),
                          "rounded-full px-7 text-sm font-semibold shadow-lg shadow-primary/25 transition-transform duration-300 hover:scale-[1.02]"
                        )}
                      >
                        {page.primaryCta.label}
                        <Icon icon="solar:arrow-right-bold" className="size-4" />
                      </Link>
                      <Link
                        href={page.secondaryCta.href}
                        className={cn(
                          buttonVariants({ variant: "outline", size: "lg" }),
                          "rounded-full border-white/45 bg-background/70 px-7 text-sm transition-colors hover:bg-background dark:border-white/10"
                        )}
                      >
                        {page.secondaryCta.label}
                      </Link>
                    </div>

                    <div className="mt-7 flex flex-wrap items-center gap-3 text-sm text-muted-foreground/72">
                      <div className="flex -space-x-2">
                        {previewCrew.map((person) => (
                          <Avatar key={person.name} className="size-9 border-2 border-background ring-transparent">
                            <AvatarFallback>{person.initials}</AvatarFallback>
                          </Avatar>
                        ))}
                      </div>
                      <span>Used by focused teams that care about speed, polish, and trust.</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="surface-panel group relative overflow-hidden rounded-[2rem] border border-white/50 p-6 shadow-2xl shadow-black/[0.08] transition-transform duration-300 hover:-translate-y-1 dark:border-white/10">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,oklch(0.75_0.18_170_/_12%),transparent_32%)]" />
                <div className="relative flex items-center justify-between">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground/55">
                      Live preview
                    </p>
                    <p className="mt-1 text-xl font-semibold">{page.badge}</p>
                  </div>
                  <div className="flex size-11 items-center justify-center rounded-2xl bg-primary/12 text-primary transition-transform duration-300 group-hover:scale-105">
                    <Icon icon={page.icon} className="size-5" />
                  </div>
                </div>

                <div className="mt-6 grid gap-3">
                  {page.stats.map((stat, index) => (
                    <div
                      key={stat.label}
                      className="rounded-[1.4rem] border border-border/15 bg-background/55 p-4 backdrop-blur-sm transition-all duration-300 hover:border-primary/18 hover:bg-background/70"
                      style={{ animationDelay: `${index * 80}ms` }}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground/50">
                            {stat.label}
                          </p>
                          <p className="mt-2 text-2xl font-bold tracking-tight text-foreground">
                            {stat.value}
                          </p>
                        </div>
                        <div className="flex size-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                          <Icon icon="solar:graph-up-bold-duotone" className="size-4" />
                        </div>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground/70">
                        {stat.detail}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {page.features.slice(0, 2).map((feature) => (
                    <div
                      key={feature.title}
                      className="rounded-[1.35rem] border border-border/15 bg-muted/25 p-4 transition-all duration-300 hover:border-primary/18 hover:bg-muted/35"
                    >
                      <div className="flex size-9 items-center justify-center rounded-xl bg-chart-2/12 text-chart-2">
                        <Icon icon={feature.icon} className="size-4" />
                      </div>
                      <p className="mt-3 text-sm font-semibold text-foreground">{feature.title}</p>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground/68">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-[1.5rem] border border-border/15 bg-background/45 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground/55">
                        Page focus
                      </p>
                      <p className="mt-1 text-sm font-semibold text-foreground">
                        Tailored rhythm for {page.eyebrow.toLowerCase()}
                      </p>
                    </div>
                    <div className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      Modernized
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {page.stats.map((stat, index) => (
                <div
                  key={`${stat.label}-${index}`}
                  className="surface-panel group rounded-[1.6rem] px-5 py-5 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground/55">
                        {stat.label}
                      </p>
                      <p className="mt-2 text-3xl font-bold tracking-tight">{stat.value}</p>
                    </div>
                    <div className="flex size-10 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-105">
                      <Icon icon="solar:bolt-bold-duotone" className="size-4" />
                    </div>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground/68">{stat.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-12">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
                What You Get
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight">
                A cleaner experience at every layer
              </h2>
            </div>
            <p className="hidden max-w-md text-sm leading-6 text-muted-foreground/70 lg:block">
              Each block is tuned for clarity, trust, and a more refined visual rhythm.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {page.features.map((feature, index) => (
              <div
                key={feature.title}
                className="surface-panel group rounded-[1.6rem] p-5 transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <div className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-105">
                  <Icon icon={feature.icon} className="size-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground/70">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-14">
          <div className="surface-panel overflow-hidden rounded-[2rem] border border-white/50 px-6 py-8 dark:border-white/10 sm:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
                  Workflow
                </p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight">
                  A premium flow from first click to full rollout
                </h2>
                <p className="mt-4 text-sm leading-7 text-muted-foreground/72">
                  The best interfaces do not just look expensive. They make the next action feel easier, calmer, and more obvious.
                </p>
                <Link
                  href={page.primaryCta.href}
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "mt-6 rounded-full border-border/35 px-6 hover:bg-muted/40"
                  )}
                >
                  {page.primaryCta.label}
                </Link>
              </div>

              <div className="grid gap-4">
                {page.workflow.map((step, index) => (
                  <div
                    key={step.title}
                    className="group rounded-[1.6rem] border border-border/15 bg-background/55 p-5 backdrop-blur-sm transition-all duration-300 hover:border-primary/18 hover:bg-background/72"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-sm font-semibold text-primary transition-transform duration-300 group-hover:scale-105">
                        {index + 1}
                      </div>
                      <div>
                        <p className="text-base font-semibold text-foreground">{step.title}</p>
                        <p className="mt-1 text-sm leading-6 text-muted-foreground/70">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />

      <div className="fixed right-5 bottom-5 z-50">
        <ThemeCustomizer />
      </div>
    </div>
  )
}
