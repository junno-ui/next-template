import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { HeroSection } from "@/components/marketing/hero-section"
import { ThemeCustomizer } from "@/components/theme"

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
      </main>
      <SiteFooter />

      {/* Floating theme customizer */}
      <div className="fixed bottom-4 right-4 z-50">
        <ThemeCustomizer />
      </div>
    </div>
  )
}
