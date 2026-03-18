"use client"

import { motion, type Variants } from "framer-motion"

interface FadeInProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  once?: boolean
}

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
  once = true,
}: FadeInProps) {
  const offset = { up: 24, down: -24, left: 24, right: -24 }
  const axis = direction === "up" || direction === "down" ? "y" : "x"

  return (
    <motion.div
      initial={{ opacity: 0, [axis]: offset[direction] }}
      whileInView={{ opacity: 1, [axis]: 0 }}
      viewport={{ once, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface FadeInStaggerProps {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
  once?: boolean
}

export function FadeInStagger({
  children,
  className,
  staggerDelay = 0.1,
  once = true,
}: FadeInStaggerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-50px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            staggerDirection: 1,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export const fadeInItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}
