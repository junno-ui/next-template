import Link from "next/link"
import SiteHeader from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icon } from "@iconify/react"
import { ThemeCustomizer } from "@/components/theme"

/* -------------------------------------------------------------------------- */
/*  Blog post data (static mock — replace with CMS / MDX later)               */
/* -------------------------------------------------------------------------- */
const posts = [
  {
    slug: "marketing-automation-2025",
    title: "The Future of Marketing Automation in 2025",
    excerpt:
      "Discover how AI-powered automation is reshaping the way teams plan, execute, and measure their marketing campaigns.",
    date: "Apr 20, 2025",
    readTime: "8 min read",
    category: "Automation",
    featured: true,
  },
  {
    slug: "data-driven-decisions",
    title: "Making Data-Driven Decisions That Actually Work",
    excerpt:
      "Learn the framework top marketing teams use to turn raw analytics into actionable growth strategies.",
    date: "Apr 15, 2025",
    readTime: "6 min read",
    category: "Analytics",
    featured: false,
  },
  {
    slug: "email-campaign-optimization",
    title: "Email Campaign Optimization: A Complete Guide",
    excerpt:
      "From subject lines to send times — master every lever that drives open rates and conversions.",
    date: "Apr 10, 2025",
    readTime: "10 min read",
    category: "Email",
    featured: false,
  },
  {
    slug: "customer-segmentation-playbook",
    title: "The Customer Segmentation Playbook",
    excerpt:
      "How to build precise audience segments that increase relevance, engagement, and lifetime value.",
    date: "Apr 5, 2025",
    readTime: "7 min read",
    category: "Strategy",
    featured: false,
  },
  {
    slug: "performance-metrics-that-matter",
    title: "Performance Metrics That Actually Matter",
    excerpt:
      "Stop tracking vanity metrics. Focus on the KPIs that correlate directly with revenue growth.",
    date: "Mar 28, 2025",
    readTime: "5 min read",
    category: "Analytics",
    featured: false,
  },
  {
    slug: "multi-channel-marketing",
    title: "Building a Multi-Channel Marketing Engine",
    excerpt:
      "Coordinate campaigns across email, social, ads, and content for a unified brand experience.",
    date: "Mar 22, 2025",
    readTime: "9 min read",
    category: "Strategy",
    featured: false,
  },
]

export default function BlogListPage() {
  const featured = posts.find((p) => p.featured)
  const rest = posts.filter((p) => !p.featured)

  return (
    <div className="relative flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1 pt-28 pb-16">
        <div className="mx-auto max-w-5xl px-6">
          {/* Page header */}
          <div className="mb-14">
            <p className="mb-2 text-xs font-medium tracking-widest text-primary uppercase">
              Blog
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Insights & Resources
            </h1>
            <p className="mt-3 max-w-lg text-sm text-muted-foreground">
              Actionable guides, industry trends, and product updates to help
              you grow your marketing game.
            </p>
          </div>

          {/* Featured post */}
          {featured && (
            <Link
              href={`/blog/${featured.slug}`}
              className="group mb-12 block overflow-hidden rounded-2xl border border-border/20 bg-card/40 transition-all duration-300 hover:border-border/40 hover:bg-card/70"
            >
              <div className="flex flex-col md:flex-row">
                {/* Placeholder image */}
                <div className="relative h-52 overflow-hidden bg-gradient-to-br from-primary/10 via-chart-2/5 to-transparent md:h-auto md:w-2/5">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon
                      icon="mdi:newspaper-variant-outline"
                      className="size-16 text-primary/20"
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="rounded-full bg-primary/10 px-3 py-0.5 text-[11px] font-medium text-primary">
                      {featured.category}
                    </span>
                    <span className="text-xs text-muted-foreground/50">
                      {featured.date}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-foreground transition-colors group-hover:text-primary sm:text-2xl">
                    {featured.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {featured.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-1.5 text-xs font-medium text-primary">
                    Read article
                    <Icon
                      icon="mdi:arrow-right"
                      className="size-3.5 transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* Post grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border/20 bg-card/40 transition-all duration-300 hover:border-border/40 hover:bg-card/70"
              >
                {/* Placeholder image */}
                <div className="relative flex h-36 items-center justify-center bg-gradient-to-br from-primary/[0.06] via-transparent to-chart-2/[0.04]">
                  <Icon
                    icon="mdi:text-box-outline"
                    className="size-10 text-primary/15"
                  />
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-medium text-primary">
                      {post.category}
                    </span>
                    <span className="text-[10px] text-muted-foreground/40">
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-foreground transition-colors group-hover:text-primary">
                    {post.title}
                  </h3>
                  <p className="mt-1.5 flex-1 text-xs leading-relaxed text-muted-foreground/70">
                    {post.excerpt}
                  </p>
                  <p className="mt-3 text-[11px] text-muted-foreground/40">
                    {post.date}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
      <div className="fixed right-5 bottom-5 z-50">
        <ThemeCustomizer />
      </div>
    </div>
  )
}
