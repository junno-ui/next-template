import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32 bg-background flex flex-col items-center justify-center text-center">
      {/* Premium Background Glow Effect */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(var(--primary),0.15),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(var(--primary),0.1),rgba(255,255,255,0))]" />
      
      <div className="container mx-auto px-4 md:px-8 flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-1000 ease-in-out">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/50 px-3 py-1 text-sm font-medium mb-8">
          <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
          Introducing TechLoop Template
        </div>
        
        <h1 className="max-w-4xl font-heading text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          Build faster with <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
            premium components.
          </span>
        </h1>
        
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl leading-relaxed">
          Beautifully designed, highly customizable, and fully accessible React components.
          Built specifically for modern startups to convert visitors into loyal customers.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Button size="lg" className="rounded-full px-8 h-12 text-base font-medium group">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-8 h-12 text-base font-medium">
            View Components
          </Button>
        </div>
      </div>
    </section>
  )
}
