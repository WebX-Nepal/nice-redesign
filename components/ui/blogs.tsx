import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { blogs } from "@/lib/blogs";

export default function BlogsGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-0">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2089CA] text-sm font-semibold px-4 py-2 rounded-full w-fit">
              <Icon icon="mdi:newspaper-variant-outline" width="16" />
              Blog Articles
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 leading-tight">
              Latest <span className="text-[#2089CA]">Insights</span>
            </h2>
            <p className="text-zinc-500 max-w-lg text-base md:text-lg leading-relaxed">
              Industry tips, recruitment guides, and workforce insights from our
              team.
            </p>
          </div>
        </div>

        {/* Featured post — first blog */}
        <Link
          href={`/blogs/${blogs[0].slug}`}
          className="group grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-zinc-100 shadow-sm hover:shadow-lg transition-shadow duration-300 mb-10"
        >
          <div className="relative h-72 lg:h-auto overflow-hidden">
            <Image
              src={blogs[0].image}
              alt={blogs[0].title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-zinc-950/20" />
            <div className="absolute top-4 left-4">
              <span className="bg-[#2089CA] text-white text-xs font-bold px-3 py-1.5 rounded-full">
                Featured
              </span>
            </div>
          </div>
          <div className="bg-white p-8 md:p-10 flex flex-col justify-center gap-5">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2089CA] bg-blue-50 px-3 py-1 rounded-full w-fit">
              {blogs[0].category}
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 leading-snug group-hover:text-[#2089CA] transition-colors duration-200">
              {blogs[0].title}
            </h3>
            <p className="text-zinc-500 text-base leading-relaxed">
              {blogs[0].description}
            </p>
            <div className="flex items-center justify-between pt-2 border-t border-zinc-100">
              <div className="flex items-center gap-4 text-xs text-zinc-400">
                <span className="flex items-center gap-1">
                  <Icon icon="mdi:calendar-outline" width="13" />
                  {blogs[0].publishDate}
                </span>
                <span className="flex items-center gap-1">
                  <Icon icon="mdi:clock-outline" width="13" />
                  {blogs[0].readTime}
                </span>
              </div>
              <span className="flex items-center gap-1.5 text-sm font-semibold text-[#2089CA]">
                Read More
                <Icon icon="mdi:arrow-right" width="15" />
              </span>
            </div>
          </div>
        </Link>

        {/* Remaining posts grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.slice(1).map((article) => (
            <Link
              key={article.slug}
              href={`/blogs/${article.slug}`}
              className="group bg-white rounded-2xl border border-zinc-100 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-zinc-950/10 group-hover:bg-zinc-950/0 transition-colors duration-300" />
                <div className="absolute top-3 left-3">
                  <span className="bg-[#2089CA] text-white text-xs font-bold px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-3 flex-1">
                <div className="flex items-center gap-3 text-xs text-zinc-400">
                  <span className="flex items-center gap-1">
                    <Icon icon="mdi:calendar-outline" width="13" />
                    {article.publishDate}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-zinc-300" />
                  <span className="flex items-center gap-1">
                    <Icon icon="mdi:clock-outline" width="13" />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-zinc-900 leading-snug group-hover:text-[#2089CA] transition-colors duration-200">
                  {article.title}
                </h3>

                <p className="text-zinc-500 text-sm leading-relaxed flex-1 line-clamp-3">
                  {article.description}
                </p>

                <div className="mt-2 flex items-center gap-1.5 text-sm font-semibold text-[#2089CA]">
                  Read More
                  <Icon
                    icon="mdi:arrow-right"
                    width="15"
                    className="group-hover:translate-x-1 transition-transform duration-200"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
