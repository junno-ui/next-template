import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Icon } from "@iconify/react"

export default function CtaSection() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="animate-scale-in relative overflow-hidden rounded-3xl border border-border/20 bg-card/40 p-12 md:p-16">
          <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.06] via-transparent to-chart-2/[0.04] animate-gradient" />
            <div className="absolute top-0 left-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.08] blur-[100px] animate-glow-pulse" />
          </div>
          <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-30" aria-hidden="true" />

          <div className="flex flex-col items-center text-center">
            <div className="animate-fade-up mb-6 flex size-14 items-center justify-center rounded-2xl bg-primary/10 ring-1 ring-primary/20 transition-transform duration-300 hover:scale-110 hover:rotate-3">
              <Icon icon="mdi:rocket-launch-outline" className="size-7 text-primary" />
            </div>
            <h2 className="animate-fade-up delay-100 max-w-xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready to accelerate your growth?
            </h2>
            <p className="animate-fade-up delay-200 mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              Join thousands of marketing teams already using our platform to drive results. Start your free trial today.
            </p>
            <div className="animate-fade-up delay-300 mt-8 flex flex-col items-center gap-3 sm:flex-row">
              <a href="#" className={cn(buttonVariants({ size: "lg" }), "group rounded-full px-8 shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]")}>
                Start Free Trial
                <Icon icon="mdi:arrow-right" className="ml-1.5 size-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-full border-border/30 px-8 transition-all hover:bg-muted/30 hover:scale-[1.02] active:scale-[0.98]")}>
                Talk to Sales
              </a>
            </div>
            <p className="animate-fade-up delay-400 mt-6 text-xs text-muted-foreground/50">
              Free 14-day trial · No credit card · Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
