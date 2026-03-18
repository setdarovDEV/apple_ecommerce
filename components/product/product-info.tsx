"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ChevronRight,
  Heart,
  ShoppingBag,
  Truck,
  Shield,
  CreditCard,
  Check,
  Minus,
  Plus,
  MessageCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ProductInfoProps {
  product: {
    id: string
    name: string
    category: string
    categorySlug: string
    price: number
    originalPrice?: number
    badge?: string
    monthlyPayment?: number
    isNew?: boolean
    inStock: boolean
    colors: { name: string; value: string }[]
    storages: { name: string; price: number }[]
    description: string
    features: string[]
    rating: number
    reviewCount: number
  }
}

export function ProductInfo({ product }: ProductInfoProps) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedStorage, setSelectedStorage] = useState(product.storages[0])
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)

  const currentPrice = selectedStorage.price
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <div className="flex flex-col">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
        <Link href="/" className="hover:text-foreground transition-colors">
          Home
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link
          href={`/category/${product.categorySlug}`}
          className="hover:text-foreground transition-colors"
        >
          {product.category}
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground">{product.name}</span>
      </nav>

      {/* Badges */}
      <div className="flex items-center gap-2 mb-4">
        {product.isNew && (
          <span className="rounded-full bg-foreground px-3 py-1 text-xs font-medium text-background">
            New
          </span>
        )}
        {product.badge && (
          <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
            {product.badge}
          </span>
        )}
        {discount > 0 && (
          <span className="rounded-full bg-destructive px-3 py-1 text-xs font-medium text-destructive-foreground">
            Save {discount}%
          </span>
        )}
      </div>

      {/* Title & Rating */}
      <h1 className="font-serif text-3xl sm:text-4xl">{product.name}</h1>
      <div className="mt-3 flex items-center gap-4">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={cn(
                "h-4 w-4",
                i < Math.floor(product.rating)
                  ? "fill-foreground text-foreground"
                  : "fill-muted text-muted"
              )}
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="ml-1 text-sm font-medium">{product.rating}</span>
        </div>
        <Link
          href="#reviews"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          {product.reviewCount.toLocaleString()} reviews
        </Link>
      </div>

      {/* Price */}
      <div className="mt-6">
        <div className="flex items-baseline gap-3">
          <span className="text-3xl font-semibold">
            ${currentPrice.toLocaleString()}
          </span>
          {product.originalPrice && (
            <span className="text-lg text-muted-foreground line-through">
              ${product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>
        {product.monthlyPayment && (
          <p className="mt-1 text-sm text-muted-foreground">
            or ${Math.round(currentPrice / 12)}/mo for 12 months at 0% APR
          </p>
        )}
      </div>

      {/* Description */}
      <p className="mt-6 text-muted-foreground leading-relaxed">
        {product.description}
      </p>

      {/* Color Selection */}
      <div className="mt-8">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Color: {selectedColor.name}</span>
        </div>
        <div className="mt-3 flex gap-3">
          {product.colors.map((color) => (
            <button
              key={color.name}
              onClick={() => setSelectedColor(color)}
              className={cn(
                "h-10 w-10 rounded-full transition-all",
                selectedColor.name === color.name
                  ? "ring-2 ring-foreground ring-offset-2"
                  : "hover:scale-110"
              )}
              style={{ backgroundColor: color.value }}
              title={color.name}
            >
              <span className="sr-only">{color.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Storage Selection */}
      <div className="mt-8">
        <span className="text-sm font-medium">Storage</span>
        <div className="mt-3 flex flex-wrap gap-3">
          {product.storages.map((storage) => (
            <button
              key={storage.name}
              onClick={() => setSelectedStorage(storage)}
              className={cn(
                "rounded-xl border px-5 py-3 text-sm font-medium transition-colors",
                selectedStorage.name === storage.name
                  ? "border-foreground bg-foreground text-background"
                  : "border-border hover:border-foreground"
              )}
            >
              <span>{storage.name}</span>
              <span className="ml-2 text-xs opacity-70">
                ${storage.price.toLocaleString()}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div className="mt-8">
        <span className="text-sm font-medium">Quantity</span>
        <div className="mt-3 flex items-center gap-4">
          <div className="flex items-center rounded-xl border border-border">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="p-3 hover:bg-secondary transition-colors rounded-l-xl"
              disabled={quantity <= 1}
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="w-12 text-center font-medium">{quantity}</span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="p-3 hover:bg-secondary transition-colors rounded-r-xl"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
          <span
            className={cn(
              "flex items-center gap-2 text-sm",
              product.inStock ? "text-green-600" : "text-destructive"
            )}
          >
            <span
              className={cn(
                "h-2 w-2 rounded-full",
                product.inStock ? "bg-green-600" : "bg-destructive"
              )}
            />
            {product.inStock ? "In Stock" : "Out of Stock"}
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <Button size="lg" className="flex-1 rounded-xl" disabled={!product.inStock}>
          <ShoppingBag className="mr-2 h-5 w-5" />
          Add to Cart
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="flex-1 rounded-xl"
          disabled={!product.inStock}
        >
          Buy Now
        </Button>
        <Button
          size="lg"
          variant="outline"
          className={cn("rounded-xl", isWishlisted && "text-destructive")}
          onClick={() => setIsWishlisted(!isWishlisted)}
        >
          <Heart className={cn("h-5 w-5", isWishlisted && "fill-current")} />
        </Button>
      </div>

      {/* Trust Badges */}
      <div className="mt-8 grid grid-cols-2 gap-4">
        <div className="flex items-center gap-3 rounded-xl bg-secondary p-4">
          <Truck className="h-5 w-5 text-muted-foreground" />
          <div>
            <p className="text-sm font-medium">Free Delivery</p>
            <p className="text-xs text-muted-foreground">Orders over $299</p>
          </div>
        </div>
        <div className="flex items-center gap-3 rounded-xl bg-secondary p-4">
          <Shield className="h-5 w-5 text-muted-foreground" />
          <div>
            <p className="text-sm font-medium">Official Warranty</p>
            <p className="text-xs text-muted-foreground">1 Year Coverage</p>
          </div>
        </div>
        <div className="flex items-center gap-3 rounded-xl bg-secondary p-4">
          <CreditCard className="h-5 w-5 text-muted-foreground" />
          <div>
            <p className="text-sm font-medium">0% Installments</p>
            <p className="text-xs text-muted-foreground">Up to 24 months</p>
          </div>
        </div>
        <div className="flex items-center gap-3 rounded-xl bg-secondary p-4">
          <Check className="h-5 w-5 text-muted-foreground" />
          <div>
            <p className="text-sm font-medium">100% Original</p>
            <p className="text-xs text-muted-foreground">Certified Products</p>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="mt-8 flex items-center gap-4 rounded-xl border border-border p-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
          <MessageCircle className="h-5 w-5" />
        </div>
        <div className="flex-1">
          <p className="font-medium">Need help with this product?</p>
          <p className="text-sm text-muted-foreground">
            Our experts are available 24/7
          </p>
        </div>
        <Button variant="outline" className="rounded-full">
          Contact Us
        </Button>
      </div>
    </div>
  )
}
