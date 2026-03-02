import { HeroSection } from "@/components/home/hero-section"
import { AdvantagesSection } from "@/components/home/advantages-section"
import { FeaturedProducts } from "@/components/home/featured-products"
import { TrustIndicators } from "@/components/home/trust-indicators"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProducts />
      <AdvantagesSection />
      <TrustIndicators />
      <CTASection />
    </>
  )
}
