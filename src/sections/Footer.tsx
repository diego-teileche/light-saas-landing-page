import logo from "@/assets/logosaas.png"
import Image from "next/image"
import SocialX from "@/assets/social-x.svg"
import SocialInsta from "@/assets/social-insta.svg"
import SocialLinkedIn from "@/assets/social-linkedin.svg"
import SocialPin from "@/assets/social-pin.svg"
import SocialYoutube from "@/assets/social-youtube.svg"

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <Image src={logo} height={40} alt="SaaS Logo" />
        <nav>
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Customers</a>
          <a href="#">Pricing</a>
          <a href="#">Help</a>
          <a href="#">Careers</a>
        </nav>
        <div>
          <SocialX />
          <SocialInsta />
          <SocialLinkedIn />
          <SocialPin />
          <SocialYoutube />
        </div>
        <p>&copy; 2024 Your Company, Inc. All rights reserved.</p>
      </div>
    </footer>
  )
}
