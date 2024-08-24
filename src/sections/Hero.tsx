import ArrowIcon from "@/assets/arrow-right.svg"
import cogImage from "@/assets/cog.png"
import Image from "next/image"

export const Hero = () => {
  return (
    <section className="bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183ec2,#eaeefe_66%)] pb-20 pt-8">
      <div className="container">
        <div>
          <div className="inline-flex rounded-lg border border-[#222]/10 px-3 py-1 text-sm tracking-tight">
            Version 2.0 is here
          </div>
          <h1 className="mt-6 bg-gradient-to-br from-black to-[#001e80] bg-clip-text text-5xl font-bold tracking-tighter text-transparent">
            Pathway to productivity
          </h1>
          <p className="mt-6 text-xl tracking-tight text-[#010d3e]">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes
          </p>
          <div className="mt-[30px] flex items-center gap-1">
            <button className="btn btn-primary">Get for free</button>
            <button className="btn btn-text gap-1">
              <span>Learn more</span>
              <ArrowIcon className="size-5" />
            </button>
          </div>
        </div>

        <div className="mt-20">
          <Image src={cogImage} alt="Cog Image" />
        </div>
      </div>
    </section>
  )
}
