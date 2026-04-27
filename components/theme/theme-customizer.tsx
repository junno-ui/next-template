"use client"

import * as React from "react"
import { Check, Moon, Paintbrush, Sparkles, Sun } from "lucide-react"
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
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

const styleOptions: Array<{
  key: ThemeConfig["style"]
  label: string
  description: string
}> = [
  {
    key: "glass",
    label: "Glass",
    description: "Soft depth and layered translucency",
  },
  {
    key: "solid",
    label: "Solid",
    description: "Cleaner cards with stronger fill",
  },
  {
    key: "contrast",
    label: "Contrast",
    description: "Sharper borders and tighter contrast",
  },
]

export function ThemeModeToggle({ className }: { className?: string }) {
  const { resolvedTheme: mode, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => setMounted(true), [])

  const isDark = mounted && mode === "dark"

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      className={cn(
        "size-9 rounded-full border-border/40 bg-background/80 shadow-lg shadow-black/10 backdrop-blur-xl transition-all hover:shadow-xl hover:shadow-primary/10",
        className
      )}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </Button>
  )
}

export function ThemeCustomizer({ className }: { className?: string }) {
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
              className={cn(
                "size-9 rounded-full border-border/40 bg-background/80 shadow-lg shadow-black/10 backdrop-blur-xl transition-all hover:shadow-xl hover:shadow-primary/10",
                className
              )}
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
                theme: "sapphire",
                radius: 1,
                style: "glass",
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
                            active && "scale-110 ring-2 ring-primary"
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
                {[0.5, 0.85, 1, 1.25, 1.5].map((v) => (
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

            <OptionGroup label="Style">
              <div className="grid gap-2">
                {styleOptions.map((option) => {
                  const active = config.style === option.key

                  return (
                    <button
                      key={option.key}
                      onClick={() => set({ style: option.key })}
                      className={cn(
                        "flex items-center justify-between rounded-xl border px-3 py-2.5 text-left transition-all",
                        active
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border/20 text-muted-foreground hover:border-border/40 hover:bg-muted/30 hover:text-foreground"
                      )}
                    >
                      <div>
                        <p className="text-sm font-semibold">{option.label}</p>
                        <p className="text-[11px] leading-5 opacity-75">
                          {option.description}
                        </p>
                      </div>
                      <Sparkles className="size-4 shrink-0" />
                    </button>
                  )
                })}
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
