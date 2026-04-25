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
    default: "Clario - Premium Next.js SaaS Template",
    template: "%s | Clario",
  },
  description:
    "Clario is a premium Next.js template for SaaS teams that want a polished launch, elegant dark and light themes, and clearer product storytelling.",
  keywords: ["Next.js", "SaaS", "template", "marketing", "product", "Clario"],
  authors: [{ name: "JunZ" }],
  openGraph: {
    title: "Clario - Premium Next.js SaaS Template",
    description:
      "Launch a refined SaaS site with polished UX, dark and light themes, and stronger trust signals.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clario - Premium Next.js SaaS Template",
    description: "Refined launch-ready UX for modern SaaS products.",
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
