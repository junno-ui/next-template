export const siteConfig = {
  name: "Clario",
  creator: "Junno UI",
  tagline: "Launch a clearer SaaS story in less time.",
  description:
    "Clario is a free, refined Next.js landing page template created by Junno UI for SaaS teams that want better messaging, smoother interactions, and a premium launch-ready experience.",
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
