import { Icon } from "@iconify/react";
import Image from "next/image";
import Badge from "../Home/shared/Badge";
const trainingImages = [
    {
        src: "/skills.png",
        label: "Skills Assessment",
    },
    {
        src: "/class.png",
        label: "Classroom Training",
    },
    {
        src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
        label: "Pratical Training",
    },
    {
        src: "/certy.png",
        label: "Certification",
    },
];
const trainingSteps = [
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
]
import ContainerWrapper from "../shared/ContainerWrapper";
import CTABanner from "../Home/shared/CTABanner";
export default function TrainingSection() {
    return (
        <>
            <section className="pb-24 font-fustat">
                <ContainerWrapper className="h-fit">
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col gap-4">
                            <Badge
                                icon="mdi:school-outline"
                                label="Training Program"
                            />
                            <h2 className="text-4xl  md:text-5xl xl:text-[3.2rem] font-semibold leading-[1.15] tracking-tight text-zinc-900">
                                A Glimpse of Our <span className="text-[#2089CA]">
                                    Training Process.
                                </span>
                            </h2>
                            <p className="text-zinc-500 text-base md:text-lg leading-relaxed w-full md:w-[45%]">
                                Before any worker reaches the Gulf, they go through hands-on
                                training, safety briefings, and skill assessments at our facility
                                in Kathmandu.
                            </p>
                        </div>
                        {/* Training image grid */}
                        <div className="flex flex-col gap-10 md:gap-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
                                {trainingImages.map((img, i) => (
                                    <div
                                        key={i}
                                        className="group relative rounded-xl overflow-hidden h-64"
                                    >
                                        <Image
                                            src={img.src}
                                            alt={img.label}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-zinc-950/20 transition-colors duration-300" />
                                        <div className="absolute w-fit bottom-4 left-4 right-4 bg-[#2089CA] text-white text-xs font-bold px-4 py-2 rounded-full">
                                            {img.label}
                                        </div>

                                    </div>
                                ))}
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

                                {trainingSteps.map((item) => (
                                    <div
                                        key={item.step}
                                        className="relative flex items-start gap-5 bg-[#F3F3F4] border border-gray-300 hover:border-[#2089CA]/40 rounded-xl p-4 hover:shadow-md transition-all duration-300 overflow-hidden"
                                    >
                                        {/* Large background step number */}
                                        <span className="absolute -right-1 -top-2 text-[2.4rem] font-black text-[#2089CA]/20  leading-none select-none">
                                            {item.step}
                                        </span>

                                        {/* Icon */}
                                        <div className="w-12 h-12 rounded-xl bg-blue-50 border border-gray-300 flex items-center justify-center shrink-0 z-10">
                                            <Icon icon={item.icon} width="22" className="text-[#2089CA]" />
                                        </div>

                                        {/* Text */}
                                        <div className="z-10">
                                            <h3 className="text-zinc-900 font-bold text-base ">{item.title}</h3>
                                            <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>

                        <CTABanner
                            btntitle="Hire Now"
                            desc=" All our workers are certified and Gulf-ready — contact us to get started."
                            href="/contact"
                            icon="mdi:arrow-right"
                            title="Ready to hire trained talent?"
                        />
                    </div>
                </ContainerWrapper>
            </section>
        </>

    )
}
