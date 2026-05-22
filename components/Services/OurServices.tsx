"use client";
import { homeSections } from "@/constants/constant";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import Badge from "../Home/shared/Badge";
import CTABanner from "../Home/shared/CTABanner";
import ContainerWrapper from "../shared/ContainerWrapper";

const OurServices = () => {
  return (
    <section className=" bg-white font-fustat">
      <ContainerWrapper className="h-fit pb-24">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <Badge
              label="Our Services"
              icon="mdi:cog-outline"
            />
            <h2 className="text-4xl md:text-5xl xl:text-[3.2rem] font-semibold leading-[1.15] tracking-tight text-zinc-900">
               Industries We <span className="text-[#2089CA]">
                  Serve.
                </span>
              </h2>
              <p className="text-base md:text-lg text-zinc-500 leading-relaxed md:w-[45%] w-full">
                From construction sites to five-star hotels — we supply skilled, pre-vetted workers across the Gulf.
              </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {homeSections.map((item, index) => (
              <div
                key={index}
                className="group rounded-3xl overflow-hidden bg-[#F3F3F4] border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-500"
              >
                {/* Image Section */}
                <div className="relative h-[40vh] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/25" />



                  {/* Icon */}
                  <div className="absolute top-2 left-5 w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md border border-gray-300 flex items-center justify-center">
                    <Icon
                      icon={item.icon}
                      width="22"
                      className="text-white"
                    />
                  </div>
                  {/* Tag */}
                  <div className="absolute top-5 right-5">
                    <span className="bg-[#2089CA] text-white text-xs font-semibold px-4 py-2 rounded-full">
                      {item.tag}
                    </span>
                  </div>
                </div>

                {/* White Content Section */}
                <div className="bg-[#F3F3F4] p-4">
                  <h3 className="text-zinc-900 text-2xl font-bold mb-3">
                    {item.title}
                  </h3>

                  <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-[#2089CA]  text-white hover:bg-[#2089CA] transition-all duration-300 text-sm font-semibold px-5 py-3 rounded-full"
                  >
                    Request Manpower
                    <Icon icon="mdi:arrow-right" width="16" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <CTABanner
            btntitle=" Get In Touch"
            desc="Tell us your requirements and we&apos;ll match the right workers for your project."
            href="/contact"
            icon="mdi:arrow-right"
            title=" Need a custom workforce solution?"
          />
        </div>


      </ContainerWrapper>
    </section>
  );
};

export default OurServices;
