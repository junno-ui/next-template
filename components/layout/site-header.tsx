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
import { Icon } from "@iconify/react"

const navItems = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/#features" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/#faq" },
]

export default function SiteHeader() {
  const [scrolled, setScrolled] = React.useState(false)
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:px-6">
      <nav
        className={cn(
          "flex w-full max-w-2xl items-center justify-between rounded-2xl border px-4 py-2 transition-all duration-500",
          scrolled
            ? "border-border/30 bg-background/70 shadow-xl shadow-black/[0.08] backdrop-blur-2xl dark:shadow-black/25"
            : "border-border/10 bg-background/30 backdrop-blur-lg"
        )}
      >
        {/* Logo — icon only on mobile, icon + text on desktop */}
        <Link
          href="/"
          className="flex items-center gap-2 transition-opacity hover:opacity-70"
        >
          <div className="flex size-7 items-center justify-center rounded-lg bg-primary/10">
            <Icon
              icon="mdi:chart-timeline-variant-shimmer"
              className="size-3.5 text-primary"
            />
          </div>
          <span className="hidden text-sm font-semibold tracking-tight text-foreground sm:inline">
            {siteConfig.name}
          </span>
        </Link>

        {/* Center nav links — floating pill style */}
        <div className="hidden items-center gap-0.5 lg:flex">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href.replace(/\/#.*/, "")) &&
                  item.href !== "/"

            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "relative rounded-lg px-3 py-1.5 text-[13px] font-medium transition-colors",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground/60 hover:text-foreground"
                )}
              >
                {isActive && (
                  <span className="absolute inset-0 rounded-lg bg-muted/50" />
                )}
                <span className="relative">{item.label}</span>
              </Link>
            )
          })}
        </div>

        {/* Right side — CTA + mobile trigger */}
        <div className="flex items-center gap-2">
          <Link
            href="/#contact"
            className="hidden rounded-lg bg-primary px-4 py-1.5 text-[13px] font-medium text-primary-foreground shadow-sm shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-md hover:shadow-primary/30 lg:inline-flex"
          >
            Contact
          </Link>

          {/* Mobile menu trigger */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon-sm"
                className="rounded-lg lg:hidden"
                aria-label="Open menu"
              >
                <Icon icon="mdi:menu" className="size-[18px]" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-64 border-border/20 bg-background/95 p-0 backdrop-blur-2xl"
            >
              <SheetHeader className="border-b border-border/10 px-5 py-4">
                <SheetTitle className="flex items-center gap-2 text-left text-sm">
                  <div className="flex size-6 items-center justify-center rounded-md bg-primary/10">
                    <Icon
                      icon="mdi:chart-timeline-variant-shimmer"
                      className="size-3 text-primary"
                    />
                  </div>
                  {siteConfig.name}
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-0.5 p-3">
                {navItems.map((item, i) => {
                  const isActive =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href.replace(/\/#.*/, "")) &&
                        item.href !== "/"

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "rounded-lg px-3 py-2 text-sm font-medium transition-colors animate-in fade-in slide-in-from-right-1",
                        isActive
                          ? "bg-muted/50 text-foreground"
                          : "text-muted-foreground hover:bg-muted/30 hover:text-foreground"
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
                  className="flex w-full items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm shadow-primary/20"
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
