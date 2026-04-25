import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

import { cn } from "@/lib/utils"
import { ThemeProvider, ThemeStyles } from "@/components/theme"
import { TooltipProvider } from "@/components/ui/tooltip"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: {
    default: "NexusUI — The Modern Next.js SaaS Template",
    template: "%s | NexusUI",
  },
  description:
    "Ship faster. Look better. Grow smarter. The modern Next.js template for SaaS startups — built with beautiful UI, powerful analytics, and everything you need to launch.",
  keywords: ["Next.js", "SaaS", "template", "marketing", "analytics", "UI kit"],
  authors: [{ name: "JunZ" }],
  openGraph: {
    title: "NexusUI — The Modern Next.js SaaS Template",
    description:
      "Ship faster. Look better. Grow smarter. The modern Next.js template for SaaS startups.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "NexusUI — The Modern Next.js SaaS Template",
    description: "Ship faster. Look better. Grow smarter.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased font-sans", geist.variable, geistMono.variable)}
    >
      <body>
        <ThemeProvider>
          <ThemeStyles />
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
