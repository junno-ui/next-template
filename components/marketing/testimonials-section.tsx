import { cn } from "@/lib/utils"
import { Icon } from "@iconify/react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Head of Marketing",
    company: "TechCorp",
    quote: "This platform completely transformed our campaign workflow. We saw a 40% increase in engagement within the first month.",
    avatar: "SC",
  },
  {
    name: "Marcus Johnson",
    role: "Growth Lead",
    company: "ScaleUp Inc.",
    quote: "The analytics dashboard is incredibly intuitive. Our team can now make data-driven decisions in real time.",
    avatar: "MJ",
  },
  {
    name: "Emily Rodriguez",
    role: "CMO",
    company: "BrightEdge",
    quote: "We switched from three different tools to this single platform. The ROI was visible within weeks.",
    avatar: "ER",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="relative py-24">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute bottom-0 left-1/2 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-primary/[0.03] blur-[120px]" />
      </div>

      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-14 text-center">
          <p className="animate-fade-up mb-2 text-xs font-medium tracking-widest text-primary uppercase">Testimonials</p>
          <h2 className="animate-fade-up delay-100 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Loved by marketing teams
          </h2>
          <p className="animate-fade-up delay-200 mx-auto mt-4 max-w-lg text-sm text-muted-foreground">
            Hear from the teams that use our platform to drive real results every day.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="animate-slide-up-fade group flex flex-col justify-between rounded-2xl border border-border/20 bg-card/40 p-6 transition-all duration-300 hover:border-border/40 hover:bg-card/70 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5"
              style={{ animationDelay: `${300 + i * 100}ms` }}
            >
              {/* Stars */}
              <div className="mb-4 flex gap-0.5">
                {[...Array(5)].map((_, j) => (
                  <Icon
                    key={j}
                    icon="mdi:star"
                    className="size-4 text-primary/70 transition-all duration-200 group-hover:text-primary group-hover:scale-110"
                    style={{ transitionDelay: `${j * 30}ms` }}
                  />
                ))}
              </div>

              <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground/80">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3 border-t border-border/10 pt-4">
                <div className="flex size-9 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary transition-all duration-300 group-hover:bg-primary/15 group-hover:scale-105">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{t.name}</p>
                  <p className="text-[11px] text-muted-foreground/60">{t.role}, {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
