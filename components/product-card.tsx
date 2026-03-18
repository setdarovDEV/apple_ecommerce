"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Heart, ShoppingBag, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ProductCardProps {
  id: string
  name: string
  category: string
  price: number
  originalPrice?: number
  image: string
  badge?: string
  monthlyPayment?: number
  isNew?: boolean
  className?: string
  index?: number
}

export function ProductCard({
  id,
  name,
  category,
  price,
  originalPrice,
  image,
  badge,
  monthlyPayment,
  isNew,
  className,
  index = 0,
}: ProductCardProps) {
  const discount = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0

  return (
    <motion.div
      className={cn("group relative cursor-pointer", className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ y: -4 }}
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-secondary">
        <Link href={`/product/${id}`}>
          <motion.div
            className="relative w-full h-full"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover"
            />
          </motion.div>
        </Link>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 + index * 0.05 }}
              className="rounded-full bg-foreground px-3 py-1 text-xs font-medium text-background"
            >
              New
            </motion.span>
          )}
          {discount > 0 && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.25 + index * 0.05 }}
              className="rounded-full bg-destructive px-3 py-1 text-xs font-medium text-destructive-foreground"
            >
              -{discount}%
            </motion.span>
          )}
          {badge && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.3 + index * 0.05 }}
              className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground"
            >
              {badge}
            </motion.span>
          )}
        </div>

        {/* Quick Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
          <Button
            size="icon"
            variant="secondary"
            className="h-9 w-9 rounded-full bg-background/90 backdrop-blur-sm hover:bg-background shadow-lg"
          >
            <Heart className="h-4 w-4" />
            <span className="sr-only">Add to wishlist</span>
          </Button>
          <Button
            size="icon"
            variant="secondary"
            className="h-9 w-9 rounded-full bg-background/90 backdrop-blur-sm hover:bg-background shadow-lg"
            asChild
          >
            <Link href={`/product/${id}`}>
              <Eye className="h-4 w-4" />
              <span className="sr-only">Quick view</span>
            </Link>
          </Button>
        </div>

        {/* Add to Cart Button */}
        <div className="absolute inset-x-3 bottom-3 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          <Button className="w-full rounded-xl shadow-lg" size="lg">
            <ShoppingBag className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="mt-4 space-y-1">
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {category}
        </p>
        <Link href={`/product/${id}`}>
          <h3 className="font-medium leading-tight text-balance hover:text-muted-foreground transition-colors">
            {name}
          </h3>
        </Link>
        <div className="flex items-baseline gap-2 pt-1">
          <span className="text-lg font-semibold">
            ${price.toLocaleString()}
          </span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${originalPrice.toLocaleString()}
            </span>
          )}
        </div>
        {monthlyPayment && (
          <p className="text-xs text-muted-foreground">
            or ${monthlyPayment}/mo for 12 months
          </p>
        )}
      </div>
    </motion.div>
  )
}
