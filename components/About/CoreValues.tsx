import Image from 'next/image';
import React from 'react'

const values = [
  { name: "Excellence", img: "/hero1.avif" },
  { name: "Honesty", img: "/hero2.avif" },
  { name: "Loyalty", img: "/hero3.avif" },
  { name: "Respect", img: "/hero4.avif" },
  { name: "Dedication", img: "/hero5.avif" },
  { name: "Team work", img: "/hero6.avif" },
  { name: "Empowerment", img: "/hero1.avif" },
  { name: "Environment Responsibility", img: "/hero2.avif" },
];

const CoreValues = () => {
  return (
    <div className='layout h-[80vh] flex flex-col items-center text-center gap-10'>
        <h1 className='font-bold text-3xl'>Our Core Values</h1>
        <p className='text-xl'>Discover the principles and standards that drive our commitment to excellence, integrity, and innovation in everything we do.</p>
    
        <div className="grid grid-cols-2 gap-6 w-full">
            {values.map((value, index) => (
                <div key={index} className="relative group bg-gray-100 p-8 rounded-lg cursor-pointer overflow-visible">
                <span className="text-lg font-medium">{value.name}</span>

                {/* Hover image */}
                <div className="absolute top-10 left-[80%]  opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-250 transition-all duration-300 ease-out z-50">
                    <Image
                    src={value.img}
                    alt={value.name}
                    width={400}
                    height={400}
                    className="rounded-lg shadow-lg"
                    />
                </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default CoreValues