import productImage from "@/assets/product-image.png"
import pyramidImage from "@/assets/pyramid.png"
import tubeImage from "@/assets/tube.png"
import Image from "next/image"

export const ProductShowcase = () => {
  return (
    <section className="overflow-x-clip bg-gradient-to-b from-white to-[#d2dcff] py-24">
      <div className="container">
        <div className="mx-auto max-w-[540px]">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="mt-5 bg-gradient-to-b from-black to-[#001e80] bg-clip-text text-center text-3xl font-bold tracking-tighter text-transparent md:text-[54px] md:leading-[60px]">
            A more effective way to track progress
          </h2>
          <p className="mt-5 text-center text-[22px] leading-[30px] tracking-tight text-[#010d3e]">
            Effortlessly turn your ideas into a fully functional, responsive,
            SaaS website in just minutes with this template
          </p>
        </div>

        <div className="relative">
          <Image src={productImage} className="mt-10" alt="Product Image" />
          <Image
            src={pyramidImage}
            className="absolute -right-36 -top-32 hidden md:block"
            height={262}
            width={262}
            alt="Pyramid Image"
          />
          <Image
            src={tubeImage}
            height={248}
            className="absolute -left-36 bottom-24 hidden md:block"
            alt="Tube Image"
          />
        </div>
      </div>
    </section>
  )
}
