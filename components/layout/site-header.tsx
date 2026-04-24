"use client"

import * as React from "react"
import Link from "next/link"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full backdrop-blur-xl transition-all duration-300",
        isScrolled
          ? "border-b border-border/70 bg-background/85 shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center gap-2">
            <span className="inline-flex size-6 items-center justify-center rounded-full bg-primary/15 text-primary">
              <Sparkles className="size-3.5" />
            </span>
            <span className="inline-block font-heading text-base font-semibold tracking-tight">
              {siteConfig.name}
            </span>
          </Link>
          <nav className="hidden md:flex gap-6">
            {siteConfig.mainNav.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button className="rounded-full px-6">
            Contact
          </Button>
        </div>
      </div>
    </header>
  )
}
