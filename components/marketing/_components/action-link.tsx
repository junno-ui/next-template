"use client"

import * as React from "react"

import { useToast } from "@/components/ui/toast"

type ActionLinkProps = React.ComponentProps<"a"> & {
  toastTitle: string
  toastDescription?: string
}

export function ActionLink({
  children,
  onClick,
  toastTitle,
  toastDescription,
  ...props
}: ActionLinkProps) {
  const { toast } = useToast()

  return (
    <a
      {...props}
      onClick={(event) => {
        toast({
          title: toastTitle,
          description: toastDescription,
          tone: "info",
        })
        onClick?.(event)
      }}
    >
      {children}
    </a>
  )
}
