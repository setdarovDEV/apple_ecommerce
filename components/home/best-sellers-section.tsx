"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { ProductCard } from "@/components/product-card"
import { cn } from "@/lib/utils"
import { FadeIn } from "@/components/animations"

const tabs = ["All", "iPhone", "MacBook", "iPad", "Watch", "AirPods"]

const products = [
  {
    id: "iphone-16-pro-max",
    name: "iPhone 16 Pro Max 256GB Natural Titanium",
    category: "iPhone",
    price: 1199,
    originalPrice: 1299,
    image: "https://images.unsplash.com/photo-1696446702183-cbd13d78e1e7?w=600&q=80",
    badge: "Best Seller",
    monthlyPayment: 99,
    isNew: true,
  },
  {
    id: "macbook-pro-16",
    name: "MacBook Pro 16-inch M3 Pro 512GB",
    category: "MacBook",
    price: 2499,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&q=80",
    monthlyPayment: 208,
  },
  {
    id: "ipad-pro-12",
    name: "iPad Pro 12.9-inch M2 256GB WiFi",
    category: "iPad",
    price: 1099,
    originalPrice: 1199,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&q=80",
    monthlyPayment: 91,
  },
  {
    id: "apple-watch-ultra-2",
    name: "Apple Watch Ultra 2 GPS + Cellular 49mm",
    category: "Watch",
    price: 799,
    image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=600&q=80",
    badge: "Popular",
    monthlyPayment: 66,
    isNew: true,
  },
  {
    id: "airpods-pro-2",
    name: "AirPods Pro 2nd Generation USB-C",
    category: "AirPods",
    price: 249,
    image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=600&q=80",
    monthlyPayment: 20,
  },
  {
    id: "iphone-15",
    name: "iPhone 15 128GB Blue",
    category: "iPhone",
    price: 799,
    originalPrice: 899,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&q=80",
    monthlyPayment: 66,
  },
  {
    id: "macbook-air-15",
    name: "MacBook Air 15-inch M3 256GB",
    category: "MacBook",
    price: 1299,
    image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=600&q=80",
    badge: "New",
    monthlyPayment: 108,
    isNew: true,
  },
  {
    id: "ipad-air",
    name: "iPad Air 11-inch M2 128GB WiFi",
    category: "iPad",
    price: 599,
    image: "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=600&q=80",
    monthlyPayment: 49,
  },
]

export function BestSellersSection() {
  const [activeTab, setActiveTab] = useState("All")

  const filteredProducts =
    activeTab === "All"
      ? products
      : products.filter((product) => product.category === activeTab)

  return (
    <section className="py-20 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <FadeIn>
              <div>
                <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  Most Popular
                </p>
                <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl text-balance">
                  Best Sellers
                </h2>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <Link
                href="/products"
                className="group flex items-center gap-2 text-sm font-medium hover:text-muted-foreground transition-colors"
              >
                View All Products
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </FadeIn>
          </div>

          {/* Tabs */}
          <motion.div
            className="flex flex-wrap gap-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            {tabs.map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "rounded-full px-5 py-2 text-sm font-medium transition-colors",
                  activeTab === tab
                    ? "bg-foreground text-background"
                    : "bg-background text-foreground hover:bg-muted"
                )}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {tab}
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Products Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {filteredProducts.slice(0, 8).map((product, index) => (
              <ProductCard key={product.id} {...product} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
