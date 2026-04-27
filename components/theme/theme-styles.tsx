"use client"

import * as React from "react"
import { themeColors } from "@/config/themes"
import { useConfig } from "@/components/theme/theme-provider"

/**
 * Injects a <style> block that overrides :root / .dark CSS variables
 * based on the user's current theme configuration.
 */
export function ThemeStyles() {
  const [config] = useConfig()

  const css = React.useMemo(() => {
    const preset = themeColors.find((t) => t.name === config.theme)
    if (!preset) return null

    const toVars = (vars: Record<string, string>) =>
      Object.entries(vars)
        .map(([k, v]) => `${k}: ${v};`)
        .join("\n        ")

    const stylePresets = {
      glass: {
        surfaceLight:
          "linear-gradient(180deg, oklch(1 0 0 / 88%), oklch(1 0 0 / 70%))",
        surfaceDark:
          "linear-gradient(180deg, oklch(0.19 0.014 242 / 86%), oklch(0.16 0.014 242 / 70%))",
        cardLight: "oklch(1 0 0 / 70%)",
        cardDark: "oklch(0.18 0.014 242 / 50%)",
        borderLight: "oklch(1 0 0 / 55%)",
        borderDark: "oklch(1 0 0 / 10%)",
        shadowLight: "0 24px 70px oklch(0.12 0.02 240 / 10%)",
        shadowDark: "0 30px 80px oklch(0 0 0 / 35%)",
        blur: "22px",
      },
      solid: {
        surfaceLight:
          "linear-gradient(180deg, oklch(0.99 0.004 200), oklch(0.97 0.008 220))",
        surfaceDark:
          "linear-gradient(180deg, oklch(0.2 0.016 240 / 96%), oklch(0.16 0.016 242 / 94%))",
        cardLight: "oklch(0.985 0.006 220 / 96%)",
        cardDark: "oklch(0.18 0.014 242 / 88%)",
        borderLight: "oklch(0.82 0.02 225 / 24%)",
        borderDark: "oklch(1 0 0 / 14%)",
        shadowLight: "0 24px 60px oklch(0.12 0.02 240 / 8%)",
        shadowDark: "0 26px 70px oklch(0 0 0 / 28%)",
        blur: "10px",
      },
      contrast: {
        surfaceLight:
          "linear-gradient(180deg, oklch(1 0 0 / 96%), oklch(0.985 0.004 220 / 94%))",
        surfaceDark:
          "linear-gradient(180deg, oklch(0.16 0.014 242 / 98%), oklch(0.12 0.016 246 / 96%))",
        cardLight: "oklch(1 0 0 / 92%)",
        cardDark: "oklch(0.15 0.014 242 / 94%)",
        borderLight: "oklch(0.78 0.02 225 / 28%)",
        borderDark: "oklch(1 0 0 / 18%)",
        shadowLight: "0 22px 55px oklch(0.12 0.02 240 / 12%)",
        shadowDark: "0 24px 64px oklch(0 0 0 / 40%)",
        blur: "6px",
      },
    } as const

    const currentStyle = stylePresets[config.style]

    return `
      :root {
        ${toVars(preset.cssVars.light)}
        --radius: ${config.radius}rem;
        --surface-bg: ${currentStyle.surfaceLight};
        --surface-card: ${currentStyle.cardLight};
        --surface-border: ${currentStyle.borderLight};
        --surface-shadow: ${currentStyle.shadowLight};
        --surface-blur: ${currentStyle.blur};
      }
      .dark {
        ${toVars(preset.cssVars.dark)}
        --radius: ${config.radius}rem;
        --surface-bg: ${currentStyle.surfaceDark};
        --surface-card: ${currentStyle.cardDark};
        --surface-border: ${currentStyle.borderDark};
        --surface-shadow: ${currentStyle.shadowDark};
        --surface-blur: ${currentStyle.blur};
      }
    `
  }, [config])

  if (!css) return null
  return <style dangerouslySetInnerHTML={{ __html: css }} />
}
