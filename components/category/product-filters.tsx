"use client"

import { useState } from "react"
import { ChevronDown, X, SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const filters = [
  {
    id: "price",
    name: "Price Range",
    options: [
      { value: "under-500", label: "Under $500" },
      { value: "500-1000", label: "$500 - $1,000" },
      { value: "1000-2000", label: "$1,000 - $2,000" },
      { value: "over-2000", label: "Over $2,000" },
    ],
  },
  {
    id: "storage",
    name: "Storage",
    options: [
      { value: "64gb", label: "64GB" },
      { value: "128gb", label: "128GB" },
      { value: "256gb", label: "256GB" },
      { value: "512gb", label: "512GB" },
      { value: "1tb", label: "1TB" },
    ],
  },
  {
    id: "color",
    name: "Color",
    options: [
      { value: "space-black", label: "Space Black" },
      { value: "silver", label: "Silver" },
      { value: "gold", label: "Gold" },
      { value: "titanium", label: "Titanium" },
      { value: "blue", label: "Blue" },
      { value: "pink", label: "Pink" },
    ],
  },
  {
    id: "availability",
    name: "Availability",
    options: [
      { value: "in-stock", label: "In Stock" },
      { value: "pre-order", label: "Pre-Order" },
    ],
  },
]

export function ProductFilters() {
  const [openSections, setOpenSections] = useState<string[]>(["price", "storage"])
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({})
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const toggleSection = (id: string) => {
    setOpenSections((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    )
  }

  const toggleFilter = (filterId: string, value: string) => {
    setSelectedFilters((prev) => {
      const current = prev[filterId] || []
      const updated = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value]
      return { ...prev, [filterId]: updated }
    })
  }

  const clearAllFilters = () => {
    setSelectedFilters({})
  }

  const totalSelected = Object.values(selectedFilters).flat().length

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">Filters</h3>
        {totalSelected > 0 && (
          <button
            onClick={clearAllFilters}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Clear all ({totalSelected})
          </button>
        )}
      </div>

      {/* Filter Sections */}
      {filters.map((filter) => (
        <div key={filter.id} className="border-t border-border pt-4">
          <button
            onClick={() => toggleSection(filter.id)}
            className="flex w-full items-center justify-between py-2"
          >
            <span className="text-sm font-medium">{filter.name}</span>
            <ChevronDown
              className={cn(
                "h-4 w-4 transition-transform",
                openSections.includes(filter.id) && "rotate-180"
              )}
            />
          </button>
          {openSections.includes(filter.id) && (
            <div className="mt-2 space-y-2">
              {filter.options.map((option) => {
                const isSelected = selectedFilters[filter.id]?.includes(option.value)
                return (
                  <label
                    key={option.value}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <div
                      className={cn(
                        "h-5 w-5 rounded border transition-colors flex items-center justify-center",
                        isSelected
                          ? "bg-foreground border-foreground"
                          : "border-border group-hover:border-foreground/50"
                      )}
                    >
                      {isSelected && (
                        <svg
                          className="h-3 w-3 text-background"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                    </div>
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => toggleFilter(filter.id, option.value)}
                      className="sr-only"
                    />
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      {option.label}
                    </span>
                  </label>
                )
              })}
            </div>
          )}
        </div>
      ))}
    </div>
  )

  return (
    <>
      {/* Mobile Filter Button */}
      <div className="lg:hidden">
        <Button
          variant="outline"
          onClick={() => setIsMobileOpen(true)}
          className="w-full justify-center gap-2"
        >
          <SlidersHorizontal className="h-4 w-4" />
          Filters
          {totalSelected > 0 && (
            <span className="ml-1 rounded-full bg-foreground px-2 py-0.5 text-xs text-background">
              {totalSelected}
            </span>
          )}
        </Button>
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-64 flex-shrink-0">
        <div className="sticky top-24">
          <FilterContent />
        </div>
      </aside>

      {/* Mobile Filter Modal */}
      <div
        className={cn(
          "fixed inset-0 z-50 lg:hidden transition-opacity",
          isMobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <div
          className="absolute inset-0 bg-foreground/20 backdrop-blur-sm"
          onClick={() => setIsMobileOpen(false)}
        />
        <div
          className={cn(
            "absolute bottom-0 left-0 right-0 max-h-[80vh] overflow-y-auto rounded-t-3xl bg-background p-6 transition-transform",
            isMobileOpen ? "translate-y-0" : "translate-y-full"
          )}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Filters</h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          <FilterContent />
          <div className="mt-8 flex gap-4">
            <Button
              variant="outline"
              className="flex-1"
              onClick={clearAllFilters}
            >
              Clear All
            </Button>
            <Button className="flex-1" onClick={() => setIsMobileOpen(false)}>
              Apply Filters
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
