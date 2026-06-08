"use client"

import * as React from "react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useToast } from "../ui/toast"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icon } from "@/components/ui/app-icon"

type TemplateFloatingButtonProps = {
  showText?: boolean
  className?: string
}

export function TemplateFloatingButton({
  showText = true,
  className,
}: TemplateFloatingButtonProps) {
  const { toast } = useToast()

  return (
    <div
      className={cn(
        "fixed right-4 bottom-4 z-50 sm:right-6 sm:bottom-6",
        className
      )}
    >
      <Popover>
        <PopoverTrigger asChild>
          <Button
            size={showText ? "lg" : "icon"}
            className={cn(
              "rounded-full shadow-lg transition-all duration-300",
              "hover:-translate-y-1",
              "active:scale-95",
              "gap-2"
            )}
            onClick={() =>
              toast({
                title: "Opening Junno UI",
                description: "The free Clario template will open in a new tab.",
              })
            }
            asChild
          >
            <Link
              href={siteConfig.templateUrl}
              target="_blank"
              aria-label="Claim free template"
            >
              <Icon
                icon="solar:download-minimalistic-bold-duotone"
                className="size-5"
              />

              {showText && <span className="hidden sm:inline">Claim free</span>}
            </Link>
          </Button>
        </PopoverTrigger>

        <PopoverContent side="top" align="end" className="w-72 rounded-xl p-4">
          <div className="space-y-2">
            <p className="text-sm font-semibold">Claim Clario for free</p>

            <p className="text-sm text-muted-foreground">
              Open Junno UI, copy the template, then customize it for your
              product.
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs text-muted-foreground">
              <Icon
                icon="solar:check-circle-bold-duotone"
                className="size-4 text-primary"
              />
              Free
              <span className="h-1 w-1 rounded-full bg-border" />
              Next.js ready
              <span className="h-1 w-1 rounded-full bg-border" />
              Themeable
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
