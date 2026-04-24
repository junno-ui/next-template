import CenteredPill from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import Hero6 from "@/components/marketing/hero-section"
import { ThemeCustomizer } from "@/components/theme"

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background text-foreground">
      <CenteredPill />
      <main className="flex-1">
        <Hero6 />
      </main>
      <SiteFooter />
      <div className="fixed right-5 bottom-5 z-50">
        <ThemeCustomizer />
      </div>
    </div>
  )
}
