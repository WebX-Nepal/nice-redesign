import Image from "next/image";
import Button from "../ui/Button";
import SecondaryButton from "../ui/SecondaryButton";
import { TrendingUp } from "lucide-react";

export default function AboutNice() {
  return (
    <div className="max-w-7xl mx-auto flex gap-10 mt-25">
      <div className="w-1/2 flex flex-col justify-between py-6">
        <div className="flex flex-col gap-10">
          <h1 className="font-bold font-montserrat text-5xl">
            Build Your Workforce with Confidence
          </h1>

          <p className="text-sm md:text-xl text-neutral-500">
            With years of experience in international recruitment, Nice
            Recruiting Agency delivers qualified and dependable workforce
            solutions to companies across the Gulf.
          </p>

          <div className="flex gap-4">
            <Button>Hire Now</Button>
            <SecondaryButton>Learn More</SecondaryButton>
          </div>
        </div>

        <div className="flex items-center p-5 h-50 border border-zinc-300 rounded-2xl shadow ">
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
      </div>

      <div className="w-1/2 py-6 grid grid-cols-2 gap-6 relative">
        <div className="flex flex-col gap-4">
          <div className="bg-[#2089CA] text-white p-6 rounded-3xl h-2/3 flex flex-col justify-between">
            <div className="flex -space-x-2">
              <div className="w-14 h-14 bg-white rounded-full relative">
                <Image
                  src="/office/about_girl.jpg"
                  alt="img1"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <div className="w-14 h-14 bg-white rounded-full relative">
                <Image
                  src="/office/about_girl.jpg"
                  alt="img1"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <div className="w-14 h-14 bg-white rounded-full relative">
                <Image
                  src="/office/about_girl.jpg"
                  alt="img1"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
            </div>

            <h1 className="text-3xl font-bold">124K+</h1>
            <p className="text-lg font-poppins opacity-80">
              More than 2,000 people has joined us
            </p>
          </div>

          <div className="bg-[#2089CA] text-white p-4 rounded-3xl h-1/3 flex items-center justify-between">
            <p>Successful growth</p>
            <TrendingUp width="34" height="34" />
          </div>
        </div>

        <div className="col-span-1 relative">
          <Image
            src="/office/about_girl.jpg"
            alt="girl"
            width={400}
            height={500}
            className="rounded-3xl object-cover w-full h-full"
          />
        </div>

        <div className="col-span-2">
          <Image
            src="/office/office.jpg"
            alt="team"
            width={800}
            height={300}
            className="rounded-3xl object-cover w-full h-50"
          />
        </div>
      </div>
    </div>
  );
}
