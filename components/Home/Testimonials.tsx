import { TestimonialCarousel } from "../profile-card-testimonial-carousel";
import ContainerWrapper from "../shared/ContainerWrapper";
import HorizontalTestimonials from "../shared/Testinomials";
import Badge from "./shared/Badge";
export default function TestimonialCarouselDemo() {
  return (
    <ContainerWrapper className="h-fit pb-24">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col w-full gap-4">
          <Badge
            icon="mdi:account-star-outline"
            label="What Client says"
          />
          <h1 className="text-4xl md:text-5xl xl:text-[3.2rem] font-semibold leading-[1.15] tracking-tight text-zinc-900">
            Trusted by many <span className="text-[#2089CA]">Worldwide.</span>
          </h1>

          <p className="text-zinc-500 max-w-lg text-base md:text-lg leading-relaxed">
            Trusted by companies across UAE, Qatar, and Saudi Arabia for skilled and verified workforce.
          </p>
        </div>
        <HorizontalTestimonials />
      </div>


    </ContainerWrapper>
  );
}
