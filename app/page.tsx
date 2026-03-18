import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/home/hero-section"
import { CategoriesSection } from "@/components/home/categories-section"
import { BestSellersSection } from "@/components/home/best-sellers-section"
import { NewArrivalsSection } from "@/components/home/new-arrivals-section"
import { PromoBanner } from "@/components/home/promo-banner"
import { WhyChooseUsSection } from "@/components/home/why-choose-us-section"
import { PaymentOptionsSection } from "@/components/home/payment-options-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { TrustSection } from "@/components/home/trust-section"
import { NewsletterSection } from "@/components/home/newsletter-section"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <CategoriesSection />
        <BestSellersSection />
        <PromoBanner />
        <NewArrivalsSection />
        <WhyChooseUsSection />
        <PaymentOptionsSection />
        <TestimonialsSection />
        <TrustSection />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  )
}
