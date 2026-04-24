"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
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
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-2" : "py-4"
      )}
    >
      <nav
        className={cn(
          "mx-auto flex max-w-5xl items-center justify-between rounded-full border px-2 py-1.5 pl-5 transition-all duration-500",
          scrolled
            ? "border-border/40 bg-background/80 shadow-lg shadow-black/10 backdrop-blur-xl"
            : "border-border/20 bg-background/40 backdrop-blur-md",
          "mx-4 sm:mx-6 lg:mx-auto"
        )}
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 transition-opacity hover:opacity-80"
        >
          <div className="flex size-8 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20">
            <Icon
              icon="mdi:chart-timeline-variant-shimmer"
              className="size-4 text-primary"
            />
          </div>
          <span className="text-sm font-semibold tracking-tight text-foreground">
            {siteConfig.name}
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden items-center gap-1 lg:flex">
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
                  buttonVariants({ variant: "ghost", size: "sm" }),
                  "rounded-full text-sm transition-colors hover:bg-transparent",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground/80 hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center lg:flex">
          <Link
            href="/#contact"
            className={cn(
              buttonVariants({ size: "sm" }),
              "rounded-full px-5 text-sm font-medium shadow-md shadow-primary/20 transition-all hover:shadow-lg hover:shadow-primary/30"
            )}
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon-sm"
              className="rounded-full lg:hidden"
              aria-label="Open navigation menu"
            >
              <Icon icon="mdi:menu" className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-72 border-border/30 bg-background p-0"
          >
            <SheetHeader className="border-b border-border/30 px-6 py-5">
              <SheetTitle className="flex items-center gap-2.5 text-left">
                <div className="flex size-8 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20">
                  <Icon
                    icon="mdi:chart-timeline-variant-shimmer"
                    className="size-4 text-primary"
                  />
                </div>
                {siteConfig.name}
              </SheetTitle>
            </SheetHeader>

            <div className="flex flex-col gap-1 px-4 py-4">
              {navItems.map((item, i) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "flex items-center rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
                    "animate-in fade-in slide-in-from-right-2"
                  )}
                  style={{
                    animationDelay: `${i * 50}ms`,
                    animationFillMode: "both",
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="mt-auto flex flex-col gap-2 border-t border-border/30 px-4 py-4">
              <Link
                href="/#contact"
                onClick={() => setMobileOpen(false)}
                className={cn(
                  buttonVariants(),
                  "w-full justify-center rounded-lg"
                )}
              >
                Contact
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}
