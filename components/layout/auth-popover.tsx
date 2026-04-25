"use client"

import * as React from "react"
import Link from "next/link"
import { Icon } from "@iconify/react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"

type AuthTab = "login" | "register"

const authTabs: Array<{ key: AuthTab; label: string }> = [
  {
    key: "login",
    label: "Login",
  },
  {
    key: "register",
    label: "Register",
  },
]

export function AuthPopover({ className }: { className?: string }) {
  const [tab, setTab] = React.useState<AuthTab>("login")

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "group h-10 rounded-full border-white/45 bg-background/70 px-4 text-sm font-semibold text-foreground shadow-lg shadow-black/[0.04] backdrop-blur-xl transition-all duration-300 hover:border-primary/25 hover:bg-background dark:border-white/10 dark:bg-background/75",
            className
          )}
        >
          <span className="inline-flex size-7 items-center justify-center rounded-full bg-primary/12 text-primary">
            <Icon icon="solar:user-circle-bold-duotone" className="size-4" />
          </span>
          Login
          <Icon
            icon="solar:alt-arrow-down-bold"
            className="size-3.5 text-muted-foreground/55 transition-transform duration-300 group-data-[state=open]:rotate-180"
          />
        </Button>
      </PopoverTrigger>

      <PopoverContent
        align="end"
        sideOffset={14}
        className="surface-panel w-[min(92vw,360px)] overflow-hidden rounded-[1.5rem] border border-white/55 p-0 shadow-2xl shadow-black/10 dark:border-white/10"
      >
        <div className="relative">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,oklch(0.78_0.16_175_/_12%),transparent_32%)]" />

          <div className="relative border-b border-border/15 px-5 py-4">
            <PopoverHeader className="gap-1 p-0">
              <PopoverTitle className="text-base font-semibold tracking-tight">
                Welcome back
              </PopoverTitle>
              <PopoverDescription className="text-sm text-muted-foreground/72">
                Login or create your account.
              </PopoverDescription>
            </PopoverHeader>

            <div className="mt-4 grid grid-cols-2 gap-2 rounded-[1rem] border border-white/45 bg-background/55 p-1.5 dark:border-white/10">
              {authTabs.map((item) => {
                const active = tab === item.key

                return (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => setTab(item.key)}
                    className={cn(
                      "rounded-[0.85rem] px-4 py-2.5 text-center text-sm font-semibold transition-all duration-300",
                      active
                        ? "bg-foreground text-background shadow-lg shadow-black/[0.08]"
                        : "text-muted-foreground hover:bg-background/70 hover:text-foreground"
                    )}
                  >
                    {item.label}
                  </button>
                )
              })}
            </div>
          </div>

          <div className="relative p-5">
            {tab === "login" ? (
              <LoginForm onSwitchTab={() => setTab("register")} />
            ) : (
              <RegisterForm />
            )}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

function LoginForm({ onSwitchTab }: { onSwitchTab: () => void }) {
  return (
    <form className="space-y-3">
      <Field label="Email" htmlFor="auth-login-email">
        <Input
          id="auth-login-email"
          type="email"
          placeholder="hello@company.com"
          className="h-11 rounded-2xl border-white/45 bg-background/70"
        />
      </Field>
      <Field label="Password" htmlFor="auth-login-password">
        <Input
          id="auth-login-password"
          type="password"
          placeholder="Enter password"
          className="h-11 rounded-2xl border-white/45 bg-background/70"
        />
      </Field>

      <div className="flex items-center justify-between text-xs">
        <label className="flex items-center gap-2 text-muted-foreground/72">
          <input type="checkbox" className="size-3.5 rounded border-border/40" />
          Keep me signed in
        </label>
        <Link href="/privacy" className="font-medium text-primary transition-colors hover:text-primary/80">
          Forgot password?
        </Link>
      </div>

      <Button className="h-11 w-full rounded-2xl text-sm font-semibold shadow-lg shadow-primary/20">
        Continue
        <Icon icon="solar:login-2-bold" className="size-4" />
      </Button>

      <p className="text-center text-xs text-muted-foreground/68">
        New here?{" "}
        <button
          type="button"
          onClick={onSwitchTab}
          className="font-semibold text-primary transition-colors hover:text-primary/80"
        >
          Create account
        </button>
      </p>
    </form>
  )
}

function RegisterForm() {
  return (
    <form className="space-y-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <Field label="First name" htmlFor="auth-register-first">
          <Input
            id="auth-register-first"
            placeholder="Ava"
            className="h-11 rounded-2xl border-white/45 bg-background/70"
          />
        </Field>
        <Field label="Last name" htmlFor="auth-register-last">
          <Input
            id="auth-register-last"
            placeholder="Chen"
            className="h-11 rounded-2xl border-white/45 bg-background/70"
          />
        </Field>
      </div>
      <Field label="Work email" htmlFor="auth-register-email">
        <Input
          id="auth-register-email"
          type="email"
          placeholder="hello@company.com"
          className="h-11 rounded-2xl border-white/45 bg-background/70"
        />
      </Field>
      <Field label="Password" htmlFor="auth-register-password">
        <Input
          id="auth-register-password"
          type="password"
          placeholder="Create a secure password"
          className="h-11 rounded-2xl border-white/45 bg-background/70"
        />
      </Field>

      <Button className="h-11 w-full rounded-2xl text-sm font-semibold shadow-lg shadow-primary/20">
        Create free account
        <Icon icon="solar:user-plus-bold" className="size-4" />
      </Button>

      <p className="text-center text-xs text-muted-foreground/68">
        By continuing, you agree to our{" "}
        <Link href="/privacy" className="font-semibold text-primary transition-colors hover:text-primary/80">
          privacy policy
        </Link>
        .
      </p>
    </form>
  )
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string
  htmlFor: string
  children: React.ReactNode
}) {
  return (
    <div className="space-y-1.5">
      <Label
        htmlFor={htmlFor}
        className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground/60"
      >
        {label}
      </Label>
      {children}
    </div>
  )
}
