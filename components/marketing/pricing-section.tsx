"use client"

import * as React from "react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Icon } from "@iconify/react"

const plans = [
  {
    name: "Startup",
    price: "$60",
    description: "For lean teams that need a polished launch without extra complexity.",
    features: ["Essential campaign tracking", "5 active dashboards", "Email support", "Clean reporting"],
    cta: "Choose this plan",
    highlighted: false,
  },
  {
    name: "Scaleup",
    price: "$100",
    description: "For fast-moving teams ready for deeper insights and workflow automation.",
    features: ["Advanced campaign tracking", "Unlimited dashboards", "Priority support", "AI signal scoring"],
    cta: "Choose this plan",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    isCustom: true,
    description: "For enterprises requiring tailored solutions and full scalability.",
    features: ["Dedicated account manager", "Custom integrations", "SLA guarantees", "White-label options"],
    cta: "Contact us",
    highlighted: false,
  },
]

export default function PricingSection() {
  const [billing, setBilling] = React.useState<"personal" | "business">("business")

  return (
    <section id="pricing" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.04] blur-[120px] animate-glow-pulse" />
      </div>

      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12 text-center">
          <p className="animate-fade-up mb-2 text-xs font-medium tracking-widest text-primary uppercase">Pricing</p>
          <h2 className="animate-fade-up delay-100 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Pricing that stays simple as you grow
          </h2>
          <p className="animate-fade-up delay-200 mx-auto mt-4 max-w-lg text-sm text-muted-foreground">
            Clear packaging, premium defaults, and room to scale when your workflow gets more complex.
          </p>

          <div className="animate-fade-up delay-300 mt-8 inline-flex items-center gap-0.5 rounded-full border border-border/30 bg-muted/20 p-1">
            {(["personal", "business"] as const).map((b) => (
              <button
                key={b}
                onClick={() => setBilling(b)}
                className={cn(
                  "rounded-full px-5 py-1.5 text-sm font-medium transition-all duration-300",
                  billing === b
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/25 scale-[1.02]"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {b.charAt(0).toUpperCase() + b.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={cn(
                "animate-slide-up-fade group relative flex flex-col rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1",
                plan.highlighted
                  ? "border-primary/30 bg-card/80 shadow-xl shadow-primary/10 hover:shadow-2xl hover:shadow-primary/15"
                  : "border-border/20 bg-card/40 hover:border-border/40 hover:bg-card/60 hover:shadow-lg hover:shadow-black/5"
              )}
              style={{ animationDelay: `${400 + i * 100}ms` }}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-0.5 text-[10px] font-semibold text-primary-foreground shadow-md shadow-primary/25">
                  Most Popular
                </div>
              )}

              <p className="mb-4 text-xs font-medium tracking-wider text-muted-foreground uppercase">{plan.name}</p>

              <div className="mb-4">
                {plan.isCustom ? (
                  <p className="text-3xl font-bold text-foreground">Custom</p>
                ) : (
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-sm text-muted-foreground">/mo</span>
                  </div>
                )}
              </div>

              <p className="mb-6 text-xs leading-relaxed text-muted-foreground">{plan.description}</p>

              <ul className="mb-8 flex flex-col gap-2.5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon
                      icon="mdi:check-circle"
                      className={cn(
                        "size-4 shrink-0 transition-colors duration-200",
                        plan.highlighted ? "text-primary" : "text-muted-foreground/40 group-hover:text-primary/60"
                      )}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={cn(
                  "mt-auto w-full justify-center rounded-xl py-2.5 text-center text-sm font-medium transition-all duration-200 active:scale-[0.98]",
                  plan.highlighted
                    ? cn(buttonVariants(), "shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 hover:scale-[1.01]")
                    : cn(buttonVariants({ variant: "outline" }), "border-border/30 hover:bg-muted/30 hover:border-border/50")
                )}
              >
                {plan.cta}
                {plan.highlighted && <Icon icon="mdi:arrow-right" className="ml-1 size-4 transition-transform group-hover:translate-x-0.5" />}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
