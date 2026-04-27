"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Icon } from "@iconify/react"

import { AuthPopover } from "@/components/layout/auth-popover"
import { BrandMark } from "@/components/layout/brand-logo"
import { ThemeCustomizer, ThemeModeToggle } from "@/components/theme"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

const landingNavItems = siteConfig.mainNav

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/"

  if (href.startsWith("#")) {
    return false
  }

  return pathname.startsWith(href)
}

export default function SiteHeader() {
  const [scrolled, setScrolled] = React.useState(false)
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [bannerDismissed, setBannerDismissed] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })

    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      {!bannerDismissed && (
        <div className="fixed inset-x-0 top-0 z-[60] border-b border-border/45 bg-background/92 text-foreground shadow-sm backdrop-blur-2xl dark:border-white/10 dark:bg-background/86">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 py-3 sm:px-6">
            <div className="flex min-w-0 items-center gap-3 sm:gap-4">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/20">
                <Icon icon="solar:rocket-bold-duotone" className="size-5" />
              </span>
              <p className="min-w-0 truncate text-sm font-medium">
                <span className="font-bold">Clario template gratis.</span> Claim
                di Junno UI untuk mulai lebih cepat.
              </p>
              <Button
                asChild
                variant="secondary"
                size="sm"
                className="hidden h-8 rounded-full px-4 text-xs font-bold shadow-sm sm:inline-flex"
              >
                <a
                  href={siteConfig.templateUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Claim free
                </a>
              </Button>
            </div>

            <div className="flex shrink-0 items-center gap-2">
              <Button
                asChild
                variant="secondary"
                size="sm"
                className="h-8 rounded-full px-3 text-xs font-bold shadow-sm sm:hidden"
              >
                <a
                  href={siteConfig.templateUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  View template
                  <Icon
                    icon="solar:arrow-right-up-linear"
                    className="size-3.5"
                  />
                </a>
              </Button>

              <Button
                type="button"
                variant="ghost"
                size="icon-sm"
                onClick={() => setBannerDismissed(true)}
                className="size-8 rounded-full text-muted-foreground hover:bg-muted/70 hover:text-foreground"
                aria-label="Dismiss free template banner"
              >
                <Icon icon="solar:close-circle-linear" className="size-4" />
              </Button>
            </div>
          </div>
        </div>
      )}

      <header
        className={cn(
          "pointer-events-none fixed inset-x-0 z-50 flex justify-center px-4 sm:px-6",
          bannerDismissed ? "top-0 pt-4" : "top-[4rem] pt-3"
        )}
      >
        <nav
          className={cn(
            "pointer-events-auto relative flex w-full max-w-6xl items-center justify-between gap-4 rounded-full px-3 py-2 transition-all duration-500",
            "before:pointer-events-none before:absolute before:inset-x-8 before:-bottom-px before:h-px before:bg-gradient-to-r before:from-transparent before:via-primary/45 before:to-transparent before:opacity-0 before:transition-opacity before:duration-500",
            scrolled
              ? "bg-background/88 shadow-2xl ring-1 shadow-black/[0.08] ring-border/35 backdrop-blur-2xl before:opacity-100 dark:shadow-black/30"
              : "bg-background/50 shadow-lg ring-1 shadow-black/[0.03] ring-white/15 backdrop-blur-xl dark:ring-white/10"
          )}
        >
          {/* Brand */}
          <Link
            href="#home"
            aria-label={`${siteConfig.name} home`}
            className="group/logo rounded-full px-1.5 py-1 transition-all duration-300 hover:bg-muted/45"
          >
            <BrandMark />
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center rounded-full bg-muted/20 p-1 ring-1 ring-border/15 backdrop-blur-xl lg:flex">
            {landingNavItems.map((item) => {
              const active = isActivePath(pathname, item.href)

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "group relative inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[13px] font-medium transition-all duration-300",
                    active
                      ? "bg-background text-foreground shadow-sm ring-1 ring-border/20"
                      : "text-muted-foreground hover:bg-background/60 hover:text-foreground"
                  )}
                >
                  <span
                    className={cn(
                      "size-1.5 rounded-full bg-primary opacity-0 transition-all duration-300",
                      active ? "opacity-100" : "group-hover:opacity-100"
                    )}
                  />
                  {item.title}
                </Link>
              )
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <ThemeModeToggle className="hidden lg:inline-flex" />
            <ThemeCustomizer className="hidden lg:inline-flex" />
            <AuthPopover className="hidden lg:inline-flex" />

            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon-sm"
                  className={cn(
                    "rounded-full bg-background/70 shadow-sm ring-1 ring-white/15 backdrop-blur-xl transition-all duration-300 hover:bg-muted/60 hover:ring-primary/25 lg:hidden",
                    mobileOpen && "bg-primary/10 text-primary ring-primary/25"
                  )}
                  aria-label={
                    mobileOpen
                      ? "Close navigation menu"
                      : "Open navigation menu"
                  }
                >
                  <Icon
                    icon={
                      mobileOpen
                        ? "solar:close-circle-bold-duotone"
                        : "solar:hamburger-menu-bold-duotone"
                    }
                    className="size-[19px]"
                  />
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="flex w-[88vw] max-w-[380px] flex-col border-border/20 bg-background/96 p-0 backdrop-blur-2xl"
              >
                <SheetHeader className="border-b border-border/10 px-5 py-4">
                  <SheetTitle asChild>
                    <div className="flex items-center justify-between">
                      <Link
                        href="#home"
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-3"
                      >
                        <BrandMark size="8" />
                        <div className="text-left">
                          <p className="text-sm font-semibold text-foreground">
                            {siteConfig.name}
                          </p>
                          <p className="mt-0.5 text-xs font-medium text-muted-foreground">
                            Product clarity system
                          </p>
                        </div>
                      </Link>
                    </div>
                  </SheetTitle>
                </SheetHeader>

                <div className="custom-scrollbar flex-1 overflow-y-auto p-3">
                  <div className="mb-3 rounded-[1.5rem] bg-muted/25 p-4 ring-1 ring-border/15">
                    <div className="flex items-center gap-2 text-xs font-semibold text-primary">
                      <span className="relative flex size-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/70" />
                        <span className="relative inline-flex size-2 rounded-full bg-primary" />
                      </span>
                      Navigate
                    </div>

                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      Explore Clario, switch the theme, and review pricing,
                      stories, and support.
                    </p>
                  </div>

                  <div className="mb-3 grid grid-cols-2 gap-2">
                    <ThemeModeToggle className="size-auto h-11 w-full rounded-[1.25rem]" />
                    <ThemeCustomizer className="size-auto h-11 w-full rounded-[1.25rem]" />
                  </div>

                  <div className="grid gap-2">
                    {landingNavItems.map((item, index) => {
                      const active = isActivePath(pathname, item.href)

                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className={cn(
                            "group flex animate-in items-center justify-between rounded-[1.25rem] px-4 py-3 text-sm font-medium transition-all duration-300 fade-in slide-in-from-right-2",
                            active
                              ? "bg-primary/10 text-primary ring-1 ring-primary/20"
                              : "bg-muted/20 text-foreground ring-1 ring-border/10 hover:bg-background/70 hover:ring-primary/20"
                          )}
                          style={{
                            animationDelay: `${index * 45}ms`,
                            animationFillMode: "both",
                          }}
                        >
                          <span className="flex items-center gap-3">
                            <span
                              className={cn(
                                "size-1.5 rounded-full bg-primary opacity-0 transition-opacity duration-300",
                                active
                                  ? "opacity-100"
                                  : "group-hover:opacity-100"
                              )}
                            />
                            {item.title}
                          </span>

                          <Icon
                            icon="solar:arrow-right-linear"
                            className="size-4 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                          />
                        </Link>
                      )
                    })}
                  </div>
                </div>

                <div className="mt-auto border-t border-border/10 p-3">
                  <div className="mb-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px] text-muted-foreground">
                    <span>No credit card</span>
                    <span className="size-1 rounded-full bg-muted-foreground/30" />
                    <span>Fast setup</span>
                    <span className="size-1 rounded-full bg-muted-foreground/30" />
                    <span>Launch faster</span>
                  </div>

                  <AuthPopover className="flex h-auto w-full justify-between rounded-full bg-primary px-4 py-2.5 text-primary-foreground shadow-xl ring-0 shadow-primary/20 transition-all duration-300 hover:bg-primary/90" />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>
    </>
  )
}
