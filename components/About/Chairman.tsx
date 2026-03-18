import Image from 'next/image'
import React from 'react'

const Chairman = () => {
  return (
    <div className='flex justify-between layout h-[80vh] gap-10'>
        <div className='w-2/3 flex flex-col gap-4'>
            <h1 className='text-3xl font-bold'>Chairman's Message</h1>

            <h1 className='text-2xl'>Nirmal GC</h1>

            <p className='text-xl'>Chairman, Nice Recruiting Agency</p>

            <div className='flex flex-col gap-8'>
                <p>"It is with great pride and enthusiasm that I address you today as the Chairman of Nice Recruiting Agency - a leading provider of comprehensive manpower solutions. As we embark on an exciting new chapter, I am honored to share our vision and the core values that guide us in empowering organizations and individuals to thrive.</p>

                <p>Since our inception, Nice Recruiting Agency has been steadfastly committed to revolutionizing the way businesses access and manage their most valuable resource - human capital. We are very proud of the fact that 80% plus of our work is repeated with preferred clients who come to trust and acknowledge the fact.</p>

                <p>Through our unwavering dedication to excellence, innovative approach, and deep industry expertise, we have established ourselves as a trusted partner that consistently delivers tailored workforce solutions to meet the evolving needs of our clients."</p>
            </div>
        </div>
        <div className='w-1/3 h-100 relative mt-10'>
            <Image src="/Leaders/profile.png" alt='chairman' fill className='object-cover rounded-2xl' />
        </div>
    </div>
  )
}

export default Chairman