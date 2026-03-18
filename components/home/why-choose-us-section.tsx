"use client"

import { motion } from "framer-motion"
import { Shield, Truck, CreditCard, Headphones, Award, RefreshCw } from "lucide-react"
import { FadeIn, FadeInStagger, fadeInItemVariants } from "@/components/animations"

const features = [
  {
    icon: Shield,
    title: "100% Original Products",
    description:
      "Every product comes with Apple authenticity guarantee and official certification.",
  },
  {
    icon: Award,
    title: "Official Warranty",
    description:
      "Full manufacturer warranty coverage with local service center support.",
  },
  {
    icon: Truck,
    title: "Fast & Free Delivery",
    description:
      "Free express shipping on orders over $299. Same-day delivery available.",
  },
  {
    icon: CreditCard,
    title: "0% Installments",
    description:
      "Split your purchase into easy monthly payments with no interest charges.",
  },
  {
    icon: Headphones,
    title: "Expert Support",
    description:
      "Dedicated Apple specialists available 7 days a week for consultation.",
  },
  {
    icon: RefreshCw,
    title: "Easy Returns",
    description:
      "14-day hassle-free returns with full refund. No questions asked.",
  },
]

export function WhyChooseUsSection() {
  return (
    <section className="py-20 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <FadeIn>
            <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Why APEX Store
            </p>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl text-balance">
              Premium Service,
              <br />
              <span className="text-muted-foreground">Unmatched Trust</span>
            </h2>
            <p className="mt-4 mx-auto max-w-2xl text-muted-foreground">
              We&apos;re more than just a store. We&apos;re your trusted partner in the Apple
              ecosystem, committed to delivering excellence at every step.
            </p>
          </FadeIn>
        </div>

        {/* Features Grid */}
        <FadeInStagger className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.1}>
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={fadeInItemVariants}
              className="group relative rounded-2xl bg-background p-8 shadow-sm"
              whileHover={{
                y: -6,
                transition: { duration: 0.3 },
                boxShadow: "0 20px 40px -15px rgba(0,0,0,0.1)",
              }}
            >
              <motion.div
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary transition-colors group-hover:bg-foreground"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <feature.icon className="h-6 w-6 transition-colors group-hover:text-background" />
              </motion.div>
              <h3 className="mt-6 text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </FadeInStagger>

        {/* Stats */}
        <FadeInStagger className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.08}>
          {[
            { value: "10K+", label: "Happy Customers" },
            { value: "5+", label: "Years of Trust" },
            { value: "99%", label: "Satisfaction Rate" },
            { value: "24/7", label: "Customer Support" },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeInItemVariants}
              className="text-center"
            >
              <motion.p
                className="font-serif text-4xl lg:text-5xl"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, type: "spring" }}
              >
                {stat.value}
              </motion.p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </FadeInStagger>
      </div>
    </section>
  )
}
