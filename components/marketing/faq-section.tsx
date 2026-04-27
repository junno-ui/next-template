"use client"

import * as React from "react"
import { Icon } from "@iconify/react"

import { cn } from "@/lib/utils"

const faqs = [
  {
    q: "How does the free trial work?",
    a: "You get full access to all features for 14 days. No credit card required. At the end of your trial, choose a plan that fits your needs or continue with our free tier.",
  },
  {
    q: "Can I switch plans later?",
    a: "Absolutely. You can upgrade, downgrade, or cancel your plan at any time from your dashboard. Changes take effect at the start of your next billing cycle.",
  },
  {
    q: "Is my data secure?",
    a: "Yes. We use AES-256 encryption at rest, TLS 1.3 in transit, and SOC 2 Type II compliance. Your data is stored in geo-redundant data centers with a 99.9% uptime SLA.",
  },
  {
    q: "Do you offer custom integrations?",
    a: "Our Enterprise plan includes custom API integrations, dedicated engineering support, and webhook configurations tailored to your existing tech stack.",
  },
  {
    q: "What kind of support do you provide?",
    a: "All plans include email support with 24-hour response time. Scaleup plans get priority chat support, and Enterprise customers receive a dedicated account manager.",
  },
  {
    q: "Can I export my data?",
    a: "Yes. You can export all your campaign data, analytics reports, and contact lists in CSV, JSON, or PDF format at any time from the settings panel.",
  },
]

function FaqItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[number]
  index: number
  isOpen: boolean
  onToggle: () => void
}) {
  const contentId = `faq-content-${index}`
  const triggerId = `faq-trigger-${index}`

  return (
    <article
      className={cn(
        "animate-slide-up-fade group relative overflow-hidden rounded-[1.5rem] bg-background/72 ring-1 ring-border/40 backdrop-blur-xl transition-all duration-300 dark:bg-white/[0.025] dark:ring-white/10",
        "hover:bg-background/90 hover:ring-primary/20 dark:hover:bg-white/[0.04]",
        isOpen &&
          "bg-background/90 shadow-2xl shadow-primary/5 ring-primary/25 dark:bg-white/[0.045]"
      )}
      style={{
        animationDelay: `${index * 70}ms`,
        animationFillMode: "both",
      }}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,130,40,0.12),transparent_42%)] opacity-0 transition-opacity duration-500",
          isOpen && "opacity-100"
        )}
      />

      <button
        id={triggerId}
        type="button"
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={onToggle}
        className="relative flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
      >
        <span className="flex items-start gap-4">
          <span
            className={cn(
              "mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full text-[11px] font-bold ring-1 transition-all duration-300",
              isOpen
                ? "bg-primary text-primary-foreground ring-primary/30"
                : "bg-background/80 text-primary ring-border/40 group-hover:bg-primary/10 group-hover:ring-primary/20 dark:bg-white/[0.035] dark:ring-white/10"
            )}
          >
            {index + 1}
          </span>

          <span
            className={cn(
              "text-sm leading-6 font-semibold transition-colors sm:text-[15px]",
              isOpen
                ? "text-foreground dark:text-white"
                : "text-foreground/80 group-hover:text-foreground dark:text-white/78 dark:group-hover:text-white"
            )}
          >
            {faq.q}
          </span>
        </span>

        <span
          className={cn(
            "flex size-8 shrink-0 items-center justify-center rounded-full bg-background/80 text-muted-foreground ring-1 ring-border/40 transition-all duration-300 dark:bg-white/[0.035] dark:text-white/45 dark:ring-white/10",
            isOpen
              ? "rotate-180 bg-primary/10 text-primary ring-primary/20"
              : "group-hover:bg-background group-hover:text-foreground dark:group-hover:bg-white/[0.06] dark:group-hover:text-white"
          )}
        >
          <Icon icon="solar:alt-arrow-down-linear" className="size-4" />
        </span>
      </button>

      <div
        id={contentId}
        role="region"
        aria-labelledby={triggerId}
        className={cn(
          "grid transition-all duration-300 ease-out",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <div className="relative px-5 pb-5 pl-[4.75rem] sm:px-6 sm:pb-6 sm:pl-[5.25rem]">
            <div className="mb-4 h-px bg-gradient-to-r from-primary/25 via-white/10 to-transparent" />
            <p className="text-sm leading-7 text-muted-foreground dark:text-white/58">
              {faq.a}
            </p>
          </div>
        </div>
      </div>
    </article>
  )
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0)

  return (
    <section
      id="faq"
      className="relative isolate overflow-hidden py-24 sm:py-28"
    >
      {/* Background */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-background" />
        <div className="bg-hex-dots absolute inset-0 opacity-[0.1]" />

        <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-background via-background/80 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-background via-background/80 to-transparent" />

        <div className="absolute top-[10%] right-[-12%] h-[420px] w-[620px] rounded-full bg-primary/[0.055] blur-[120px]" />
        <div className="absolute bottom-[4%] left-[-14%] h-[360px] w-[560px] rounded-full bg-chart-2/[0.04] blur-[110px]" />
        <div className="absolute top-[35%] left-1/2 h-[420px] w-[min(92vw,900px)] -translate-x-1/2 rounded-full bg-primary/[0.04] blur-[130px]" />

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
            FAQ
          </div>

          <h2 className="text-4xl leading-[0.98] font-bold tracking-[-0.06em] text-balance text-foreground sm:text-5xl md:text-6xl dark:text-white">
            Questions before you{" "}
            <span className="relative bg-linear-to-r from-primary via-foreground to-primary bg-clip-text text-transparent">
              get started?
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-pretty text-muted-foreground sm:text-base dark:text-white/64">
            Everything you need to know about trials, billing, security,
            integrations, support, and exporting your data.
          </p>
        </div>

        {/* FAQ layout */}
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.85fr_1.4fr]">
          {/* Support card */}
          <aside className="relative h-fit overflow-hidden rounded-[2rem] bg-background/72 p-6 ring-1 ring-border/40 backdrop-blur-2xl dark:bg-white/[0.025] dark:ring-white/10">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,130,40,0.12),transparent_42%)]" />

            <div className="relative flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/15">
              <Icon
                icon="solar:chat-round-dots-bold-duotone"
                className="size-6"
              />
            </div>

            <h3 className="relative mt-5 text-xl font-bold tracking-tight text-foreground dark:text-white">
              Still need help?
            </h3>

            <p className="relative mt-3 text-sm leading-7 text-muted-foreground dark:text-white/55">
              Can&apos;t find the answer you&apos;re looking for? Our team can
              help you choose a plan, understand security, or set up
              integrations.
            </p>

            <a
              href="#contact"
              className="relative mt-6 inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-xl shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-primary/35 active:scale-[0.98]"
            >
              Contact support
              <Icon icon="solar:arrow-right-bold" className="ml-1.5 size-4" />
            </a>

            <div className="relative mt-6 grid gap-3 border-t border-border/30 pt-6 dark:border-white/10">
              {[
                ["Average reply", "< 24h"],
                ["Enterprise support", "Dedicated"],
                ["Data export", "Anytime"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="text-muted-foreground dark:text-white/45">
                    {label}
                  </span>
                  <span className="font-semibold text-foreground/80 dark:text-white/75">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </aside>

          {/* Accordion */}
          <div className="flex flex-col gap-3">
            {faqs.map((faq, index) => (
              <FaqItem
                key={faq.q}
                faq={faq}
                index={index}
                isOpen={openIndex === index}
                onToggle={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
