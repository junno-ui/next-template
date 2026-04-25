"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Icon } from "@iconify/react"
import { BrandLogo, BrandMark } from "@/components/layout/brand-logo"


// ─── Navigation data ────────────────────────────────────────────────────────

const navItems = [
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
    href: "/#pricing",
    icon: "solar:tag-price-bold-duotone",
  },
  {
    label: "Blog",
    href: "/blog",
    icon: "solar:notebook-bookmark-bold-duotone",
  },
]

// ─── Sub-components ──────────────────────────────────────────────────────────

/**
 * Dropdown trigger button for nav items that have children.
 */
function NavDropdownTrigger({
  item,
  isActive,
  isOpen,
}: {
  item: (typeof navItems)[number]
  isActive: boolean
  isOpen: boolean
}) {
  return (
    <DropdownMenuTrigger asChild>
      <button
        type="button"
        className={cn(
          "relative inline-flex items-center gap-1.5 rounded-xl px-3 py-2 text-[13px] font-medium transition-all duration-200 outline-none",
          isActive || isOpen
            ? "bg-muted/80 text-foreground"
            : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
        )}
      >
        {item.icon && (
          <Icon
            icon={item.icon}
            className={cn(
              "size-4 transition-colors duration-200",
              isActive || isOpen ? "text-primary" : "text-muted-foreground/70"
            )}
          />
        )}
        <span>{item.label}</span>
        <Icon
          icon="solar:alt-arrow-down-bold"
          className={cn(
            "size-3 transition-transform duration-300",
            isOpen ? "rotate-180 text-primary" : "text-muted-foreground/50"
          )}
        />
      </button>
    </DropdownMenuTrigger>
  )
}

/**
 * Desktop dropdown menu panel.
 */
function NavDropdownContent({
  item,
  onClose,
}: {
  item: (typeof navItems)[number]
  onClose: () => void
}) {
  return (
    <DropdownMenuContent
      align="center"
      sideOffset={12}
      className="w-[340px] overflow-hidden rounded-2xl border border-border/20 bg-background/95 p-2 shadow-2xl shadow-black/10 backdrop-blur-2xl"
      onMouseLeave={onClose}
    >
      {/* Section label */}
      <div className="px-3 pb-1 pt-2">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/60">
          {item.label}
        </p>
      </div>

      {/* Child items */}
      {item.children?.map((child) => (
        <DropdownMenuItem key={child.href} asChild>
          <Link
            href={child.href}
            className="group flex cursor-pointer items-start gap-3 rounded-xl px-3 py-3 outline-none transition-all duration-150 hover:bg-muted/60 focus:bg-muted/60"
          >
            <div
              className={cn(
                "mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg transition-all duration-200",
                child.bg,
                child.color,
                child.hoverBg,
                "group-hover:text-white group-hover:shadow-md"
              )}
            >
              <Icon icon={child.icon} className="size-[18px]" />
            </div>

            <div className="min-w-0">
              <p className="text-[13px] font-semibold text-foreground">{child.label}</p>
              <p className="mt-0.5 text-[11px] leading-relaxed text-muted-foreground">
                {child.description}
              </p>
            </div>

            <Icon
              icon="solar:arrow-right-linear"
              className="ml-auto mt-1 size-3.5 shrink-0 text-muted-foreground/30 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-muted-foreground"
            />
          </Link>
        </DropdownMenuItem>
      ))}

      {/* Footer link */}
      <div className="mt-1 rounded-xl bg-muted/30 px-3 py-2">
        <Link
          href={item.href}
          className="flex items-center justify-between text-[11px] font-medium text-muted-foreground/70 transition-colors hover:text-foreground"
        >
          <span>Browse all {item.label}</span>
          <Icon icon="solar:arrow-right-bold" className="size-3" />
        </Link>
      </div>
    </DropdownMenuContent>
  )
}

/**
 * Simple nav link (no children).
 */
function NavLink({
  item,
  isActive,
}: {
  item: (typeof navItems)[number]
  isActive: boolean
}) {
  return (
    <Link
      href={item.href}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-xl px-3 py-2 text-[13px] font-medium transition-all duration-200",
        isActive
          ? "bg-muted/80 text-foreground"
          : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
      )}
    >
      {item.icon && (
        <Icon
          icon={item.icon}
          className={cn(
            "size-4",
            isActive ? "text-primary" : "text-muted-foreground/60"
          )}
        />
      )}
      {item.label}
    </Link>
  )
}

// ─── Mobile drawer ───────────────────────────────────────────────────────────

function MobileNavItem({
  item,
  isActive,
  onClose,
  delay,
}: {
  item: (typeof navItems)[number]
  isActive: boolean
  onClose: () => void
  delay: number
}) {
  const [expanded, setExpanded] = React.useState(false)

  if (item.children?.length) {
    return (
      <div
        className="animate-in fade-in slide-in-from-right-2 rounded-2xl border border-border/10 bg-muted/20 overflow-hidden"
        style={{ animationDelay: `${delay}ms`, animationFillMode: "both" }}
      >
        {/* Parent row */}
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className={cn(
            "flex w-full items-center justify-between rounded-xl px-3 py-3 text-sm font-medium transition-colors",
            isActive ? "bg-background text-foreground shadow-sm" : "text-foreground hover:bg-background/60"
          )}
        >
          <span className="flex items-center gap-2">
            {item.icon && (
              <Icon
                icon={item.icon}
                className={cn("size-4", isActive ? "text-primary" : "text-muted-foreground/70")}
              />
            )}
            {item.label}
          </span>
          <Icon
            icon="solar:alt-arrow-down-bold"
            className={cn("size-3.5 text-muted-foreground/50 transition-transform duration-200", expanded && "rotate-180")}
          />
        </button>

        {/* Children */}
        {expanded && (
          <div className="flex flex-col gap-0.5 px-1 pb-1">
            {item.children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                onClick={onClose}
                className="group flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-background/70"
              >
                <div
                  className={cn(
                    "mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg transition-colors",
                    child.bg,
                    child.color
                  )}
                >
                  <Icon icon={child.icon} className="size-4" />
                </div>
                <div>
                  <p className="text-[13px] font-medium text-foreground">{child.label}</p>
                  <p className="mt-0.5 text-[11px] leading-relaxed text-muted-foreground">
                    {child.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <Link
      href={item.href}
      onClick={onClose}
      className={cn(
        "animate-in fade-in slide-in-from-right-2 flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
        isActive
          ? "bg-muted/70 text-foreground"
          : "text-muted-foreground hover:bg-muted/40 hover:text-foreground"
      )}
      style={{ animationDelay: `${delay}ms`, animationFillMode: "both" }}
    >
      {item.icon && (
        <Icon
          icon={item.icon}
          className={cn("size-4", isActive ? "text-primary" : "text-muted-foreground/60")}
        />
      )}
      {item.label}
    </Link>
  )
}

// ─── Main component ──────────────────────────────────────────────────────────

export default function SiteHeader() {
  const [scrolled, setScrolled] = React.useState(false)
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null)

  const pathname = usePathname()

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const isItemActive = (href: string) => {
    if (href === "/") return pathname === "/"
    const clean = href.replace(/\/#.*/, "")
    if (!clean) return false
    return pathname.startsWith(clean)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:px-6 pointer-events-none">
      <nav
        className={cn(
          "pointer-events-auto flex w-full max-w-5xl items-center justify-between gap-4 rounded-2xl px-3 py-2 transition-all duration-500",
          scrolled
            ? "border border-border/30 bg-background/85 shadow-2xl shadow-black/[0.08] backdrop-blur-2xl dark:shadow-black/30"
            : "border border-transparent bg-background/20 backdrop-blur-xl"
        )}
      >
        {/* ── Brand ── */}
        <BrandLogo />

        {/* ── Desktop nav ── */}
        <div className="hidden items-center gap-0.5 lg:flex">
          {navItems.map((item) => {
            const isActive =
              isItemActive(item.href) ||
              item.children?.some((c) => isItemActive(c.href))

            if (item.children?.length) {
              const isOpen = openDropdown === item.label
              return (
                <DropdownMenu
                  key={item.label}
                  open={isOpen}
                  onOpenChange={(open) => setOpenDropdown(open ? item.label : null)}
                >
                  <div
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <NavDropdownTrigger item={item} isActive={!!isActive} isOpen={isOpen} />
                    <NavDropdownContent item={item} onClose={() => setOpenDropdown(null)} />
                  </div>
                </DropdownMenu>
              )
            }

            return <NavLink key={item.label} item={item} isActive={!!isActive} />
          })}
        </div>

        {/* ── Right: CTAs + mobile trigger ── */}
        <div className="flex items-center gap-2">
          {/* Sign in */}
          <Link
            href="/login"
            className="hidden items-center gap-1.5 rounded-xl px-3 py-2 text-[13px] font-medium text-muted-foreground transition-all duration-200 hover:bg-muted/50 hover:text-foreground lg:inline-flex"
          >
            <Icon icon="solar:user-bold-duotone" className="size-4 text-muted-foreground/60" />
            Sign in
          </Link>

          {/* Get started */}
          <Link
            href="/#contact"
            className="hidden items-center gap-1.5 rounded-xl bg-primary px-4 py-2 text-[13px] font-semibold text-primary-foreground shadow-sm shadow-primary/30 transition-all duration-200 hover:bg-primary/90 hover:shadow-md hover:shadow-primary/40 hover:-translate-y-px active:translate-y-0 lg:inline-flex"
          >
            Get started
            <Icon icon="solar:arrow-right-bold" className="size-3.5" />
          </Link>

          {/* Mobile hamburger */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon-sm"
                className="rounded-xl lg:hidden"
                aria-label="Open navigation menu"
              >
                <Icon
                  icon={mobileOpen ? "solar:close-square-bold-duotone" : "solar:hamburger-menu-bold-duotone"}
                  className="size-[18px]"
                />
              </Button>
            </SheetTrigger>

            {/* ── Mobile drawer ── */}
            <SheetContent
              side="right"
              className="flex w-80 flex-col border-border/20 bg-background/96 p-0 backdrop-blur-2xl"
            >
              <SheetHeader className="border-b border-border/10 px-5 py-4">
                <SheetTitle asChild>
                  <div>
                    <BrandMark size="8" />
                  </div>
                </SheetTitle>
              </SheetHeader>

              {/* Nav items */}
              <div className="flex flex-col gap-1 overflow-y-auto p-3 custom-scrollbar">
                {navItems.map((item, i) => {
                  const isActive =
                    isItemActive(item.href) ||
                    item.children?.some((c) => isItemActive(c.href))

                  return (
                    <MobileNavItem
                      key={item.label}
                      item={item}
                      isActive={!!isActive}
                      onClose={() => setMobileOpen(false)}
                      delay={i * 40}
                    />
                  )
                })}
              </div>

              {/* Footer CTAs */}
              <div className="mt-auto space-y-2 border-t border-border/10 p-3">
                <Link
                  href="/login"
                  onClick={() => setMobileOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-border/30 bg-muted/40 px-4 py-2.5 text-sm font-medium text-foreground transition-all hover:bg-muted/60"
                >
                  <Icon icon="solar:user-bold-duotone" className="size-4 text-muted-foreground" />
                  Sign in
                </Link>
                <Link
                  href="/#contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm shadow-primary/30 transition-all hover:bg-primary/90"
                >
                  Get started
                  <Icon icon="solar:arrow-right-bold" className="size-3.5" />
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}