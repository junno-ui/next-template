import { Icon } from "@/components/ui/app-icon"

import { ScrollCard, Stagger } from "@/components/marketing/_components/reveal"
import {
  SectionHeader,
  SectionShell,
} from "@/components/marketing/_components/section-shell"
import { statistics } from "@/content/landing-page"
import { cn } from "@/lib/utils"

function StatCard({
  stat,
}: {
  stat: (typeof statistics)[number]
}) {
  return (
    <ScrollCard
      className={cn(
        "group relative overflow-hidden rounded-[1.75rem] border border-border/40 bg-background/72 p-6 text-center shadow-2xl shadow-black/10 backdrop-blur-xl transition-all duration-500 dark:border-white/10 dark:bg-white/2.5",
        "hover:border-primary/25 hover:bg-background/90 hover:shadow-primary/10 dark:hover:bg-white/4.5",
        stat.hover
      )}
    >
      {/* soft hover wash */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 bg-linear-to-br via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100",
          stat.accent
        )}
      />

      {/* top shine */}
      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-white/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* corner glow */}
      <div className="pointer-events-none absolute -top-16 -right-16 size-40 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative mx-auto mb-5 flex size-13 items-center justify-center rounded-2xl border border-border/40 bg-background/80 text-primary transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:border-primary/25 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/20 dark:border-white/10 dark:bg-white/[0.035]">
        <Icon icon={stat.icon} className="size-6" />
      </div>

      <p className="relative text-4xl font-bold text-foreground dark:text-white">
        {stat.value}
      </p>

      <p className="relative mt-2 text-sm font-semibold text-foreground/85 dark:text-white/85">
        {stat.label}
      </p>

      <p className="relative mx-auto mt-3 max-w-56 text-sm leading-6 text-muted-foreground dark:text-white/50">
        {stat.description}
      </p>
    </ScrollCard>
  )
}

export default function StatisticsSection() {
  return (
    <SectionShell background="dense">
      <SectionHeader
        eyebrow="By the numbers"
        title={
          <>
            Proof points that{" "}
            <span className="relative bg-linear-to-r from-primary via-foreground to-primary bg-clip-text text-transparent">
              build confidence.
            </span>
          </>
        }
        description="Use this section to turn traction, reliability, and customer love into quick trust signals visitors can scan in seconds."
      />

      <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {statistics.map((stat) => (
          <StatCard key={stat.label} stat={stat} />
        ))}
      </Stagger>

      <div className="mx-auto mt-8 max-w-4xl rounded-[1.5rem] border border-border/40 bg-background/72 px-5 py-4 text-center backdrop-blur-xl dark:border-white/10 dark:bg-white/2.5">
        <p className="text-sm leading-6 text-muted-foreground dark:text-white/52">
          Swap these metrics with your real traction, customer outcomes, or
          launch milestones to make the page feel immediately credible.
        </p>
      </div>
    </SectionShell>
  )
}
