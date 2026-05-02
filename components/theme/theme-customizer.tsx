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
        "size-10 rounded-full border-border/40 bg-background/88 shadow-lg shadow-black/8 backdrop-blur-xl hover:border-primary/25 hover:shadow-xl hover:shadow-primary/10",
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
                "size-10 rounded-full border-border/40 bg-background/88 shadow-lg shadow-black/8 backdrop-blur-xl hover:border-primary/25 hover:shadow-xl hover:shadow-primary/10",
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
        className="w-auto rounded-2xl border-border/30 bg-popover/96 p-3 shadow-2xl shadow-black/10 backdrop-blur-xl dark:shadow-black/35"
      >
        <div className="grid grid-cols-5 gap-2">
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
                    type="button"
                    onClick={() =>
                      setConfig((prev) => ({ ...prev, theme: theme.name }))
                    }
                    className={cn(
                      "relative flex size-9 items-center justify-center rounded-full transition-all",
                      "hover:scale-110 focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none",
                      active &&
                        "ring-2 ring-primary ring-offset-2 ring-offset-background"
                    )}
                    aria-label={`Use ${theme.label} theme`}
                  >
                    <span
                      className="flex size-7 items-center justify-center rounded-full shadow-sm ring-1 ring-black/10 dark:ring-white/15"
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
                  </button>
                </TooltipTrigger>

                <TooltipContent side="top" className="text-xs">
                  {theme.label}
                </TooltipContent>
              </Tooltip>
            )
          })}
        </div>
      </PopoverContent>
    </Popover>
  )
}
