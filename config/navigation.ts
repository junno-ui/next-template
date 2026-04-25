export type NavChild = {
  label: string
  href: string
  description: string
  icon: string
  color: string
  bg: string
  hoverBg: string
}

export type NavItem = {
  label: string
  href: string
  icon: string
  children?: NavChild[]
}

export const navItems: NavItem[] = [
  {
    label: "Products",
    href: "/products",
    icon: "solar:box-minimalistic-bold-duotone",
    children: [
      {
        label: "Analytics",
        href: "/products/analytics",
        description: "Track performance and business insights",
        icon: "solar:chart-2-bold-duotone",
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        hoverBg: "group-hover:bg-blue-500",
      },
      {
        label: "Automation",
        href: "/products/automation",
        description: "Automate repetitive workflows",
        icon: "solar:magic-stick-3-bold-duotone",
        color: "text-violet-500",
        bg: "bg-violet-500/10",
        hoverBg: "group-hover:bg-violet-500",
      },
      {
        label: "Reports",
        href: "/products/reports",
        description: "Generate beautiful reports faster",
        icon: "solar:document-text-bold-duotone",
        color: "text-emerald-500",
        bg: "bg-emerald-500/10",
        hoverBg: "group-hover:bg-emerald-500",
      },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    icon: "solar:lamp-charge-bold-duotone",
    children: [
      {
        label: "For Startups",
        href: "/solutions/startups",
        description: "Move faster with simple tools",
        icon: "solar:rocket-bold-duotone",
        color: "text-orange-500",
        bg: "bg-orange-500/10",
        hoverBg: "group-hover:bg-orange-500",
      },
      {
        label: "For Agencies",
        href: "/solutions/agencies",
        description: "Manage clients and campaigns",
        icon: "solar:users-group-rounded-bold-duotone",
        color: "text-sky-500",
        bg: "bg-sky-500/10",
        hoverBg: "group-hover:bg-sky-500",
      },
      {
        label: "Enterprise",
        href: "/solutions/enterprise",
        description: "Scale securely across your team",
        icon: "solar:buildings-2-bold-duotone",
        color: "text-primary",
        bg: "bg-primary/10",
        hoverBg: "group-hover:bg-primary",
      },
    ],
  },
  {
    label: "Pricing",
    href: "/pricing",
    icon: "solar:tag-price-bold-duotone",
  },
  {
    label: "Blog",
    href: "/blog",
    icon: "solar:notebook-bookmark-bold-duotone",
  },
]
