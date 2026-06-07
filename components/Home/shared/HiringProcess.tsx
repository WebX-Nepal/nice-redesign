"use client";

import { steps } from "@/constants/constant";
import { Icon } from "@iconify/react";

const stepIcons = [
    "mdi:file-document-edit-outline",
    "mdi:account-voice",
    "mdi:account-search",
    "mdi:file-certificate-outline",
    "mdi:airplane-takeoff",
];

const DottedH = ({ direction = "right" }: { direction?: "left" | "right" }) => (
    <div
        className="h-[2px] w-[50%]"
        style={{
            backgroundImage: `repeating-linear-gradient(to ${direction}, #2089CA 0px, #2089CA 4px, transparent 4px, transparent 8px)`,
        }}
    />
);

export default function StepsSection() {
    return (
        <section className="w-full flex flex-col">
            {steps.map((step, index) => {
                const isLast = index === steps.length - 1;
                const isEven = index % 2 === 0;

                return (
                    <div key={step.id} className="flex flex-row items-stretch">

                        {/* LEFT */}
                        <div className="flex-1 flex flex-col justify-start">
                            <div className="flex items-center justify-end h-[16px] gap-1">
                                {isEven && (
                                    <>
                                        <div className="h-12 w-12  rounded-full  flex items-center justify-center bg-[#2089CA]">
                                            <Icon icon={stepIcons[index]} width="24" className="text-white shrink-0 order-first" />
                                        </div>

                                        <DottedH direction="left" />
                                    </>
                                )}
                            </div>
                            {isEven && (
                                <div className="flex flex-col gap-2 pb-10 pr-4 text-right mt-2">
                                    <span className="text-sm font-bold uppercase  text-[#2089CA]">
                                        <h3>Step {index + 1}</h3>
                                    </span>
                                    <div className="flex items-center justify-end gap-2">
                                        <h3 className="text-[1.2rem] font-bold text-[#2089CA] leading-snug tracking-[-0.01em]">
                                            {step.title}
                                        </h3>
                                    </div>
                                    <ul className="flex flex-col gap-1 items-end">
                                        {step.points.map((point, i) => (
                                            <li key={i} className="flex items-center gap-2 flex-row-reverse">
                                                <span className="w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
                                                <span className="text-zinc-500 text-base leading-relaxed tracking-[0.01em]">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* CENTER — dot + solid vertical line */}
                      
                        <div className="flex flex-col items-center relative self-stretch">
                            <div className="absolute top-0 bottom-0 w-[3px] rounded-full bg-[#2089CA]" />
                            <div className="w-4 h-4 rounded-full bg-[#2089CA] shrink-0 ring-4 ring-[#2089CA]/20 relative z-10" />
                        </div>

                        {/* RIGHT */}
                        <div className="flex-1 flex flex-col justify-start">
                            <div className="flex items-center h-[16px] gap-1">
                                {!isEven && (
                                    <>
                                        <DottedH direction="right" />
                                        <div className="h-12 w-12  rounded-full  flex items-center justify-center bg-[#2089CA]">
                                            <Icon icon={stepIcons[index]} width="24" className="text-white shrink-0" />
                                        </div>

                                    </>
                                )}
                            </div>
                            {!isEven && (
                                <div className="flex flex-col gap-2 pb-10 pl-4 mt-2">
                                    <span className="text-sm font-semibold uppercase  text-[#2089CA]">
                                        <h3>Step {index + 1}</h3>
                                    </span>
                                    <div className="flex items-center gap-2">
                                        <h3 className="text-[1.2rem] font-bold  text-[#2089CA] leading-snug tracking-[-0.01em]">
                                            {step.title}
                                        </h3>
                                    </div>
                                    <ul className="list-disc list-inside flex flex-col gap-1">
                                        {step.points.map((point, i) => (
                                            <li key={i} className="text-zinc-500 text-base leading-relaxed tracking-[0.01em]">
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                    </div>
                );
            })}
        </section>
    );
}