"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Icon } from "@iconify/react"

const faqs = [
  {
    q: "How does the free trial work?",
    a: "You get full access to all features for 14 days. No credit card required. At the end of your trial, choose a plan that fits your needs or continue with our free tier.",
  },
  {
    q: "Can I switch plans later?",
    a: "Absolutely! You can upgrade, downgrade, or cancel your plan at any time from your dashboard. Changes take effect at the start of your next billing cycle.",
  },
  {
    q: "Is my data secure?",
    a: "Yes. We use AES-256 encryption at rest, TLS 1.3 in transit, and SOC 2 Type II compliance. Your data is stored in geo-redundant data centers with 99.9% uptime SLA.",
  },
  {
    q: "Do you offer custom integrations?",
    a: "Our Enterprise plan includes custom API integrations, dedicated engineering support, and webhook configurations tailored to your existing tech stack.",
  },
  {
    q: "What kind of support do you provide?",
    a: "All plans include email support with 24hr response time. Scaleup plans get priority chat support, and Enterprise customers receive a dedicated account manager.",
  },
  {
    q: "Can I export my data?",
    a: "Yes. You can export all your campaign data, analytics reports, and contact lists in CSV, JSON, or PDF format at any time from the settings panel.",
  },
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0)

  return (
    <section id="faq" className="relative py-24">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-primary/[0.03] blur-[120px]" />
      </div>

      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-14 text-center">
          <p className="mb-2 text-xs font-medium tracking-widest text-primary uppercase">
            FAQ
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-muted-foreground">
            Everything you need to know about our platform. Can&apos;t find what
            you&apos;re looking for? Reach out to our support team.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={i}
                className={cn(
                  "rounded-xl border transition-all duration-300",
                  isOpen
                    ? "border-primary/20 bg-card/60"
                    : "border-border/15 bg-card/30 hover:border-border/30"
                )}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-sm font-medium text-foreground">
                    {faq.q}
                  </span>
                  <div
                    className={cn(
                      "flex size-6 shrink-0 items-center justify-center rounded-full transition-all duration-300",
                      isOpen
                        ? "bg-primary/15 text-primary rotate-180"
                        : "bg-muted/30 text-muted-foreground"
                    )}
                  >
                    <Icon icon="mdi:chevron-down" className="size-4" />
                  </div>
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-300 ease-in-out",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-4 text-sm leading-relaxed text-muted-foreground">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
