"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Instagram, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

const footerLinks = {
  shop: [
    { name: "iPhone", href: "/category/iphone" },
    { name: "MacBook", href: "/category/macbook" },
    { name: "iPad", href: "/category/ipad" },
    { name: "Apple Watch", href: "/category/watch" },
    { name: "AirPods", href: "/category/airpods" },
    { name: "Accessories", href: "/category/accessories" },
  ],
  support: [
    { name: "Contact Us", href: "/contact" },
    { name: "Delivery Info", href: "/delivery" },
    { name: "Warranty", href: "/warranty" },
    { name: "Returns", href: "/returns" },
    { name: "FAQ", href: "/faq" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Store", href: "/store" },
    { name: "Careers", href: "/careers" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
}

const paymentMethods = ["Visa", "Mastercard", "Apple Pay", "PayPal"]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Newsletter Section */}
      <div className="border-b border-background/10">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-serif text-3xl sm:text-4xl text-balance">
              Stay in the Loop
            </h3>
            <p className="mt-4 max-w-md text-background/70">
              Subscribe to receive exclusive offers, early access to new
              products, and insider updates.
            </p>
            <form className="mt-8 flex w-full max-w-md gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg bg-background/10 px-4 py-3 text-sm text-background placeholder:text-background/50 outline-none focus:ring-2 focus:ring-background/30 transition-all"
              />
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button className="bg-background text-foreground hover:bg-background/90">
                  Subscribe
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Brand */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Link href="/" className="flex items-center gap-2">
              <motion.div
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-background"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-base font-bold text-foreground">A</span>
              </motion.div>
              <span className="text-xl font-semibold tracking-tight">APEX</span>
            </Link>
            <p className="mt-6 max-w-sm text-background/70 leading-relaxed">
              Your trusted destination for original Apple products. Premium
              service, official warranty, and expert consultation for all your
              Apple needs.
            </p>
            <div className="mt-8 space-y-3">
              <a
                href="tel:+1234567890"
                className="flex items-center gap-3 text-background/70 hover:text-background transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>+1 (234) 567-890</span>
              </a>
              <a
                href="mailto:hello@apexstore.com"
                className="flex items-center gap-3 text-background/70 hover:text-background transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>hello@apexstore.com</span>
              </a>
              <p className="flex items-center gap-3 text-background/70">
                <MapPin className="h-4 w-4" />
                <span>123 Premium Avenue, Tech City</span>
              </p>
            </div>
          </motion.div>

          {/* Links */}
          {[
            { title: "Shop", links: footerLinks.shop },
            { title: "Support", links: footerLinks.support },
            { title: "Company", links: footerLinks.company },
          ].map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <h4 className="text-sm font-semibold uppercase tracking-wider">
                {section.title}
              </h4>
              <ul className="mt-6 space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-background/70 hover:text-background transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-background/10 pt-8 md:flex-row"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4">
            <motion.a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 hover:bg-background/20 transition-colors"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Instagram className="h-4 w-4" />
              <span className="sr-only">Instagram</span>
            </motion.a>
            <motion.a
              href="https://telegram.org"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 hover:bg-background/20 transition-colors"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Send className="h-4 w-4" />
              <span className="sr-only">Telegram</span>
            </motion.a>
          </div>

          <div className="flex items-center gap-3">
            {paymentMethods.map((method, i) => (
              <motion.div
                key={method}
                className="flex h-8 items-center justify-center rounded bg-background/10 px-3 text-xs font-medium"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                {method}
              </motion.div>
            ))}
          </div>

          <p className="text-sm text-background/50">
            © 2026 APEX Store. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
