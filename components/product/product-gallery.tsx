"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ProductGalleryProps {
  images: string[]
  name: string
}

export function ProductGallery({ images, name }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)

  const goToPrevious = () => {
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-square overflow-hidden rounded-3xl bg-secondary">
        <Image
          src={images[selectedIndex]}
          alt={`${name} - Image ${selectedIndex + 1}`}
          fill
          className={cn(
            "object-cover transition-transform duration-300",
            isZoomed && "scale-150 cursor-zoom-out"
          )}
          onClick={() => setIsZoomed(!isZoomed)}
          priority
        />

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <Button
              variant="secondary"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/90 backdrop-blur-sm shadow-lg opacity-0 hover:opacity-100 transition-opacity group-hover:opacity-100"
              onClick={goToPrevious}
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous image</span>
            </Button>
            <Button
              variant="secondary"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/90 backdrop-blur-sm shadow-lg opacity-0 hover:opacity-100 transition-opacity group-hover:opacity-100"
              onClick={goToNext}
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next image</span>
            </Button>
          </>
        )}

        {/* Zoom Button */}
        <button
          onClick={() => setIsZoomed(!isZoomed)}
          className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-background/90 backdrop-blur-sm shadow-lg hover:bg-background transition-colors"
        >
          <ZoomIn className="h-5 w-5" />
          <span className="sr-only">Zoom image</span>
        </button>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={cn(
                "relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl transition-all",
                selectedIndex === index
                  ? "ring-2 ring-foreground ring-offset-2"
                  : "opacity-60 hover:opacity-100"
              )}
            >
              <Image
                src={image}
                alt={`${name} thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Image Counter */}
      <div className="flex justify-center">
        <div className="flex gap-1.5">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={cn(
                "h-1.5 rounded-full transition-all",
                selectedIndex === index
                  ? "w-6 bg-foreground"
                  : "w-1.5 bg-foreground/20"
              )}
            >
              <span className="sr-only">Go to image {index + 1}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
