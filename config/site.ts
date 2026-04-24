export const siteConfig = {
  name: "Pixar Marketing",
  description: "Track campaign performance, analyze key metrics, and make data-driven decisions—all in one intuitive dashboard.",
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
