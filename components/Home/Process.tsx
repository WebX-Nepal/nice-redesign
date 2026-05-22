"use client";
import ContainerWrapper from "../shared/ContainerWrapper";
import Badge from "./shared/Badge";
import CTABanner from "./shared/CTABanner";
import StepsSection from "./shared/HiringProcess";

const Process = () => {
  return (
    <section className="pb-24" id="process">
      <ContainerWrapper className="h-fit">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <Badge
              label="How It Works"
              icon="mdi:clipboard-list-outline"
            />
            <h1 className="text-4xl md:text-5xl xl:text-[3.2rem] font-semibold leading-[1.15] tracking-tight text-zinc-900">
              Our Hiring <span className="text-[#2089CA]">Process.</span>
            </h1>
            <p className="text-zinc-500 max-w-lg leading-relaxed text-base md:text-lg">
              A simple 5-step process — from your first inquiry to workers
              arriving on-site.
            </p>
          </div>
          <StepsSection />
          <CTABanner
            btntitle="Start Hiring"
            icon="mdi:arrow-right"
            desc="Submit your inquiry today and we&apos;ll get back within 24 hours."
            href="/contact"
            title="Ready to start the process?"
          />
        </div>
      </ContainerWrapper>

    </section>
  );
};

export default Process;
