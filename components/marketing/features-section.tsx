"use client"

import { motion, type Variants } from "framer-motion"
import { Icon } from "@/components/ui/app-icon"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

/* -------------------------------------------------------------------------- */
/*  Motion                                                                     */
/* -------------------------------------------------------------------------- */

const sectionVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.12,
    },
  },
}

const headerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
    filter: "blur(8px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 34,
    scale: 0.96,
    filter: "blur(10px)",
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 18,
      mass: 0.7,
    },
  },
}

const visualVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.12,
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

/* -------------------------------------------------------------------------- */
/*  Data                                                                       */
/* -------------------------------------------------------------------------- */

const features = [
  {
    title: "Executive Snapshot",
    label: "Overview",
    description:
      "Monitor revenue, pipeline health, and growth momentum from one calm executive view.",
    icon: "solar:graph-up-bold-duotone",
    visual: "snapshot",
    className: "lg:col-span-4 lg:row-span-2",
    hover: {
      y: -10,
      rotate: 0.25,
      scale: 1.012,
    },
  },
  {
    title: "Live Signal Tracking",
    label: "Realtime",
    description:
      "Surface important changes early so your team can respond with confidence.",
    icon: "solar:pulse-2-bold-duotone",
    visual: "signals",
    className: "lg:col-span-4",
    hover: {
      y: -6,
      x: 4,
      scale: 1.01,
    },
  },
  {
    title: "Team Workflow",
    label: "Workflow",
    description:
      "Turn insights into simple next steps your team can actually follow.",
    icon: "solar:route-bold-duotone",
    visual: "steps",
    className: "lg:col-span-4",
    hover: {
      y: -6,
      x: -4,
      scale: 1.01,
    },
  },
  {
    title: "Campaign Health",
    label: "Channels",
    description:
      "Compare channel performance without jumping between disconnected tools.",
    icon: "mdi:chart-timeline-variant-shimmer",
    visual: "progress",
    className: "lg:col-span-3",
    hover: {
      y: -7,
      scale: 1.018,
    },
  },
  {
    title: "Smart Reports",
    label: "Reports",
    description:
      "Create summaries stakeholders can scan, trust, and understand quickly.",
    icon: "solar:document-text-bold-duotone",
    visual: "reports",
    className: "lg:col-span-3",
    hover: {
      y: -7,
      rotate: -0.25,
      scale: 1.012,
    },
  },
  {
    title: "Automation",
    label: "Automate",
    description:
      "Trigger updates, notify owners, and remove repetitive reporting work.",
    icon: "solar:bolt-bold-duotone",
    visual: "automation",
    className: "lg:col-span-2",
    hover: {
      y: -9,
      rotate: -0.3,
      scale: 1.014,
    },
  },
  {
    title: "Integrations",
    label: "Connect",
    description:
      "Bring data from your favorite tools into one clean workspace.",
    icon: "solar:plug-circle-bold-duotone",
    visual: "integrations",
    className: "lg:col-span-4",
    hover: {
      y: -6,
      rotate: 0.2,
      scale: 1.01,
    },
  },
  {
    title: "Security Controls",
    label: "Secure",
    description:
      "Keep teams aligned with reliable access controls and safer workflows.",
    icon: "solar:shield-check-bold-duotone",
    visual: "security",
    className: "lg:col-span-4",
    hover: {
      y: -6,
      x: 3,
      scale: 1.01,
    },
  },
  {
    title: "AI Recommendations",
    label: "Assist",
    description:
      "Get suggested actions, summaries, and priority signals when it matters.",
    icon: "solar:stars-bold-duotone",
    visual: "ai",
    className: "lg:col-span-4",
    hover: {
      y: -9,
      x: -3,
      scale: 1.014,
    },
  },
]

/* -------------------------------------------------------------------------- */
/*  Visuals                                                                    */
/* -------------------------------------------------------------------------- */

function FeatureVisual({ type }: { type: string }) {
  if (type === "snapshot") {
    return (
      <motion.div variants={visualVariants} className="mt-6 grid gap-3">
        <motion.div
          whileHover={{ scale: 1.015 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="rounded-[1.35rem] bg-background/80 p-4 ring-1 ring-border/40 transition-colors duration-300 group-hover:bg-background group-hover:ring-primary/20 dark:bg-white/[0.035] dark:ring-white/10 dark:group-hover:bg-white/[0.05]"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs text-muted-foreground dark:text-white/42">
                Revenue this month
              </p>
              <p className="mt-1 text-3xl font-bold text-foreground dark:text-white">
                $12,199
              </p>
            </div>

            <motion.span
              animate={{
                y: [0, -2, 0],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary ring-1 ring-primary/20"
            >
              +20.8%
            </motion.span>
          </div>

          <p className="mt-3 text-xs leading-5 text-muted-foreground dark:text-white/48">
            Growth is driven by stronger activation and expansion revenue.
          </p>
        </motion.div>

        <div className="rounded-[1.35rem] bg-background/80 p-4 ring-1 ring-border/40 transition-colors duration-300 group-hover:bg-background group-hover:ring-primary/20 dark:bg-white/[0.035] dark:ring-white/10 dark:group-hover:bg-white/[0.05]">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-xs font-semibold text-foreground dark:text-white">
              Performance trend
            </p>

            <span className="flex items-center gap-1.5 text-[10px] text-muted-foreground dark:text-white/42">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/70" />
                <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
              </span>
              Live
            </span>
          </div>

          <div className="flex h-36 items-end gap-1.5">
            {[42, 58, 46, 72, 62, 80, 66, 86, 74, 92, 78, 96].map(
              (height, index) => (
                <motion.div
                  key={index}
                  initial={{ height: "12%" }}
                  whileInView={{ height: `${height}%` }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.75,
                    delay: index * 0.035,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{
                    scaleY: 1.08,
                    filter: "brightness(1.2)",
                  }}
                  className="flex flex-1 origin-bottom items-end rounded-t-lg bg-gradient-to-t from-primary/35 to-primary/80"
                />
              )
            )}
          </div>
        </div>
      </motion.div>
    )
  }

  if (type === "signals") {
    return (
      <motion.div variants={visualVariants} className="mt-6 grid gap-2.5">
        {[
          ["Trial conversion", "+18.4%", "text-primary"],
          ["Churn risk", "-6.2%", "text-red-400"],
          ["Expansion intent", "+11.7%", "text-primary"],
        ].map(([label, value, color], index) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ x: 8, scale: 1.015 }}
            transition={{
              type: "spring",
              stiffness: 220,
              damping: 20,
              delay: index * 0.06,
            }}
            className="flex items-center justify-between rounded-2xl bg-background/80 px-3.5 py-3 ring-1 ring-border/40 transition-colors duration-300 hover:bg-background hover:ring-primary/25 dark:bg-white/[0.035] dark:ring-white/10 dark:hover:bg-white/[0.055]"
          >
            <span className="flex items-center gap-2 text-sm text-foreground/75 dark:text-white/65">
              <motion.span
                animate={{ scale: [1, 1.45, 1] }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  delay: index * 0.22,
                }}
                className="size-1.5 rounded-full bg-primary/70"
              />
              {label}
            </span>

            <span className={cn("text-sm font-bold", color)}>{value}</span>
          </motion.div>
        ))}
      </motion.div>
    )
  }

  if (type === "steps") {
    return (
      <motion.div
        variants={visualVariants}
        className="mt-6 grid grid-cols-2 gap-2.5"
      >
        {[
          ["Collect", "solar:database-bold-duotone"],
          ["Analyze", "solar:chart-2-bold-duotone"],
          ["Act", "solar:bolt-bold-duotone"],
          ["Report", "solar:document-text-bold-duotone"],
        ].map(([label, icon], index) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6, scale: 1.03 }}
            transition={{
              type: "spring",
              stiffness: 230,
              damping: 19,
              delay: index * 0.055,
            }}
            className="rounded-2xl bg-background/80 p-3 ring-1 ring-border/40 transition-colors duration-300 hover:bg-primary/10 hover:ring-primary/25 dark:bg-white/[0.035] dark:ring-white/10"
          >
            <motion.div
              whileHover={{ rotate: 8, scale: 1.14 }}
              transition={{ type: "spring", stiffness: 260, damping: 16 }}
              className="flex size-9 items-center justify-center rounded-xl bg-primary/10 text-primary"
            >
              <Icon icon={icon} className="size-4" />
            </motion.div>

            <p className="mt-3 text-sm font-semibold text-foreground dark:text-white">
              {label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    )
  }

  if (type === "progress") {
    return (
      <motion.div
        variants={visualVariants}
        className="mt-6 grid gap-3 rounded-[1.35rem] bg-background/80 p-4 ring-1 ring-border/40 transition-colors duration-300 group-hover:bg-background group-hover:ring-primary/20 dark:bg-white/[0.035] dark:ring-white/10 dark:group-hover:bg-white/[0.05]"
      >
        {[
          ["Organic", "82%", "bg-primary"],
          ["Paid", "64%", "bg-chart-2"],
          ["Direct", "52%", "bg-foreground/25 dark:bg-white/35"],
        ].map(([label, width, color], index) => (
          <div key={label}>
            <div className="mb-1.5 flex justify-between text-xs">
              <span className="text-muted-foreground dark:text-white/45">
                {label}
              </span>
              <span className="font-semibold text-foreground/80 dark:text-white/75">
                {width}
              </span>
            </div>

            <div className="h-1.5 overflow-hidden rounded-full bg-foreground/10 dark:bg-white/[0.06]">
              <motion.div
                initial={{ width: "0%" }}
                whileInView={{ width }}
                viewport={{ once: true }}
                whileHover={{ filter: "brightness(1.25)" }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={cn("h-full rounded-full", color)}
              />
            </div>
          </div>
        ))}
      </motion.div>
    )
  }

  if (type === "reports") {
    return (
      <motion.div variants={visualVariants} className="mt-6 grid gap-2.5">
        {[
          ["Revenue summary", "Ready"],
          ["Risk report", "Updated"],
          ["Board view", "Shared"],
        ].map(([label, status], index) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ x: -7, scale: 1.015 }}
            transition={{
              type: "spring",
              stiffness: 220,
              damping: 20,
              delay: index * 0.06,
            }}
            className="flex items-center justify-between rounded-2xl bg-background/80 px-3.5 py-3 ring-1 ring-border/40 transition-colors duration-300 hover:bg-background hover:ring-primary/25 dark:bg-white/[0.035] dark:ring-white/10 dark:hover:bg-white/[0.055]"
          >
            <span className="text-sm text-foreground/75 dark:text-white/65">
              {label}
            </span>

            <span className="rounded-full bg-foreground/10 px-2.5 py-1 text-[10px] font-semibold text-foreground/65 dark:bg-white/[0.06] dark:text-white/55">
              {status}
            </span>
          </motion.div>
        ))}
      </motion.div>
    )
  }

  if (type === "automation") {
    return (
      <motion.div variants={visualVariants} className="mt-6 grid gap-2.5">
        {[
          ["Trigger", "solar:bell-bold-duotone"],
          ["Analyze", "solar:magnifer-zoom-in-bold-duotone"],
          ["Notify", "solar:letter-bold-duotone"],
        ].map(([label, icon], index) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, rotate: -4, y: 12 }}
            whileInView={{ opacity: 1, rotate: 0, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6, rotate: 1.4, scale: 1.02 }}
            transition={{
              type: "spring",
              stiffness: 230,
              damping: 18,
              delay: index * 0.065,
            }}
            className="flex items-center gap-3 rounded-2xl bg-background/80 p-3 ring-1 ring-border/40 transition-colors duration-300 hover:bg-primary/10 hover:ring-primary/25 dark:bg-white/[0.035] dark:ring-white/10"
          >
            <motion.div
              whileHover={{ rotate: 12, scale: 1.16 }}
              transition={{ type: "spring", stiffness: 280, damping: 15 }}
              className="flex size-9 items-center justify-center rounded-xl bg-primary/10 text-primary"
            >
              <Icon icon={icon} className="size-4" />
            </motion.div>

            <p className="text-sm font-semibold text-foreground dark:text-white">
              {label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    )
  }

  if (type === "integrations") {
    return (
      <motion.div
        variants={visualVariants}
        className="mt-6 grid grid-cols-4 gap-2.5"
      >
        {[
          "simple-icons:slack",
          "simple-icons:github",
          "simple-icons:notion",
          "simple-icons:stripe",
          "simple-icons:shopify",
          "simple-icons:figma",
          "simple-icons:vercel",
          "simple-icons:linear",
        ].map((icon, index) => (
          <motion.div
            key={icon}
            initial={{ opacity: 0, scale: 0.72, rotate: -8 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6, scale: 1.1, rotate: 4 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 18,
              delay: index * 0.035,
            }}
            className="flex aspect-square items-center justify-center rounded-2xl bg-background/80 text-muted-foreground ring-1 ring-border/40 transition-colors duration-300 hover:bg-primary/10 hover:text-primary hover:ring-primary/25 dark:bg-white/[0.035] dark:text-white/45 dark:ring-white/10"
          >
            <Icon icon={icon} className="size-5" />
          </motion.div>
        ))}
      </motion.div>
    )
  }

  if (type === "security") {
    return (
      <motion.div variants={visualVariants} className="mt-6 grid gap-2.5">
        {[
          ["SSO access", "Enabled"],
          ["Audit logs", "Active"],
          ["Roles", "Protected"],
        ].map(([label, status], index) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, x: -14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ x: 7, scale: 1.015 }}
            transition={{
              type: "spring",
              stiffness: 220,
              damping: 20,
              delay: index * 0.06,
            }}
            className="flex items-center justify-between rounded-2xl bg-background/80 px-3.5 py-3 ring-1 ring-border/40 transition-colors duration-300 hover:bg-background hover:ring-primary/25 dark:bg-white/[0.035] dark:ring-white/10 dark:hover:bg-white/[0.055]"
          >
            <span className="flex items-center gap-2 text-sm text-foreground/75 dark:text-white/65">
              <motion.span
                whileHover={{ rotate: 8, scale: 1.18 }}
                className="inline-flex"
              >
                <Icon
                  icon="solar:shield-check-bold-duotone"
                  className="size-4 text-primary"
                />
              </motion.span>
              {label}
            </span>

            <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-semibold text-primary">
              {status}
            </span>
          </motion.div>
        ))}
      </motion.div>
    )
  }

  return (
    <motion.div
      variants={visualVariants}
      whileHover={{ scale: 1.015 }}
      transition={{ type: "spring", stiffness: 240, damping: 18 }}
      className="mt-6 rounded-[1.35rem] bg-background/80 p-4 ring-1 ring-border/40 transition-colors duration-300 group-hover:bg-background group-hover:ring-primary/20 dark:bg-white/[0.035] dark:ring-white/10 dark:group-hover:bg-white/[0.05]"
    >
      <div className="mb-3 flex items-center gap-2 text-xs font-semibold text-primary">
        <motion.span
          animate={{ rotate: [0, 8, -8, 0], scale: [1, 1.1, 1] }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="inline-flex"
        >
          <Icon icon="solar:stars-bold-duotone" className="size-4" />
        </motion.span>
        Suggested next action
      </div>

      <p className="text-sm leading-6 text-muted-foreground dark:text-white/65">
        Revenue dipped on paid channels. Review campaign spend and notify the
        growth team before the next reporting cycle.
      </p>

      <div className="mt-4 flex items-center gap-2">
        <span className="rounded-full bg-primary/10 px-3 py-1 text-[10px] font-semibold text-primary">
          High priority
        </span>
        <span className="rounded-full bg-foreground/10 px-3 py-1 text-[10px] font-semibold text-foreground/65 dark:bg-white/[0.06] dark:text-white/50">
          AI generated
        </span>
      </div>
    </motion.div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Card                                                                       */
/* -------------------------------------------------------------------------- */

function BentoCard({
  feature,
  index,
}: {
  feature: (typeof features)[number]
  index: number
}) {
  return (
    <motion.article
      variants={cardVariants}
      whileHover={feature.hover}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 22,
        mass: 0.7,
      }}
      className={cn(
        "group relative flex min-h-[260px] flex-col overflow-hidden rounded-[2rem] bg-background/72 p-5 shadow-2xl ring-1 shadow-black/[0.08] ring-border/40 backdrop-blur-2xl dark:bg-white/[0.025] dark:ring-white/10",
        "transition-colors duration-500 hover:bg-background/90 hover:shadow-primary/10 hover:ring-primary/25 dark:hover:bg-white/[0.045]",
        feature.className
      )}
      style={{
        transformPerspective: 900,
      }}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,130,40,0.14),transparent_42%)] opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.35 }}
      />

      <motion.div
        className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.35 }}
      />

      <motion.div
        className="pointer-events-none absolute -top-20 -right-20 size-48 rounded-full bg-primary/10 opacity-0 blur-3xl"
        whileHover={{ opacity: 1, scale: 1.15 }}
        transition={{ duration: 0.45 }}
      />

      <div className="relative flex items-start justify-between gap-4">
        <div>
          <motion.div
            whileHover={{ x: 3 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="mb-3 inline-flex items-center gap-2 rounded-full bg-background/80 px-3 py-1.5 text-[10px] font-semibold text-primary uppercase ring-1 ring-border/40 dark:bg-white/[0.035] dark:ring-white/10"
          >
            <motion.span
              animate={{
                scale: [1, 1.45, 1],
                boxShadow: [
                  "0 0 10px rgba(255,128,32,0.35)",
                  "0 0 18px rgba(255,128,32,0.75)",
                  "0 0 10px rgba(255,128,32,0.35)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.15,
              }}
              className="size-1.5 rounded-full bg-primary"
            />
            {feature.label}
          </motion.div>

          <h3 className="max-w-sm text-xl font-bold text-foreground dark:text-white">
            {feature.title}
          </h3>

          <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground dark:text-white/58">
            {feature.description}
          </p>
        </div>

        <motion.div
          whileHover={{
            scale: 1.14,
            rotate: 8,
          }}
          transition={{ type: "spring", stiffness: 280, damping: 16 }}
          className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/15 group-hover:bg-primary group-hover:text-primary-foreground"
        >
          <Icon icon={feature.icon} className="size-5" />
        </motion.div>
      </div>

      <div className="relative mt-auto">
        <FeatureVisual type={feature.visual} />
      </div>
    </motion.article>
  )
}

/* -------------------------------------------------------------------------- */
/*  Main Component                                                             */
/* -------------------------------------------------------------------------- */

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative isolate overflow-hidden py-24 sm:py-28"
    >
      {/* Background */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-background" />
        <div className="bg-hex-dots absolute inset-0 opacity-[0.12]" />


        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.07, 0.1, 0.07],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 left-1/2 h-[520px] w-[min(92vw,1080px)] -translate-x-1/2 rounded-full bg-primary blur-[130px]"
        />

        <motion.div
          animate={{
            x: [0, 24, 0],
            y: [0, -18, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[36%] right-[-12%] h-[420px] w-[620px] rounded-full bg-chart-2/[0.05] blur-[110px]"
        />

        <motion.div
          animate={{
            x: [0, -20, 0],
            y: [0, 14, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[8%] left-[-14%] h-[360px] w-[560px] rounded-full bg-primary/[0.04] blur-[110px]"
        />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_72%_48%_at_50%_20%,transparent_10%,rgba(255,255,255,0.34)_70%,rgba(255,255,255,0.82)_100%)] dark:bg-[radial-gradient(ellipse_72%_48%_at_50%_20%,transparent_10%,rgba(0,0,0,0.45)_70%,rgba(0,0,0,0.84)_100%)]" />

        <div className="absolute top-0 left-1/2 h-px w-[min(86vw,900px)] -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/35 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-14"
        >
          <motion.div
            variants={headerVariants}
            className="mb-5 inline-flex items-center gap-2 rounded-full bg-background/80 px-4 py-2 text-[11px] font-semibold text-primary uppercase ring-1 ring-primary/20 backdrop-blur-xl dark:bg-white/[0.035]"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/70" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            Features
          </motion.div>

          <motion.h2
            variants={headerVariants}
            className="template-heading text-4xl leading-none font-bold text-balance text-foreground sm:text-5xl md:text-6xl dark:text-white"
          >
            A flexible section system for{" "}
            <span className="relative text-primary">
              sharper SaaS launches.
            </span>
          </motion.h2>

          <motion.p
            variants={headerVariants}
            className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-pretty text-muted-foreground sm:text-base dark:text-white/64"
          >
            Reusable cards, product visuals, hover states, and motion patterns
            give you a strong base without locking you into one story.
          </motion.p>
        </motion.div>

        {/* Bento Grid */}
        <div className="relative">
          <motion.div
            animate={{
              opacity: [0.6, 1, 0.6],
              scale: [1, 1.03, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] bg-[radial-gradient(circle_at_top,rgba(255,128,32,0.10),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.08),transparent_36%)] blur-2xl"
            aria-hidden="true"
          />

          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
            className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:auto-rows-[minmax(250px,auto)] lg:grid-cols-12"
          >
            {features.map((feature, index) => (
              <BentoCard key={feature.title} feature={feature} index={index} />
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{
            y: -4,
            scale: 1.01,
          }}
          className="mx-auto mt-14 max-w-3xl rounded-[2rem] bg-background/72 px-6 py-7 text-center ring-1 ring-border/40 backdrop-blur-xl transition-colors duration-300 hover:bg-background/90 hover:ring-primary/20 sm:px-8 dark:bg-white/[0.025] dark:ring-white/10 dark:hover:bg-white/[0.035]"
        >
          <p className="mx-auto max-w-xl text-sm leading-6 text-muted-foreground dark:text-white/55">
            Keep the sections you need, delete the ones you do not, and adapt
            the content from one central place as your product story evolves.
          </p>

          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <motion.a
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="#pricing"
              className={cn(
                buttonVariants({ size: "lg" }),
                "group rounded-full px-7 text-sm font-semibold shadow-xl shadow-primary/20 transition-shadow duration-300 hover:shadow-primary/35"
              )}
            >
              Start free today
              <Icon
                icon="solar:arrow-right-bold"
                className="ml-1.5 size-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.a>

            <motion.a
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "group rounded-full border-border/40 bg-background/80 px-7 text-sm text-foreground transition-colors duration-300 hover:border-primary/25 hover:bg-background dark:border-white/10 dark:bg-white/[0.035] dark:text-white dark:hover:bg-white/[0.06]"
              )}
            >
              Talk to our team
              <Icon
                icon="solar:chat-round-dots-bold"
                className="ml-1.5 size-4 transition-transform duration-300 group-hover:scale-110"
              />
            </motion.a>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-muted-foreground dark:text-white/38">
            <span>No credit card required</span>
            <span className="hidden size-1 rounded-full bg-border sm:block dark:bg-white/20" />
            <span>Fast setup</span>
            <span className="hidden size-1 rounded-full bg-border sm:block dark:bg-white/20" />
            <span>Cancel anytime</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
