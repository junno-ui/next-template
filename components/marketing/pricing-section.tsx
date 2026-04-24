"use client"

import * as React from "react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Icon } from "@iconify/react"

const plans = [
  {
    name: "Startup",
    price: "$60",
    description:
      "For small teams and startups looking to stand and grow efficiently.",
    features: [
      "Essential campaign tracking",
      "5 active dashboards",
      "Email support",
      "Basic analytics",
    ],
    cta: "Choose this plan",
    highlighted: false,
  },
  {
    name: "Scaleup",
    price: "$100",
    description:
      "For growing businesses that need advanced insights and automation.",
    features: [
      "Advanced campaign tracking",
      "Unlimited dashboards",
      "Priority support",
      "Predictive analytics",
    ],
    cta: "Choose this plan",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    isCustom: true,
    description:
      "For enterprises requiring tailored solutions and full scalability.",
    features: [
      "Dedicated account manager",
      "Custom integrations",
      "SLA guarantees",
      "White-label options",
    ],
    cta: "Contact us",
    highlighted: false,
  },
]

export default function PricingSection() {
  const [billing, setBilling] = React.useState<"personal" | "business">(
    "business"
  )

  return (
    <section id="pricing" className="relative py-24">
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute top-1/2 left-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.04] blur-[120px]" />
      </div>

      <div className="mx-auto max-w-5xl px-6">
        {/* Section header */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs font-medium tracking-widest text-primary uppercase">
            Pricing
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Plans for Every Business Need
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-muted-foreground">
            Track campaign performance, analyze key metrics, and scale your
            business with the perfect plan.
          </p>

          {/* Billing toggle */}
          <div className="mt-8 inline-flex items-center gap-0.5 rounded-full border border-border/30 bg-muted/20 p-1">
            <button
              onClick={() => setBilling("personal")}
              className={cn(
                "rounded-full px-5 py-1.5 text-sm font-medium transition-all",
                billing === "personal"
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/25"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Personal
            </button>
            <button
              onClick={() => setBilling("business")}
              className={cn(
                "rounded-full px-5 py-1.5 text-sm font-medium transition-all",
                billing === "business"
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/25"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Business
            </button>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative flex flex-col rounded-2xl border p-6 transition-all duration-300",
                plan.highlighted
                  ? "border-primary/30 bg-card/80 shadow-xl shadow-primary/10"
                  : "border-border/20 bg-card/40 hover:border-border/40 hover:bg-card/60"
              )}
            >
              {/* Plan badge */}
              <p className="mb-4 text-xs font-medium tracking-wider text-muted-foreground uppercase">
                {plan.name}
              </p>

              {/* Price */}
              <div className="mb-4">
                {plan.isCustom ? (
                  <p className="text-3xl font-bold text-foreground">Custom</p>
                ) : (
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-foreground">
                      {plan.price}
                    </span>
                    <span className="text-sm text-muted-foreground">/month</span>
                  </div>
                )}
              </div>

              {/* Description */}
              <p className="mb-6 text-xs leading-relaxed text-muted-foreground">
                {plan.description}
              </p>

              {/* Features */}
              <ul className="mb-8 flex flex-col gap-2.5">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <Icon
                      icon="mdi:check-circle"
                      className={cn(
                        "size-4 shrink-0",
                        plan.highlighted ? "text-primary" : "text-muted-foreground/40"
                      )}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#"
                className={cn(
                  "mt-auto w-full justify-center rounded-xl py-2.5 text-center text-sm font-medium transition-all",
                  plan.highlighted
                    ? cn(
                        buttonVariants(),
                        "shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35"
                      )
                    : cn(
                        buttonVariants({ variant: "outline" }),
                        "border-border/30 hover:bg-muted/30"
                      )
                )}
              >
                {plan.cta}
                {plan.highlighted && (
                  <Icon icon="mdi:arrow-right" className="ml-1 size-4" />
                )}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
