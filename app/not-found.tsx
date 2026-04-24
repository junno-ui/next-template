"use client"

import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Icon } from "@iconify/react"
import * as React from "react"

export default function NotFound() {
  const [mousePos, setMousePos] = React.useState({ x: 50, y: 50 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    })
  }

  return (
    <div
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-6"
      onMouseMove={handleMouseMove}
    >
      {/* Interactive glow that follows cursor */}
      <div
        className="pointer-events-none absolute h-[500px] w-[500px] rounded-full bg-primary/[0.06] blur-[120px] transition-all duration-500 ease-out"
        style={{
          left: `${mousePos.x}%`,
          top: `${mousePos.y}%`,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(to right, currentColor 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary/20"
            style={{
              width: `${4 + i * 2}px`,
              height: `${4 + i * 2}px`,
              left: `${15 + i * 14}%`,
              top: `${20 + (i % 3) * 25}%`,
              animation: `float ${3 + i * 0.5}s ease-in-out infinite alternate`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Giant 404 */}
        <h1 className="select-none text-[10rem] font-black leading-none tracking-tighter text-foreground/[0.04] sm:text-[14rem]">
          404
        </h1>

        {/* Overlaying content */}
        <div className="-mt-20 flex flex-col items-center">
          <div className="mb-6 flex size-16 items-center justify-center rounded-2xl bg-primary/10 ring-1 ring-primary/20">
            <Icon icon="mdi:compass-off-outline" className="size-8 text-primary" />
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Page not found
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved. Let&apos;s get you back on track.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <Link
              href="/"
              className={cn(
                buttonVariants({ size: "lg" }),
                "rounded-full px-8 shadow-lg shadow-primary/25"
              )}
            >
              <Icon icon="mdi:home-outline" className="mr-1.5 size-4" />
              Back to Home
            </Link>
            <Link
              href="/blog"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "rounded-full border-border/30 px-8 hover:bg-muted/30"
              )}
            >
              Browse Blog
            </Link>
          </div>

          {/* Quick links */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            {[
              { label: "Features", href: "/#features", icon: "mdi:star-four-points" },
              { label: "Pricing", href: "/#pricing", icon: "mdi:tag-outline" },
              { label: "FAQ", href: "/#faq", icon: "mdi:help-circle-outline" },
              { label: "Contact", href: "/#contact", icon: "mdi:email-outline" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="flex items-center gap-1.5 rounded-full border border-border/15 bg-card/30 px-4 py-2 text-xs text-muted-foreground transition-all hover:border-border/40 hover:bg-card/60 hover:text-foreground"
              >
                <Icon icon={link.icon} className="size-3.5" />
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* CSS animation keyframes */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes float {
              from { transform: translateY(0px) scale(1); }
              to { transform: translateY(-20px) scale(1.3); }
            }
          `,
        }}
      />
    </div>
  )
}
