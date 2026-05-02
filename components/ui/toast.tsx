"use client"

import * as React from "react"
import { Toast as ToastPrimitive } from "radix-ui"

import { Icon } from "@/components/ui/app-icon"
import { cn } from "@/lib/utils"

type ToastTone = "default" | "success" | "info"

type ToastItem = {
  id: string
  title: string
  description?: string
  tone?: ToastTone
}

type ToastInput = Omit<ToastItem, "id">

type ToastContextValue = {
  toast: (input: ToastInput) => void
}

const ToastContext = React.createContext<ToastContextValue | null>(null)

const toneIcon: Record<ToastTone, string> = {
  default: "solar:bell-bold-duotone",
  success: "solar:check-circle-bold-duotone",
  info: "solar:magic-stick-3-bold-duotone",
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<ToastItem[]>([])

  const toast = React.useCallback((input: ToastInput) => {
    const id = crypto.randomUUID()

    setToasts((current) => [
      ...current.slice(-2),
      {
        id,
        tone: "default",
        ...input,
      },
    ])
  }, [])

  return (
    <ToastContext.Provider value={{ toast }}>
      <ToastPrimitive.Provider swipeDirection="right" duration={3600}>
        {children}

        {toasts.map((item) => (
          <ToastPrimitive.Root
            key={item.id}
            className={cn(
              "group pointer-events-auto relative grid w-full max-w-sm grid-cols-[auto_1fr_auto] items-start gap-3 overflow-hidden rounded-2xl bg-background/92 p-4 shadow-2xl ring-1 ring-border/50 backdrop-blur-2xl",
              "data-[state=open]:animate-in data-[state=open]:fade-in data-[state=open]:slide-in-from-right-5",
              "data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=closed]:slide-out-to-right-5",
              "dark:bg-black/72 dark:ring-white/12"
            )}
            onOpenChange={(open) => {
              if (!open) {
                setToasts((current) =>
                  current.filter((toastItem) => toastItem.id !== item.id)
                )
              }
            }}
          >
            <div
              className={cn(
                "mt-0.5 flex size-9 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15",
                item.tone === "success" &&
                  "bg-emerald-500/10 text-emerald-500 ring-emerald-500/20",
                item.tone === "info" &&
                  "bg-sky-500/10 text-sky-500 ring-sky-500/20"
              )}
            >
              <Icon icon={toneIcon[item.tone ?? "default"]} className="size-5" />
            </div>

            <div className="min-w-0">
              <ToastPrimitive.Title className="text-sm font-semibold text-foreground dark:text-white">
                {item.title}
              </ToastPrimitive.Title>
              {item.description && (
                <ToastPrimitive.Description className="mt-1 text-sm leading-5 text-muted-foreground dark:text-white/58">
                  {item.description}
                </ToastPrimitive.Description>
              )}
            </div>

            <ToastPrimitive.Close className="flex size-7 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground dark:hover:bg-white/10 dark:hover:text-white">
              <Icon icon="solar:close-circle-linear" className="size-4" />
            </ToastPrimitive.Close>
          </ToastPrimitive.Root>
        ))}

        <ToastPrimitive.Viewport className="fixed right-4 bottom-4 z-100 flex w-[calc(100vw-2rem)] max-w-sm flex-col gap-3 outline-none sm:right-6 sm:bottom-6" />
      </ToastPrimitive.Provider>
    </ToastContext.Provider>
  )
}

export function useToast() {
  const context = React.useContext(ToastContext)

  if (!context) {
    throw new Error("useToast must be used within ToastProvider")
  }

  return context
}
