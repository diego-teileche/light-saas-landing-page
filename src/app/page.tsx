"use client"
import { useTitleChanger } from "@/hooks/useTitleChanger"

export default function Home() {
  useTitleChanger({
    defaultTitle: "Light Saas Landing Page | Diego Tech",
    blurTitle: "I miss you! 😭 | Diego Tech",
  })

  return <h1>Diego Tech</h1>
}
