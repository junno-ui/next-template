export const siteConfig = {
  name: "Clario",
  tagline: "Bring product clarity into every launch.",
  description:
    "Clario is a refined Next.js template for SaaS and product teams that want clearer messaging, stronger trust, and a premium launch-ready experience.",
  url: "https://clario.dev",
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
