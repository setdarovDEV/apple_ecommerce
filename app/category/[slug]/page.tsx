import { notFound } from "next/navigation"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CategoryHeader } from "@/components/category/category-header"
import { ProductFilters } from "@/components/category/product-filters"
import { ProductGrid } from "@/components/category/product-grid"

const categoryData: Record<string, { name: string; description: string; banner: string }> = {
  iphone: {
    name: "iPhone",
    description: "The ultimate smartphone experience. Powerful. Beautiful. Durable.",
    banner: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=1600&q=80",
  },
  macbook: {
    name: "MacBook",
    description: "Pro-level performance in a stunning design. Supercharged by Apple silicon.",
    banner: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1600&q=80",
  },
  ipad: {
    name: "iPad",
    description: "Your next computer is not a computer. Versatile. Powerful. Magical.",
    banner: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=1600&q=80",
  },
  watch: {
    name: "Apple Watch",
    description: "The ultimate device for a healthy life. On your wrist.",
    banner: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=1600&q=80",
  },
  airpods: {
    name: "AirPods",
    description: "Immersive sound experiences with magical simplicity.",
    banner: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=1600&q=80",
  },
  accessories: {
    name: "Accessories",
    description: "Complete your Apple experience with premium accessories.",
    banner: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=1600&q=80",
  },
}

const allProducts = [
  {
    id: "iphone-16-pro-max",
    name: "iPhone 16 Pro Max 256GB Natural Titanium",
    category: "iPhone",
    slug: "iphone",
    price: 1199,
    originalPrice: 1299,
    image: "https://images.unsplash.com/photo-1696446702183-cbd13d78e1e7?w=600&q=80",
    badge: "Best Seller",
    monthlyPayment: 99,
    isNew: true,
    storage: "256GB",
    color: "Natural Titanium",
  },
  {
    id: "iphone-16-pro",
    name: "iPhone 16 Pro 128GB Desert Titanium",
    category: "iPhone",
    slug: "iphone",
    price: 999,
    image: "https://images.unsplash.com/photo-1696446702183-cbd13d78e1e7?w=600&q=80",
    monthlyPayment: 83,
    isNew: true,
    storage: "128GB",
    color: "Desert Titanium",
  },
  {
    id: "iphone-15",
    name: "iPhone 15 128GB Blue",
    category: "iPhone",
    slug: "iphone",
    price: 799,
    originalPrice: 899,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&q=80",
    monthlyPayment: 66,
    storage: "128GB",
    color: "Blue",
  },
  {
    id: "iphone-15-plus",
    name: "iPhone 15 Plus 256GB Pink",
    category: "iPhone",
    slug: "iphone",
    price: 899,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&q=80",
    monthlyPayment: 74,
    storage: "256GB",
    color: "Pink",
  },
  {
    id: "macbook-pro-16",
    name: "MacBook Pro 16-inch M3 Pro 512GB",
    category: "MacBook",
    slug: "macbook",
    price: 2499,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&q=80",
    monthlyPayment: 208,
    storage: "512GB",
    color: "Space Black",
  },
  {
    id: "macbook-pro-14",
    name: "MacBook Pro 14-inch M3 512GB",
    category: "MacBook",
    slug: "macbook",
    price: 1999,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&q=80",
    monthlyPayment: 166,
    storage: "512GB",
    color: "Silver",
  },
  {
    id: "macbook-air-15",
    name: "MacBook Air 15-inch M3 256GB",
    category: "MacBook",
    slug: "macbook",
    price: 1299,
    image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=600&q=80",
    badge: "Popular",
    monthlyPayment: 108,
    isNew: true,
    storage: "256GB",
    color: "Midnight",
  },
  {
    id: "macbook-air-13",
    name: "MacBook Air 13-inch M3 256GB",
    category: "MacBook",
    slug: "macbook",
    price: 1099,
    image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=600&q=80",
    monthlyPayment: 91,
    storage: "256GB",
    color: "Starlight",
  },
  {
    id: "ipad-pro-13",
    name: "iPad Pro 13-inch M4 256GB WiFi",
    category: "iPad",
    slug: "ipad",
    price: 1299,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&q=80",
    badge: "New",
    monthlyPayment: 108,
    isNew: true,
    storage: "256GB",
    color: "Space Black",
  },
  {
    id: "ipad-pro-11",
    name: "iPad Pro 11-inch M4 256GB WiFi",
    category: "iPad",
    slug: "ipad",
    price: 999,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&q=80",
    monthlyPayment: 83,
    isNew: true,
    storage: "256GB",
    color: "Silver",
  },
  {
    id: "ipad-air-13",
    name: "iPad Air 13-inch M2 128GB WiFi",
    category: "iPad",
    slug: "ipad",
    price: 799,
    image: "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=600&q=80",
    monthlyPayment: 66,
    storage: "128GB",
    color: "Blue",
  },
  {
    id: "ipad-mini",
    name: "iPad mini 7th Gen 128GB WiFi",
    category: "iPad",
    slug: "ipad",
    price: 499,
    image: "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=600&q=80",
    monthlyPayment: 41,
    isNew: true,
    storage: "128GB",
    color: "Purple",
  },
  {
    id: "apple-watch-ultra-2",
    name: "Apple Watch Ultra 2 GPS + Cellular 49mm",
    category: "Watch",
    slug: "watch",
    price: 799,
    image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=600&q=80",
    badge: "Popular",
    monthlyPayment: 66,
    isNew: true,
    color: "Titanium",
  },
  {
    id: "apple-watch-series-10",
    name: "Apple Watch Series 10 GPS 46mm",
    category: "Watch",
    slug: "watch",
    price: 429,
    image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=600&q=80",
    monthlyPayment: 35,
    isNew: true,
    color: "Silver",
  },
  {
    id: "apple-watch-se",
    name: "Apple Watch SE GPS 44mm",
    category: "Watch",
    slug: "watch",
    price: 249,
    originalPrice: 279,
    image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=600&q=80",
    monthlyPayment: 20,
    color: "Midnight",
  },
  {
    id: "airpods-pro-2",
    name: "AirPods Pro 2nd Generation USB-C",
    category: "AirPods",
    slug: "airpods",
    price: 249,
    image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=600&q=80",
    badge: "Best Seller",
    monthlyPayment: 20,
  },
  {
    id: "airpods-4",
    name: "AirPods 4 with Active Noise Cancellation",
    category: "AirPods",
    slug: "airpods",
    price: 179,
    image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=600&q=80",
    monthlyPayment: 14,
    isNew: true,
  },
  {
    id: "airpods-max",
    name: "AirPods Max Space Gray",
    category: "AirPods",
    slug: "airpods",
    price: 549,
    image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=600&q=80",
    monthlyPayment: 45,
    color: "Space Gray",
  },
  {
    id: "magic-keyboard",
    name: "Magic Keyboard with Touch ID",
    category: "Accessories",
    slug: "accessories",
    price: 199,
    image: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=600&q=80",
    monthlyPayment: 16,
  },
  {
    id: "magic-mouse",
    name: "Magic Mouse USB-C",
    category: "Accessories",
    slug: "accessories",
    price: 99,
    image: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=600&q=80",
    monthlyPayment: 8,
  },
  {
    id: "magsafe-charger",
    name: "MagSafe Charger 2m",
    category: "Accessories",
    slug: "accessories",
    price: 49,
    image: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=600&q=80",
  },
  {
    id: "iphone-case",
    name: "iPhone 16 Pro Silicone Case",
    category: "Accessories",
    slug: "accessories",
    price: 49,
    image: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=600&q=80",
    color: "Lake Green",
  },
]

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const category = categoryData[slug]
  if (!category) return { title: "Category Not Found" }
  
  return {
    title: `${category.name} | APEX Store`,
    description: category.description,
  }
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params
  const category = categoryData[slug]
  
  if (!category) {
    notFound()
  }

  const products = allProducts.filter((product) => product.slug === slug)

  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        <CategoryHeader
          name={category.name}
          description={category.description}
          banner={category.banner}
          productCount={products.length}
        />
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <ProductFilters />
            <ProductGrid products={products} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
