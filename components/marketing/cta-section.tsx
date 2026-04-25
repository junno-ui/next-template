import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Icon } from "@iconify/react"

export default function CtaSection() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="animate-scale-in surface-panel relative overflow-hidden rounded-[2rem] border border-white/50 p-12 md:p-16 dark:border-white/10">
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
              Ready to launch a sharper, more professional product site?
            </h2>
            <p className="animate-fade-up delay-200 mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              Start with a cleaner UI, stronger trust signals, and a structure that feels ready for real users from day one.
            </p>
            <div className="animate-fade-up delay-300 mt-8 flex flex-col items-center gap-3 sm:flex-row">
              <a href="#pricing" className={cn(buttonVariants({ size: "lg" }), "group rounded-full px-8 shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]")}>
                Start free
                <Icon icon="mdi:arrow-right" className="ml-1.5 size-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#faq" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-full border-white/45 bg-background/70 px-8 transition-all hover:bg-background hover:scale-[1.02] active:scale-[0.98] dark:border-white/10")}>
                Talk to sales
              </a>
            </div>
            <p className="animate-fade-up delay-400 mt-6 text-xs text-muted-foreground/50">
              Free 14-day trial · No credit card · Quick setup
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
