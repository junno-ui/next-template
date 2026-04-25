export const siteConfig = {
  name: "NexusUI",
  tagline: "Ship faster. Look better. Grow smarter.",
  description:
    "The modern Next.js template for SaaS startups — built with beautiful UI, powerful analytics, and everything you need to launch.",
  url: "https://nexusui.dev",
  links: {
    twitter: "https://twitter.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  mainNav: [
    { title: "Home", href: "#home" },
    { title: "Features", href: "#features" },
    { title: "Pricing", href: "#pricing" },
    { title: "Testimonials", href: "#testimonials" },
    { title: "FAQ", href: "#faq" },
    { title: "Contact", href: "#contact" },
  ],
}

export type SiteConfig = typeof siteConfig
