"use client"

import * as React from "react"
import { Icon } from "@iconify/react"

import { ScrollCard, Stagger } from "@/components/marketing/_components/reveal"
import {
  SectionHeader,
  SectionShell,
} from "@/components/marketing/_components/section-shell"
import { buttonVariants } from "@/components/ui/button"
import { type BillingTab, type Plan, pricingTabs } from "@/content/landing-page"
import { cn } from "@/lib/utils"

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

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <ScrollCard
      className={cn(
        "group relative flex min-h-[520px] flex-col overflow-hidden rounded-[2rem] bg-background/72 p-6 shadow-2xl ring-1 shadow-black/[0.08] ring-border/40 backdrop-blur-2xl transition-all duration-500 dark:bg-white/[0.025] dark:ring-white/10",
        "hover:-translate-y-2 hover:bg-background/90 hover:shadow-primary/10 hover:ring-primary/25 dark:hover:bg-white/[0.045]",
        plan.highlighted &&
          "bg-background/90 shadow-primary/10 ring-primary/25 dark:bg-white/[0.045]"
      )}
    >
      {/* Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,130,40,0.14),transparent_42%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {plan.highlighted && (
        <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      )}

      {/* Badge */}
      {plan.badge && (
        <div className="absolute top-5 right-5 rounded-full bg-primary/10 px-3 py-1 text-[10px] font-bold text-primary uppercase ring-1 ring-primary/20">
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

        <p className="text-sm font-semibold text-primary uppercase">
          {plan.name}
        </p>

        <div className="mt-4 flex items-end gap-1">
          <span className="text-5xl font-bold text-foreground dark:text-white">
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
    </ScrollCard>
  )
}

/* -------------------------------------------------------------------------- */
/*  Main Component                                                             */
/* -------------------------------------------------------------------------- */

export default function PricingSection() {
  const [billing, setBilling] = React.useState<BillingTab>("business")
  const current = pricingTabs[billing]

  return (
    <SectionShell id="pricing">
      <SectionHeader
        eyebrow="Pricing"
        title={
          <>
            Simple pricing for{" "}
            <span className="relative bg-linear-to-r from-primary via-foreground to-primary bg-clip-text text-transparent">
              every stage of growth.
            </span>
          </>
        }
        description="Choose the package that matches your workflow today, with room to scale when reporting, automation, and collaboration become more complex."
      />

      <div className="-mt-8 mb-12">
        <PricingToggle value={billing} onChange={setBilling} />
      </div>

      <div className="mx-auto mb-8 max-w-3xl rounded-[1.5rem] bg-background/72 px-5 py-4 text-center ring-1 ring-border/40 backdrop-blur-xl dark:bg-white/[0.025] dark:ring-white/10">
        <p className="text-xs font-semibold text-primary uppercase">
          {current.eyebrow}
        </p>
        <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-muted-foreground dark:text-white/55">
          {current.description}
        </p>
      </div>

      <Stagger key={billing} className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {current.plans.map((plan) => (
          <PlanCard key={plan.name} plan={plan} />
        ))}
      </Stagger>

      <div className="mx-auto mt-10 flex max-w-4xl flex-wrap items-center justify-center gap-x-4 gap-y-2 rounded-[1.5rem] bg-background/72 px-5 py-4 text-center text-xs text-muted-foreground ring-1 ring-border/40 backdrop-blur-xl dark:bg-white/[0.025] dark:text-white/42 dark:ring-white/10">
        <span>No credit card required</span>
        <span className="hidden size-1 rounded-full bg-border sm:block dark:bg-white/20" />
        <span>Upgrade or cancel anytime</span>
        <span className="hidden size-1 rounded-full bg-border sm:block dark:bg-white/20" />
        <span>Secure team-ready workspace</span>
      </div>
    </SectionShell>
  )
}
