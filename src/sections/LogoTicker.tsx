import acmeLogo from "@/assets/logo-acme.png"
import quantumLogo from "@/assets/logo-quantum.png"
import echoLogo from "@/assets/logo-echo.png"
import celestialLogo from "@/assets/logo-celestial.png"
import pulseLogo from "@/assets/logo-pulse.png"
import apexLogo from "@/assets/logo-apex.png"
import Image from "next/image"

export const LogoTicker = () => {
  return (
    <section className="bg-white py-8 md:py-12">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <div className="flex flex-none gap-14">
            <Image
              src={acmeLogo}
              className="logo-ticker-image"
              alt="Acme Logo"
            />
            <Image
              src={quantumLogo}
              className="logo-ticker-image"
              alt="Quantum Logo"
            />
            <Image
              src={echoLogo}
              className="logo-ticker-image"
              alt="Echo Logo"
            />
            <Image
              src={celestialLogo}
              className="logo-ticker-image"
              alt="Celestial Logo"
            />
            <Image
              src={pulseLogo}
              className="logo-ticker-image"
              alt="Pulse Logo"
            />
            <Image
              src={apexLogo}
              className="logo-ticker-image"
              alt="Apex Logo"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
