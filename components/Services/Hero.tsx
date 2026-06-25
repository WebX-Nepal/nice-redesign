import ContainerWrapper from "../shared/ContainerWrapper";
import Badge from "../Home/shared/Badge";
import Button from "../shared/Button";
import Image from "next/image";
const
  Hero = () => {
    return (

      <ContainerWrapper className="h-fit py-24 font-fustat">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col gap-10 items-start justify-start w-full ">
            <div className="flex flex-col gap-4">
              <Badge
                icon="mdi:briefcase-outline"
                label="What We Offer"
              />
              <h1 className="text-4xl  md:text-5xl xl:text-[3.2rem] font-semibold leading-[1.15] tracking-tight text-zinc-900">
                Skilled Manpower for <span className="text-[#2089CA]">
                  Every Industry .
                </span>
              </h1>

              <p className="text-zinc-500  text-base md:text-lg leading-relaxed ">
                We provide verified, reliable Nepali workers across multiple industries, helping Gulf businesses build efficient and dependable workforces from day one.<br />
                From construction sites to five-star hotels. we supply skilled, pre-vetted workers across the Gulf.
              </p>
              <Button
                icon="mdi:arrow-right"
                label="Hire Now"
                href="/contact"
                className="w-fit"
              />
            </div>


          </div>
          <div className="relative h-100 rounded-xl overflow-hidden shadow-xl">
            <Image
              alt="services"
              fill
              className="object-cover"
              src={"/services.avif"}
            />
            <div className="absolute inset-0 bg-linear-to-t from-zinc-950/60 to-transparent" />
            From construction sites to five-star hotels, we supply skilled, pre-vetted workers across the Gulf.
          </div>
        </div>
      </ContainerWrapper>
    );
  };

export default Hero;
