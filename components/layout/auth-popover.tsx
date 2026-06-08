"use client"

import * as React from "react"
import Link from "next/link"

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

const tabs: Array<{ value: AuthTab; label: string }> = [
  { value: "login", label: "Login" },
  { value: "register", label: "Register" },
]

export function AuthPopover({ className }: { className?: string }) {
  const [open, setOpen] = React.useState(false)
  const [tab, setTab] = React.useState<AuthTab>("login")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          type="button"
          className={cn(
            "h-10 rounded-full px-5 text-sm font-semibold shadow-xl shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-primary/35 active:scale-[0.98]",
            className
          )}
        >
          Login
        </Button>
      </PopoverTrigger>

      <PopoverContent
        align="end"
        sideOffset={12}
        className="w-[min(92vw,380px)] overflow-hidden rounded-[1.75rem] border-0 bg-background/95 p-0 shadow-2xl ring-1 shadow-black/20 ring-white/10 backdrop-blur-2xl"
      >
        <div className="relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,130,40,0.13),transparent_42%)]"
          />

          <div className="relative border-b border-border/10 px-5 py-5">
            <PopoverHeader className="gap-1 p-0 text-left">
              <PopoverTitle className="text-xl font-bold tracking-tight text-foreground">
                {tab === "login" ? "Welcome back" : "Create account"}
              </PopoverTitle>

              <PopoverDescription className="text-sm leading-6 text-muted-foreground">
                {tab === "login"
                  ? "Login to continue to your dashboard."
                  : "Register to start your workspace."}
              </PopoverDescription>
            </PopoverHeader>

            <div className="mt-5 grid grid-cols-2 rounded-full bg-muted/40 p-1 ring-1 ring-border/15">
              {tabs.map((item) => {
                const active = tab === item.value

                return (
                  <button
                    key={item.value}
                    type="button"
                    onClick={() => setTab(item.value)}
                    className={cn(
                      "rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300",
                      active
                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                        : "text-muted-foreground hover:text-foreground"
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
              <RegisterForm onSwitchTab={() => setTab("login")} />
            )}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

function LoginForm({ onSwitchTab }: { onSwitchTab: () => void }) {
  return (
    <form className="space-y-4">
      <Field label="Email" htmlFor="auth-login-email">
        <Input
          id="auth-login-email"
          type="email"
          required
          placeholder="you@company.com"
          className="h-12 rounded-2xl bg-background/70 text-sm ring-1 ring-border/20 transition-all duration-300 placeholder:text-muted-foreground/40 focus-visible:ring-primary/30"
        />
      </Field>

      <Field label="Password" htmlFor="auth-login-password">
        <Input
          id="auth-login-password"
          type="password"
          required
          placeholder="Enter password"
          className="h-12 rounded-2xl bg-background/70 text-sm ring-1 ring-border/20 transition-all duration-300 placeholder:text-muted-foreground/40 focus-visible:ring-primary/30"
        />
      </Field>

      <div className="flex items-center justify-between gap-3 text-xs">
        <label className="flex items-center gap-2 text-muted-foreground">
          <input
            type="checkbox"
            className="size-3.5 rounded border-border/40 accent-primary"
          />
          Remember me
        </label>

        <Link
          href="#faq"
          className="font-semibold text-primary transition-colors hover:text-primary/80"
        >
          Forgot password?
        </Link>
      </div>

      <Button
        type="submit"
        className="h-12 w-full rounded-2xl text-sm font-semibold shadow-xl shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-primary/30"
      >
        Continue
      </Button>

      <p className="text-center text-xs leading-5 text-muted-foreground">
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

function RegisterForm({ onSwitchTab }: { onSwitchTab: () => void }) {
  return (
    <form className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <Field label="First name" htmlFor="auth-register-first">
          <Input
            id="auth-register-first"
            required
            placeholder="Ava"
            className="h-12 rounded-2xl bg-background/70 text-sm ring-1 ring-border/20 transition-all duration-300 placeholder:text-muted-foreground/40 focus-visible:ring-primary/30"
          />
        </Field>

        <Field label="Last name" htmlFor="auth-register-last">
          <Input
            id="auth-register-last"
            required
            placeholder="Chen"
            className="h-12 rounded-2xl bg-background/70 text-sm ring-1 ring-border/20 transition-all duration-300 placeholder:text-muted-foreground/40 focus-visible:ring-primary/30"
          />
        </Field>
      </div>

      <Field label="Email" htmlFor="auth-register-email">
        <Input
          id="auth-register-email"
          type="email"
          required
          placeholder="you@company.com"
          className="h-12 rounded-2xl bg-background/70 text-sm ring-1 ring-border/20 transition-all duration-300 placeholder:text-muted-foreground/40 focus-visible:ring-primary/30"
        />
      </Field>

      <Field label="Password" htmlFor="auth-register-password">
        <Input
          id="auth-register-password"
          type="password"
          required
          placeholder="Create password"
          className="h-12 rounded-2xl bg-background/70 text-sm ring-1 ring-border/20 transition-all duration-300 placeholder:text-muted-foreground/40 focus-visible:ring-primary/30"
        />
      </Field>

      <Button
        type="submit"
        className="h-12 w-full rounded-2xl text-sm font-semibold shadow-xl shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-primary/30"
      >
        Create account
      </Button>

      <p className="text-center text-xs leading-5 text-muted-foreground">
        Already have an account?{" "}
        <button
          type="button"
          onClick={onSwitchTab}
          className="font-semibold text-primary transition-colors hover:text-primary/80"
        >
          Login
        </button>
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
        className="text-[11px] font-semibold tracking-[0.18em] text-muted-foreground/60 uppercase"
      >
        {label}
      </Label>
      {children}
    </div>
  )
}
