import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { PremiumPageTemplate } from "@/components/marketing/premium-page-template"
import { marketingPagePaths, marketingPages } from "@/config/marketing-pages"

type PageParams = {
  slug: string[]
}

export const dynamicParams = false

export function generateStaticParams(): PageParams[] {
  return marketingPagePaths.map((path) => ({
    slug: path.split("/"),
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>
}): Promise<Metadata> {
  const { slug } = await params
  const page = marketingPages[slug.join("/")]

  if (!page) {
    return {}
  }

  return {
    title: `${page.eyebrow} | NexusUI`,
    description: page.description,
  }
}

export default async function MarketingCatchAllPage({
  params,
}: {
  params: Promise<PageParams>
}) {
  const { slug } = await params
  const page = marketingPages[slug.join("/")]

  if (!page) {
    notFound()
  }

  return <PremiumPageTemplate page={page} />
}
