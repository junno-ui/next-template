import Link from "next/link"
import { Icon } from "@/components/ui/app-icon"

import { siteConfig } from "@/config/site"
import { BrandLogo } from "@/components/layout/brand-logo"
import { JunnoMark } from "@/components/layout/junno-mark"
import { cn } from "@/lib/utils"

const footerLinks = {
  Product: [
    { label: "Home", href: "#home" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],
  Company: [
    { label: "Why Clario", href: "#features" },
    { label: "Results", href: "#pricing" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],
  Support: [
    { label: "Get Started", href: "#pricing" },
    { label: "Book a Call", href: "#contact" },
    { label: "Questions", href: "#faq" },
    { label: "Newsletter", href: "#contact" },
  ],
}

const socialLinks = [
  {
    label: "Twitter / X",
    href: siteConfig.links.twitter,
    icon: "mdi:twitter",
  },
  {
    label: "GitHub",
    href: siteConfig.links.github,
    icon: "mdi:github",
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: "mdi:linkedin",
  },
]

const trustItems = ["No credit card", "Fast setup", "Cancel anytime"]

export function SiteFooter() {
  return (
    <footer className="relative isolate overflow-hidden border-t border-border/20 bg-background">
      {/* Background */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="bg-hex-dots absolute inset-0 opacity-[0.08]" />

        <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-background via-background/80 to-transparent" />

        <div className="absolute top-0 left-1/2 h-[420px] w-[min(92vw,960px)] -translate-x-1/2 rounded-full bg-primary/[0.055] blur-[130px]" />
        <div className="absolute right-[-12%] bottom-[-20%] h-[340px] w-[620px] rounded-full bg-chart-2/[0.035] blur-[120px]" />

        <div className="absolute top-0 left-1/2 h-px w-[min(86vw,900px)] -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/35 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-4 pt-16 pb-8 sm:px-6 lg:px-8">
        {/* Top CTA strip */}
        <div className="mb-10 overflow-hidden rounded-[2rem] bg-background/72 p-5 ring-1 ring-border/40 backdrop-blur-xl sm:p-6 dark:bg-white/[0.025] dark:ring-white/10">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold text-foreground">
                Ready to build a sharper product site?
              </p>
              <p className="mt-1 max-w-xl text-sm leading-6 text-muted-foreground">
                Start with cleaner UI, stronger trust signals, and a structure
                designed for real users.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="#pricing"
                className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-xl shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-primary/35 active:scale-[0.98]"
              >
                Start free
                <Icon icon="solar:arrow-right-bold" className="ml-1.5 size-4" />
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-background/85 px-5 py-2.5 text-sm font-semibold text-foreground ring-1 ring-border/40 transition-all duration-300 hover:-translate-y-0.5 hover:bg-background hover:ring-primary/25 active:scale-[0.98] dark:bg-white/[0.035] dark:text-white dark:ring-white/10 dark:hover:bg-white/[0.06]"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* Main footer */}
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          {/* Brand area */}
          <div className="max-w-md">
            <BrandLogo className="no-underline" />

            <p className="mt-4 max-w-sm text-sm leading-7 text-muted-foreground">
              A refined landing page system for launching your product with more
              clarity, trust, and visual polish.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
              {trustItems.map((item, index) => (
                <span key={item} className="flex items-center gap-2">
                  <Icon
                    icon="solar:check-circle-bold-duotone"
                    className="size-4 text-primary"
                  />
                  {item}
                  {index < trustItems.length - 1 && (
                    <span className="ml-2 hidden size-1 rounded-full bg-border sm:block dark:bg-white/20" />
                  )}
                </span>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="group flex size-9 items-center justify-center rounded-full bg-background/80 text-muted-foreground ring-1 ring-border/40 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground hover:ring-primary/30 dark:bg-white/[0.035] dark:text-white/42 dark:ring-white/10"
                >
                  <Icon
                    icon={social.icon}
                    className="size-4 transition-transform duration-300 group-hover:scale-110"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {Object.entries(footerLinks).map(([group, links]) => (
              <div key={group}>
                <p className="text-[11px] font-semibold tracking-[0.22em] text-primary uppercase">
                  {group}
                </p>

                <ul className="mt-4 grid gap-3">
                  {links.map((link) => (
                    <li key={`${group}-${link.href}-${link.label}`}>
                      <Link
                        href={link.href}
                        className={cn(
                          "group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground dark:hover:text-white"
                        )}
                      >
                        <span className="size-1 rounded-full bg-primary opacity-0 transition-all duration-300 group-hover:opacity-100" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-border/20 pt-6 sm:flex-row sm:items-center sm:justify-between dark:border-white/10">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
            <Link
              href="#"
              className="transition-colors duration-300 hover:text-foreground dark:hover:text-white"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="transition-colors duration-300 hover:text-foreground dark:hover:text-white"
            >
              Terms
            </Link>
            <span className="hidden size-1 rounded-full bg-border sm:block dark:bg-white/20" />
            <span className="inline-flex items-center gap-1">
              Created free by
              <JunnoMark className="size-4 rounded-md bg-primary text-primary-foreground" />
              Junno UI
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
