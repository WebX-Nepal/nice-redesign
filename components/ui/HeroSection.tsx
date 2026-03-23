import Image from 'next/image'
import React from 'react'

interface HeroSectionProps {
  title: string
  description: string
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
}) => {
  return (
    <section className="relative w-full h-[70vh] flex items-center justify-center">
      
      <Image
        src="/About/about_hero.jpg"
        alt={title}
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="z-40 max-w-7xl mx-auto flex flex-col gap-10 items-center">
        <h1 className="text-3xl font-bold font-montserrat  text-[#2089CA]">
          {title}
        </h1>

        <p className="text-sm md:text-lg text-neutral-200 text-center max-w-2xl mx-auto">
          {description}
        </p>
      </div>
    </section>
  )
}

export default HeroSection