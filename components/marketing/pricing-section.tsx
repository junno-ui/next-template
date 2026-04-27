"use client"

import * as React from "react"
import { Icon } from "@iconify/react"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

/* -------------------------------------------------------------------------- */
/*  Data                                                                       */
/* -------------------------------------------------------------------------- */

type BillingTab = "personal" | "business"

type Plan = {
  name: string
  price: string
  period?: string
  description: string
  features: string[]
  cta: string
  href: string
  highlighted?: boolean
  badge?: string
  isCustom?: boolean
}

const pricingTabs: Record<
  BillingTab,
  {
    label: string
    eyebrow: string
    description: string
    plans: Plan[]
  }
> = {
  personal: {
    label: "Personal",
    eyebrow: "For individuals",
    description:
      "Simple plans for founders, creators, and small operators who want cleaner dashboards without extra complexity.",
    plans: [
      {
        name: "Starter",
        price: "$19",
        period: "/mo",
        description:
          "For solo operators who need a clean place to track the basics.",
        features: [
          "3 active dashboards",
          "Basic campaign tracking",
          "Weekly reports",
          "Email support",
        ],
        cta: "Start Starter",
        href: "#contact",
      },
      {
        name: "Creator",
        price: "$39",
        period: "/mo",
        description:
          "For creators and consultants who want stronger insights and automation.",
        features: [
          "10 active dashboards",
          "Advanced tracking",
          "AI signal summaries",
          "Priority email support",
        ],
        cta: "Start Creator",
        href: "#contact",
        highlighted: true,
        badge: "Best for solo growth",
      },
      {
        name: "Pro",
        price: "$79",
        period: "/mo",
        description:
          "For power users managing multiple projects, channels, and reports.",
        features: [
          "Unlimited dashboards",
          "Custom reporting views",
          "Automation workflows",
          "Priority support",
        ],
        cta: "Start Pro",
        href: "#contact",
      },
    ],
  },
  business: {
    label: "Business",
    eyebrow: "For teams",
    description:
      "Scalable plans for teams that need deeper reporting, better collaboration, and reliable workflows.",
    plans: [
      {
        name: "Startup",
        price: "$60",
        period: "/mo",
        description:
          "For lean teams that need polished reporting without extra complexity.",
        features: [
          "Essential campaign tracking",
          "5 active dashboards",
          "Clean reporting",
          "Email support",
        ],
        cta: "Choose Startup",
        href: "#contact",
      },
      {
        name: "Scaleup",
        price: "$100",
        period: "/mo",
        description:
          "For fast-moving teams ready for deeper insights and workflow automation.",
        features: [
          "Advanced campaign tracking",
          "Unlimited dashboards",
          "AI signal scoring",
          "Priority support",
        ],
        cta: "Choose Scaleup",
        href: "#contact",
        highlighted: true,
        badge: "Most popular",
      },
      {
        name: "Enterprise",
        price: "Custom",
        description:
          "For larger teams that need tailored solutions, security, and scale.",
        features: [
          "Dedicated account manager",
          "Custom integrations",
          "SLA guarantees",
          "White-label options",
        ],
        cta: "Contact sales",
        href: "#contact",
        isCustom: true,
      },
    ],
  },
}

/* -------------------------------------------------------------------------- */
/*  Components                                                                 */
/* -------------------------------------------------------------------------- */

function PricingToggle({
  value,
  onChange,
}: {
  value: BillingTab
  onChange: (value: BillingTab) => void
}) {
  return (
    <div className="mx-auto mt-8 grid w-full max-w-md grid-cols-2 rounded-full bg-background/80 p-1 ring-1 ring-border/40 backdrop-blur-xl dark:bg-white/[0.035] dark:ring-white/10">
      {(["personal", "business"] as const).map((tab) => {
        const active = value === tab

        return (
          <button
            key={tab}
            type="button"
            onClick={() => onChange(tab)}
            className={cn(
              "group relative overflow-hidden rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300",
              active
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                : "text-muted-foreground hover:bg-background hover:text-foreground dark:text-white/50 dark:hover:bg-white/[0.04] dark:hover:text-white"
            )}
          >
            {active && (
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
            )}

            <span className="relative flex items-center justify-center gap-2">
              <Icon
                icon={
                  tab === "personal"
                    ? "solar:user-bold-duotone"
                    : "solar:users-group-rounded-bold-duotone"
                }
                className={cn(
                  "size-4 transition-transform duration-300",
                  active ? "scale-110" : "group-hover:scale-110"
                )}
              />
              {pricingTabs[tab].label}
            </span>
          </button>
        )
      })}
    </div>
  )
}

function PlanCard({ plan, index }: { plan: Plan; index: number }) {
  return (
    <article
      className={cn(
        "animate-slide-up-fade group relative flex min-h-[520px] flex-col overflow-hidden rounded-[2rem] bg-background/72 p-6 shadow-2xl ring-1 shadow-black/[0.08] ring-border/40 backdrop-blur-2xl transition-all duration-500 dark:bg-white/[0.025] dark:ring-white/10",
        "hover:-translate-y-2 hover:bg-background/90 hover:shadow-primary/10 hover:ring-primary/25 dark:hover:bg-white/[0.045]",
        plan.highlighted &&
          "bg-background/90 shadow-primary/10 ring-primary/25 dark:bg-white/[0.045]"
      )}
      style={{
        animationDelay: `${220 + index * 90}ms`,
        animationFillMode: "both",
      }}
    >
      {/* Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,130,40,0.14),transparent_42%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {plan.highlighted && (
        <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      )}

      {/* Badge */}
      {plan.badge && (
        <div className="absolute top-5 right-5 rounded-full bg-primary/10 px-3 py-1 text-[10px] font-bold tracking-[0.16em] text-primary uppercase ring-1 ring-primary/20">
          {plan.badge}
        </div>
      )}

      <div className="relative">
        <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/15 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-primary group-hover:text-primary-foreground">
          <Icon
            icon={
              plan.isCustom
                ? "solar:buildings-2-bold-duotone"
                : plan.highlighted
                  ? "solar:stars-bold-duotone"
                  : "solar:box-minimalistic-bold-duotone"
            }
            className="size-6"
          />
        </div>

        <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
          {plan.name}
        </p>

        <div className="mt-4 flex items-end gap-1">
          <span className="text-5xl font-bold tracking-[-0.06em] text-foreground dark:text-white">
            {plan.price}
          </span>

          {!plan.isCustom && plan.period && (
            <span className="mb-1.5 text-sm font-medium text-muted-foreground dark:text-white/40">
              {plan.period}
            </span>
          )}
        </div>

        <p className="mt-4 min-h-[3rem] text-sm leading-6 text-muted-foreground dark:text-white/58">
          {plan.description}
        </p>
      </div>

      <div className="my-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <ul className="relative grid gap-3">
        {plan.features.map((feature, featureIndex) => (
          <li
            key={feature}
            className="flex items-start gap-3 text-sm leading-6 text-foreground/80 dark:text-white/66"
            style={{
              transitionDelay: `${featureIndex * 45}ms`,
            }}
          >
            <span
              className={cn(
                "mt-1 flex size-5 shrink-0 items-center justify-center rounded-full transition-all duration-300",
                plan.highlighted
                  ? "bg-primary text-primary-foreground"
                  : "bg-background/80 text-primary ring-1 ring-border/40 group-hover:bg-primary group-hover:text-primary-foreground dark:bg-white/[0.05] dark:ring-white/10"
              )}
            >
              <Icon icon="solar:check-bold" className="size-3.5" />
            </span>
            {feature}
          </li>
        ))}
      </ul>

      <a
        href={plan.href}
        className={cn(
          "relative mt-auto inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 active:scale-[0.98]",
          plan.highlighted
            ? cn(
                buttonVariants(),
                "shadow-xl shadow-primary/25 hover:-translate-y-0.5 hover:shadow-primary/35"
              )
            : cn(
                buttonVariants({ variant: "outline" }),
                "border-border/40 bg-background/80 text-foreground hover:-translate-y-0.5 hover:border-primary/25 hover:bg-background dark:border-white/10 dark:bg-white/[0.035] dark:text-white dark:hover:bg-white/[0.06]"
              )
        )}
      >
        {plan.cta}
        <Icon
          icon={
            plan.isCustom
              ? "solar:chat-round-dots-bold"
              : "solar:arrow-right-bold"
          }
          className="ml-1.5 size-4 transition-transform duration-300 group-hover:translate-x-1"
        />
      </a>
    </article>
  )
}

/* -------------------------------------------------------------------------- */
/*  Main Component                                                             */
/* -------------------------------------------------------------------------- */

export default function PricingSection() {
  const [billing, setBilling] = React.useState<BillingTab>("business")
  const current = pricingTabs[billing]

  return (
    <section
      id="pricing"
      className="relative isolate overflow-hidden py-24 sm:py-28"
    >
      {/* Background */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-background" />
        <div className="bg-hex-dots absolute inset-0 opacity-[0.12]" />

        <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-background via-background/80 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-background via-background/80 to-transparent" />

        <div className="absolute top-0 left-1/2 h-[520px] w-[min(92vw,1080px)] -translate-x-1/2 rounded-full bg-primary/[0.07] blur-[130px]" />
        <div className="absolute top-[34%] right-[-12%] h-[420px] w-[620px] rounded-full bg-chart-2/[0.045] blur-[110px]" />
        <div className="absolute bottom-[8%] left-[-14%] h-[360px] w-[560px] rounded-full bg-primary/[0.04] blur-[110px]" />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_72%_48%_at_50%_20%,transparent_10%,rgba(255,255,255,0.34)_70%,rgba(255,255,255,0.82)_100%)] dark:bg-[radial-gradient(ellipse_72%_48%_at_50%_20%,transparent_10%,rgba(0,0,0,0.48)_70%,rgba(0,0,0,0.84)_100%)]" />

        <div className="absolute top-0 left-1/2 h-px w-[min(86vw,900px)] -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/35 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-background/80 px-4 py-2 text-[11px] font-semibold tracking-[0.22em] text-primary uppercase ring-1 ring-primary/20 backdrop-blur-xl dark:bg-white/[0.035]">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/70" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            Pricing
          </div>

          <h2 className="text-4xl leading-[0.98] font-bold tracking-[-0.06em] text-balance text-foreground sm:text-5xl md:text-6xl dark:text-white">
            Simple pricing for{" "}
            <span className="bg-gradient-to-r from-orange-300 via-cyan-300 to-orange-300 bg-clip-text text-transparent">
              every stage of growth.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-pretty text-muted-foreground sm:text-base dark:text-white/64">
            Choose the package that matches your workflow today, with room to
            scale when reporting, automation, and collaboration become more
            complex.
          </p>

          <PricingToggle value={billing} onChange={setBilling} />
        </div>

        {/* Split tab context */}
        <div className="mx-auto mb-8 max-w-3xl rounded-[1.5rem] bg-background/72 px-5 py-4 text-center ring-1 ring-border/40 backdrop-blur-xl dark:bg-white/[0.025] dark:ring-white/10">
          <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
            {current.eyebrow}
          </p>
          <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-muted-foreground dark:text-white/55">
            {current.description}
          </p>
        </div>

        {/* Plans */}
        <div key={billing} className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {current.plans.map((plan, index) => (
            <PlanCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>

        {/* Bottom trust note */}
        <div className="mx-auto mt-10 flex max-w-4xl flex-wrap items-center justify-center gap-x-4 gap-y-2 rounded-[1.5rem] bg-background/72 px-5 py-4 text-center text-xs text-muted-foreground ring-1 ring-border/40 backdrop-blur-xl dark:bg-white/[0.025] dark:text-white/42 dark:ring-white/10">
          <span>No credit card required</span>
          <span className="hidden size-1 rounded-full bg-border sm:block dark:bg-white/20" />
          <span>Upgrade or cancel anytime</span>
          <span className="hidden size-1 rounded-full bg-border sm:block dark:bg-white/20" />
          <span>Secure team-ready workspace</span>
        </div>
      </div>
    </section>
  )
}
