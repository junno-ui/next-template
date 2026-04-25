import Link from "next/link"
import { Icon } from "@iconify/react"

import { siteConfig } from "@/config/site"
import { BrandLogo } from "@/components/layout/brand-logo"
import { cn } from "@/lib/utils"

const footerLinks = {
  Product: [
    { label: "Home", href: "#home" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],
  Company: [
    { label: "Why NexusUI", href: "#features" },
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
    icon: "solar:twitter-bold",
  },
  {
    label: "GitHub",
    href: siteConfig.links.github,
    icon: "solar:github-bold",
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: "solar:linkedin-bold",
  },
]

const trustItems = ["No credit card", "Fast setup", "Cancel anytime"]

export function SiteFooter() {
  return (
    <footer className="relative isolate overflow-hidden bg-black">
      {/* Background */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-hex-dots opacity-[0.08]" />

        <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-background via-background/80 to-transparent" />

        <div className="absolute left-1/2 top-0 h-[420px] w-[min(92vw,960px)] -translate-x-1/2 rounded-full bg-primary/[0.055] blur-[130px]" />
        <div className="absolute right-[-12%] bottom-[-20%] h-[340px] w-[620px] rounded-full bg-chart-2/[0.035] blur-[120px]" />

        <div className="absolute left-1/2 top-0 h-px w-[min(86vw,900px)] -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/35 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
        {/* Top CTA strip */}
        <div className="mb-10 overflow-hidden rounded-[2rem] bg-white/[0.025] p-5 ring-1 ring-white/10 backdrop-blur-xl sm:p-6">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold text-white">
                Ready to build a sharper product site?
              </p>
              <p className="mt-1 max-w-xl text-sm leading-6 text-white/50">
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
                <Icon
                  icon="solar:arrow-right-bold"
                  className="ml-1.5 size-4"
                />
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-white/[0.035] px-5 py-2.5 text-sm font-semibold text-white ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.06] hover:ring-primary/25 active:scale-[0.98]"
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

            <p className="mt-4 max-w-sm text-sm leading-7 text-white/52">
              A modern landing page system for launching your product with more
              clarity, trust, and visual polish.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-white/40">
              {trustItems.map((item, index) => (
                <span key={item} className="flex items-center gap-2">
                  <Icon
                    icon="solar:check-circle-bold-duotone"
                    className="size-4 text-primary"
                  />
                  {item}
                  {index < trustItems.length - 1 && (
                    <span className="ml-2 hidden size-1 rounded-full bg-white/20 sm:block" />
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
                  className="group flex size-9 items-center justify-center rounded-full bg-white/[0.035] text-white/42 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground hover:ring-primary/30"
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
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
                  {group}
                </p>

                <ul className="mt-4 grid gap-3">
                  {links.map((link) => (
                    <li key={`${group}-${link.href}-${link.label}`}>
                      <Link
                        href={link.href}
                        className={cn(
                          "group inline-flex items-center gap-2 text-sm font-medium text-white/48 transition-colors duration-300 hover:text-white"
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
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/35">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-white/35">
            <Link
              href="#"
              className="transition-colors duration-300 hover:text-white"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="transition-colors duration-300 hover:text-white"
            >
              Terms
            </Link>
            <span className="hidden size-1 rounded-full bg-white/20 sm:block" />
            <span className="inline-flex items-center gap-1">
              Built with
              <Icon icon="solar:heart-bold" className="size-3 text-rose-400" />
              by JunZ
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}