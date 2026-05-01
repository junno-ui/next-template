"use client"

import * as React from "react"
import { motion, type HTMLMotionProps, type Variants } from "framer-motion"

import { cn } from "@/lib/utils"

const revealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
    filter: "blur(10px)",
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

const staggerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
}

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number
}

export function Reveal({ className, delay = 0, ...props }: RevealProps) {
  return (
    <motion.div
      variants={revealVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-90px" }}
      transition={{ delay }}
      className={className}
      {...props}
    />
  )
}

export function Stagger({
  className,
  ...props
}: HTMLMotionProps<"div"> & { children: React.ReactNode }) {
  return (
    <motion.div
      variants={staggerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className={className}
      {...props}
    />
  )
}

export function ScrollCard({
  className,
  ...props
}: HTMLMotionProps<"article">) {
  return (
    <motion.article
      variants={revealVariants}
      whileHover={{ y: -8, scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      transition={{ type: "spring", stiffness: 240, damping: 22, mass: 0.7 }}
      className={cn("will-change-transform", className)}
      {...props}
    />
  )
}
