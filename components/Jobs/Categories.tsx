import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";

const talents = [
  {
    title: "Construction Workers",
    description:
      "Masons, carpenters, steel fixers, electricians and plumbers trained for large-scale Gulf builds.",
    image: "/jobs/construction_workers.jpg",
    icon: "mdi:hard-hat",
    count: "500+ deployed",
    skills: ["Masonry", "Carpentry", "Steel Fixing", "Electrical"],
  },
  {
    title: "Hospitality Staff",
    description:
      "Chefs, waiters, housekeeping and front desk staff trained to deliver five-star service.",
    image: "/jobs/hospitality_staff.jpg",
    icon: "mdi:room-service",
    count: "300+ deployed",
    skills: ["Food Service", "Housekeeping", "Front Desk", "Kitchen"],
  },
  {
    title: "Security Personnel",
    description:
      "Disciplined, certified security guards trained in Gulf safety standards and protocols.",
    image: "/jobs/security.jpg",
    icon: "mdi:shield-account",
    count: "400+ deployed",
    skills: ["Surveillance", "Access Control", "Emergency Response", "Patrol"],
  },
  {
    title: "General Labour",
    description:
      "Hardworking general workers for warehouses, cleaning, loading and operational roles.",
    image: "/jobs/general_labour.jpg",
    icon: "mdi:account-wrench",
    count: "600+ deployed",
    skills: ["Warehousing", "Cleaning", "Loading", "Operations"],
  },
  {
    title: "Facility Management",
    description:
      "Experienced facility staff for maintenance and operations of commercial properties.",
    image: "/office/office.jpg",
    icon: "mdi:office-building-cog",
    count: "150+ deployed",
    skills: ["Maintenance", "HVAC", "Plumbing", "Cleaning"],
  },
  {
    title: "Driver & Logistics",
    description:
      "Licensed drivers and logistics personnel for transport and fleet management roles.",
    image: "/jobs/grow.jpg",
    icon: "mdi:truck-delivery",
    count: "200+ deployed",
    skills: ["Heavy Vehicle", "Light Vehicle", "Delivery", "Fleet Mgmt"],
  },
];

const trainingImages = [
  {
    src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
    label: "Classroom Training",
  },
  {
    src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
    label: "Technical Skills",
  },
  {
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    label: "On-Site Practice",
  },
  {
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
    label: "Team Briefing",
  },
];

const Categories = () => {
  return (
    <>
      {/* Talent Categories */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-0">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="flex flex-col gap-4">
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2089CA] text-sm font-semibold px-4 py-2 rounded-full w-fit">
                <Icon icon="mdi:account-group-outline" width="16" />
                Talent Pool
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 leading-tight">
                Our <span className="text-[#2089CA]">Skilled Talents</span>
              </h2>
              <p className="text-zinc-500 max-w-lg text-base md:text-lg leading-relaxed">
                Every category below represents a pool of trained, certified,
                and Gulf-ready workers.
              </p>
            </div>
            <Link
              href="/contact"
              className="flex items-center gap-2 bg-[#2089CA] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#1a70a8] transition-colors duration-200 w-fit shrink-0 text-sm"
            >
              Request Talent
              <Icon icon="mdi:arrow-right" width="16" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {talents.map((talent, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl border border-zinc-100 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={talent.image}
                    alt={talent.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-zinc-950/30" />
                  <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Icon
                      icon={talent.icon}
                      width="20"
                      className="text-white"
                    />
                  </div>
                  <div className="absolute top-3 right-3 bg-[#2089CA] text-white text-xs font-bold px-3 py-1 rounded-full">
                    {talent.count}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900 mb-1">
                      {talent.title}
                    </h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">
                      {talent.description}
                    </p>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {talent.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-medium text-zinc-600 bg-zinc-100 px-2.5 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="flex items-center gap-2 text-sm font-semibold text-[#2089CA] hover:gap-3 transition-all duration-200"
                  >
                    Request This Talent
                    <Icon icon="mdi:arrow-right" width="15" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Glimpse */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-0">
          <div className="flex flex-col items-center text-center gap-4 mb-14">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white text-sm font-semibold px-4 py-2 rounded-full">
              <Icon
                icon="mdi:school-outline"
                width="16"
                className="text-[#2089CA]"
              />
              Training Program
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              A Glimpse of Our{" "}
              <span className="text-[#2089CA]">Training Process</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl text-base md:text-lg leading-relaxed">
              Before any worker reaches the Gulf, they go through hands-on
              training, safety briefings, and skill assessments at our facility
              in Kathmandu.
            </p>
          </div>

          {/* Training image grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
            {trainingImages.map((img, i) => (
              <div
                key={i}
                className="group relative rounded-2xl overflow-hidden h-64"
              >
                <Image
                  src={img.src}
                  alt={img.label}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-zinc-950/40 group-hover:bg-zinc-950/20 transition-colors duration-300" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-lg">
                    {img.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Training steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                icon: "mdi:clipboard-text-outline",
                title: "Skills Assessment",
                desc: "Each candidate is evaluated on their trade skills and experience level.",
              },
              {
                step: "02",
                icon: "mdi:school-outline",
                title: "Classroom Training",
                desc: "Job-specific knowledge, Gulf workplace culture, and language basics.",
              },
              {
                step: "03",
                icon: "mdi:hard-hat",
                title: "Practical Training",
                desc: "Hands-on practice in real work scenarios under expert supervision.",
              },
              {
                step: "04",
                icon: "mdi:certificate-outline",
                title: "Certification",
                desc: "Workers receive trade certification before final deployment approval.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-4"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#2089CA]/20 border border-[#2089CA]/30 flex items-center justify-center">
                    <Icon
                      icon={item.icon}
                      width="22"
                      className="text-[#2089CA]"
                    />
                  </div>
                  <span className="text-4xl font-bold text-white/10">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-white font-bold text-base">{item.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 border border-white/10 rounded-2xl px-8 py-7">
            <div>
              <p className="text-white font-bold text-xl">
                Ready to hire trained talent?
              </p>
              <p className="text-zinc-400 text-base mt-1">
                All our workers are certified and Gulf-ready — contact us to get
                started.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 flex items-center gap-2 bg-[#2089CA] text-white font-semibold px-7 py-3.5 rounded-full hover:bg-[#1a70a8] transition-colors duration-200"
            >
              Hire Now
              <Icon icon="mdi:arrow-right" width="18" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
