import { members } from "@/constants/constant";
import { Icon } from "@iconify/react";
import Image from "next/image";

const Members = () => {
  return (
    <section className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-0">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-14">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2089CA] text-sm font-semibold px-4 py-2 rounded-full">
            <Icon icon="mdi:account-group-outline" width="16" />
            Leadership
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 leading-tight">
            Our Core <span className="text-[#2089CA]">Members</span>
          </h2>
          <p className="text-zinc-500 text-base md:text-lg max-w-xl leading-relaxed">
            The experienced team behind Nepal&apos;s most trusted manpower
            agency.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((card, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden h-[420px] shadow-sm"
            >
              <Image
                src={card.img}
                alt={card.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-zinc-400 text-xs font-semibold uppercase tracking-widest mb-1">
                  {card.title}
                </p>
                <div className="h-px bg-white/20 w-8 group-hover:w-full transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Members;
