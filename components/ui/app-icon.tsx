"use client"

import * as React from "react"
import { Icon as IconifyIcon, type IconProps } from "@iconify/react"

import { cn } from "@/lib/utils"

type AppIconProps = IconProps & {
  fallbackClassName?: string
}

export function Icon({
  icon,
  className,
  fallbackClassName,
  style,
  ...props
}: AppIconProps) {
  const [loaded, setLoaded] = React.useState(false)

  return (
    <span
      className={cn(
        "relative inline-flex shrink-0 items-center justify-center align-middle",
        className
      )}
      style={style}
      aria-hidden={props["aria-hidden"] ?? true}
    >
      <span
        className={cn(
          "absolute inset-[22%] rounded-[3px] bg-current opacity-35 transition-opacity duration-200",
          loaded && "opacity-0",
          fallbackClassName
        )}
      />
      <IconifyIcon
        {...props}
        icon={icon}
        className={cn(
          "absolute inset-0 size-full transition-opacity duration-200",
          loaded ? "opacity-100" : "opacity-0"
        )}
        onLoad={() => {
          setLoaded(true)
        }}
      />
    </span>
  )
}
