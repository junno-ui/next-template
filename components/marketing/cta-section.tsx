import { Icon } from "@iconify/react"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const trustItems = ["Free 14-day trial", "No credit card", "Setup in minutes"]

export default function CtaSection() {
  return (
    <section id="contact" className="relative isolate overflow-hidden py-24 sm:py-28">
      {/* Background */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 bg-hex-dots opacity-[0.1]" />

        <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-background via-background/80 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-background via-background/80 to-transparent" />

        <div className="absolute left-1/2 top-[30%] h-[520px] w-[min(92vw,1000px)] -translate-x-1/2 rounded-full bg-primary/[0.08] blur-[130px]" />
        <div className="absolute right-[-12%] bottom-[-10%] h-[360px] w-[620px] rounded-full bg-chart-2/[0.045] blur-[120px]" />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_72%_48%_at_50%_20%,transparent_10%,rgba(255,255,255,0.34)_70%,rgba(255,255,255,0.82)_100%)] dark:bg-[radial-gradient(ellipse_72%_48%_at_50%_20%,transparent_10%,rgba(0,0,0,0.48)_70%,rgba(0,0,0,0.84)_100%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-primary/20 bg-[linear-gradient(135deg,hsl(var(--primary))_0%,color-mix(in_oklab,hsl(var(--primary))_82%,white_18%)_100%)] px-6 py-14 text-primary-foreground shadow-2xl shadow-primary/25 sm:px-10 sm:py-16 lg:px-16">
          {/* Filled card effects */}
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.28),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.22),transparent_38%)]"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-grid opacity-[0.12]"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-white/20 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-28 left-1/2 size-80 -translate-x-1/2 rounded-full bg-black/20 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-white ring-1 ring-white/20 backdrop-blur-xl">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/70" />
                <span className="relative inline-flex size-2 rounded-full bg-white" />
              </span>
              Ready to grow
            </div>

            <div className="mb-6 flex size-16 items-center justify-center rounded-[1.35rem] bg-white/15 text-white ring-1 ring-white/20 shadow-xl shadow-black/10 transition-all duration-300 hover:scale-110 hover:rotate-3">
              <Icon icon="solar:rocket-bold-duotone" className="size-8" />
            </div>

            <h2 className="max-w-3xl text-balance text-3xl font-bold tracking-[-0.045em] text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Ready to launch a sharper product site?
            </h2>

            <p className="mt-5 max-w-2xl text-pretty text-[15px] leading-7 text-primary-foreground/85 sm:text-base">
              Start with a cleaner UI, stronger trust signals, and a polished
              structure that feels ready for real users from day one.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
              <a
                href="#pricing"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "group rounded-full bg-white px-8 text-sm font-semibold text-primary shadow-xl shadow-black/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90 hover:shadow-2xl hover:shadow-black/20 active:scale-[0.98]"
                )}
              >
                Start free
                <Icon
                  icon="solar:arrow-right-bold"
                  className="ml-1.5 size-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#faq"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "group rounded-full border-white/25 bg-white/10 px-8 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/15 active:scale-[0.98]"
                )}
              >
                Talk to sales
                <Icon
                  icon="solar:chat-round-dots-bold"
                  className="ml-1.5 size-4 transition-transform duration-300 group-hover:scale-110"
                />
              </a>
            </div>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs font-medium text-white/70">
              {trustItems.map((item, index) => (
                <div key={item} className="flex items-center gap-2">
                  <Icon icon="solar:check-circle-bold-duotone" className="size-4 text-white" />
                  <span>{item}</span>
                  {index < trustItems.length - 1 && (
                    <span className="ml-2 hidden size-1 rounded-full bg-white/35 sm:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
