import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

import { cn } from "@/lib/utils"
import { ThemeProvider, ThemeStyles } from "@/components/theme"
import { TooltipProvider } from "@/components/ui/tooltip"
import { siteConfig } from "@/config/site"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Clario - Free Premium SaaS Landing Page Template",
    template: "%s | Clario",
  },
  description:
    "Clario is a free premium SaaS landing page template from Junno UI, built with Next.js, shadcn/ui, polished dark and light themes, and clearer product storytelling.",
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
    title: "Clario - Free Premium SaaS Landing Page Template",
    description:
      "Launch a refined SaaS site with polished UX, dark and light themes, and stronger trust signals. Free from Junno UI.",
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: "Clario",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clario - Free Premium SaaS Landing Page Template",
    description: "A free, refined launch-ready UX for modern SaaS products.",
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
      className={cn(
        "font-sans antialiased",
        geist.variable,
        geistMono.variable
      )}
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
