"use client"

import * as React from "react"
import { Icon } from "@/components/ui/app-icon"

import { Reveal, Stagger } from "@/components/marketing/_components/reveal"
import { buttonVariants } from "@/components/ui/button"
import { useToast } from "@/components/ui/toast"
import { newsletterBenefits } from "@/content/landing-page"
import { cn } from "@/lib/utils"

export default function NewsletterSection() {
  const [email, setEmail] = React.useState("")
  const [submitted, setSubmitted] = React.useState(false)
  const { toast } = useToast()

  const isValidEmail = email.trim().length > 0 && /\S+@\S+\.\S+/.test(email)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!isValidEmail) {
      toast({
        title: "Almost there",
        description:
          "Add a valid email and we will send the first growth note.",
        tone: "info",
      })
      return
    }

    setSubmitted(true)
    toast({
      title: "You are on the list",
      description: "Your first concise growth digest is headed to your inbox.",
      tone: "success",
    })
  }

  return (
    <section className="relative isolate overflow-hidden py-24 sm:py-28">
      {/* Background */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-background" />
        <div className="bg-hex-dots absolute inset-0 opacity-[0.1]" />

        <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-background via-background/80 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-background via-background/80 to-transparent" />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_72%_48%_at_50%_20%,transparent_10%,rgba(255,255,255,0.34)_70%,rgba(255,255,255,0.82)_100%)] dark:bg-[radial-gradient(ellipse_72%_48%_at_50%_20%,transparent_10%,rgba(0,0,0,0.48)_70%,rgba(0,0,0,0.84)_100%)]" />

        <div className="absolute top-0 left-1/2 h-px w-[min(86vw,900px)] -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/35 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="relative overflow-hidden rounded-[2.5rem] bg-background/72 p-6 shadow-2xl ring-1 shadow-black/[0.08] ring-border/40 backdrop-blur-2xl sm:p-8 lg:p-10 dark:bg-white/[0.025] dark:ring-white/10">
          {/* Card effects */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,130,40,0.14),transparent_42%)]" />
          <div className="pointer-events-none absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />

          <div className="relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            {/* Left content */}
            <div className="text-center lg:text-left">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-background/80 px-4 py-2 text-[11px] font-semibold text-primary uppercase ring-1 ring-primary/20 backdrop-blur-xl dark:bg-white/[0.035]">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/70" />
                  <span className="relative inline-flex size-2 rounded-full bg-primary" />
                </span>
                Newsletter
              </div>

              <h2 className="template-heading text-4xl leading-none font-bold text-balance text-foreground sm:text-5xl md:text-6xl dark:text-white">
                Get the signals worth{" "}
                <span className="relative bg-linear-to-r from-primary via-foreground to-primary bg-clip-text text-transparent">
                  acting on.
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-pretty text-muted-foreground sm:text-base lg:mx-0 dark:text-white/64">
                Receive one useful digest with product ideas, launch lessons,
                and reporting patterns your team can apply the same week.
              </p>

              <Stagger className="mt-7 grid gap-3 sm:grid-cols-3 lg:max-w-3xl">
                {newsletterBenefits.map((benefit, index) => (
                  <div
                    key={benefit}
                    className="group flex items-start gap-3 rounded-2xl bg-background/80 p-4 text-left ring-1 ring-border/40 transition-all duration-300 hover:-translate-y-1 hover:bg-background hover:ring-primary/20 dark:bg-white/[0.03] dark:ring-white/10 dark:hover:bg-white/[0.05]"
                    style={{
                      transitionDelay: `${index * 45}ms`,
                    }}
                  >
                    <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/15 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon icon="mdi:check" className="size-4" />
                    </span>

                    <p className="text-sm leading-6 text-muted-foreground dark:text-white/62">
                      {benefit}
                    </p>
                  </div>
                ))}
              </Stagger>
            </div>

            {/* Right form */}
            <div className="mx-auto w-full max-w-md lg:ml-auto">
              <div className="relative overflow-hidden rounded-[2rem] bg-background/85 p-5 ring-1 ring-border/40 backdrop-blur-xl transition-all duration-300 hover:bg-background hover:ring-primary/20 sm:p-6 dark:bg-black/25 dark:ring-white/10 dark:hover:bg-black/30">
                <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

                {submitted ? (
                  <div className="flex min-h-[270px] flex-col items-center justify-center text-center">
                    <div className="relative mb-5 flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/20">
                      <span className="absolute size-full animate-ping rounded-full bg-primary/15" />
                      <Icon
                        icon="solar:check-circle-bold-duotone"
                        className="relative size-8"
                      />
                    </div>

                    <p className="text-xl font-bold text-foreground dark:text-white">
                      You&apos;re subscribed!
                    </p>

                    <p className="mt-3 max-w-xs text-sm leading-6 text-muted-foreground dark:text-white/55">
                      Check your inbox for a confirmation email and your first
                      weekly growth digest.
                    </p>

                    <button
                      type="button"
                      onClick={() => {
                        setEmail("")
                        setSubmitted(false)
                      }}
                      className="mt-6 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                    >
                      Subscribe another email
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label
                        htmlFor="newsletter-email"
                        className="text-sm font-semibold text-foreground dark:text-white"
                      >
                        Join the weekly clarity digest
                      </label>

                      <p className="mt-1 text-xs leading-5 text-muted-foreground dark:text-white/45">
                        Sharp product and growth notes. No spam, no filler.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="newsletter-email" className="sr-only">
                        Email address
                      </label>

                      <div className="group relative">
                        <Icon
                          icon="solar:letter-linear"
                          className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-muted-foreground transition-colors duration-300 group-focus-within:text-primary dark:text-white/35"
                        />

                        <input
                          id="newsletter-email"
                          type="email"
                          required
                          placeholder="you@company.com"
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                          className={cn(
                            "h-12 w-full rounded-2xl bg-background/90 pr-4 pl-11 text-sm text-foreground ring-1 ring-border/40 transition-all duration-300 outline-none dark:bg-white/[0.035] dark:text-white dark:ring-white/10",
                            "placeholder:text-muted-foreground/70 focus:bg-background focus:ring-2 focus:ring-primary/30 dark:placeholder:text-white/30 dark:focus:bg-white/[0.055]"
                          )}
                        />
                      </div>

                      {email.length > 0 && !isValidEmail && (
                        <p className="flex items-center gap-1.5 text-xs text-red-400">
                          <Icon
                            icon="solar:info-circle-bold-duotone"
                            className="size-3.5"
                          />
                          Please enter a valid email address.
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={!isValidEmail}
                      className={cn(
                        buttonVariants(),
                        "group h-12 w-full rounded-2xl text-sm font-semibold shadow-xl shadow-primary/20 transition-all duration-300",
                        isValidEmail
                          ? "hover:-translate-y-0.5 hover:shadow-primary/35"
                          : "cursor-not-allowed opacity-50"
                      )}
                    >
                      Subscribe
                      <Icon
                        icon="solar:arrow-right-bold"
                        className="ml-1.5 size-4 transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </button>

                    <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px] text-muted-foreground dark:text-white/38">
                      <span>No spam</span>
                      <span className="size-1 rounded-full bg-border dark:bg-white/20" />
                      <span>Unsubscribe anytime</span>
                      <span className="size-1 rounded-full bg-border dark:bg-white/20" />
                      <span>Weekly only</span>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
