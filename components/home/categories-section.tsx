"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { FadeIn, FadeInStagger, fadeInItemVariants } from "@/components/animations"

const categories = [
  {
    name: "iPhone",
    description: "The ultimate smartphone experience",
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&q=80",
    href: "/category/iphone",
    productCount: 24,
  },
  {
    name: "MacBook",
    description: "Pro-level performance",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&q=80",
    href: "/category/macbook",
    productCount: 12,
  },
  {
    name: "iPad",
    description: "Your next computer",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&q=80",
    href: "/category/ipad",
    productCount: 18,
  },
  {
    name: "Apple Watch",
    description: "Health on your wrist",
    image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=600&q=80",
    href: "/category/watch",
    productCount: 15,
  },
  {
    name: "AirPods",
    description: "Immersive sound",
    image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=600&q=80",
    href: "/category/airpods",
    productCount: 8,
  },
  {
    name: "Accessories",
    description: "Complete your setup",
    image: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=600&q=80",
    href: "/category/accessories",
    productCount: 45,
  },
]

export function CategoriesSection() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <FadeIn>
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                Browse by Category
              </p>
              <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl text-balance">
                Shop the Ecosystem
              </h2>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Link
              href="/categories"
              className="group flex items-center gap-2 text-sm font-medium hover:text-muted-foreground transition-colors"
            >
              View All Categories
              <motion.span
                transition={{ type: "spring", stiffness: 400 }}
                className="inline-block"
                whileHover={{ x: 4, y: -4 }}
              >
                <ArrowUpRight className="h-4 w-4" />
              </motion.span>
            </Link>
          </FadeIn>
        </div>

        {/* Categories Grid */}
        <FadeInStagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.08}>
          {categories.map((category, index) => (
            <motion.div key={category.name} variants={fadeInItemVariants}>
              <Link
                href={category.href}
                className={`group relative overflow-hidden rounded-2xl bg-secondary block ${
                  index === 0 ? "sm:col-span-2 lg:col-span-1 lg:row-span-2" : ""
                }`}
              >
                <motion.div
                  className={`relative ${
                    index === 0 ? "aspect-square lg:aspect-auto lg:h-full" : "aspect-[4/3]"
                  }`}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4 }}
                >
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent" />
                </motion.div>
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-background/70">
                        {category.productCount} Products
                      </p>
                      <h3 className="mt-1 text-2xl font-semibold text-background">
                        {category.name}
                      </h3>
                      <p className="mt-1 text-sm text-background/80">
                        {category.description}
                      </p>
                    </div>
                    <motion.div
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-background text-foreground"
                      whileHover={{ scale: 1.15, rotate: 45 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <ArrowUpRight className="h-5 w-5" />
                    </motion.div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </FadeInStagger>
      </div>
    </section>
  )
}
