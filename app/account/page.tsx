"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  User,
  Package,
  Heart,
  MapPin,
  CreditCard,
  Settings,
  LogOut,
  ChevronRight,
  Eye,
  EyeOff,
  Mail,
  Phone,
  Lock,
} from "lucide-react"

type Tab = "login" | "register"

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState<Tab>("login")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // Simulated user data
  const user = {
    name: "John Doe",
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
    memberSince: "January 2024",
    orders: 12,
    wishlistItems: 4,
  }

  const menuItems = [
    { icon: Package, label: "My Orders", href: "/account/orders", count: user.orders },
    { icon: Heart, label: "Wishlist", href: "/wishlist", count: user.wishlistItems },
    { icon: MapPin, label: "Addresses", href: "/account/addresses" },
    { icon: CreditCard, label: "Payment Methods", href: "/account/payments" },
    { icon: Settings, label: "Account Settings", href: "/account/settings" },
  ]

  const recentOrders = [
    {
      id: "APX-12345678",
      date: "March 15, 2026",
      status: "Delivered",
      total: 1199,
      items: 1,
    },
    {
      id: "APX-12345677",
      date: "March 10, 2026",
      status: "In Transit",
      total: 249,
      items: 1,
    },
    {
      id: "APX-12345676",
      date: "February 28, 2026",
      status: "Delivered",
      total: 2499,
      items: 1,
    },
  ]

  if (isLoggedIn) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-background pt-24 pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
              <Link href="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">My Account</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="rounded-2xl border border-border bg-card p-6">
                  {/* User Info */}
                  <div className="flex items-center gap-4 pb-6 border-b border-border">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-xl font-semibold">
                      {user.name.charAt(0)}
                    </div>
                    <div>
                      <h2 className="font-semibold">{user.name}</h2>
                      <p className="text-sm text-muted-foreground">{user.email}</p>
                    </div>
                  </div>

                  {/* Menu */}
                  <nav className="mt-6 space-y-1">
                    {menuItems.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="flex items-center justify-between rounded-xl px-4 py-3 text-sm hover:bg-secondary transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <item.icon className="h-5 w-5 text-muted-foreground" />
                          <span>{item.label}</span>
                        </div>
                        {item.count && (
                          <span className="text-xs text-muted-foreground">
                            {item.count}
                          </span>
                        )}
                      </Link>
                    ))}
                    <button
                      onClick={() => setIsLoggedIn(false)}
                      className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm text-destructive hover:bg-destructive/10 transition-colors"
                    >
                      <LogOut className="h-5 w-5" />
                      <span>Sign Out</span>
                    </button>
                  </nav>
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-3 space-y-8">
                {/* Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="rounded-2xl border border-border bg-card p-6">
                    <p className="text-sm text-muted-foreground">Total Orders</p>
                    <p className="mt-2 text-3xl font-semibold">{user.orders}</p>
                  </div>
                  <div className="rounded-2xl border border-border bg-card p-6">
                    <p className="text-sm text-muted-foreground">Wishlist Items</p>
                    <p className="mt-2 text-3xl font-semibold">{user.wishlistItems}</p>
                  </div>
                  <div className="rounded-2xl border border-border bg-card p-6">
                    <p className="text-sm text-muted-foreground">Member Since</p>
                    <p className="mt-2 text-lg font-semibold">{user.memberSince}</p>
                  </div>
                  <div className="rounded-2xl border border-border bg-card p-6">
                    <p className="text-sm text-muted-foreground">Loyalty Points</p>
                    <p className="mt-2 text-3xl font-semibold">2,450</p>
                  </div>
                </div>

                {/* Recent Orders */}
                <div className="rounded-2xl border border-border bg-card">
                  <div className="flex items-center justify-between p-6 border-b border-border">
                    <h3 className="font-semibold text-lg">Recent Orders</h3>
                    <Link
                      href="/account/orders"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      View All
                    </Link>
                  </div>
                  <div className="divide-y divide-border">
                    {recentOrders.map((order) => (
                      <div
                        key={order.id}
                        className="flex items-center justify-between p-6"
                      >
                        <div>
                          <p className="font-medium">{order.id}</p>
                          <p className="text-sm text-muted-foreground">
                            {order.date} &middot; {order.items} item
                            {order.items > 1 ? "s" : ""}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">
                            ${order.total.toLocaleString()}
                          </p>
                          <p
                            className={cn(
                              "text-sm",
                              order.status === "Delivered"
                                ? "text-green-600"
                                : "text-accent"
                            )}
                          >
                            {order.status}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Account Details */}
                <div className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="font-semibold text-lg mb-6">Account Details</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm text-muted-foreground">Full Name</label>
                      <p className="mt-1 font-medium">{user.name}</p>
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground">Email</label>
                      <p className="mt-1 font-medium">{user.email}</p>
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground">Phone</label>
                      <p className="mt-1 font-medium">{user.phone}</p>
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground">Member Since</label>
                      <p className="mt-1 font-medium">{user.memberSince}</p>
                    </div>
                  </div>
                  <Button variant="outline" className="mt-6 rounded-xl">
                    Edit Profile
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-24 pb-20">
        <div className="mx-auto max-w-md px-4 sm:px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">Account</span>
          </nav>

          <div className="rounded-2xl border border-border bg-card p-8">
            {/* Tabs */}
            <div className="flex rounded-xl bg-secondary p-1 mb-8">
              <button
                onClick={() => setActiveTab("login")}
                className={cn(
                  "flex-1 rounded-lg py-2.5 text-sm font-medium transition-colors",
                  activeTab === "login"
                    ? "bg-background shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                Sign In
              </button>
              <button
                onClick={() => setActiveTab("register")}
                className={cn(
                  "flex-1 rounded-lg py-2.5 text-sm font-medium transition-colors",
                  activeTab === "register"
                    ? "bg-background shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                Register
              </button>
            </div>

            {activeTab === "login" ? (
              /* Login Form */
              <form onSubmit={(e) => { e.preventDefault(); setIsLoggedIn(true); }} className="space-y-6">
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <div className="relative mt-2">
                    <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full rounded-xl border border-border bg-background py-3 pl-12 pr-4 outline-none focus:ring-2 focus:ring-ring"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Password</label>
                  <div className="relative mt-2">
                    <Lock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="w-full rounded-xl border border-border bg-background py-3 pl-12 pr-12 outline-none focus:ring-2 focus:ring-ring"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded border-border" />
                    <span className="text-muted-foreground">Remember me</span>
                  </label>
                  <Link
                    href="/forgot-password"
                    className="text-foreground hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
                <Button type="submit" className="w-full rounded-xl" size="lg">
                  Sign In
                </Button>
              </form>
            ) : (
              /* Register Form */
              <form onSubmit={(e) => { e.preventDefault(); setIsLoggedIn(true); }} className="space-y-6">
                <div>
                  <label className="text-sm font-medium">Full Name</label>
                  <div className="relative mt-2">
                    <User className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full rounded-xl border border-border bg-background py-3 pl-12 pr-4 outline-none focus:ring-2 focus:ring-ring"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <div className="relative mt-2">
                    <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full rounded-xl border border-border bg-background py-3 pl-12 pr-4 outline-none focus:ring-2 focus:ring-ring"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Phone</label>
                  <div className="relative mt-2">
                    <Phone className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                    <input
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      className="w-full rounded-xl border border-border bg-background py-3 pl-12 pr-4 outline-none focus:ring-2 focus:ring-ring"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Password</label>
                  <div className="relative mt-2">
                    <Lock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a password"
                      className="w-full rounded-xl border border-border bg-background py-3 pl-12 pr-12 outline-none focus:ring-2 focus:ring-ring"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">
                    Must be at least 8 characters
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1 rounded border-border" required />
                  <span className="text-sm text-muted-foreground">
                    I agree to the{" "}
                    <Link href="/terms" className="text-foreground hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-foreground hover:underline">
                      Privacy Policy
                    </Link>
                  </span>
                </div>
                <Button type="submit" className="w-full rounded-xl" size="lg">
                  Create Account
                </Button>
              </form>
            )}

            {/* Social Login */}
            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">
                    Or continue with
                  </span>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <Button variant="outline" className="rounded-xl">
                  <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="currentColor"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Google
                </Button>
                <Button variant="outline" className="rounded-xl">
                  <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  Apple
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
