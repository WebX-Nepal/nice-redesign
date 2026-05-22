import Image from "next/image";
import { Icon } from "@iconify/react";
import ContainerWrapper from "../shared/ContainerWrapper";

const items = [
  {
    type: "Mission",
    icon: "mdi:target",
    color: "bg-blue-50 text-[#2089CA]",
    accent: "border-[#2089CA]",
    image: "/misson1.jpg",
    text: "To bridge the gap between talent and opportunity by delivering skilled, verified Nepali workers to Gulf employers through a transparent, ethical, and efficient recruitment process.",
    points: [
      "Ethical hiring practices",
      "Full legal compliance",
      "Worker welfare first",
    ],
  },
  {
    type: "Vision",
    icon: "mdi:eye-outline",
    color: "bg-blue-50 text-[#2089CA]",
    accent: "border-[#2089CA]",
    image: "/vison1.png",
    text: "To become the most reliable human resource provider in the region — ensuring dignity for workers, growth for employers, and a stronger Nepal-Gulf workforce bridge.",
    points: [
      "Regional market leader",
      "Dignified employment",
      "Long-term partnerships",
    ],
  },
];

const MissionAndVision = () => {
  return (
    <section className="pb-24 font-fustat">
      <ContainerWrapper className="h-fit">
        <div className="flex flex-col gap-10">

          <div className="flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2089CA] text-sm font-semibold px-4 py-2 rounded-full w-fit">
              <Icon icon="mdi:compass-outline" width="16" />
              What Drives Us
            </div>
            <h2 className="text-4xl md:text-5xl xl:text-[3.2rem] font-semibold leading-[1.15] tracking-tight text-zinc-900">
              Our Mission <span className="text-[#2089CA]">&amp; Vision.</span>
            </h2>
          </div>


          <div className="flex flex-col">
            {items.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={item.type}
                  className="grid grid-cols-1 lg:grid-cols-2 rounded-xl overflow-hidden bg-linear-to-b from-[#037ecb] to-[#2089CA] items-center"
                >
                  {/* Text block */}
                  <div className={`flex flex-col p-6 md:p-10 gap-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <div className={`inline-flex items-center gap-2 w-fit px-3 py-1.5 rounded-full text-sm font-semibold ${item.color}`}>
                      <Icon icon={item.icon} width="16" />
                      {item.type}
                    </div>
                    <p className="text-white text-lg font-medium leading-relaxed">
                      {item.text}
                    </p>
                    <ul className="flex flex-col gap-2.5">
                      {item.points.map((p) => (
                        <li key={p} className="flex items-center gap-3 text-gray-50 text-sm font-medium">
                          <span className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                            <Icon icon="mdi:check" width="12" className="text-green-500" />
                          </span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Image block */}
                  <div className={`relative h-72 lg:h-full lg:self-stretch overflow-hidden ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <Image src={item.image} alt={item.type} fill className="object-cover" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </ContainerWrapper>
    </section>
  );
};

export default MissionAndVision;