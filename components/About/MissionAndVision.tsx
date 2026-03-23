import Image from "next/image";
import React from "react";

const MissionAndVision = () => {
  return (
    <section className="max-w-7xl mx-auto mt-20 relative">

      <div className="flex flex-col absolute left-0 top-13">
        <h2 className="text-3xl font-bold font-montserrat leading-tight">
          Our Mission <br /> <span className="text-[#2089CA]">& Vision</span>
        </h2>
      
      </div>

      <div className="flex flex-col gap-20">
        <div className="flex flex-col md:flex-row-reverse items-center">
        <div className="w-full md:w-3/4 bg-neutral-100 p-12 rounded-r-3xl relative">
            <div className="md:pl-32">
                <h3 className="text-3xl font-bold mb-4">Mission </h3>
                <p className="text-neutral-600 leading-relaxed">
                Nice Recruiting Agency has been a trusted partner for Gulf
                companies seeking skilled Nepali workers. We aim to bridge the gap
                between talent and opportunity.
                </p>
            </div>
            
            <div className="hidden md:block absolute top-1/2 -left-24 -translate-y-1/2 w-48 h-48 rounded-full border-2 border-white overflow-hidden shadow-lg">
                <Image
                src="/About/mission.jpg"
                alt="Vision"
                fill
                className="object-cover "
                />
            </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-3/4 bg-neutral-100 p-12 rounded-l-3xl relative">
          <div className="md:pr-32">
            <h3 className="text-3xl font-bold mb-4">Vision</h3>
            <p className="text-neutral-600 leading-relaxed">
                To become the most reliable and efficient human resource provider
              in the region, ensuring dignity for workers and growth for
              employers.
              
            </p>
          </div>
          
          <div className="hidden md:block absolute top-1/2 -right-24 -translate-y-1/2 w-48 h-48 rounded-full border-2 border-white overflow-hidden shadow-lg">
            <Image
              src="/About/vision.jpg"
              alt="Mission"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default MissionAndVision;

{
  /* <div>
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
    </div> */
}
