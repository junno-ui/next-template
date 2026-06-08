export const heroStats = [
  {
    label: "Conversion lift",
    value: "+28%",
    description: "Stronger action paths after launch",
    icon: "solar:graph-up-bold-duotone",
  },
  {
    label: "Setup time",
    value: "12 min",
    description: "Swap copy, colors, and sections fast",
    icon: "solar:clock-circle-bold-duotone",
  },
  {
    label: "Teams onboarded",
    value: "2.4k+",
    description: "Built for founders and product teams",
    icon: "solar:users-group-rounded-bold-duotone",
  },
]

export const brandLogos = [
  { icon: "mdi:instagram", name: "Instagram" },
  { icon: "mdi:shopify", name: "Shopify" },
  { icon: "mdi:microsoft", name: "Microsoft" },
  { icon: "mdi:google", name: "Google" },
  { icon: "mdi:slack", name: "Slack" },
  { icon: "mdi:github", name: "GitHub" },
  { icon: "mdi:spotify", name: "Spotify" },
  { icon: "mdi:apple", name: "Apple" },
]

export const statistics = [
  {
    value: "10K+",
    label: "Active Teams",
    icon: "mdi:account-group-outline",
    description: "Teams use the layout to explain value faster.",
    accent: "from-primary/20",
    hover: "hover:-translate-y-2 hover:rotate-[0.35deg]",
  },
  {
    value: "50M+",
    label: "Signals Processed",
    icon: "mdi:send-outline",
    description: "Insights shaped into scan-friendly product stories.",
    accent: "from-chart-2/20",
    hover: "hover:-translate-y-1 hover:translate-x-1",
  },
  {
    value: "99.9%",
    label: "Uptime",
    icon: "mdi:shield-check-outline",
    description: "A stable template foundation for real launch pages.",
    accent: "from-primary/20",
    hover: "hover:-translate-y-1 hover:-translate-x-1",
  },
  {
    value: "4.9/5",
    label: "User Rating",
    icon: "mdi:star-outline",
    description: "Visitors respond to clarity, rhythm, and polish.",
    accent: "from-amber-400/20",
    hover: "hover:-translate-y-2 hover:rotate-[-0.35deg]",
  },
]

export const testimonials = [
  {
    name: "Sarah Chen",
    role: "Head of Marketing",
    company: "TechCorp",
    quote:
      "The template gave our launch page instant structure. We shipped faster without sacrificing the premium feel.",
    avatar: "SC",
  },
  {
    name: "Marcus Johnson",
    role: "Growth Lead",
    company: "ScaleUp Inc.",
    quote:
      "The section flow makes the product easy to understand. Our team only had to update the copy and brand tokens.",
    avatar: "MJ",
  },
  {
    name: "Emily Rodriguez",
    role: "CMO",
    company: "BrightEdge",
    quote:
      "The design feels mature out of the box, especially the pricing, FAQ, and social proof sections.",
    avatar: "ER",
  },
  {
    name: "David Kim",
    role: "Founder",
    company: "Launchly",
    quote:
      "We used it as a clean base for a SaaS launch and had a polished first version in a day.",
    avatar: "DK",
  },
  {
    name: "Olivia Martin",
    role: "Marketing Director",
    company: "Northstar",
    quote:
      "The animations are subtle enough for a serious product, but still make the page feel alive.",
    avatar: "OM",
  },
  {
    name: "James Wilson",
    role: "Revenue Lead",
    company: "Orbit Labs",
    quote:
      "It is easy to customize because content, sections, and UI primitives are separated clearly.",
    avatar: "JW",
  },
]

export const faqs = [
  {
    q: "How does the free trial work?",
    a: "The template is free to start from. Replace the brand, copy, pricing, and links with your own product details, then publish when the page feels ready.",
  },
  {
    q: "Can I customize the sections?",
    a: "Yes. The landing copy lives in content files, repeated layouts use shared section primitives, and each marketing section is isolated so you can remove or rearrange it safely.",
  },
  {
    q: "Does it support dark mode?",
    a: "Yes. The visual system uses theme tokens, dark-mode variables, and generated favicon styling that follows the template's warm, polished brand direction.",
  },
  {
    q: "Can I use it for a real SaaS product?",
    a: "Yes. The page includes hero, trust logos, stats, features, pricing, testimonials, FAQ, newsletter, CTA, responsive navigation, and theme customization.",
  },
  {
    q: "Where should I edit the wording?",
    a: "Start with content/landing-page.ts and config/site.ts. Those files hold the main template data, navigation links, metadata, pricing, testimonials, FAQ, and newsletter benefits.",
  },
  {
    q: "Can I export my data?",
    a: "Yes. Use it for personal, client, or commercial projects. Keep the Junno UI attribution if you want to support the free template collection.",
  },
]

export type BillingTab = "personal" | "business"

export type Plan = {
  name: string
  price: string
  period?: string
  description: string
  features: string[]
  cta: string
  href: string
  highlighted?: boolean
  badge?: string
  isCustom?: boolean
}

export const pricingTabs: Record<
  BillingTab,
  {
    label: string
    eyebrow: string
    description: string
    plans: Plan[]
  }
> = {
  personal: {
    label: "Personal",
    eyebrow: "For individuals",
    description:
      "Lean packages for makers, founders, and creators who want a polished launch page without design debt.",
    plans: [
      {
        name: "Starter",
        price: "$19",
        period: "/mo",
        description:
          "For solo builders who need a sharp landing page foundation.",
        features: [
          "Hero, CTA, and trust sections",
          "Theme-ready component tokens",
          "Responsive marketing layout",
          "Clean content structure",
        ],
        cta: "Start Starter",
        href: "#contact",
      },
      {
        name: "Creator",
        price: "$39",
        period: "/mo",
        description:
          "For makers who want more proof, pricing, and conversion sections.",
        features: [
          "Full landing page system",
          "Pricing and FAQ sections",
          "Toast feedback patterns",
          "Scroll reveal animations",
        ],
        cta: "Start Creator",
        href: "#contact",
        highlighted: true,
        badge: "Best for solo growth",
      },
      {
        name: "Pro",
        price: "$79",
        period: "/mo",
        description:
          "For teams adapting the template across multiple product pages.",
        features: [
          "Reusable section primitives",
          "Centralized landing content",
          "Dark and light themes",
          "Launch-ready page flow",
        ],
        cta: "Start Pro",
        href: "#contact",
      },
    ],
  },
  business: {
    label: "Business",
    eyebrow: "For teams",
    description:
      "Team-ready options for products that need sharper storytelling, stronger trust, and room to scale.",
    plans: [
      {
        name: "Startup",
        price: "$60",
        period: "/mo",
        description:
          "For lean teams validating a product with a credible first page.",
        features: [
          "Conversion-focused hero",
          "Logo and statistics rows",
          "Responsive navigation",
          "Newsletter capture",
        ],
        cta: "Choose Startup",
        href: "#contact",
      },
      {
        name: "Scaleup",
        price: "$100",
        period: "/mo",
        description:
          "For fast-moving teams that need a complete marketing site starter.",
        features: [
          "Feature bento grid",
          "Pricing interaction states",
          "Testimonials marquee",
          "FAQ accordion",
        ],
        cta: "Choose Scaleup",
        href: "#contact",
        highlighted: true,
        badge: "Most popular",
      },
      {
        name: "Enterprise",
        price: "Custom",
        description:
          "For teams turning the template into a larger branded system.",
        features: [
          "Extended content model",
          "Custom brand direction",
          "Advanced component variants",
          "Production handoff support",
        ],
        cta: "Contact sales",
        href: "#contact",
        isCustom: true,
      },
    ],
  },
}

export const newsletterBenefits = [
  "Practical launch ideas and product storytelling notes",
  "Early access to new Junno UI templates",
  "Short guides for improving conversion and trust",
]
