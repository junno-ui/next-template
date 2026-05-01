export const heroStats = [
  {
    label: "Conversion lift",
    value: "+28%",
    description: "Average increase after launch",
    icon: "solar:graph-up-bold-duotone",
  },
  {
    label: "Setup time",
    value: "12 min",
    description: "Connect tools and go live",
    icon: "solar:clock-circle-bold-duotone",
  },
  {
    label: "Teams onboarded",
    value: "2.4k+",
    description: "Growing teams use it daily",
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
    description: "Operators rely on the platform every day.",
    accent: "from-primary/20",
    hover: "hover:-translate-y-2 hover:rotate-[0.35deg]",
  },
  {
    value: "50M+",
    label: "Signals Processed",
    icon: "mdi:send-outline",
    description: "Data points converted into clear decisions.",
    accent: "from-chart-2/20",
    hover: "hover:-translate-y-1 hover:translate-x-1",
  },
  {
    value: "99.9%",
    label: "Uptime",
    icon: "mdi:shield-check-outline",
    description: "Reliable infrastructure for critical workflows.",
    accent: "from-primary/20",
    hover: "hover:-translate-y-1 hover:-translate-x-1",
  },
  {
    value: "4.9/5",
    label: "User Rating",
    icon: "mdi:star-outline",
    description: "Loved for clarity, speed, and ease of use.",
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
      "This platform completely transformed our campaign workflow. We saw a 40% increase in engagement within the first month.",
    avatar: "SC",
  },
  {
    name: "Marcus Johnson",
    role: "Growth Lead",
    company: "ScaleUp Inc.",
    quote:
      "The analytics dashboard is incredibly intuitive. Our team can now make data-driven decisions in real time.",
    avatar: "MJ",
  },
  {
    name: "Emily Rodriguez",
    role: "CMO",
    company: "BrightEdge",
    quote:
      "We switched from three different tools to this single platform. The ROI was visible within weeks.",
    avatar: "ER",
  },
  {
    name: "David Kim",
    role: "Founder",
    company: "Launchly",
    quote:
      "It helped us replace messy spreadsheets with one clear operating dashboard. The team adopted it instantly.",
    avatar: "DK",
  },
  {
    name: "Olivia Martin",
    role: "Marketing Director",
    company: "Northstar",
    quote:
      "The reporting flow is simple, polished, and reliable. It saves our team hours every week.",
    avatar: "OM",
  },
  {
    name: "James Wilson",
    role: "Revenue Lead",
    company: "Orbit Labs",
    quote:
      "The best part is how calm the product feels. We get the data we need without dashboard overload.",
    avatar: "JW",
  },
]

export const faqs = [
  {
    q: "How does the free trial work?",
    a: "You get full access to all features for 14 days. No credit card required. At the end of your trial, choose a plan that fits your needs or continue with our free tier.",
  },
  {
    q: "Can I switch plans later?",
    a: "Absolutely. You can upgrade, downgrade, or cancel your plan at any time from your dashboard. Changes take effect at the start of your next billing cycle.",
  },
  {
    q: "Is my data secure?",
    a: "Yes. We use AES-256 encryption at rest, TLS 1.3 in transit, and SOC 2 Type II compliance. Your data is stored in geo-redundant data centers with a 99.9% uptime SLA.",
  },
  {
    q: "Do you offer custom integrations?",
    a: "Our Enterprise plan includes custom API integrations, dedicated engineering support, and webhook configurations tailored to your existing tech stack.",
  },
  {
    q: "What kind of support do you provide?",
    a: "All plans include email support with 24-hour response time. Scaleup plans get priority chat support, and Enterprise customers receive a dedicated account manager.",
  },
  {
    q: "Can I export my data?",
    a: "Yes. You can export all your campaign data, analytics reports, and contact lists in CSV, JSON, or PDF format at any time from the settings panel.",
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
      "Simple plans for founders, creators, and small operators who want cleaner dashboards without extra complexity.",
    plans: [
      {
        name: "Starter",
        price: "$19",
        period: "/mo",
        description:
          "For solo operators who need a clean place to track the basics.",
        features: [
          "3 active dashboards",
          "Basic campaign tracking",
          "Weekly reports",
          "Email support",
        ],
        cta: "Start Starter",
        href: "#contact",
      },
      {
        name: "Creator",
        price: "$39",
        period: "/mo",
        description:
          "For creators and consultants who want stronger insights and automation.",
        features: [
          "10 active dashboards",
          "Advanced tracking",
          "AI signal summaries",
          "Priority email support",
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
          "For power users managing multiple projects, channels, and reports.",
        features: [
          "Unlimited dashboards",
          "Custom reporting views",
          "Automation workflows",
          "Priority support",
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
      "Scalable plans for teams that need deeper reporting, better collaboration, and reliable workflows.",
    plans: [
      {
        name: "Startup",
        price: "$60",
        period: "/mo",
        description:
          "For lean teams that need polished reporting without extra complexity.",
        features: [
          "Essential campaign tracking",
          "5 active dashboards",
          "Clean reporting",
          "Email support",
        ],
        cta: "Choose Startup",
        href: "#contact",
      },
      {
        name: "Scaleup",
        price: "$100",
        period: "/mo",
        description:
          "For fast-moving teams ready for deeper insights and workflow automation.",
        features: [
          "Advanced campaign tracking",
          "Unlimited dashboards",
          "AI signal scoring",
          "Priority support",
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
          "For larger teams that need tailored solutions, security, and scale.",
        features: [
          "Dedicated account manager",
          "Custom integrations",
          "SLA guarantees",
          "White-label options",
        ],
        cta: "Contact sales",
        href: "#contact",
        isCustom: true,
      },
    ],
  },
}

export const newsletterBenefits = [
  "Weekly growth insights and product updates",
  "Early access to new features",
  "Exclusive guides, templates, and case studies",
]
