import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Icon } from "@iconify/react"

export default function CtaSection() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-border/20 bg-card/40 p-12 md:p-16">
          {/* Background glow */}
          <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
            <div className="absolute top-0 left-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.08] blur-[100px]" />
            <div className="absolute right-0 bottom-0 h-[300px] w-[400px] translate-x-1/4 translate-y-1/4 rounded-full bg-chart-2/[0.05] blur-[80px]" />
          </div>

          {/* Grid pattern overlay */}
          <div
            className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03]"
            aria-hidden="true"
            style={{
              backgroundImage:
                "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(to right, currentColor 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="flex flex-col items-center text-center">
            <div className="mb-6 flex size-14 items-center justify-center rounded-2xl bg-primary/10 ring-1 ring-primary/20">
              <Icon icon="mdi:rocket-launch-outline" className="size-7 text-primary" />
            </div>

            <h2 className="max-w-xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready to accelerate your growth?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              Join thousands of marketing teams already using our platform to
              drive results. Start your free trial today — no credit card
              required.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
              <a
                href="#"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "rounded-full px-8 shadow-lg shadow-primary/25 transition-shadow hover:shadow-xl hover:shadow-primary/35"
                )}
              >
                Start Free Trial
                <Icon icon="mdi:arrow-right" className="ml-1.5 size-4" />
              </a>
              <a
                href="#"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "rounded-full border-border/30 px-8 hover:bg-muted/30"
                )}
              >
                Talk to Sales
              </a>
            </div>

            <p className="mt-6 text-xs text-muted-foreground/50">
              Free 14-day trial · No credit card required · Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
