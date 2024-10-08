"use client"
import { useTitleChanger } from "@/hooks/useTitleChanger"
import { CallToAction } from "@/sections/CallToAction"
import { Footer } from "@/sections/Footer"
import { Header } from "@/sections/Header"
import { Hero } from "@/sections/Hero"
import { LogoTicker } from "@/sections/LogoTicker"
import { Pricing } from "@/sections/Pricing"
import { ProductShowcase } from "@/sections/ProductShowcase"
import { Testimonials } from "@/sections/Testimonials"

export const runtime = "edge"

export default function Home() {
  useTitleChanger({
    defaultTitle: "Light Saas Landing Page | Diego Tech",
    blurTitle: "I miss you! 😭 | Diego Tech",
  })

  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <ProductShowcase />
      <Pricing />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  )
}
