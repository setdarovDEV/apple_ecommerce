import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CartItems } from "@/components/cart/cart-items"
import { CartSummary } from "@/components/cart/cart-summary"
import { CartEmpty } from "@/components/cart/cart-empty"

export const metadata: Metadata = {
  title: "Shopping Cart | APEX Store",
  description: "Review your cart and proceed to checkout",
}

// Demo cart data
const cartItems = [
  {
    id: "1",
    productId: "iphone-16-pro-max",
    name: "iPhone 16 Pro Max",
    variant: "256GB - Natural Titanium",
    price: 1199,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1696446702183-cbd13d78e1e7?w=300&q=80",
    inStock: true,
  },
  {
    id: "2",
    productId: "airpods-pro-2",
    name: "AirPods Pro 2nd Generation",
    variant: "USB-C",
    price: 249,
    quantity: 2,
    image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=300&q=80",
    inStock: true,
  },
]

export default function CartPage() {
  const isEmpty = cartItems.length === 0

  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20 min-h-screen">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="font-serif text-3xl sm:text-4xl">Shopping Cart</h1>
            {!isEmpty && (
              <p className="mt-2 text-muted-foreground">
                {cartItems.length} {cartItems.length === 1 ? "item" : "items"} in your cart
              </p>
            )}
          </div>

          {isEmpty ? (
            <CartEmpty />
          ) : (
            <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
              <div className="lg:col-span-2">
                <CartItems items={cartItems} />
              </div>
              <div>
                <CartSummary items={cartItems} />
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
