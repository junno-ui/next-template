import { Icon } from "@/components/ui/app-icon"

import { Reveal } from "@/components/marketing/_components/reveal"
import {
  SectionHeader,
  SectionShell,
} from "@/components/marketing/_components/section-shell"
import { testimonials } from "@/content/landing-page"
import { cn } from "@/lib/utils"

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[number]
}) {
  return (
    <article
      className={cn(
        "group flex h-full w-[320px] shrink-0 flex-col justify-between rounded-[1.75rem] bg-background/72 p-5 ring-1 ring-border/40 backdrop-blur-xl dark:bg-white/2.5 dark:ring-white/10",
        "transition-all duration-300 hover:-translate-y-1 hover:bg-background/90 hover:ring-primary/25 dark:hover:bg-white/4.5"
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
          &ldquo;{testimonial.quote}&rdquo;
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
      <div
        className="animate-scroll flex min-w-max gap-4 will-change-transform"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {items.map((testimonial, index) => (
          <TestimonialCard
            key={`${testimonial.name}-${index}`}
            testimonial={testimonial}
          />
        ))}
      </div>
    </div>
  )
}

export default function TestimonialsSection() {
  return (
    <SectionShell id="testimonials">
      <SectionHeader
        eyebrow="Testimonials"
        title={
          <>
            Social proof that{" "}
            <span className="relative bg-linear-to-r from-primary via-foreground to-primary bg-clip-text text-transparent">
              feels believable.
            </span>
          </>
        }
        description="Replace these with customer quotes, beta feedback, or launch reactions to make your page feel trusted from the first scroll."
      />

        <Reveal className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-background via-background/90 to-transparent dark:from-black dark:via-black/80" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-background via-background/90 to-transparent dark:from-black dark:via-black/80" />

          <div className="space-y-4">
            <TestimonialsMarquee speed={42} />
            <TestimonialsMarquee reverse speed={52} />
          </div>
        </Reveal>

        <div className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-x-4 gap-y-2 text-center text-xs text-muted-foreground dark:text-white/42">
          <span>4.9/5 average rating</span>
          <span className="hidden size-1 rounded-full bg-border sm:block dark:bg-white/20" />
          <span>Trusted by 10K+ teams</span>
          <span className="hidden size-1 rounded-full bg-border sm:block dark:bg-white/20" />
          <span>Results visible within weeks</span>
        </div>
    </SectionShell>
  )
}
