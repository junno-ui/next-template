"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { siteConfig } from "@/config/site"
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

const navItems = [
  {
    label: "Products",
    href: "/products",
    icon: "mdi:cube-outline",
    children: [
      {
        label: "Analytics",
        href: "/products/analytics",
        description: "Track performance and business insights",
        icon: "mdi:chart-line",
      },
      {
        label: "Automation",
        href: "/products/automation",
        description: "Automate repetitive workflows",
        icon: "mdi:robot-outline",
      },
      {
        label: "Reports",
        href: "/products/reports",
        description: "Generate beautiful reports faster",
        icon: "mdi:file-chart-outline",
      },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    icon: "mdi:lightbulb-outline",
    children: [
      {
        label: "For Startups",
        href: "/solutions/startups",
        description: "Move faster with simple tools",
        icon: "mdi:rocket-launch-outline",
      },
      {
        label: "For Agencies",
        href: "/solutions/agencies",
        description: "Manage clients and campaigns",
        icon: "mdi:briefcase-outline",
      },
      {
        label: "For Enterprise",
        href: "/solutions/enterprise",
        description: "Scale securely across your team",
        icon: "mdi:domain",
      },
    ],
  },
  {
    label: "Pricing",
    href: "/#pricing",
  },
  {
    label: "Testimonials",
    href: "/#testimonials",
  },
]

export default function SiteHeader() {
  const [scrolled, setScrolled] = React.useState(false)
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null)

  const pathname = usePathname()

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })

    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const isItemActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }

    const cleanHref = href.replace(/\/#.*/, "")

    if (!cleanHref || cleanHref === "") {
      return false
    }

    return pathname.startsWith(cleanHref)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:px-6">
      <nav
        className={cn(
          "flex w-full max-w-4xl items-center justify-between rounded-2xl border px-4 py-2 transition-all duration-500",
          scrolled
            ? "border-border/40 bg-background/80 shadow-xl shadow-black/[0.08] backdrop-blur-2xl dark:shadow-black/25"
            : "border-border/10 bg-background/40 backdrop-blur-xl"
        )}
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 rounded-xl transition-opacity hover:opacity-80"
        >
          <div className="flex size-8 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/15">
            <Icon
              icon="mdi:chart-timeline-variant-shimmer"
              className="size-4 text-primary"
            />
          </div>

          <span className="hidden text-sm font-semibold tracking-tight text-foreground sm:inline">
            {siteConfig.name}
          </span>
        </Link>

        {/* Desktop menu */}
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const isActive =
              isItemActive(item.href) ||
              item.children?.some((child) => isItemActive(child.href))

            if (item.children?.length) {
              const isOpen = openDropdown === item.label

              return (
                <DropdownMenu
                  key={item.label}
                  open={isOpen}
                  onOpenChange={(open) =>
                    setOpenDropdown(open ? item.label : null)
                  }
                >
                  <div
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <DropdownMenuTrigger asChild>
                      <button
                        type="button"
                        className={cn(
                          "relative inline-flex items-center gap-1 rounded-xl px-3 py-2 text-[13px] font-medium transition-all outline-none",
                          isActive || isOpen
                            ? "bg-muted/70 text-foreground"
                            : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                        )}
                      >
                        {item.icon && (
                          <Icon icon={item.icon} className="size-4" />
                        )}

                        <span>{item.label}</span>

                        <Icon
                          icon="mdi:chevron-down"
                          className={cn(
                            "size-3.5 transition-transform duration-200",
                            isOpen && "rotate-180"
                          )}
                        />
                      </button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent
                      align="center"
                      sideOffset={10}
                      className="w-80 rounded-2xl border-border/30 bg-background/95 p-2 shadow-2xl shadow-black/10 backdrop-blur-2xl"
                      onMouseEnter={() => setOpenDropdown(item.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <div className="mb-1 px-3 py-2">
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          {item.label}
                        </p>
                      </div>

                      {item.children.map((child) => (
                        <DropdownMenuItem key={child.href} asChild>
                          <Link
                            href={child.href}
                            className="group flex cursor-pointer items-start gap-3 rounded-xl px-3 py-3 outline-none transition-colors hover:bg-muted/70 focus:bg-muted/70"
                          >
                            <div className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                              <Icon icon={child.icon} className="size-4" />
                            </div>

                            <div className="min-w-0">
                              <p className="text-sm font-medium text-foreground">
                                {child.label}
                              </p>
                              <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                                {child.description}
                              </p>
                            </div>
                          </Link>
                        </DropdownMenuItem>
                      ))}

                      <div className="mt-2 rounded-xl bg-muted/40 p-3">
                        <Link
                          href={item.href}
                          className="flex items-center justify-between text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
                        >
                          View all {item.label}
                          <Icon icon="mdi:arrow-right" className="size-3.5" />
                        </Link>
                      </div>
                    </DropdownMenuContent>
                  </div>
                </DropdownMenu>
              )
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "rounded-xl px-3 py-2 text-[13px] font-medium transition-all",
                  isActive
                    ? "bg-muted/70 text-foreground"
                    : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <Link
            href="/#contact"
            className="hidden rounded-xl bg-primary px-4 py-2 text-[13px] font-medium text-primary-foreground shadow-sm shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-md hover:shadow-primary/30 lg:inline-flex"
          >
            Contact
          </Link>

          {/* Mobile menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon-sm"
                className="rounded-xl lg:hidden"
                aria-label="Open menu"
              >
                <Icon icon="mdi:menu" className="size-[18px]" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="flex w-80 flex-col border-border/20 bg-background/95 p-0 backdrop-blur-2xl"
            >
              <SheetHeader className="border-b border-border/10 px-5 py-4">
                <SheetTitle className="flex items-center gap-2 text-left text-sm">
                  <div className="flex size-8 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/15">
                    <Icon
                      icon="mdi:chart-timeline-variant-shimmer"
                      className="size-4 text-primary"
                    />
                  </div>

                  {siteConfig.name}
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-1 p-3">
                {navItems.map((item, i) => {
                  const isActive =
                    isItemActive(item.href) ||
                    item.children?.some((child) => isItemActive(child.href))

                  if (item.children?.length) {
                    return (
                      <div
                        key={item.label}
                        className="rounded-2xl border border-border/10 bg-muted/20 p-1 animate-in fade-in slide-in-from-right-1"
                        style={{
                          animationDelay: `${i * 40}ms`,
                          animationFillMode: "both",
                        }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className={cn(
                            "flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                            isActive
                              ? "bg-background text-foreground shadow-sm"
                              : "text-foreground hover:bg-background/70"
                          )}
                        >
                          <span className="flex items-center gap-2">
                            {item.icon && (
                              <Icon icon={item.icon} className="size-4" />
                            )}
                            {item.label}
                          </span>

                          <Icon icon="mdi:chevron-right" className="size-4" />
                        </Link>

                        <div className="mt-1 flex flex-col gap-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setMobileOpen(false)}
                              className="group flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-background/70"
                            >
                              <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                <Icon icon={child.icon} className="size-4" />
                              </div>

                              <div>
                                <p className="text-sm font-medium text-foreground">
                                  {child.label}
                                </p>
                                <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                                  {child.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )
                  }

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "rounded-xl px-3 py-2.5 text-sm font-medium transition-colors animate-in fade-in slide-in-from-right-1",
                        isActive
                          ? "bg-muted/70 text-foreground"
                          : "text-muted-foreground hover:bg-muted/40 hover:text-foreground"
                      )}
                      style={{
                        animationDelay: `${i * 40}ms`,
                        animationFillMode: "both",
                      }}
                    >
                      {item.label}
                    </Link>
                  )
                })}
              </div>

              <div className="mt-auto border-t border-border/10 p-3">
                <Link
                  href="/#contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex w-full items-center justify-center rounded-xl bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground shadow-sm shadow-primary/20 transition-all hover:bg-primary/90"
                >
                  Contact
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}