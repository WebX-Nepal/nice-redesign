"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

interface Testimonial {
  name: string;
  title: string;
  description: string;
  imageUrl: string;
}

// const testimonials: Testimonial[] = [
//   {
//     name: "Michael Chen",
//     title: "Senior Software Engineer, Cloud Infrastructure",
//     description:
//       "Working with this team completely changed our infrastructure game. They delivered beyond our expectations and helped us scale to millions of users.",
//     imageUrl:
//       "https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?q=80&w=600&auto=format&fit=crop",
//   },
//   {
//     name: "Jessica Roberts",
//     title: "Lead Data Scientist, InsightX",
//     description:
//       "The analytics platform they built gave our team the confidence for true data-driven decisions. Their dashboarding capabilities went above and beyond.",
//     imageUrl:
//       "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=600&q=80",
//   },
//   {
//     name: "William Carter",
//     title: "VP Product, NovaLabs",
//     description:
//       "Their engineering team exceeded every delivery milestone and provided exceptional technical leadership throughout the entire project.",
//     imageUrl:
//       "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80",
//   },
//   {
//     name: "Sarah Kim",
//     title: "CTO, Buildify",
//     description:
//       "Incredible attention to detail and a team that truly cares about outcomes. Our product went from MVP to production in record time.",
//     imageUrl:
//       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80",
//   },
//   {
//     name: "Omar Hassan",
//     title: "Engineering Manager, Fincorp",
//     description:
//       "The best technical partners we've worked with. They brought structure, speed, and creativity to every sprint.",
//     imageUrl:
//       "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
//   },
//   {
//     name: "Priya Nair",
//     title: "Head of Design, Luminary",
//     description:
//       "They understood our vision immediately and translated it into something even better than we imagined. Truly a world-class team.",
//     imageUrl:
//       "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=600&q=80",
//   },
// ];

const testimonials: Testimonial[] = [
  {
    name: "Sanjay Shrestha",
    title: "Construction Worker – Qatar",
    description:
      "The recruitment process was very smooth and transparent. I got placed in Qatar quickly, and all documentation support from Nepal was handled professionally.",
    imageUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    
  },
  {
    name: "Ramesh Karki",
    title: "Heavy Equipment Operator – UAE",
    description:
      "Very reliable service. I got a job in Dubai with proper visa guidance and pre-departure support. Everything was well managed from start to finish.",
    imageUrl:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=600&q=80",
    
  },
  {
    name: "Prakash Gurung",
    title: "Hotel Staff – Saudi Arabia",
    description:
      "The entire hiring process was easy and well organized. I was guided properly from interview to deployment in Saudi Arabia.",
    imageUrl:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=600&q=80",
    
  },

  {
    name: "Bikash Lama",
    title: "Warehouse Worker – Qatar",
    description:
      "Great support from the agency. They guided me step-by-step and ensured I reached Qatar without any confusion or delay.",
    imageUrl:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=600&q=80",
    
  },

  {
    name: "Milan Shrestha",
    title: "Plumber – Saudi Arabia",
    description:
      "Everything was handled professionally. I got placed in Saudi Arabia without stress, and the team was always responsive.",
    imageUrl:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
    
  },
  {
    name: "Suresh Rai",
    title: "Hotel Cleaner – UAE",
    description:
      "The agency provided clear guidance from Nepal to Dubai. I am happy with the job and overall experience.",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
    
  },
  {
    name: "Roshan Magar",
    title: "General Worker – Saudi Arabia",
    description:
      "Very helpful team. They managed everything from interview to deployment smoothly and professionally.",
    imageUrl:
      "https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=600&q=80",
    
  },
];
const ROW_1 = [...testimonials, ...testimonials, ...testimonials];
const ROW_2 = [...testimonials].reverse();
const ROW_2_ITEMS = [...ROW_2, ...ROW_2, ...ROW_2];

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <div className="mx-2 flex w-[320px] shrink-0 flex-col gap-4 rounded-xl border border-gray-300 bg-[#F3F3F4] p-4 transition-all duration-300 hover:border-[#2089CA]/40 hover:bg-[#EEF6FC]">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="h-11 w-11 shrink-0 overflow-hidden rounded-full bg-zinc-200">
          <Image
            src={item.imageUrl}
            alt={item.name}
            width={44}
            height={44}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-zinc-900">
            {item.name}
          </p>

          <p className="truncate text-xs text-zinc-500">
            {item.title}
          </p>
        </div>
      </div>

      {/* Stars */}
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className="h-3.5 w-3.5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.062 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.287-3.957z" />
          </svg>
        ))}
      </div>

      {/* Description */}
      <p className="line-clamp-3 text-xs leading-relaxed text-zinc-600">
        {item.description}
      </p>

      {/* Socials */}
      {/* <div className="mt-auto flex gap-2">
        {[Github, Twitter, Linkedin].map((Icon, i) => (
          <div
            key={i}
            className="flex h-7 w-7 items-center justify-center rounded-full bg-[#2089CA]/10"
          >
            <Icon className="h-3.5 w-3.5 text-[#2089CA]" />
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default function HorizontalTestimonials() {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Top Row
      gsap.to(row1Ref.current, {
        x: "-33.333%",
        ease: "none",
        duration: 50,
        repeat: -1,
      });

      // Bottom Row
      gsap.fromTo(
        row2Ref.current,
        {
          x: "-33.333%",
        },
        {
          x: "0%",
          ease: "none",
          duration: 40,
          repeat: -1,
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div className="relative flex flex-col gap-4">
        
        {/* Left Fade */}
        <div
          className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-24 backdrop-blur-[2px]"
          style={{
            maskImage:
              "linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0))",
            WebkitMaskImage:
              "linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0))",
          }}
        />

        {/* Right Fade */}
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-24 backdrop-blur-[2px]"
          style={{
            maskImage:
              "linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0))",
            WebkitMaskImage:
              "linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0))",
          }}
        />

        {/* Row 1 */}
        <div className="overflow-hidden">
          <div ref={row1Ref} className="flex will-change-transform">
            {ROW_1.map((item, i) => (
              <TestimonialCard key={i} item={item} />
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="overflow-hidden">
          <div ref={row2Ref} className="flex will-change-transform">
            {ROW_2_ITEMS.map((item, i) => (
              <TestimonialCard key={i} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}