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

    // Optional: colored sidebar accent
    let sidebar = ""
    if (config.menuAccent === "colored") {
      sidebar = `
      :root {
        --sidebar-background: ${preset.cssVars.light["--primary"]};
        --sidebar-foreground: ${preset.cssVars.light["--primary-foreground"]};
        --sidebar-primary: ${preset.cssVars.light["--primary-foreground"]};
        --sidebar-primary-foreground: ${preset.cssVars.light["--primary"]};
        --sidebar-accent: hsl(0 0% 0% / 0.1);
        --sidebar-accent-foreground: ${preset.cssVars.light["--primary-foreground"]};
        --sidebar-border: hsl(0 0% 0% / 0.1);
      }
      .dark {
        --sidebar-background: ${preset.cssVars.dark["--primary"]};
        --sidebar-foreground: ${preset.cssVars.dark["--primary-foreground"]};
        --sidebar-primary: ${preset.cssVars.dark["--primary-foreground"]};
        --sidebar-primary-foreground: ${preset.cssVars.dark["--primary"]};
        --sidebar-accent: hsl(0 0% 0% / 0.1);
        --sidebar-accent-foreground: ${preset.cssVars.dark["--primary-foreground"]};
        --sidebar-border: hsl(0 0% 100% / 0.1);
      }`
    }

    return `
      :root {
        ${toVars(preset.cssVars.light)}
        --radius: ${config.radius}rem;
        --font-heading: var(--${config.fontHeading});
      }
      .dark {
        ${toVars(preset.cssVars.dark)}
        --radius: ${config.radius}rem;
        --font-heading: var(--${config.fontHeading});
      }
      ${sidebar}
    `
  }, [config])

  if (!css) return null
  return <style dangerouslySetInnerHTML={{ __html: css }} />
}
