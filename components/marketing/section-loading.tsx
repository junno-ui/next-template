export function SectionLoading({ label }: { label: string }) {
  return (
    <section className="relative isolate overflow-hidden py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-[2rem] bg-background/60 p-6 text-center ring-1 ring-border/30 backdrop-blur-xl dark:bg-white/2.5 dark:ring-white/10">
          <div className="mx-auto mb-4 h-2 w-20 animate-pulse rounded-full bg-primary/25" />
          <p className="text-xs font-semibold tracking-[0.22em] text-muted-foreground uppercase">
            Loading {label}
          </p>
        </div>
      </div>
    </section>
  )
}
