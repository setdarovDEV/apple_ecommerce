import { notFound } from "next/navigation"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ProductGallery } from "@/components/product/product-gallery"
import { ProductInfo } from "@/components/product/product-info"
import { ProductTabs } from "@/components/product/product-tabs"
import { RelatedProducts } from "@/components/product/related-products"

const products: Record<string, {
  id: string
  name: string
  category: string
  categorySlug: string
  price: number
  originalPrice?: number
  images: string[]
  badge?: string
  monthlyPayment?: number
  isNew?: boolean
  inStock: boolean
  colors: { name: string; value: string }[]
  storages: { name: string; price: number }[]
  description: string
  features: string[]
  specs: { name: string; value: string }[]
  rating: number
  reviewCount: number
}> = {
  "iphone-16-pro-max": {
    id: "iphone-16-pro-max",
    name: "iPhone 16 Pro Max",
    category: "iPhone",
    categorySlug: "iphone",
    price: 1199,
    originalPrice: 1299,
    images: [
      "https://images.unsplash.com/photo-1696446702183-cbd13d78e1e7?w=800&q=80",
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&q=80",
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&q=80",
    ],
    badge: "Best Seller",
    monthlyPayment: 99,
    isNew: true,
    inStock: true,
    colors: [
      { name: "Natural Titanium", value: "#8C8680" },
      { name: "Desert Titanium", value: "#C4A77D" },
      { name: "Black Titanium", value: "#3C3C3C" },
      { name: "White Titanium", value: "#F0F0F0" },
    ],
    storages: [
      { name: "256GB", price: 1199 },
      { name: "512GB", price: 1399 },
      { name: "1TB", price: 1599 },
    ],
    description: "iPhone 16 Pro Max features a strong and light titanium design with a larger 6.9-inch Super Retina XDR display. It's powered by A18 Pro, the fastest chip ever in a smartphone.",
    features: [
      "A18 Pro chip with 6-core GPU",
      "6.9-inch Super Retina XDR display",
      "Camera Control for pro camera features",
      "48MP Fusion camera with 5x optical zoom",
      "Up to 33 hours video playback",
      "USB-C with USB 3 speeds",
      "Action button for instant access",
      "Crash Detection and Emergency SOS",
    ],
    specs: [
      { name: "Display", value: "6.9-inch Super Retina XDR OLED" },
      { name: "Chip", value: "A18 Pro with 6-core GPU" },
      { name: "Camera", value: "48MP + 12MP + 12MP" },
      { name: "Front Camera", value: "12MP TrueDepth" },
      { name: "Battery", value: "Up to 33 hours video" },
      { name: "Storage", value: "256GB / 512GB / 1TB" },
      { name: "Weight", value: "227 grams" },
      { name: "Water Resistance", value: "IP68 (6 meters, 30 min)" },
    ],
    rating: 4.9,
    reviewCount: 2847,
  },
  "macbook-pro-16": {
    id: "macbook-pro-16",
    name: "MacBook Pro 16-inch",
    category: "MacBook",
    categorySlug: "macbook",
    price: 2499,
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80",
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800&q=80",
    ],
    monthlyPayment: 208,
    inStock: true,
    colors: [
      { name: "Space Black", value: "#1D1D1F" },
      { name: "Silver", value: "#E3E4E5" },
    ],
    storages: [
      { name: "512GB", price: 2499 },
      { name: "1TB", price: 2699 },
      { name: "2TB", price: 3099 },
    ],
    description: "MacBook Pro 16-inch with M3 Pro delivers exceptional performance for demanding workflows. With up to 22 hours of battery life and a stunning Liquid Retina XDR display.",
    features: [
      "Apple M3 Pro chip",
      "16.2-inch Liquid Retina XDR display",
      "Up to 22 hours battery life",
      "1080p FaceTime HD camera",
      "Six-speaker sound system",
      "Three Thunderbolt 4 ports",
      "HDMI port and SDXC card slot",
      "MagSafe 3 charging",
    ],
    specs: [
      { name: "Display", value: "16.2-inch Liquid Retina XDR" },
      { name: "Chip", value: "Apple M3 Pro" },
      { name: "Memory", value: "18GB unified memory" },
      { name: "Storage", value: "512GB / 1TB / 2TB SSD" },
      { name: "Battery", value: "Up to 22 hours" },
      { name: "Weight", value: "2.14 kg" },
      { name: "Ports", value: "3x Thunderbolt 4, HDMI, SDXC" },
      { name: "Keyboard", value: "Magic Keyboard with Touch ID" },
    ],
    rating: 4.8,
    reviewCount: 1523,
  },
}

// Default product for demo
const defaultProduct = products["iphone-16-pro-max"]

interface PageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params
  const product = products[id] || defaultProduct
  
  return {
    title: `${product.name} | APEX Store`,
    description: product.description,
  }
}

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params
  const product = products[id] || defaultProduct

  if (!product) {
    notFound()
  }

  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            <ProductGallery images={product.images} name={product.name} />
            <ProductInfo product={product} />
          </div>
        </div>
        <ProductTabs product={product} />
        <RelatedProducts category={product.categorySlug} currentProductId={product.id} />
      </main>
      <Footer />
    </>
  )
}
