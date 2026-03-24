"use client";
import { homeSections } from "@/constants/constant";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

const OurServices = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-0">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2089CA] text-sm font-semibold px-4 py-2 rounded-full w-fit">
              <Icon icon="mdi:briefcase-outline" width="16" />
              Our Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 leading-tight">
              Industries We <span className="text-[#2089CA]">Serve</span>
            </h2>
            <p className="text-zinc-500 max-w-lg text-base md:text-lg leading-relaxed">
              From construction sites to five-star hotels — we supply skilled,
              pre-vetted workers across the Gulf.
            </p>
          </div>
          <Link
            href="/contact"
            className="flex items-center gap-2 bg-[#2089CA] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#1a70a8] transition-colors duration-200 w-fit shrink-0"
          >
            Request Manpower
            <Icon icon="mdi:arrow-right" width="16" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {homeSections.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden h-72 shadow-sm cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-zinc-950/90 via-zinc-950/30 to-transparent" />

              {/* Tag */}
              <div className="absolute top-4 left-4">
                <span className="bg-[#2089CA] text-white text-xs font-bold px-3 py-1 rounded-full">
                  {item.tag}
                </span>
              </div>

              {/* Icon */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <Icon icon={item.icon} width="20" className="text-white" />
              </div>

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white font-bold text-xl mb-2">
                  {item.title}
                </h3>
                <p className="text-zinc-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400">
                  {item.description}
                </p>
                <Link
                  href="/contact"
                  className="mt-4 flex items-center gap-2 bg-white text-zinc-900 text-sm font-semibold px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400 delay-75"
                >
                  Request Manpower
                  <Icon icon="mdi:arrow-right" width="14" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 bg-zinc-950 rounded-2xl px-8 py-7">
          <div>
            <p className="text-white font-bold text-xl">
              Need a custom workforce solution?
            </p>
            <p className="text-zinc-400 text-base mt-1">
              Tell us your requirements and we&apos;ll match the right workers
              for your project.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 flex items-center gap-2 bg-[#2089CA] text-white font-semibold px-7 py-3.5 rounded-full hover:bg-[#1a70a8] transition-colors duration-200"
          >
            Get In Touch
            <Icon icon="mdi:arrow-right" width="18" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
