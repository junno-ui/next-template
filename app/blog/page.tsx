import Link from "next/link"
import { Icon } from "@/components/ui/app-icon"

import SiteHeader from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { buttonVariants } from "@/components/ui/button"
import { blogPosts, getFeaturedPost } from "@/content/blog-posts"
import { cn } from "@/lib/utils"

export default function BlogListPage() {
  const featured = getFeaturedPost()
  const rest = blogPosts.filter((post) => post.slug !== featured.slug)
  const categories = [...new Set(blogPosts.map((post) => post.category))]

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

          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div>
                <div className="surface-panel mb-6 inline-flex rounded-full px-4 py-2 text-[11px] font-semibold tracking-[0.22em] text-primary uppercase">
                  Editorial Journal
                </div>
                <h1 className="max-w-4xl text-4xl leading-[1.02] font-bold tracking-tight sm:text-5xl lg:text-[4.2rem]">
                  Insightful writing for teams building sharper growth systems.
                </h1>
                <p className="mt-5 max-w-2xl text-[15px] leading-7 text-muted-foreground sm:text-base">
                  Explore strategy, analytics, lifecycle thinking, and operating
                  patterns through a more refined editorial experience.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href={`/blog/${featured.slug}`}
                    className={cn(
                      buttonVariants({ size: "lg" }),
                      "rounded-full px-7 text-sm font-semibold shadow-lg shadow-primary/25"
                    )}
                  >
                    Read featured story
                    <Icon icon="solar:arrow-right-bold" className="size-4" />
                  </Link>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <span
                        key={category}
                        className="rounded-full border border-border/25 bg-background/65 px-3 py-2 text-[11px] font-medium tracking-[0.16em] text-muted-foreground/72 uppercase"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="surface-panel rounded-[2rem] border border-white/50 p-6 shadow-2xl shadow-black/[0.08] dark:border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[11px] font-semibold tracking-[0.2em] text-muted-foreground/55 uppercase">
                      This week
                    </p>
                    <p className="mt-1 text-xl font-semibold">
                      {blogPosts.length} editorial resources
                    </p>
                  </div>
                  <div className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon
                      icon="solar:notebook-bookmark-bold-duotone"
                      className="size-5"
                    />
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  {blogPosts.slice(0, 3).map((post) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="group flex items-start gap-3 rounded-[1.4rem] border border-border/15 bg-background/55 p-4 transition-all hover:-translate-y-0.5 hover:border-border/35 hover:bg-background/80"
                    >
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Icon
                          icon="solar:document-text-bold-duotone"
                          className="size-4"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] font-medium tracking-[0.18em] text-muted-foreground/55 uppercase">
                          {post.category} · {post.readTime}
                        </p>
                        <p className="mt-1 text-sm font-semibold text-foreground transition-colors group-hover:text-primary">
                          {post.title}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href={`/blog/${featured.slug}`}
              className="group surface-panel mt-12 block overflow-hidden rounded-[2.1rem] border border-white/50 p-0 shadow-2xl shadow-black/[0.08] transition-all duration-300 hover:-translate-y-1 hover:shadow-black/[0.12] dark:border-white/10"
            >
              <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
                <div className="relative min-h-[320px] overflow-hidden px-7 py-7 sm:px-8 sm:py-8">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,oklch(0.78_0.14_175_/_20%),transparent_34%),linear-gradient(145deg,oklch(0.99_0.002_190),oklch(0.96_0.01_230))] dark:bg-[radial-gradient(circle_at_top_left,oklch(0.7_0.14_175_/_18%),transparent_34%),linear-gradient(145deg,oklch(0.17_0.014_240),oklch(0.12_0.016_246))]" />
                  <div className="bg-noise-weave absolute inset-0 opacity-30" />
                  <div className="relative flex h-full flex-col justify-between">
                    <div className="flex items-center justify-between gap-3">
                      <span className="rounded-full border border-white/50 bg-background/75 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-primary uppercase dark:border-white/10">
                        Featured story
                      </span>
                      <span className="text-[11px] font-medium tracking-[0.18em] text-muted-foreground/65 uppercase">
                        {featured.badge}
                      </span>
                    </div>

                    <div className="mt-12 max-w-md">
                      <p className="text-[11px] font-semibold tracking-[0.18em] text-muted-foreground/60 uppercase">
                        {featured.category} · {featured.date}
                      </p>
                      <h2 className="mt-3 text-3xl leading-tight font-bold tracking-tight sm:text-[2.35rem]">
                        {featured.title}
                      </h2>
                      <p className="mt-4 text-sm leading-7 text-muted-foreground/72 sm:text-[15px]">
                        {featured.excerpt}
                      </p>
                    </div>

                    <div className="mt-8 flex items-center gap-3">
                      <Avatar className="size-11 ring-transparent">
                        <AvatarFallback>
                          {featured.author.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-semibold text-foreground">
                          {featured.author.name}
                        </p>
                        <p className="text-xs text-muted-foreground/60">
                          {featured.author.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-border/10 px-7 py-7 lg:border-t-0 lg:border-l lg:px-8 lg:py-8">
                  <div className="flex items-center justify-between">
                    <p className="text-[11px] font-semibold tracking-[0.18em] text-primary uppercase">
                      Why read it
                    </p>
                    <div className="flex items-center gap-1 text-xs font-medium text-primary">
                      Read article
                      <Icon
                        icon="solar:arrow-right-linear"
                        className="size-3.5 transition-transform group-hover:translate-x-1"
                      />
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    {featured.highlights.map((highlight, index) => (
                      <div
                        key={highlight}
                        className="rounded-[1.5rem] border border-border/15 bg-background/55 p-4"
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-xs font-semibold text-primary">
                            0{index + 1}
                          </div>
                          <p className="text-sm leading-6 text-muted-foreground/75">
                            {highlight}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-12">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.22em] text-primary uppercase">
                Latest Articles
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight">
                Editorial notes with stronger signal and less noise
              </h2>
            </div>
            <p className="hidden max-w-md text-sm leading-6 text-muted-foreground/72 lg:block">
              Each article is framed for readability, clean scanning, and a more
              thoughtful premium reading experience.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group surface-panel overflow-hidden rounded-[1.8rem] p-0 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-42 overflow-hidden border-b border-border/10 px-5 py-5">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,oklch(0.76_0.14_175_/_15%),transparent_30%),linear-gradient(140deg,transparent,oklch(0.72_0.13_255_/_10%))]" />
                  <div className="bg-noise-weave absolute inset-0 opacity-25" />
                  <div className="relative flex h-full flex-col justify-between">
                    <div className="flex items-center justify-between gap-3">
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-[11px] font-medium tracking-[0.16em] text-primary uppercase">
                        {post.category}
                      </span>
                      <span className="text-[11px] font-medium tracking-[0.16em] text-muted-foreground/60 uppercase">
                        {post.readTime}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground/45">
                      <Icon
                        icon="solar:document-text-bold-duotone"
                        className="size-7"
                      />
                      <span className="text-[11px] font-medium tracking-[0.16em] uppercase">
                        {post.badge}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex h-full flex-col p-5">
                  <p className="text-[11px] font-medium tracking-[0.16em] text-muted-foreground/55 uppercase">
                    {post.date}
                  </p>
                  <h3 className="mt-2 text-lg leading-snug font-semibold text-foreground transition-colors group-hover:text-primary">
                    {post.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground/72">
                    {post.excerpt}
                  </p>

                  <div className="mt-5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="size-9 ring-transparent">
                        <AvatarFallback>{post.author.avatar}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          {post.author.name}
                        </p>
                        <p className="text-xs text-muted-foreground/55">
                          {post.author.role}
                        </p>
                      </div>
                    </div>

                    <div className="flex size-9 items-center justify-center rounded-full border border-border/15 text-muted-foreground/50 transition-all group-hover:border-primary/25 group-hover:text-primary">
                      <Icon
                        icon="solar:arrow-right-linear"
                        className="size-4"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
