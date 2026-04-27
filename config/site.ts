export const siteConfig = {
  name: "Clario",
  creator: "Junno UI",
  tagline: "Bring product clarity into every launch.",
  description:
    "Clario is a free, refined Next.js landing page template from Junno UI for SaaS and product teams that want clearer messaging, stronger trust, and a premium launch-ready experience.",
  url: "https://junno-ui.com/template/clario-landing-page",
  templateUrl: "https://junno-ui.com/template/clario-landing-page",
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
