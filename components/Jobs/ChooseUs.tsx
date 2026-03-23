import Image from "next/image";
import React from "react";
import Button from "../ui/Button";

const ChooseUs = () => {
  return (
    <div className="max-w-7xl mx-auto mt-20 flex gap-10">
      <div className="w-1/2 flex flex-col justify-between py-6">
        <div className="flex flex-col gap-8">
          <p className="text-lg font-poppins text-[#2089CA]">Your Career Starts Here</p>
          <div className="flex flex-col gap-6">
            <h1 className="font-bold font-montserrat text-5xl ">
              Unlock Opportunities in the Gulf with <span className="text-[#2089CA]">Nice Manpower</span>
            </h1>

            <p className="text-sm md:text-xl font-poppins text-neutral-500">
              Join thousands of skilled Nepali workers achieving their career
              goals abroad. We provide verified, safe, and rewarding job
              opportunities across multiple industries, with full support from
              application to deployment.
            </p>

            <div className="flex gap-4">
              <Button>Apply Now</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2  py-6 grid grid-cols-2 gap-6">
        <div className="col-span-1 relative">
          <Image
            src="/jobs/security.jpg"
            alt="girl"
            width={400}
            height={500}
            className="rounded-3xl object-cover w-full h-full"
          />
        </div>

        <div className="col-span-1 relative">
          <Image
            src="/jobs/construction_workers.jpg"
            alt="girl"
            width={400}
            height={500}
            className="rounded-3xl object-cover w-full h-full"
          />
        </div>

        <div className="col-span-2">
          <Image
            src="/jobs/grow.jpg"
            alt="team"
            width={800}
            height={300}
            className="rounded-3xl object-fill w-full h-50"
          />
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
