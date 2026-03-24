import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

const branches = [
  {
    slug: "kathmandu",
    city: "Kathmandu",
    country: "Nepal",
    flag: "twemoji:flag-nepal",
    role: "Head Office",
    address: "Samakhusi, Kathmandu, Nepal",
    phone: "+977 970-6414359",
    email: "info@nicerecruitment.org",
    image: "/About/nice-building.webp",
    accent: "from-blue-900/80",
    description:
      "Our founding headquarters — where every recruitment journey begins. The Kathmandu office manages candidate sourcing, training, documentation, and government compliance.",
  },
  {
    slug: "dubai",
    city: "Dubai",
    country: "UAE",
    flag: "twemoji:flag-united-arab-emirates",
    role: "Gulf Branch",
    address: "Dubai, United Arab Emirates",
    phone: "+971 50 000 0000",
    email: "dubai@nicerecruitment.org",
    image: "/About/dubai.png",
    accent: "from-orange-900/80",
    description:
      "Our Gulf-facing branch handles employer relations, on-ground worker support, and coordination with companies across UAE and the wider Gulf region.",
  },
];

const Outlets = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-0">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-14">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2089CA] text-sm font-semibold px-4 py-2 rounded-full">
            <Icon icon="mdi:map-marker-multiple-outline" width="16" />
            Our Offices
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 leading-tight">
            Two Offices, <span className="text-[#2089CA]">One Mission</span>
          </h2>
          <p className="text-zinc-500 max-w-xl text-base md:text-lg leading-relaxed">
            Headquartered in Kathmandu with a Gulf branch in Dubai — we&apos;re
            present at both ends of every placement.
          </p>
        </div>

        {/* Branch cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {branches.map((branch) => (
            <div
              key={branch.slug}
              className="group relative rounded-3xl overflow-hidden h-[600px] shadow-sm"
            >
              <Image
                src={branch.image}
                alt={branch.city}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Gradient */}
              <div
                className={`absolute inset-0 bg-linear-to-t ${branch.accent} via-zinc-950/40 to-transparent`}
              />
              <div className="absolute inset-0 bg-zinc-950/30" />

              {/* Top badges */}
              <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-3 py-2">
                  <Icon icon={branch.flag} width="18" />
                  <span className="text-white text-xs font-semibold">
                    {branch.country}
                  </span>
                </div>
                <span className="bg-[#2089CA] text-white text-xs font-bold px-3 py-1.5 rounded-full">
                  {branch.role}
                </span>
              </div>

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-7 flex flex-col gap-4">
                <div>
                  <h3 className="text-3xl font-bold text-white">
                    {branch.city}
                  </h3>
                  <p className="text-zinc-300 text-sm mt-1 leading-relaxed max-w-sm">
                    {branch.description}
                  </p>
                </div>

                {/* Contact row */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-zinc-300 text-sm">
                    <Icon
                      icon="mdi:map-marker-outline"
                      width="15"
                      className="text-[#2089CA] shrink-0"
                    />
                    {branch.address}
                  </div>
                  <div className="flex items-center gap-2 text-zinc-300 text-sm">
                    <Icon
                      icon="mdi:phone-outline"
                      width="15"
                      className="text-[#2089CA] shrink-0"
                    />
                    {branch.phone}
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href={`/outlets/${branch.slug}`}
                  className="flex items-center gap-2 bg-white text-zinc-900 font-semibold text-sm px-5 py-2.5 rounded-full w-fit hover:bg-blue-50 transition-colors duration-200 mt-1"
                >
                  View Branch
                  <Icon icon="mdi:arrow-right" width="15" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Outlets;
