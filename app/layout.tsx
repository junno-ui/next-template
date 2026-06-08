import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

import { cn } from "@/lib/utils"
import { ThemeProvider, ThemeStyles } from "@/components/theme"
import { SmoothScrollProvider } from "@/components/layout/smooth-scroll-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import { ToastProvider } from "@/components/ui/toast"
import { siteConfig } from "@/config/site"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Clario - Free SaaS Landing Page Template by Junno UI",
    template: "%s | Clario",
  },
  description:
    "Clario is a free premium SaaS landing page template created by Junno UI, built with Next.js, shadcn/ui, polished typography, toast feedback, scroll motion, and theme-ready sections.",
  keywords: [
    "Next.js",
    "SaaS",
    "free template",
    "landing page",
    "Junno UI",
    "Clario",
  ],
  authors: [{ name: "Junno UI" }],
  openGraph: {
    title: "Clario - Free SaaS Landing Page Template by Junno UI",
    description:
      "Launch a refined SaaS site with polished UX, dark and light themes, toast feedback, scroll motion, and stronger trust signals. Free from Junno UI.",
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: "Clario",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clario - Free SaaS Landing Page Template by Junno UI",
    description:
      "A free, refined launch-ready UX for modern SaaS products.",
  },
  robots: {
    index: true,
    follow: true,
  },
  appleWebApp: {
    title: "Clario",
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "font-sans antialiased",
        geist.variable,
        geistMono.variable
      )}
    >
      <body suppressHydrationWarning>
        <ThemeProvider>
          <ThemeStyles />
          <ToastProvider>
            <TooltipProvider>
              <SmoothScrollProvider>{children}</SmoothScrollProvider>
            </TooltipProvider>
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
