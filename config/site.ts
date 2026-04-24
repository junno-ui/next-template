export const siteConfig = {
  name: "TechLoop",
  description: "A premium SaaS landing page template built with shadcn/ui and Next.js App Router.",
  url: "https://example.com",
  links: {
    twitter: "https://twitter.com",
    github: "https://github.com",
  },
  mainNav: [
    {
      title: "Features",
      href: "#features",
    },
    {
      title: "Pricing",
      href: "#pricing",
    },
    {
      title: "Testimonials",
      href: "#testimonials",
    },
    {
      title: "FAQ",
      href: "#faq",
    },
  ],
}

export type SiteConfig = typeof siteConfig
