import { Icon } from "@iconify/react";
import Image from "next/image";

const items = [
  {
    icon: "duo-icons:approved",
    title: "Government Approved",
    desc: "Licensed by the Government of Nepal, ensuring full compliance with official regulations and international standards.",
  },
  {
    icon: "mdi:file-document-check-outline",
    title: "Legal Hiring Process",
    desc: "Every step — from candidate selection to visa processing — follows a legally compliant process for risk-free recruitment.",
  },
  {
    icon: "mdi:handshake-outline",
    title: "Ethical Recruitment",
    desc: "Transparent practices, fair terms, and no hidden charges — ethical recruitment for both clients and workers.",
  },
  {
    icon: "mdi:shield-account-outline",
    title: "Worker Protection",
    desc: "Proper documentation, contracts, and welfare support ensuring safe and secure employment abroad.",
  },
];

const Legal = () => {
  return (
    <section className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-0">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white text-sm font-semibold px-4 py-2 rounded-full">
            <Icon
              icon="mdi:shield-check"
              width="16"
              className="text-[#2089CA]"
            />
            Legal &amp; Compliance
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Compliance &amp;{" "}
            <span className="text-[#2089CA]">Transparency</span>
          </h2>
          <p className="text-zinc-400 max-w-xl text-base md:text-lg leading-relaxed">
            We follow strict legal and ethical standards to ensure safe,
            transparent, and reliable recruitment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Image collage */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative col-span-2 h-64 rounded-2xl overflow-hidden">
              <Image
                src="/About/legal.jpg"
                alt="Compliance"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-zinc-950/30" />
            </div>
            <div className="relative h-48 rounded-2xl overflow-hidden">
              <Image
                src="/About/legal2.jpg"
                alt="Legal"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-zinc-950/30" />
            </div>
            <div className="relative h-48 rounded-2xl overflow-hidden">
              <Image
                src="/About/legal3.jpg"
                alt="Compliance"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-zinc-950/30" />
            </div>
          </div>

          {/* Cards */}
          <div className="flex flex-col gap-4">
            {items.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors duration-200"
              >
                <div className="w-12 h-12 rounded-xl bg-[#2089CA]/20 border border-[#2089CA]/30 flex items-center justify-center shrink-0">
                  <Icon
                    icon={item.icon}
                    width="22"
                    className="text-[#2089CA]"
                  />
                </div>
                <div>
                  <h3 className="text-white font-bold text-base mb-1">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Legal;
