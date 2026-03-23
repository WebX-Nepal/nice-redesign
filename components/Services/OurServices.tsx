"use";
import { sections } from "@/constants/constant";
import Image from "next/image";

const OurServices = () => {
  return (
    <div className="max-w-7xl mx-auto mt-20 px-4 flex flex-col gap-10">
      {/* <div className="flex flex-col gap-5">
        <h1 className="text-center text-3xl font-bold font-montserrat text-[#2089CA]" >
          Our Global Presence
        </h1>

        <p className="text-center text-lg font-poppins max-w-150 mx-auto">
          Nice Recruiting Agency has been a trusted partner for Gulf companies
          seeking skilled Nepali workers.
        </p>
      </div> */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sections.map((item, index) => (
          <div
            key={index}
            className="group relative flex flex-col gap-4  rounded-2xl border border-zinc-400 cursor-pointer"
          >
            <div className="relative h-48 w-full">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover rounded-2xl"
              />
            </div>

            <div className="absolute inset-0 group-hover:bg-black/60 rounded-2xl" />

            <div className="flex flex-col justify-between text-center px-6 pb-6 gap-3">
              <h2 className="text-lg font-semibold font-montserrat text-[#2089CA]">
                {item.title}
              </h2>

              <p className="text-gray-500 text-sm font-poppins leading-relaxed">
                {item.description}
              </p>

              <button
                className="absolute top-1/2 left-1/2 -translate-x-1/2 px-4 w-50 py-2 font-semibold text-base text-slate-50 bg-orange-500 border border-zinc-200 
                   rounded-full cursor-pointer transition-colors duration-300 hover:bg-orange-600 opacity-0  group-hover:opacity-100 "
              >
                Request Manpower
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
