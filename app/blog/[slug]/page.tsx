import Link from "next/link"
import SiteHeader from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icon } from "@iconify/react"
import { ThemeCustomizer } from "@/components/theme"

/* -------------------------------------------------------------------------- */
/*  Static post data (replace with MDX / CMS fetch later)                     */
/* -------------------------------------------------------------------------- */
const posts: Record<
  string,
  {
    title: string
    date: string
    readTime: string
    category: string
    author: { name: string; avatar: string }
    content: string[]
  }
> = {
  "marketing-automation-2025": {
    title: "The Future of Marketing Automation in 2025",
    date: "Apr 20, 2025",
    readTime: "8 min read",
    category: "Automation",
    author: { name: "Sarah Chen", avatar: "SC" },
    content: [
      "Marketing automation has evolved far beyond simple email drip campaigns. In 2025, AI-powered platforms are enabling teams to orchestrate complex, multi-channel journeys that adapt in real time to user behavior.",
      "The key shift is from rule-based automation to predictive automation. Instead of 'if user does X, send Y,' modern platforms analyze patterns across thousands of signals to determine the optimal next action — whether that's an email, a push notification, or an in-app message.",
      "One of the most significant developments is the rise of generative AI in campaign creation. Marketing teams can now describe their goals in natural language, and the platform generates complete campaign assets — copy, visuals, and audience segments — ready for review and deployment.",
      "However, automation doesn't mean removing the human element. The most successful teams use automation to handle repetitive tasks while focusing their creative energy on strategy, brand storytelling, and building genuine customer relationships.",
      "As we look ahead, the convergence of automation, AI, and real-time data will make it possible for even small teams to deliver the kind of personalized experiences that were previously only achievable by enterprise organizations with massive budgets.",
    ],
  },
  "data-driven-decisions": {
    title: "Making Data-Driven Decisions That Actually Work",
    date: "Apr 15, 2025",
    readTime: "6 min read",
    category: "Analytics",
    author: { name: "Marcus Johnson", avatar: "MJ" },
    content: [
      "Every marketing team claims to be 'data-driven,' but few actually translate their analytics into meaningful action. The gap isn't in the tools — it's in the framework for turning numbers into decisions.",
      "The first step is defining what success looks like before you run a campaign, not after. Set specific, measurable goals tied to business outcomes — revenue, retention, or lifetime value — rather than vanity metrics like impressions or page views.",
      "Next, build a decision-making cadence. The best teams review key metrics weekly, run deeper analysis monthly, and do strategic reviews quarterly. Consistency matters more than frequency.",
      "Perhaps most importantly, create a culture where it's safe to let data challenge assumptions. The worst outcome of data-driven marketing isn't making a wrong call — it's ignoring the data because it contradicts what leadership wants to hear.",
      "Finally, invest in data literacy across your team. Analytics shouldn't be siloed in a single analyst's hands. When everyone understands how to read dashboards and interpret trends, the entire organization makes better decisions.",
    ],
  },
}

/* Fallback for unknown slugs */
const fallbackPost = {
  title: "Coming Soon",
  date: "2025",
  readTime: "5 min read",
  category: "General",
  author: { name: "Team", avatar: "TM" },
  content: [
    "This article is currently being written. Check back soon for the full content!",
    "In the meantime, explore our other articles for insights on marketing automation, analytics, and growth strategies.",
  ],
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = posts[slug] || { ...fallbackPost, title: slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) }

  return (
    <div className="relative flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1 pt-28 pb-16">
        <article className="mx-auto max-w-3xl px-6">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-2 text-xs text-muted-foreground/50">
            <Link href="/" className="transition-colors hover:text-foreground">
              Home
            </Link>
            <Icon icon="mdi:chevron-right" className="size-3" />
            <Link
              href="/blog"
              className="transition-colors hover:text-foreground"
            >
              Blog
            </Link>
            <Icon icon="mdi:chevron-right" className="size-3" />
            <span className="text-muted-foreground">{post.category}</span>
          </div>

          {/* Article header */}
          <header className="mb-10">
            <span className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-0.5 text-[11px] font-medium text-primary">
              {post.category}
            </span>
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
              {post.title}
            </h1>

            <div className="mt-5 flex items-center gap-4 border-b border-border/10 pb-6">
              <div className="flex items-center gap-2.5">
                <div className="flex size-8 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                  {post.author.avatar}
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {post.author.name}
                  </p>
                  <p className="text-[11px] text-muted-foreground/50">
                    {post.date} · {post.readTime}
                  </p>
                </div>
              </div>
            </div>
          </header>

          {/* Article body */}
          <div className="flex flex-col gap-5">
            {post.content.map((paragraph, i) => (
              <p
                key={i}
                className="text-sm leading-[1.8] text-muted-foreground/80"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Bottom nav */}
          <div className="mt-14 flex flex-col items-center gap-4 border-t border-border/10 pt-8 sm:flex-row sm:justify-between">
            <Link
              href="/blog"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "rounded-full border-border/30 px-6 hover:bg-muted/30"
              )}
            >
              <Icon icon="mdi:arrow-left" className="mr-1.5 size-4" />
              All Articles
            </Link>
            <div className="flex items-center gap-3">
              <span className="text-xs text-muted-foreground/40">Share:</span>
              {[
                { icon: "mdi:twitter", label: "Twitter" },
                { icon: "mdi:linkedin", label: "LinkedIn" },
                { icon: "mdi:link-variant", label: "Copy link" },
              ].map((s) => (
                <button
                  key={s.label}
                  aria-label={s.label}
                  className="flex size-8 items-center justify-center rounded-full border border-border/20 text-muted-foreground/40 transition-colors hover:border-border/40 hover:text-foreground"
                >
                  <Icon icon={s.icon} className="size-4" />
                </button>
              ))}
            </div>
          </div>
        </article>
      </main>
      <SiteFooter />
      <div className="fixed right-5 bottom-5 z-50">
        <ThemeCustomizer />
      </div>
    </div>
  )
}
