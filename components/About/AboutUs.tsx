import React from 'react'

const AboutUs = () => {
  return (
    <div className='col-center mt-16 w-[80%] ml-[10%] h-[92vh] gap-10'>
        <h1 className='font-bold text-6xl'>About Us</h1>
        <p className='text-lg'>
            We are Nice Recruiting Agency, established in 2007 in Kathmandu. We provide skilled workers across various sectors,
             with branches and training centers throughout Nepal, adhering to international hiring standards.</p>

        <div className='flex-between gap-6'>
            <div className='group relative w-1/2 border border-gray-500 rounded-2xl h-80 p-10 text-center'>
                <p className='text-lg filter blur-[4px] group-hover:blur-none transition duration-300'>
                    It is our mission to support our clients through their current and future business challenges. Our activities, 
                    aimed at finding a balance in the labour market serve to give our clients significance, which will support their
                     business development via the growth of employment or improvement in the quality of their human resources.</p>
                <h2 className='abs-center text-2xl  font-semibold pointer-events-none group-hover:opacity-0 '>
                    Mission
                </h2>
            </div>
            <div className='group relative w-1/2 border border-gray-500 rounded-2xl h-80 p-10 text-center'>
                <p className='text-lg filter blur-[4px] group-hover:blur-none  transition-all duration-300'>Nice Recruiting Agency Pvt. Ltd.
                     shall be the undisputed leader in the country’s recruitment and placement industry by continually providing our clients 
                     with world-class and top notch service and competent workforce, by constantly upgrading its facilities and systems and by
                      strengthening sustainable productive relationship within our employees and candidates.</p>
                <h2 className='abs-center text-2xl font-semibold group-hover:opacity-0 transition-all duration-300'>
                    vision
                </h2>
            </div>
            
        </div>
    </div>
  )
}

export default AboutUs