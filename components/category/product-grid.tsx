"use client"

import { useState } from "react"
import { ChevronDown, LayoutGrid, List } from "lucide-react"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface Product {
  id: string
  name: string
  category: string
  price: number
  originalPrice?: number
  image: string
  badge?: string
  monthlyPayment?: number
  isNew?: boolean
}

interface ProductGridProps {
  products: Product[]
}

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "popular", label: "Most Popular" },
]

export function ProductGrid({ products }: ProductGridProps) {
  const [sortBy, setSortBy] = useState("featured")
  const [isSortOpen, setIsSortOpen] = useState(false)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case "price-asc":
        return a.price - b.price
      case "price-desc":
        return b.price - a.price
      case "newest":
        return a.isNew ? -1 : 1
      default:
        return 0
    }
  })

  return (
    <div className="flex-1">
      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <p className="text-sm text-muted-foreground">
          Showing <span className="font-medium text-foreground">{products.length}</span> results
        </p>

        <div className="flex items-center gap-4">
          {/* View Mode Toggle */}
          <div className="hidden sm:flex items-center gap-1 rounded-lg border border-border p-1">
            <button
              onClick={() => setViewMode("grid")}
              className={cn(
                "rounded-md p-2 transition-colors",
                viewMode === "grid"
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <LayoutGrid className="h-4 w-4" />
              <span className="sr-only">Grid view</span>
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={cn(
                "rounded-md p-2 transition-colors",
                viewMode === "list"
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <List className="h-4 w-4" />
              <span className="sr-only">List view</span>
            </button>
          </div>

          {/* Sort Dropdown */}
          <div className="relative">
            <Button
              variant="outline"
              onClick={() => setIsSortOpen(!isSortOpen)}
              className="gap-2"
            >
              Sort by: {sortOptions.find((o) => o.value === sortBy)?.label}
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform",
                  isSortOpen && "rotate-180"
                )}
              />
            </Button>

            {isSortOpen && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setIsSortOpen(false)}
                />
                <div className="absolute right-0 top-full mt-2 z-20 w-48 rounded-xl border border-border bg-card p-2 shadow-lg">
                  {sortOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        setSortBy(option.value)
                        setIsSortOpen(false)
                      }}
                      className={cn(
                        "w-full rounded-lg px-3 py-2 text-left text-sm transition-colors",
                        sortBy === option.value
                          ? "bg-secondary font-medium"
                          : "hover:bg-secondary"
                      )}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Products */}
      {sortedProducts.length > 0 ? (
        <div
          className={cn(
            "grid gap-6",
            viewMode === "grid"
              ? "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
              : "grid-cols-1"
          )}
        >
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="h-24 w-24 rounded-full bg-secondary flex items-center justify-center mb-4">
            <LayoutGrid className="h-10 w-10 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-semibold">No products found</h3>
          <p className="mt-2 text-sm text-muted-foreground max-w-sm">
            Try adjusting your filters or browse our other categories.
          </p>
        </div>
      )}

      {/* Load More */}
      {sortedProducts.length > 0 && sortedProducts.length >= 8 && (
        <div className="mt-12 flex justify-center">
          <Button variant="outline" size="lg" className="min-w-[200px]">
            Load More Products
          </Button>
        </div>
      )}
    </div>
  )
}
