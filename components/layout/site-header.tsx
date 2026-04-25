"use client"

import * as React from "react"
import Link from "next/link"
import { Icon } from "@iconify/react"

import { AuthPopover } from "@/components/layout/auth-popover"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { BrandLogo, BrandMark } from "@/components/layout/brand-logo"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

const landingNavItems = siteConfig.mainNav

// ─── Main component ──────────────────────────────────────────────────────────

export default function SiteHeader() {
  const [scrolled, setScrolled] = React.useState(false)
  const [mobileOpen, setMobileOpen] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:px-6 pointer-events-none">
      <nav
        className={cn(
          "pointer-events-auto flex w-full max-w-6xl items-center justify-between gap-4 rounded-full px-4 py-2.5 transition-all duration-500",
          scrolled
            ? "border border-border/25 bg-background/88 shadow-xl shadow-black/[0.06] backdrop-blur-2xl dark:shadow-black/25"
            : "border border-white/20 bg-background/42 backdrop-blur-xl dark:border-white/8"
        )}
      >
        <BrandLogo />

        <div className="hidden items-center gap-1 lg:flex">
          {landingNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-[13px] font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.title}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <AuthPopover className="hidden lg:inline-flex" />

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon-sm"
                className="rounded-full border border-white/30 bg-background/65 shadow-sm backdrop-blur-xl dark:border-white/10 lg:hidden"
                aria-label="Open navigation menu"
              >
                <Icon
                  icon={mobileOpen ? "solar:close-square-bold-duotone" : "solar:hamburger-menu-bold-duotone"}
                  className="size-[18px]"
                />
              </Button>
            </SheetTrigger>

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

              <div className="flex flex-col gap-2 overflow-y-auto p-3 custom-scrollbar">
                {landingNavItems.map((item, i) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="animate-in fade-in slide-in-from-right-2 rounded-2xl border border-border/10 bg-muted/20 px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-background/60"
                    style={{ animationDelay: `${i * 40}ms`, animationFillMode: "both" }}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>

              <div className="mt-auto space-y-2 border-t border-border/10 p-3">
                <AuthPopover className="flex h-auto w-full justify-between rounded-full border border-white/40 bg-background/75 px-3 py-2.5 shadow-none dark:border-white/10" />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
