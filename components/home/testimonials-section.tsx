"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { FadeIn } from "@/components/animations"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
    rating: 5,
    text: "Exceptional service from start to finish. The team helped me choose the perfect MacBook for my design work, and the financing options made it incredibly affordable.",
    product: "MacBook Pro 16-inch",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Software Engineer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
    rating: 5,
    text: "I've been buying Apple products from APEX for years. Their warranty support is unmatched, and I love knowing I'm getting 100% authentic products every time.",
    product: "iPhone 16 Pro Max",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Fitness Instructor",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
    rating: 5,
    text: "The Apple Watch Ultra 2 has been a game-changer for my training. APEX made the purchase process seamless with same-day delivery. Highly recommend!",
    product: "Apple Watch Ultra 2",
  },
  {
    id: 4,
    name: "David Park",
    role: "Business Owner",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80",
    rating: 5,
    text: "Outstanding customer service. They went above and beyond to help me set up devices for my entire team. The bulk pricing and support were excellent.",
    product: "iPad Pro + Accessories",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const next = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  }

  return (
    <section className="py-20 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <FadeIn>
            <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Testimonials
            </p>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl text-balance">
              Loved by Thousands
            </h2>
          </FadeIn>
        </div>

        {/* Testimonials Carousel */}
        <div className="mt-16 relative">
          <div className="overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full flex-shrink-0 px-4"
              >
                <div className="mx-auto max-w-3xl text-center">
                  <motion.div
                    className="flex justify-center gap-1"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + i * 0.05 }}
                      >
                        <Star className="h-5 w-5 fill-foreground text-foreground" />
                      </motion.div>
                    ))}
                  </motion.div>

                  <blockquote className="mt-8 font-serif text-2xl sm:text-3xl lg:text-4xl leading-relaxed text-balance">
                    &quot;{testimonials[currentIndex].text}&quot;
                  </blockquote>

                  <div className="mt-10 flex items-center justify-center gap-4">
                    <motion.div
                      className="relative h-14 w-14 overflow-hidden rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3, type: "spring" }}
                    >
                      <Image
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                    <div className="text-left">
                      <p className="font-semibold">
                        {testimonials[currentIndex].name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonials[currentIndex].role} •{" "}
                        {testimonials[currentIndex].product}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <motion.div
            className="mt-10 flex items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                onClick={prev}
              >
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Previous testimonial</span>
              </Button>
            </motion.div>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1)
                    setCurrentIndex(index)
                  }}
                  className={cn(
                    "h-2 rounded-full transition-all",
                    currentIndex === index ? "w-8 bg-foreground" : "w-2 bg-foreground/20 hover:bg-foreground/40"
                  )}
                  whileHover={{ scale: 1.2 }}
                >
                  <span className="sr-only">Go to testimonial {index + 1}</span>
                </motion.button>
              ))}
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                onClick={next}
              >
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Next testimonial</span>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Trust Logos */}
        <motion.div
          className="mt-20 border-t border-border pt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-center text-sm text-muted-foreground">
            Trusted by leading companies worldwide
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-50">
            {["Google", "Meta", "Amazon", "Microsoft", "Tesla"].map(
              (company, i) => (
                <motion.span
                  key={company}
                  className="text-xl font-semibold tracking-tight"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 0.5, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  {company}
                </motion.span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
