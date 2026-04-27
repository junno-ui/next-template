"use client"

import * as React from "react"
import { Check, Moon, Paintbrush, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { useConfig } from "@/components/theme/theme-provider"
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
import { themeColors } from "@/config/themes"
import { cn } from "@/lib/utils"

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
  const { resolvedTheme: mode } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => setMounted(true), [])

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
              aria-label="Customize theme color"
            >
              <Paintbrush className="size-4" />
            </Button>
          </PopoverTrigger>
        </TooltipTrigger>
        <TooltipContent side="left" className="text-xs">
          Theme color
        </TooltipContent>
      </Tooltip>

      <PopoverContent
        side="top"
        align="end"
        sideOffset={12}
        className="w-80 overflow-hidden rounded-2xl border-border/30 bg-popover/95 p-0 shadow-xl backdrop-blur-xl"
      >
        <div className="flex items-center justify-between border-b border-border/15 px-4 py-3">
          <div>
            <p className="text-sm font-semibold text-foreground">Theme</p>
            <p className="text-[11px] text-muted-foreground/60">
              Choose a color preset
            </p>
          </div>
          <button
            onClick={() => setConfig((prev) => ({ ...prev, theme: "ember" }))}
            className="text-[11px] text-muted-foreground/50 transition-colors hover:text-foreground"
          >
            Reset
          </button>
        </div>

        <div className="custom-scrollbar max-h-[360px] overflow-y-auto px-4 py-4">
          <div className="grid grid-cols-2 gap-2">
            {themeColors.map((theme) => {
              const active = config.theme === theme.name
              const color =
                mounted && mode === "dark"
                  ? theme.activeColor.dark
                  : theme.activeColor.light

              return (
                <Tooltip key={theme.name}>
                  <TooltipTrigger asChild>
                    <button
                      onClick={() =>
                        setConfig((prev) => ({ ...prev, theme: theme.name }))
                      }
                      className={cn(
                        "flex items-center gap-2 rounded-2xl border px-3 py-2.5 text-left text-xs font-semibold transition-all",
                        active
                          ? "border-primary bg-primary/10 text-primary shadow-lg shadow-primary/10"
                          : "border-border/20 text-muted-foreground hover:border-border/40 hover:bg-muted/30 hover:text-foreground"
                      )}
                      aria-label={`Use ${theme.label} theme`}
                    >
                      <span
                        className="flex size-7 shrink-0 items-center justify-center rounded-full ring-1 ring-border/30"
                        style={{ background: color }}
                      >
                        {active && (
                          <Check
                            className={cn(
                              "size-3.5 drop-shadow-sm",
                              theme.name === "vercel" &&
                                mounted &&
                                mode === "dark"
                                ? "text-black"
                                : "text-white"
                            )}
                          />
                        )}
                      </span>
                      <span>{theme.label}</span>
                    </button>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="text-xs">
                    {theme.label}
                  </TooltipContent>
                </Tooltip>
              )
            })}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
