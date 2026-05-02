"use client"

import * as React from "react"

export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode
}) {
  React.useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null
      const link = target?.closest<HTMLAnchorElement>('a[href^="#"]')

      if (!link) return

      const hash = link.getAttribute("href")

      if (!hash || hash === "#") return

      const section = document.querySelector<HTMLElement>(hash)

      if (!section) return

      event.preventDefault()

      const top =
        section.getBoundingClientRect().top + window.scrollY - 104

      window.history.pushState(null, "", hash)
      window.scrollTo({
        top,
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
      })
    }

    document.addEventListener("click", onClick)

    return () => document.removeEventListener("click", onClick)
  }, [])

  return children
}
