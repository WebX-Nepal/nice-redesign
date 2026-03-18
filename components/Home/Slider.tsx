import { InfiniteSlider } from "@/components/ui/infinite-slider-horizontal"
import Image from "next/image";
 
const images = [
  {
    title: "Image 1",
    image:
      "/hero1.png",
  },
  {
    title: "Image 2",
    image:
      "/hero2.png",
  },
  {
    title: "Image 3",
    image:
      "/hero3.png",
  },
  {
    title: "Image 4",
    image:
      "/hero4.png",
  },
  {
    title: "Image 5",
    image:
      "/hero5.png",
  },
  {
    title: "Image 1 second row",
    image:
      "/hero5.png",
  },
  {
    title: "Image 2 second row",
    image:
      "/hero4.png",
  },
  {
    title: "Image 3 second row",
    image:
      "/hero3.png",
  },
  {
    title: "Image 4 second row",
    image:
      "/hero2.png",
  },
  {
    title: "Image 5 second row",
    image:
      "/hero1.png",
  },
];
 
export function Slider() {
  return (
    <div className=" flex flex-col justify-center gap-4 mt-20">
      <div className="flex items-center space-x-4 mx-auto w-full max-w-max">
        <InfiniteSlider direction="horizontal">
          {images.map((image) => (
            <div className="aspect-square w-[220px] rounded-[4px]" key={image.title}>
                <Image
                    key={image.title}
                    src={image.image}
                    alt={image.title}
                    width={1200}
                    height={1200}
                    className="object-cover h-full w-full rounded-[20px]"
                />
            </div>
          ))}
        </InfiniteSlider>
      </div>
      <div className="flex items-center space-x-4 mx-auto w-full max-w-max">
        <InfiniteSlider direction="horizontal" reverse>
          {images.map((image) => (
            <div className="aspect-square w-[220px] rounded-[4px]" key={image.title}>
              <Image
                key={image.title}
                src={image.image}
                alt={image.title}
                width={1200}
                height={1200}
                className="object-cover h-full w-full rounded-[20px]"
              />
            </div>
          ))}
        </InfiniteSlider>
      </div>
    </div>
  );
}