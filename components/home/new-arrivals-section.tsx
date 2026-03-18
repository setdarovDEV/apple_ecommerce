"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/animations"

const newProducts = [
  {
    id: "iphone-16-pro",
    name: "iPhone 16 Pro 128GB Desert Titanium",
    category: "iPhone",
    price: 999,
    image: "https://images.unsplash.com/photo-1696446702183-cbd13d78e1e7?w=600&q=80",
    monthlyPayment: 83,
    isNew: true,
  },
  {
    id: "apple-watch-series-10",
    name: "Apple Watch Series 10 GPS 46mm",
    category: "Watch",
    price: 429,
    image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=600&q=80",
    monthlyPayment: 35,
    isNew: true,
  },
  {
    id: "airpods-4",
    name: "AirPods 4 with Active Noise Cancellation",
    category: "AirPods",
    price: 179,
    image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=600&q=80",
    monthlyPayment: 14,
    isNew: true,
  },
  {
    id: "ipad-mini-7",
    name: "iPad mini 7th Generation 128GB",
    category: "iPad",
    price: 499,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&q=80",
    monthlyPayment: 41,
    isNew: true,
  },
  {
    id: "magic-keyboard",
    name: "Magic Keyboard with Touch ID",
    category: "Accessories",
    price: 199,
    image: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=600&q=80",
    monthlyPayment: 16,
    isNew: true,
  },
  {
    id: "studio-display",
    name: "Apple Studio Display 27-inch 5K",
    category: "Accessories",
    price: 1599,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&q=80",
    monthlyPayment: 133,
    isNew: true,
  },
]

export function NewArrivalsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return
    const scrollAmount = 320
    scrollContainerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    })
  }

  return (
    <section className="py-20 lg:py-32 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <FadeIn>
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                Just Arrived
              </p>
              <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl text-balance">
                New Arrivals
              </h2>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-2">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                    onClick={() => scroll("left")}
                  >
                    <ChevronLeft className="h-4 w-4" />
                    <span className="sr-only">Scroll left</span>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                    onClick={() => scroll("right")}
                  >
                    <ChevronRight className="h-4 w-4" />
                    <span className="sr-only">Scroll right</span>
                  </Button>
                </motion.div>
              </div>
              <Link
                href="/new-arrivals"
                className="group flex items-center gap-2 text-sm font-medium hover:text-muted-foreground transition-colors"
              >
                View All
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </FadeIn>
        </div>

        {/* Products Carousel */}
        <motion.div
          ref={scrollContainerRef}
          className="mt-10 -mx-4 px-4 flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          {newProducts.map((product, index) => (
            <motion.div
              key={product.id}
              className="w-[280px] flex-shrink-0 snap-start"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
            >
              <ProductCard {...product} index={index} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
