"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes"

// ---------------------------------------------------------------------------
// 1. Config types & context  (replaces hooks/use-config)
// ---------------------------------------------------------------------------

export type ThemeConfig = {
  style: "default" | "new-york"
  theme: string
  radius: number
  fontHeading: string
  fontSans: string
  menuAccent: "default" | "colored"
}

const defaultConfig: ThemeConfig = {
  style: "default",
  theme: "neutral",
  radius: 0.5,
  fontHeading: "font-sans",
  fontSans: "font-sans",
  menuAccent: "default",
}

type ConfigContextValue = [ThemeConfig, React.Dispatch<React.SetStateAction<ThemeConfig>>]

const ConfigContext = React.createContext<ConfigContextValue | undefined>(undefined)

export function useConfig() {
  const ctx = React.useContext(ConfigContext)
  if (!ctx) throw new Error("useConfig must be used within <ThemeProvider>")
  return ctx
}

// ---------------------------------------------------------------------------
// 2. Unified provider  (merges ConfigProvider + next-themes + hotkey)
// ---------------------------------------------------------------------------

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [config, setConfig] = React.useState<ThemeConfig>(defaultConfig)
  const [mounted, setMounted] = React.useState(false)

  // Hydrate from localStorage once
  React.useEffect(() => {
    try {
      const stored = localStorage.getItem("theme-config")
      if (stored) setConfig(JSON.parse(stored))
    } catch {
      /* noop */
    }
    setMounted(true)
  }, [])

  // Persist on change
  React.useEffect(() => {
    if (mounted) localStorage.setItem("theme-config", JSON.stringify(config))
  }, [config, mounted])

  return (
    <ConfigContext.Provider value={[config, setConfig]}>
      <NextThemesProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <ThemeHotkey />
        {children}
      </NextThemesProvider>
    </ConfigContext.Provider>
  )
}

// ---------------------------------------------------------------------------
// 3. Hotkey helper (press "d" to toggle dark/light)
// ---------------------------------------------------------------------------

function ThemeHotkey() {
  const { resolvedTheme, setTheme } = useTheme()

  React.useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.defaultPrevented || e.repeat) return
      if (e.metaKey || e.ctrlKey || e.altKey) return
      if (e.key.toLowerCase() !== "d") return

      const t = e.target
      if (
        t instanceof HTMLElement &&
        (t.isContentEditable ||
          t.tagName === "INPUT" ||
          t.tagName === "TEXTAREA" ||
          t.tagName === "SELECT")
      )
        return

      setTheme(resolvedTheme === "dark" ? "light" : "dark")
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [resolvedTheme, setTheme])

  return null
}
