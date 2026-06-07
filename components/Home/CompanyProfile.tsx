import React from "react";
import Button from "../ui/Button";
import Image from "next/image";

const CompanyProfile = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-10 mt-20">
      <div className="flex flex-col gap-5">
        <h1 className="text-3xl font-bold font-montserrat text-center">
          About <span className="text-[#2089CA]">Nice Recruitment Agency</span>
        </h1>
        <p className="text-sm md:text-lg text-neutral-500 text-center max-w-2xl mx-auto">
          Since 2007, Nice Recruiting Agency has been a trusted partner for Gulf
          companies seeking skilled Nepali workers.
        </p>
      </div>

      <div className="w-full flex gap-10">
        <div className="grid grid-cols-2 gap-2 w-1/2 ">       
            <div className="relative col-span-2 w-full h-100">
              <Image
                src="/office/office.jpg"
                alt="office"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full h-50">
              <Image
                src="/office/nepal.jpg"
                alt="office"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full h-50">
              <Image
                src="/office/dubai.jpg"
                alt="office"
                fill
                className="object-cover"
              />
            </div>
        </div>

        <div className="w-1/2 flex flex-col  gap-10">
          <div className="flex items-center p-5 border border-gray-200 rounded-xl ">
            <div className="w-14 h-14 rounded-lg mr-5 text-3xl">📜</div>

            <div>
              <h3 className="text-lg font-semibold font-montserrat">
                Our Licenses
              </h3>
              <p className="font-poppins text-sm">
                Licensed & accredited by the Nepal Government, ensuring full
                compliance and transparency.
              </p>
            </div>
          </div>

          <div className="flex items-center p-5 border border-gray-200 rounded-xl ">
            <div className=" w-14 h-14 rounded-lg mr-5 text-3xl ">✔️</div>

            <div>
              <h3 className="text-lg font-semibold font-montserrat">
                Government Approvals
              </h3>
              <p className="font-poppins text-sm">
                Approved by relevant authorities for safe, legal, and reliable
                international recruitment.
              </p>
            </div>
          </div>

          <div className="flex items-center p-5 border border-gray-200 rounded-xl ">
            <div className="w-14 h-14 rounded-lg mr-5 text-3xl">📍</div>

            <div>
              <h3 className="text-lg font-semibold font-montserrat">
                Our Locations
              </h3>
              <p className="font-poppins text-sm">
                Offices in Kathmandu, Nepal and Dubai, UAE to serve clients
                globally.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <Button>Learn More About Us</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
