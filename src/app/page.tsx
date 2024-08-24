"use client"
import { useTitleChanger } from "@/hooks/useTitleChanger"
import { Header } from "@/sections/Header"

export default function Home() {
  useTitleChanger({
    defaultTitle: "Light Saas Landing Page | Diego Tech",
    blurTitle: "I miss you! 😭 | Diego Tech",
  })

  return <Header />
}
