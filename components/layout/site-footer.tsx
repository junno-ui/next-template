import { siteConfig } from "@/config/site"
import { BrandLogo } from "@/components/layout/brand-logo"
import { Icon } from "@iconify/react"
import Link from "next/link"

const footerLinks = {
  Product: [
    { label: "Analytics", href: "/products/analytics" },
    { label: "Automation", href: "/products/automation" },
    { label: "Reports", href: "/products/reports" },
    { label: "Pricing", href: "/pricing" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Terms", href: "/terms" },
    { label: "Privacy", href: "/privacy" },
    { label: "Cookies", href: "/cookies" },
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

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border/10 bg-background">
      {/* Subtle top gradient line */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent 0%, color-mix(in oklch, var(--color-primary) 30%, transparent) 50%, transparent 100%)",
        }}
      />

      <div className="mx-auto max-w-5xl px-6 pt-14 pb-10">
        {/* Main grid */}
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {/* Brand column */}
          <div className="col-span-2 flex flex-col gap-4 md:col-span-1">
            <BrandLogo className="no-underline" />
            <p className="max-w-[200px] text-[12px] leading-relaxed text-muted-foreground/60">
              {siteConfig.description}
            </p>
            {/* Social links */}
            <div className="flex items-center gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex size-7 items-center justify-center rounded-lg text-muted-foreground/40 ring-1 ring-border/30 transition-all duration-200 hover:bg-muted/60 hover:text-foreground hover:ring-border"
                >
                  <Icon icon={s.icon} className="size-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group} className="flex flex-col gap-4">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground/50">
                {group}
              </p>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[12px] font-medium text-muted-foreground/60 transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border/10 pt-6 sm:flex-row">
          <p className="text-[11px] text-muted-foreground/30">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-[11px] text-muted-foreground/30">
            Built with
            <Icon icon="solar:heart-bold" className="size-3 text-rose-400/60" />
            by JunZ
          </p>
        </div>
      </div>
    </footer>
  )
}
