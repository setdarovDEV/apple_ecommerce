"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Shield, Award, BadgeCheck, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FadeIn, FadeInStagger, fadeInItemVariants } from "@/components/animations"

const guarantees = [
  {
    icon: Shield,
    title: "100% Authentic",
    description: "Every product is verified and certified by Apple",
  },
  {
    icon: Award,
    title: "Official Warranty",
    description: "Full manufacturer warranty with local support",
  },
  {
    icon: BadgeCheck,
    title: "Best Price Match",
    description: "We'll match any authorized retailer's price",
  },
  {
    icon: Clock,
    title: "Same-Day Delivery",
    description: "Order by 2 PM for same-day delivery",
  },
]

export function TrustSection() {
  return (
    <section className="py-20 lg:py-32 bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <FadeIn>
              <p className="text-sm font-medium uppercase tracking-wider text-background/60">
                Our Promise
              </p>
              <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl text-balance">
                Shop with
                <br />
                Complete Confidence
              </h2>
              <p className="mt-6 text-lg text-background/70 leading-relaxed">
                At APEX Store, we understand that purchasing premium electronics
                is a significant investment. That&apos;s why we&apos;ve built our entire
                business around trust, transparency, and exceptional service.
              </p>
            </FadeIn>

            <FadeInStagger className="mt-10 grid gap-6 sm:grid-cols-2" staggerDelay={0.1}>
              {guarantees.map((guarantee) => (
                <motion.div
                  key={guarantee.title}
                  variants={fadeInItemVariants}
                  className="flex gap-4"
                  whileHover={{ x: 4 }}
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-background/10">
                    <guarantee.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{guarantee.title}</h3>
                    <p className="mt-1 text-sm text-background/60">
                      {guarantee.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </FadeInStagger>

            <FadeIn delay={0.2}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <motion.div whileHover={{ x: 4 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    size="lg"
                    className="bg-background text-foreground hover:bg-background/90 rounded-full"
                    asChild
                  >
                    <Link href="/about">
                      Learn About Us
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-background/30 text-background hover:bg-background/10 rounded-full"
                  asChild
                >
                  <Link href="/contact">Contact Support</Link>
                </Button>
              </div>
            </FadeIn>
          </div>

          {/* Visual */}
          <FadeIn className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <motion.div
                  className="rounded-2xl bg-background/10 p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <p className="text-4xl font-serif">5+</p>
                  <p className="mt-2 text-sm text-background/60">Years of Excellence</p>
                </motion.div>
                <motion.div
                  className="rounded-2xl bg-background/10 p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <p className="text-4xl font-serif">99%</p>
                  <p className="mt-2 text-sm text-background/60">Customer Satisfaction</p>
                </motion.div>
              </div>
              <div className="space-y-4 mt-8">
                <motion.div
                  variants={fadeInItemVariants}
                  className="rounded-2xl bg-background/10 p-6"
                  whileHover={{ scale: 1.02 }}
                >
                  <p className="text-4xl font-serif">10K+</p>
                  <p className="mt-2 text-sm text-background/60">Happy Customers</p>
                </motion.div>
                <motion.div
                  variants={fadeInItemVariants}
                  className="rounded-2xl bg-background/5 p-6 border border-background/10"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-2">
                    <motion.div
                      className="h-2 w-2 rounded-full bg-green-400"
                      animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    <span className="text-sm text-background/60">Support Online</span>
                  </div>
                  <p className="mt-3 font-semibold">24/7</p>
                  <p className="text-sm text-background/60">Expert Support</p>
                </motion.div>
              </div>
            </div>

            {/* Decorative Badge */}
            <motion.div
              className="absolute -top-6 right-0 flex items-center gap-3 rounded-2xl bg-background px-5 py-3 text-foreground shadow-lg"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <BadgeCheck className="h-6 w-6 text-green-600" />
              <div>
                <p className="text-xs text-muted-foreground">Certified</p>
                <p className="font-semibold">Apple Reseller</p>
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
