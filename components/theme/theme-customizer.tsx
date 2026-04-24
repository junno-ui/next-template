"use client"

import * as React from "react"
import { Check, Moon, Paintbrush, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"
import { useConfig, type ThemeConfig } from "@/components/theme/theme-provider"
import { themeColors } from "@/config/themes"
import { Button } from "@/components/ui/button"
import {
  Sheet, SheetContent, SheetTrigger,
  SheetHeader, SheetTitle, SheetDescription,
} from "@/components/ui/sheet"
import { Label } from "@/components/ui/label"

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

export function ThemeCustomizer() {
  const [config, setConfig] = useConfig()
  const { resolvedTheme: mode, setTheme: setMode } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => setMounted(true), [])

  const set = (patch: Partial<ThemeConfig>) =>
    setConfig((prev) => ({ ...prev, ...patch }))

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="gap-2 rounded-full border-border/70 bg-card/90 px-4 text-foreground shadow-lg backdrop-blur-md hover:bg-accent hover:text-accent-foreground"
        >
          <Paintbrush className="h-4 w-4" />
          Customize
        </Button>
      </SheetTrigger>

      <SheetContent className="w-[400px] overflow-y-auto border-border bg-popover text-popover-foreground sm:w-[540px]">
        <SheetHeader>
          <SheetTitle>Theme Customizer</SheetTitle>
          <SheetDescription>
            Pick a color, radius, font, and sidebar style.
          </SheetDescription>
        </SheetHeader>

        <div className="flex flex-col gap-6 py-4">
          {/* ── Base Color ─────────────────────────────────────── */}
          <OptionGroup label="Base Color">
            <div className="grid grid-cols-2 gap-2">
              {themeColors.map((t) => {
                const active = config.theme === t.name
                return (
                  <Button
                    key={t.name}
                    variant="outline"
                    className={cn("justify-start gap-2", active && "border-2 border-primary")}
                    onClick={() => set({ theme: t.name })}
                  >
                    {mounted && (
                      <span
                        className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full"
                        style={{
                          background:
                            mode === "dark" ? t.activeColor.dark : t.activeColor.light,
                        }}
                      >
                        {active && <Check className="h-3 w-3 text-white" />}
                      </span>
                    )}
                    {t.label}
                  </Button>
                )
              })}
            </div>
          </OptionGroup>

          {/* ── Radius ─────────────────────────────────────────── */}
          <OptionGroup label="Radius">
            <div className="grid grid-cols-5 gap-2">
              {[0, 0.3, 0.5, 0.75, 1.0].map((v) => (
                <Button
                  key={v}
                  variant="outline"
                  className={cn(config.radius === v && "border-2 border-primary")}
                  onClick={() => set({ radius: v })}
                >
                  {v}
                </Button>
              ))}
            </div>
          </OptionGroup>

          {/* ── Mode ───────────────────────────────────────────── */}
          <OptionGroup label="Mode">
            <div className="grid grid-cols-2 gap-2">
              <Button
                variant="outline"
                className={cn(mode === "light" && "border-2 border-primary")}
                onClick={() => setMode("light")}
              >
                <Sun className="mr-2 h-4 w-4" /> Light
              </Button>
              <Button
                variant="outline"
                className={cn(mode === "dark" && "border-2 border-primary")}
                onClick={() => setMode("dark")}
              >
                <Moon className="mr-2 h-4 w-4" /> Dark
              </Button>
            </div>
          </OptionGroup>

          {/* ── Heading Font ───────────────────────────────────── */}
          <OptionGroup label="Heading Font">
            <div className="grid grid-cols-2 gap-2">
              {([
                { key: "font-sans", label: "Geist Sans" },
                { key: "font-mono", label: "Geist Mono" },
              ] as const).map(({ key, label }) => (
                <Button
                  key={key}
                  variant="outline"
                  className={cn(config.fontHeading === key && "border-2 border-primary")}
                  onClick={() => set({ fontHeading: key })}
                >
                  {label}
                </Button>
              ))}
            </div>
          </OptionGroup>

          {/* ── Sidebar Accent ─────────────────────────────────── */}
          <OptionGroup label="Sidebar Accent">
            <div className="grid grid-cols-2 gap-2">
              {([
                { key: "default", label: "Default" },
                { key: "colored", label: "Colored" },
              ] as const).map(({ key, label }) => (
                <Button
                  key={key}
                  variant="outline"
                  className={cn(config.menuAccent === key && "border-2 border-primary")}
                  onClick={() => set({ menuAccent: key })}
                >
                  {label}
                </Button>
              ))}
            </div>
          </OptionGroup>
        </div>
      </SheetContent>
    </Sheet>
  )
}

// ---------------------------------------------------------------------------
// Internal helpers
// ---------------------------------------------------------------------------

function OptionGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <Label className="text-xs font-semibold uppercase text-muted-foreground">
        {label}
      </Label>
      {children}
    </div>
  )
}
