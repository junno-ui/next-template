import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-10 w-full rounded-xl border border-border/30 bg-background/70 px-3 py-2 text-sm text-foreground shadow-sm shadow-black/[0.03] transition-all outline-none placeholder:text-muted-foreground/45 focus:border-primary/35 focus:ring-4 focus:ring-primary/10 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Input }
