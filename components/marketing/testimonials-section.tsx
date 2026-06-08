"use client"

import { motion } from "framer-motion"
import { Icon } from "@iconify/react"

import { cn } from "@/lib/utils"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Head of Marketing",
    company: "TechCorp",
    quote:
      "This platform completely transformed our campaign workflow. We saw a 40% increase in engagement within the first month.",
    avatar: "SC",
  },
  {
    name: "Marcus Johnson",
    role: "Growth Lead",
    company: "ScaleUp Inc.",
    quote:
      "The analytics dashboard is incredibly intuitive. Our team can now make data-driven decisions in real time.",
    avatar: "MJ",
  },
  {
    name: "Emily Rodriguez",
    role: "CMO",
    company: "BrightEdge",
    quote:
      "We switched from three different tools to this single platform. The ROI was visible within weeks.",
    avatar: "ER",
  },
  {
    name: "David Kim",
    role: "Founder",
    company: "Launchly",
    quote:
      "It helped us replace messy spreadsheets with one clear operating dashboard. The team adopted it instantly.",
    avatar: "DK",
  },
  {
    name: "Olivia Martin",
    role: "Marketing Director",
    company: "Northstar",
    quote:
      "The reporting flow is simple, polished, and reliable. It saves our team hours every week.",
    avatar: "OM",
  },
  {
    name: "James Wilson",
    role: "Revenue Lead",
    company: "Orbit Labs",
    quote:
      "The best part is how calm the product feels. We get the data we need without dashboard overload.",
    avatar: "JW",
  },
]

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[number]
}) {
  return (
    <article
      className={cn(
        "group flex h-full w-[320px] shrink-0 flex-col justify-between rounded-[1.75rem] bg-background/72 p-5 ring-1 ring-border/40 backdrop-blur-xl dark:bg-white/[0.025] dark:ring-white/10",
        "transition-all duration-300 hover:-translate-y-1 hover:bg-background/90 hover:ring-primary/25 dark:hover:bg-white/[0.045]"
      )}
    >
      <div>
        <div className="mb-4 flex items-center gap-0.5 text-primary">
          {Array.from({ length: 5 }).map((_, index) => (
            <Icon
              key={index}
              icon="solar:star-bold"
              className="size-3.5 transition-transform duration-300 group-hover:scale-110"
              style={{
                transitionDelay: `${index * 25}ms`,
              }}
            />
          ))}
        </div>

        <p className="text-sm leading-6 text-muted-foreground dark:text-white/65">
          “{testimonial.quote}”
        </p>
      </div>

      <div className="mt-6 flex items-center gap-3">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary ring-1 ring-primary/15 transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
          {testimonial.avatar}
        </div>

        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-foreground dark:text-white">
            {testimonial.name}
          </p>
          <p className="truncate text-xs text-muted-foreground dark:text-white/42">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </article>
  )
}

function TestimonialsMarquee({
  reverse = false,
  speed = 45,
}: {
  reverse?: boolean
  speed?: number
}) {
  const items = [...testimonials, ...testimonials]

  return (
    <div className="relative flex overflow-hidden">
      <motion.div
        className="flex min-w-max gap-4"
        animate={{
          x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {items.map((testimonial, index) => (
          <TestimonialCard
            key={`${testimonial.name}-${index}`}
            testimonial={testimonial}
          />
        ))}
      </motion.div>
    </div>
  )
}

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative isolate overflow-hidden py-24 sm:py-28"
    >
      {/* Background */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 bg-hex-dots opacity-[0.1]" />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_72%_48%_at_50%_20%,transparent_10%,rgba(255,255,255,0.34)_70%,rgba(255,255,255,0.82)_100%)] dark:bg-[radial-gradient(ellipse_72%_48%_at_50%_20%,transparent_10%,rgba(0,0,0,0.48)_70%,rgba(0,0,0,0.84)_100%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-background/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary ring-1 ring-primary/20 backdrop-blur-xl dark:bg-white/[0.035]">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/70" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            Testimonials
          </div>

          <h2 className="text-balance text-3xl font-bold tracking-[-0.045em] text-foreground dark:text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Loved by teams that{" "}
            <span className="text-primary">
              move with data.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-pretty text-[15px] leading-7 text-muted-foreground dark:text-white/64 sm:text-base">
            Simple feedback from teams using the platform to make reporting,
            campaigns, and growth decisions easier.
          </p>
        </div>

        {/* Marquee */}
        <div className="relative">
          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background via-background/90 to-transparent dark:from-black dark:via-black/80" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background via-background/90 to-transparent dark:from-black dark:via-black/80" />

          <div className="space-y-4">
            <TestimonialsMarquee speed={42} />
            <TestimonialsMarquee reverse speed={52} />
          </div>
        </div>

        {/* Simple trust line */}
        <div className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-x-4 gap-y-2 text-center text-xs text-muted-foreground dark:text-white/42">
          <span>4.9/5 average rating</span>
          <span className="hidden size-1 rounded-full bg-border sm:block dark:bg-white/20" />
          <span>Trusted by 10K+ teams</span>
          <span className="hidden size-1 rounded-full bg-border sm:block dark:bg-white/20" />
          <span>Results visible within weeks</span>
        </div>
      </div>
    </section>
  )
}
