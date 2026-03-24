"use client";
import { cards } from "@/constants/constant";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

const stats = [
  { value: "20+", label: "Years of Experience" },
  { value: "2,000+", label: "Workers Deployed" },
  { value: "7+", label: "Gulf Countries" },
  { value: "100%", label: "Govt. Licensed" },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-0">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white text-sm font-semibold px-4 py-2 rounded-full w-fit">
              <Icon
                icon="mdi:star-circle"
                width="18"
                className="text-orange-400"
              />
              Why Partner With Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Why <span className="text-[#2089CA]">Choose Us</span>
            </h2>
            <p className="text-zinc-400 max-w-lg leading-relaxed text-base md:text-lg">
              Nice Recruiting Agency has been the Gulf&apos;s most trusted
              source for skilled, verified Nepali workers for over two decades.
            </p>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-start md:items-end gap-1"
              >
                <span className="text-3xl font-bold text-white">{s.value}</span>
                <span className="text-sm text-zinc-500">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden h-[460px] cursor-pointer"
            >
              <Image
                src={card.img}
                alt={card.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Base gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

              {/* Hover tint */}
              <div className="absolute inset-0 bg-[#2089CA]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon badge */}
              <div className="absolute top-5 right-5 w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center shadow-lg">
                <Icon icon={card.icon} width="24" className="text-white" />
              </div>

              {/* Number */}
              <div className="absolute top-5 left-5 w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <span className="text-sm font-bold text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Bottom content — always visible, lifts on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-xl font-bold text-white leading-snug mb-3">
                  {card.title}
                </h3>
                <div className="h-px bg-white/20 w-0 group-hover:w-full transition-all duration-500 mb-3" />
                <p className="text-zinc-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  Trusted, verified, and ready to deploy across the Gulf region.
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 border border-white/10 rounded-2xl px-8 py-7">
          <div>
            <p className="text-white font-bold text-xl">
              Ready to hire verified workers?
            </p>
            <p className="text-zinc-400 text-base mt-1">
              Get in touch and we&apos;ll handle everything from recruitment to
              deployment.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 flex items-center gap-2 bg-[#2089CA] text-white font-semibold px-7 py-3.5 rounded-full text-base hover:bg-[#1a70a8] transition-colors duration-200"
          >
            Get Started
            <Icon icon="mdi:arrow-right" width="18" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
