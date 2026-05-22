import Image from "next/image";
import { Icon } from "@iconify/react";
import ContainerWrapper from "../shared/ContainerWrapper";
import Achivements from "./Achivements";



// const reasons = [
//   {
//     icon: "mdi:clipboard-check-outline",
//     title: "Proven Recruitment Process",
//     desc: "Structured and transparent hiring — every candidate is carefully screened and verified before deployment.",
//   },
//   {
//     icon: "mdi:account-star-outline",
//     title: "Reliable & Skilled Workforce",
//     desc: "Workers selected based on skill, experience, and work ethic, meeting the standards required by Gulf companies.",
//   },
//   {
//     icon: "mdi:clock-fast",
//     title: "Fast & Timely Deployment",
//     desc: "Quick mobilization of workers to meet your project deadlines without compromising quality.",
//   },
//   {
//     icon: "mdi:handshake-outline",
//     title: "Long-Term Partnerships",
//     desc: "We build lasting relationships by consistently delivering dependable manpower solutions.",
//   },
// ];
const stats = [{ value: "20+", label: "Years Experience", icon: "mdi:calendar-check" }, { value: "2,000+", label: "Workers Deployed", icon: "mdi:account-group" }, { value: "7+", label: "Gulf Countries", icon: "mdi:earth" }, { value: "500+", label: "Hiring Partners", icon: "mdi:handshake" },];
const Trust = () => {
  return (
    <section className="pb-24 font-fustat">
      <ContainerWrapper className="h-fit">
        {/* Header */}
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2089CA] text-sm font-semibold px-4 py-2 rounded-full w-fit">
              <Icon icon="mdi:star-circle" width="16" />
              Why Trust Us
            </div>
            <h2 className="text-4xl md:text-5xl xl:text-[3.2rem] font-semibold leading-[1.15] tracking-tight text-zinc-900">
              Why Global Companies <span className="text-[#2089CA]">Trust Us.</span>
            </h2>
            <p className="text-zinc-500 text-base md:text-lg leading-relaxed w-full md:w-[45%] ">
              Trusted by companies across the Gulf for reliable, skilled, and
              timely manpower solutions.
            </p>
          </div>

          {/* Achivements */}
          <Achivements  title={["Trusted by", "Thousands."]} stats={stats} />
        </div>

        {/* Reasons grid over image */}
        {/* <div className="relative rounded-3xl overflow-hidden">
          <Image
            src="/About/about_hero.jpg"
            alt="Trust"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-zinc-950/75" />

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-10">
            {reasons.map((r, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-6 flex flex-col gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-[#2089CA]/20 border border-[#2089CA]/30 flex items-center justify-center">
                  <Icon icon={r.icon} width="24" className="text-[#2089CA]" />
                </div>
                <h3 className="text-white font-bold text-base">{r.title}</h3>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  {r.desc}
                </p>
              </div>
            ))}
          </div>
        </div> */}

      </ContainerWrapper>

    </section>
  );
};

export default Trust;
