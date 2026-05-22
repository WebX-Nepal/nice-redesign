import { Icon } from "@iconify/react";
import Image from "next/image";
import ContainerWrapper from "../shared/ContainerWrapper";

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
    <section className="pb-24 font-fustat">
      <ContainerWrapper className="h-fit">

        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2089CA] text-sm font-semibold px-4 py-2 rounded-full w-fit">
              <Icon icon="mdi:shield-check" width="16" />
              Legal &amp; Compliance
            </div>
            <h2 className="text-4xl md:text-5xl xl:text-[3.2rem] font-semibold leading-[1.15] tracking-tight text-zinc-900">
              Compliance  &amp; <span className="text-[#2089CA]">
                Transparency.
              </span>
            </h2>
            <p className="text-zinc-500 text-base md:text-lg leading-relaxed w-full md:w-[45%]">
              We follow strict legal and ethical standards to ensure safe,
              transparent, and reliable recruitment.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10  items-center">

            {/* Image collage */}
            <div className="grid grid-cols-2 gap-4 content-start">
              <div className="relative col-span-2 h-64 rounded-2xl overflow-hidden">
                <Image src="/About/legal.jpg" alt="Compliance" fill className="object-cover" />
                <div className="absolute inset-0 bg-zinc-950/30" />
              </div>
              <div className="relative h-48 rounded-2xl overflow-hidden">
                <Image src="/About/legal2.jpg" alt="Legal" fill className="object-cover" />
                <div className="absolute inset-0 bg-zinc-950/30" />
              </div>
              <div className="relative h-48 rounded-2xl overflow-hidden">
                <Image src="/About/legal3.jpg" alt="Compliance" fill className="object-cover" />
                <div className="absolute inset-0 bg-zinc-950/30" />
              </div>
            </div>

            {/* Cards */}
            <div className="flex flex-col gap-4 justify-between">
              {items.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl py-2 md:p-4 hover:bg-white/10 transition-colors duration-200 flex-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                    <Icon icon={item.icon} width="22" className="text-[#2089CA]" />
                  </div>
                  <div>
                    <h3 className="text-zinc-900 font-bold text-base mb-1">{item.title}</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>


      </ContainerWrapper>
    </section>
  );
};

export default Legal;
