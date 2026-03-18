import React from "react";
import Button from "../ui/Button";
import Image from "next/image";

const CompanyProfile = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-10">
      <h1 className="text-center text-3xl font-bold font-montserrat">
        About Nice Recruitment Agency
      </h1>

      <p className="text-center text-lg font-poppins max-w-150 mx-auto">
        Since 2007, Nice Recruiting Agency has been a trusted partner for Gulf
        companies seeking skilled Nepali workers.
      </p>

      <div className="w-full flex gap-10">
        <div className="flex flex-col gap-10 w-1/2">
          <div className="grid grid-cols-2 gap-4">
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
        </div>

        <div className="w-1/2 flex flex-col  gap-10">
      
          <div className="flex items-center p-5 border border-gray-200 rounded-xl ">
            <div className="w-14 h-14 rounded-lg mr-5 text-3xl">📜
            </div>

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
            <div className=" w-14 h-14 rounded-lg mr-5 text-3xl ">✔️
            </div>

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
            <div className="w-14 h-14 rounded-lg mr-5 text-3xl">📍
            </div>

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
            <Button>Learn More</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
