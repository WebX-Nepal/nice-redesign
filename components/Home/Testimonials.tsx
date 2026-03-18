import { div } from "framer-motion/client"
import { TestimonialsSection } from "../ui/testimonials-with-marquee"
import { InfiniteSlider } from "../ui/infinite-slider-horizontal"
import Image from "next/image"
import { testimonials } from "@/constants/constant"

export function Testimonials() {
  return (
    <TestimonialsSection
      title="Trusted by many worldwide"
      description="Trusted by companies across UAE, Qatar, and Saudi Arabia for skilled and verified workforce."
      testimonials={testimonials}
    />
  )
}