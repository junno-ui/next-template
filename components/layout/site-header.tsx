"use client"

import * as React from "react"
import Link from "next/link"
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
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "#blog" },
  { label: "Company", href: "#company" },
]

export default function SiteHeader() {
  const [scrolled, setScrolled] = React.useState(false)
  const [mobileOpen, setMobileOpen] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 flex items-center justify-center transition-all duration-500",
        scrolled ? "py-2" : "py-4"
      )}
    >
      <nav
        className={cn(
          "mx-4 flex w-full max-w-3xl items-center justify-between rounded-full border px-4 py-1.5 transition-all duration-500",
          scrolled
            ? "border-border/60 bg-background/70 shadow-lg shadow-black/[0.03] backdrop-blur-xl dark:bg-background/50 dark:shadow-white/[0.02]"
            : "border-transparent bg-background/40 backdrop-blur-md"
        )}
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 transition-opacity hover:opacity-80"
        >
          <div className="flex size-7 items-center justify-center rounded-lg bg-primary">
            <Icon
              icon="mdi:code-braces"
              className="size-4 text-primary-foreground"
            />
          </div>
          <span className="text-sm font-bold tracking-tight">
            {siteConfig.name}
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden items-center gap-0.5 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }),
                "rounded-full text-muted-foreground transition-colors hover:text-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-2 md:flex">
          <Link
            href="#"
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              "rounded-full text-muted-foreground hover:text-foreground"
            )}
          >
            Sign in
          </Link>
          <Link
            href="#"
            className={cn(
              buttonVariants({ size: "sm" }),
              "rounded-full px-4"
            )}
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon-sm"
              className="rounded-full md:hidden"
              aria-label="Open navigation menu"
            >
              <Icon icon="mdi:menu" className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 p-0">
            <SheetHeader className="border-b border-border px-6 py-5">
              <SheetTitle className="flex items-center gap-2 text-left">
                <div className="flex size-7 items-center justify-center rounded-lg bg-primary">
                  <Icon
                    icon="mdi:code-braces"
                    className="size-4 text-primary-foreground"
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
                  style={{ animationDelay: `${i * 50}ms`, animationFillMode: "both" }}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="mt-auto flex flex-col gap-2 border-t border-border px-4 py-4">
              <Link
                href="#"
                onClick={() => setMobileOpen(false)}
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "w-full rounded-lg justify-center"
                )}
              >
                Sign in
              </Link>
              <Link
                href="#"
                onClick={() => setMobileOpen(false)}
                className={cn(
                  buttonVariants(),
                  "w-full rounded-lg justify-center"
                )}
              >
                Get Started
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}
