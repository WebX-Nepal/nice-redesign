import Image from "next/image";
import { Icon } from "@iconify/react";
import Badge from "../Home/shared/Badge";

interface HeroSectionProps {
  title: string;
  description: string;
  badge?: string;
  badgeIcon?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
  badge,
  badgeIcon = "mdi:chevron-right",
}) => {
  return (
    <section className="relative w-full min-h-[60vh] flex items-center justify-center pt-16">
      <Image
        src="/About/about_hero.jpg"
        alt={title}
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-zinc-950/70" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-0 flex flex-col items-center text-center gap-6 py-20">
        <Badge className="bg-white/10 border border-white/20 text-white" icon={badgeIcon} label="About Us"/>
        <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-tight max-w-4xl">
          {title}
      </h1>
        <p className="text-zinc-300 text-base md:text-lg leading-relaxed max-w-2xl">
          {description}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
