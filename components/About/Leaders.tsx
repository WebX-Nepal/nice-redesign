import Image from 'next/image'
import React from 'react'

const Leaders = () => {
  return (
    <div className='layout flex flex-col h-[80vh] gap-6'>
        <h1 className='font-bold text-3xl'>Our Leaders</h1>
        <p className='text-xl'>Meet our versatile leaders who have established our name in the modern competitive world.</p>

        <div className='flex gap-6 h-80'>
            <div className='w-1/2 p-4 flex gap-6 border border-gray-500 rounded-2xl'>
                <div className='w-1/3 h-full relative'>
                    <Image src="/Leaders/leader1.png" alt='leader1' fill className='object-contain' />
                </div>
                <div className='w-2/3 flex flex-col justify-center gap-4'>
                    <div className='flex flex-col gap-1'>
                        <h1 className='text-2xl'>Nirmal GC</h1>
                        <h1>Ceo</h1>
                    </div>
                    <p>It is our mission to support our clients through their current and future business challenges.</p>
                </div>
            </div>
            <div className='w-1/2 p-4 flex gap-6 border border-gray-500 rounded-2xl'>
                <div className='w-1/3 h-full relative'>
                    <Image src="/Leaders/leader2.png" alt='leader1' fill className='object-contain' />
                </div>
                <div className='w-2/3 flex flex-col justify-center gap-4'>
                    <div className='flex flex-col gap-1'>
                        <h1 className='text-2xl'>Nirmal GC</h1>
                        <h1>Ceo</h1>
                    </div>
                    <p>It is our mission to support our clients through their current and future business challenges.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Leaders