import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Icon } from "@/components/ui/app-icon"

import SiteHeader from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { buttonVariants } from "@/components/ui/button"
import { blogPostMap, blogPosts, getRelatedPosts } from "@/content/blog-posts"
import { cn } from "@/lib/utils"

export const dynamicParams = false

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = blogPostMap[slug]

  if (!post) {
    return {}
  }

  return {
    title: `${post.title} | Clario Journal`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = blogPostMap[slug]

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(slug)

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden text-foreground">
      <div
        className="pointer-events-none fixed inset-0 -z-20"
        aria-hidden="true"
      >
        <div className="bg-radial-flares absolute inset-0 opacity-95" />
        <div className="bg-noise-weave absolute inset-0 opacity-35" />
      </div>
      <SiteHeader />
      <main className="flex-1 pt-28 pb-18">
        <section className="relative">
          <div
            className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
            aria-hidden="true"
          >
            <div className="bg-luxury-grid absolute inset-0 opacity-60" />
          </div>

          <article className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-4xl">
              <div className="mb-7 flex flex-wrap items-center gap-2 text-[11px] font-medium tracking-[0.16em] text-muted-foreground/55 uppercase">
                <Link
                  href="/"
                  className="transition-colors hover:text-foreground"
                >
                  Home
                </Link>
                <Icon icon="solar:alt-arrow-right-outline" className="size-3" />
                <Link
                  href="/blog"
                  className="transition-colors hover:text-foreground"
                >
                  Blog
                </Link>
                <Icon icon="solar:alt-arrow-right-outline" className="size-3" />
                <span className="text-muted-foreground/72">
                  {post.category}
                </span>
              </div>

              <header className="surface-panel overflow-hidden rounded-[2.1rem] border border-white/50 p-7 shadow-2xl shadow-black/[0.08] sm:p-8 dark:border-white/10">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top_right,oklch(0.76_0.15_175_/_14%),transparent_42%)]" />
                <div className="relative">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-primary uppercase">
                      {post.category}
                    </span>
                    <span className="rounded-full border border-border/20 bg-background/65 px-3 py-1 text-[11px] font-medium tracking-[0.16em] text-muted-foreground/65 uppercase">
                      {post.badge}
                    </span>
                  </div>

                  <h1 className="mt-5 text-4xl leading-[1.04] font-bold tracking-tight sm:text-5xl">
                    {post.title}
                  </h1>
                  <p className="mt-4 max-w-3xl text-[15px] leading-7 text-muted-foreground/72 sm:text-base">
                    {post.excerpt}
                  </p>

                  <div className="mt-8 flex flex-col gap-5 border-t border-border/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="size-12 ring-transparent">
                        <AvatarFallback>{post.author.avatar}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-semibold text-foreground">
                          {post.author.name}
                        </p>
                        <p className="text-xs text-muted-foreground/58">
                          {post.author.role}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-[11px] font-medium tracking-[0.16em] text-muted-foreground/58 uppercase">
                      <span>{post.date}</span>
                      <span className="size-1 rounded-full bg-border" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </header>
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_300px]">
              <div className="surface-panel rounded-[2rem] border border-white/50 p-7 shadow-xl shadow-black/[0.05] sm:p-8 dark:border-white/10">
                <div className="space-y-6">
                  {post.content.map((paragraph, index) => (
                    <p
                      key={paragraph}
                      className={cn(
                        "text-[15px] leading-8 text-muted-foreground/80 sm:text-[16px]",
                        index === 0 &&
                          "text-[17px] text-foreground/92 sm:text-[18px]"
                      )}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="mt-10 rounded-[1.7rem] border border-border/15 bg-muted/22 p-5">
                  <p className="text-[11px] font-semibold tracking-[0.2em] text-primary uppercase">
                    Key Takeaways
                  </p>
                  <div className="mt-4 space-y-3">
                    {post.highlights.map((highlight, index) => (
                      <div key={highlight} className="flex items-start gap-3">
                        <div className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-[11px] font-semibold text-primary">
                          {index + 1}
                        </div>
                        <p className="text-sm leading-6 text-muted-foreground/76">
                          {highlight}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-10 flex flex-col gap-4 border-t border-border/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
                  <Link
                    href="/blog"
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      "rounded-full border-border/30 px-6 hover:bg-muted/30"
                    )}
                  >
                    <Icon
                      icon="solar:arrow-left-linear"
                      className="mr-1.5 size-4"
                    />
                    All Articles
                  </Link>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-muted-foreground/48">
                      Share:
                    </span>
                    {[
                      { icon: "mdi:twitter", label: "Twitter" },
                      { icon: "mdi:linkedin", label: "LinkedIn" },
                      { icon: "mdi:link-variant", label: "Copy link" },
                    ].map((item) => (
                      <button
                        key={item.label}
                        aria-label={item.label}
                        className="flex size-9 items-center justify-center rounded-full border border-border/15 bg-background/65 text-muted-foreground/45 transition-all hover:border-border/35 hover:text-foreground"
                      >
                        <Icon icon={item.icon} className="size-4" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <aside className="space-y-5">
                <div className="surface-panel rounded-[1.8rem] p-5">
                  <p className="text-[11px] font-semibold tracking-[0.2em] text-primary uppercase">
                    Reading Notes
                  </p>
                  <div className="mt-4 space-y-3">
                    <div className="rounded-[1.3rem] border border-border/15 bg-background/55 p-4">
                      <p className="text-[11px] font-medium tracking-[0.16em] text-muted-foreground/55 uppercase">
                        Category
                      </p>
                      <p className="mt-2 text-sm font-semibold text-foreground">
                        {post.category}
                      </p>
                    </div>
                    <div className="rounded-[1.3rem] border border-border/15 bg-background/55 p-4">
                      <p className="text-[11px] font-medium tracking-[0.16em] text-muted-foreground/55 uppercase">
                        Read time
                      </p>
                      <p className="mt-2 text-sm font-semibold text-foreground">
                        {post.readTime}
                      </p>
                    </div>
                    <div className="rounded-[1.3rem] border border-border/15 bg-background/55 p-4">
                      <p className="text-[11px] font-medium tracking-[0.16em] text-muted-foreground/55 uppercase">
                        Published
                      </p>
                      <p className="mt-2 text-sm font-semibold text-foreground">
                        {post.date}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="surface-panel rounded-[1.8rem] p-5">
                  <p className="text-[11px] font-semibold tracking-[0.2em] text-primary uppercase">
                    Related Articles
                  </p>
                  <div className="mt-4 space-y-3">
                    {relatedPosts.map((relatedPost) => (
                      <Link
                        key={relatedPost.slug}
                        href={`/blog/${relatedPost.slug}`}
                        className="group block rounded-[1.3rem] border border-border/15 bg-background/55 p-4 transition-all hover:-translate-y-0.5 hover:border-border/35 hover:bg-background/80"
                      >
                        <p className="text-[11px] font-medium tracking-[0.16em] text-muted-foreground/55 uppercase">
                          {relatedPost.category}
                        </p>
                        <p className="mt-2 text-sm leading-6 font-semibold text-foreground transition-colors group-hover:text-primary">
                          {relatedPost.title}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </article>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
