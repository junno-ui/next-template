import { SiteHeader } from "@/components/layout/site-header"
import { HeroSection } from "@/components/marketing/hero-section"
import { ThemeCustomizer } from "@/components/theme"

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
      </main>
      <div className="fixed bottom-5 right-5 z-50">
        <ThemeCustomizer />
      </div>
    </div>
  )
}
