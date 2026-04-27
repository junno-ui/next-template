import SiteHeader from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { TemplateFloatingButton } from "@/components/layout/template-floating-button"
import HeroSection from "@/components/marketing/hero-section"
import LogosSection from "@/components/marketing/logos-section"
import StatisticsSection from "@/components/marketing/statistics-section"
import FeaturesSection from "@/components/marketing/features-section"
import PricingSection from "@/components/marketing/pricing-section"
import TestimonialsSection from "@/components/marketing/testimonials-section"
import FaqSection from "@/components/marketing/faq-section"
import NewsletterSection from "@/components/marketing/newsletter-section"
import CtaSection from "@/components/marketing/cta-section"

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden text-foreground">
      <div
        className="pointer-events-none fixed inset-0 -z-20"
        aria-hidden="true"
      >
        <div className="bg-radial-flares absolute inset-0 opacity-90" />
        <div className="bg-noise-weave absolute inset-0 opacity-40" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,oklch(1_0_0/35%)_82%,oklch(1_0_0/82%))] dark:bg-[linear-gradient(to_bottom,transparent,oklch(0.13_0.01_240/30%)_82%,oklch(0.13_0.01_240/76%))]" />
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
      <TemplateFloatingButton />
    </div>
  )
}
