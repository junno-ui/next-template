import SiteHeader from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import HeroSection from "@/components/marketing/hero-section"
import LogosSection from "@/components/marketing/logos-section"
import StatisticsSection from "@/components/marketing/statistics-section"
import FeaturesSection from "@/components/marketing/features-section"
import PricingSection from "@/components/marketing/pricing-section"
import TestimonialsSection from "@/components/marketing/testimonials-section"
import FaqSection from "@/components/marketing/faq-section"
import NewsletterSection from "@/components/marketing/newsletter-section"
import CtaSection from "@/components/marketing/cta-section"
import { ThemeCustomizer } from "@/components/theme"

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-20" aria-hidden="true">
        <div className="absolute inset-0 bg-radial-flares opacity-90" />
        <div className="absolute inset-0 bg-noise-weave opacity-40" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,oklch(1_0_0_/_35%)_82%,oklch(1_0_0_/_82%))] dark:bg-[linear-gradient(to_bottom,transparent,oklch(0.13_0.01_240_/_30%)_82%,oklch(0.13_0.01_240_/_76%))]" />
      </div>
      <SiteHeader />
      <main className="relative flex-1">
        <HeroSection />
        <LogosSection />
        <StatisticsSection />
        <FeaturesSection />
        <PricingSection />
        <TestimonialsSection />
        <FaqSection />
        <NewsletterSection />
        <CtaSection />
      </main>
      <SiteFooter />
      <div className="fixed right-5 bottom-5 z-50">
        <ThemeCustomizer />
      </div>
    </div>
  )
}
