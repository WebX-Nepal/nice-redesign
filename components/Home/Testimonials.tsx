import { TestimonialCarousel } from "../profile-card-testimonial-carousel";

export default function TestimonialCarouselDemo() {
  return (
    <div className="min-h-screen max-w-7xl mx-auto flex flex-col gap-10 mt-20 items-center justify-center">

      <div className="flex flex-col w-full gap-5">
          <h1 className="text-3xl font-bold font-montserrat ">
            Trusted by <span className="text-[#2089CA]">many worldwide</span>
          </h1>

          <p className="text-sm md:text-lg text-neutral-500 leading-tight max-w-2xl ">
            Trusted by companies across UAE, Qatar, and Saudi Arabia for skilled and verified workforce.
          </p>
        </div>
      <TestimonialCarousel />
    </div>
  );
}
