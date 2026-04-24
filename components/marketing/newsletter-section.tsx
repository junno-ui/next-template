"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icon } from "@iconify/react"

export default function NewsletterSection() {
  const [email, setEmail] = React.useState("")
  const [submitted, setSubmitted] = React.useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col items-center gap-12 md:flex-row md:items-start md:justify-between">
          {/* Left content */}
          <div className="max-w-md text-center md:text-left">
            <p className="mb-2 text-xs font-medium tracking-widest text-primary uppercase">
              Newsletter
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Stay ahead of the curve
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Get weekly insights on marketing trends, product updates, and
              actionable tips delivered straight to your inbox.
            </p>

            {/* Benefits */}
            <div className="mt-6 flex flex-col gap-2.5">
              {[
                "Weekly marketing insights & trends",
                "Early access to new features",
                "Exclusive guides & case studies",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-muted-foreground/70"
                >
                  <Icon
                    icon="mdi:check-circle"
                    className="size-4 shrink-0 text-primary/60"
                  />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right form */}
          <div className="w-full max-w-sm">
            <div className="rounded-2xl border border-border/20 bg-card/40 p-6">
              {submitted ? (
                <div className="flex flex-col items-center gap-3 py-4 text-center">
                  <div className="flex size-12 items-center justify-center rounded-full bg-primary/15">
                    <Icon
                      icon="mdi:check-bold"
                      className="size-6 text-primary"
                    />
                  </div>
                  <p className="text-sm font-medium text-foreground">
                    You&apos;re subscribed!
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Check your inbox for a confirmation email.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <label htmlFor="newsletter-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-10 w-full rounded-lg border border-border/20 bg-muted/20 px-4 text-sm text-foreground placeholder:text-muted-foreground/40 focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                  <button
                    type="submit"
                    className={cn(
                      buttonVariants(),
                      "w-full rounded-lg shadow-md shadow-primary/20"
                    )}
                  >
                    Subscribe
                    <Icon icon="mdi:arrow-right" className="ml-1.5 size-4" />
                  </button>
                  <p className="text-center text-[10px] text-muted-foreground/40">
                    No spam. Unsubscribe at any time.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
