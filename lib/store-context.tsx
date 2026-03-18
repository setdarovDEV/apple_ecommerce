"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

// Product type
export interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  category: string
  badge?: string
  monthly?: number
  color?: string
  storage?: string
  quantity?: number
}

// Cart Item type
export interface CartItem extends Product {
  quantity: number
}

// Wishlist context type
interface StoreContextType {
  // Cart
  cart: CartItem[]
  addToCart: (product: Product, quantity?: number) => void
  removeFromCart: (productId: string) => void
  updateCartQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  cartTotal: number
  cartCount: number
  
  // Wishlist
  wishlist: Product[]
  addToWishlist: (product: Product) => void
  removeFromWishlist: (productId: string) => void
  isInWishlist: (productId: string) => boolean
  
  // Notifications
  notification: { message: string; type: 'success' | 'error' } | null
  showNotification: (message: string, type: 'success' | 'error') => void
}

const StoreContext = createContext<StoreContextType | undefined>(undefined)

export function StoreProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])
  const [wishlist, setWishlist] = useState<Product[]>([])
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' } | null>(null)
  const [isHydrated, setIsHydrated] = useState(false)

  // Load from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('applestore-cart')
    const savedWishlist = localStorage.getItem('applestore-wishlist')
    
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart))
      } catch (e) {
        console.error('Failed to parse cart', e)
      }
    }
    
    if (savedWishlist) {
      try {
        setWishlist(JSON.parse(savedWishlist))
      } catch (e) {
        console.error('Failed to parse wishlist', e)
      }
    }
    
    setIsHydrated(true)
  }, [])

  // Save to localStorage on change
  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem('applestore-cart', JSON.stringify(cart))
    }
  }, [cart, isHydrated])

  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem('applestore-wishlist', JSON.stringify(wishlist))
    }
  }, [wishlist, isHydrated])

  // Cart functions
  const addToCart = (product: Product, quantity: number = 1) => {
    setCart(prev => {
      const existingItem = prev.find(item => item.id === product.id)
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }
      return [...prev, { ...product, quantity }]
    })
    showNotification(`${product.name} added to cart`, 'success')
  }

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.id !== productId))
    showNotification('Item removed from cart', 'success')
  }

  const updateCartQuantity = (productId: string, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(productId)
      return
    }
    setCart(prev =>
      prev.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    )
  }

  const clearCart = () => {
    setCart([])
  }

  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0)
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0)

  // Wishlist functions
  const addToWishlist = (product: Product) => {
    if (!isInWishlist(product.id)) {
      setWishlist(prev => [...prev, product])
      showNotification(`${product.name} added to wishlist`, 'success')
    }
  }

  const removeFromWishlist = (productId: string) => {
    setWishlist(prev => prev.filter(item => item.id !== productId))
    showNotification('Item removed from wishlist', 'success')
  }

  const isInWishlist = (productId: string) => {
    return wishlist.some(item => item.id === productId)
  }

  // Notification
  const showNotification = (message: string, type: 'success' | 'error') => {
    setNotification({ message, type })
    setTimeout(() => setNotification(null), 3000)
  }

  return (
    <StoreContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        cartTotal,
        cartCount,
        wishlist,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        notification,
        showNotification,
      }}
    >
      {children}
      {/* Global Notification Toast */}
      {notification && (
        <div className="fixed bottom-4 right-4 z-50 animate-in slide-in-from-bottom-4 fade-in duration-300">
          <div className={`rounded-xl px-4 py-3 shadow-lg ${
            notification.type === 'success' 
              ? 'bg-foreground text-background' 
              : 'bg-red-500 text-white'
          }`}>
            <p className="text-sm font-medium">{notification.message}</p>
          </div>
        </div>
      )}
    </StoreContext.Provider>
  )
}

export function useStore() {
  const context = useContext(StoreContext)
  if (context === undefined) {
    throw new Error('useStore must be used within a StoreProvider')
  }
  return context
}
