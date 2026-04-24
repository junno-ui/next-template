"use client"

import * as React from "react"
import { Check, Moon, Paintbrush, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"
import { useConfig, type ThemeConfig } from "@/components/theme/theme-provider"
import { themeColors } from "@/config/themes"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

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
    <Popover>
      <Tooltip>
        <TooltipTrigger asChild>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="size-9 rounded-full border-border/40 bg-background/80 shadow-lg shadow-black/10 backdrop-blur-xl transition-all hover:shadow-xl hover:shadow-primary/10"
              aria-label="Customize theme"
            >
              <Paintbrush className="size-4" />
            </Button>
          </PopoverTrigger>
        </TooltipTrigger>
        <TooltipContent side="left" className="text-xs">
          Customize
        </TooltipContent>
      </Tooltip>

      <PopoverContent
        side="top"
        align="end"
        sideOffset={12}
        className="w-80 overflow-hidden rounded-xl border-border/30 bg-popover/95 p-0 shadow-xl backdrop-blur-xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border/15 px-4 py-3">
          <div>
            <p className="text-sm font-semibold text-foreground">Theme</p>
            <p className="text-[11px] text-muted-foreground/60">
              Customize colors, radius & mode
            </p>
          </div>
          <button
            onClick={() =>
              set({
                theme: "neutral",
                radius: 0.5,
                fontHeading: "font-sans",
                menuAccent: "default",
              })
            }
            className="text-[11px] text-muted-foreground/50 transition-colors hover:text-foreground"
          >
            Reset
          </button>
        </div>

        {/* Scrollable body */}
        <div className="custom-scrollbar max-h-[360px] overflow-y-auto px-4 py-3">
          <div className="flex flex-col gap-5">
            {/* ── Color ─────────────────────────────────────── */}
            <OptionGroup label="Color">
              <div className="flex flex-wrap gap-2">
                {themeColors.map((t) => {
                  const active = config.theme === t.name
                  const color =
                    mounted && mode === "dark"
                      ? t.activeColor.dark
                      : t.activeColor.light

                  return (
                    <Tooltip key={t.name}>
                      <TooltipTrigger asChild>
                        <button
                          onClick={() => set({ theme: t.name })}
                          className={cn(
                            "flex size-8 items-center justify-center rounded-full ring-1 ring-border/30 transition-all hover:scale-110 hover:ring-border/60",
                            active && "ring-2 ring-primary scale-110"
                          )}
                          style={{ background: color }}
                          aria-label={t.label}
                        >
                          {active && (
                            <Check className="size-3.5 text-white drop-shadow-sm" />
                          )}
                        </button>
                      </TooltipTrigger>
                      <TooltipContent side="top" className="text-xs">
                        {t.label}
                      </TooltipContent>
                    </Tooltip>
                  )
                })}
              </div>
            </OptionGroup>

            {/* ── Radius ────────────────────────────────────── */}
            <OptionGroup label="Radius">
              <div className="flex gap-1.5">
                {[0, 0.3, 0.5, 0.75, 1.0].map((v) => (
                  <button
                    key={v}
                    onClick={() => set({ radius: v })}
                    className={cn(
                      "flex h-8 flex-1 items-center justify-center rounded-lg border text-xs font-medium transition-all",
                      config.radius === v
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border/20 text-muted-foreground hover:border-border/40 hover:text-foreground"
                    )}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </OptionGroup>

            {/* ── Mode ──────────────────────────────────────── */}
            <OptionGroup label="Mode">
              <div className="flex gap-1.5">
                {[
                  { key: "light", icon: Sun, label: "Light" },
                  { key: "dark", icon: Moon, label: "Dark" },
                ].map(({ key, icon: IconComp, label }) => (
                  <button
                    key={key}
                    onClick={() => setMode(key)}
                    className={cn(
                      "flex h-8 flex-1 items-center justify-center gap-1.5 rounded-lg border text-xs font-medium transition-all",
                      mode === key
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border/20 text-muted-foreground hover:border-border/40 hover:text-foreground"
                    )}
                  >
                    <IconComp className="size-3.5" />
                    {label}
                  </button>
                ))}
              </div>
            </OptionGroup>

            {/* ── Heading Font ──────────────────────────────── */}
            <OptionGroup label="Heading Font">
              <div className="flex gap-1.5">
                {[
                  { key: "font-sans", label: "Sans" },
                  { key: "font-mono", label: "Mono" },
                ].map(({ key, label }) => (
                  <button
                    key={key}
                    onClick={() => set({ fontHeading: key })}
                    className={cn(
                      "flex h-8 flex-1 items-center justify-center rounded-lg border text-xs font-medium transition-all",
                      config.fontHeading === key
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border/20 text-muted-foreground hover:border-border/40 hover:text-foreground"
                    )}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </OptionGroup>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

// ---------------------------------------------------------------------------
// Internal helpers
// ---------------------------------------------------------------------------

function OptionGroup({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="space-y-2">
      <p className="text-[11px] font-medium tracking-wide text-muted-foreground/60 uppercase">
        {label}
      </p>
      {children}
    </div>
  )
}
