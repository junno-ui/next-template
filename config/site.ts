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
      title: "Home",
      href: "#home",
    },
    {
      title: "About Us",
      href: "#about",
    },
    {
      title: "Features",
      href: "#features",
    },
    {
      title: "FAQ",
      href: "#faq",
    },
    {
      title: "Contact",
      href: "#contact",
    },
  ],
}

export type SiteConfig = typeof siteConfig
