"use client"
import productImage from "@/assets/product-image.png"
import pyramidImage from "@/assets/pyramid.png"
import tubeImage from "@/assets/tube.png"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export const ProductShowcase = () => {
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])

  return (
    <section
      ref={sectionRef}
      className="overflow-x-clip bg-gradient-to-b from-white to-[#d2dcff] py-24"
    >
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="section-title mt-5">
            A more effective way to track progress
          </h2>
          <p className="section-description mt-5">
            Effortlessly turn your ideas into a fully functional, responsive,
            SaaS website in just minutes with this template
          </p>
        </div>

        <div className="relative">
          <Image src={productImage} className="mt-10" alt="Product Image" />
          <motion.img
            src={pyramidImage.src}
            height={262}
            width={262}
            style={{ translateY }}
            className="absolute -right-36 -top-32 hidden md:block"
            alt="Pyramid Image"
          />
          <motion.img
            src={tubeImage.src}
            height={248}
            width={248}
            style={{ translateY }}
            className="absolute -left-36 bottom-24 hidden md:block"
            alt="Tube Image"
          />
        </div>
      </div>
    </section>
  )
}
