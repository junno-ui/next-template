import Image from "next/image"

import { cn } from "@/lib/utils"

type JunnoMarkProps = {
  className?: string
  markClassName?: string
}

export function JunnoMark({ className, markClassName }: JunnoMarkProps) {
  return (
    <span
      className={cn(
        "relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-black ring-1 ring-border/30 dark:ring-white/20",
        className
      )}
      aria-hidden="true"
    >
      <Image
        src="/images/logo.webp"
        alt=""
        fill
        sizes="48px"
        className={cn("object-cover", markClassName)}
      />
    </span>
  )
}
