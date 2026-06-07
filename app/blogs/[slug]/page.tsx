import { getBlogBySlug, getAllSlugs, blogs } from "@/lib/blogs";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  if (!blog) return {};
  return {
    title: `${blog.title} | Nice Recruiting Agency`,
    description: blog.description,
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  if (!blog) notFound();

  const related = blogs
    .filter((b) => b.slug !== blog.slug && b.category === blog.category)
    .slice(0, 2);

  const paragraphs = blog.content.split("\n\n");

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.nicerecruitment.org/blogs/${slug}`,
    },
    headline: blog.title,
    description: blog.description,
    image: blog.image,
    author: {
      "@type": "Organization",
      name: "Nice Recruitment Agency",
      url: "https://www.nicerecruitment.org",
    },
    publisher: {
      "@type": "Organization",
      name: "Nice Recruitment Agency",
      logo: {
        "@type": "ImageObject",
        url: "https://www.nicerecruitment.org/logo/favicon.png",
      },
    },
    url: `https://www.nicerecruitment.org/blogs/${slug}`,
    datePublished: blog.publishDate,
    dateModified: blog.publishDate,
  };

  return (
    <main className="bg-white pt-16 font-fustat">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogSchema),
        }}
      />
      {/* Hero */}
      <div className="relative w-full h-[55vh] min-h-[380px]">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-zinc-950/65" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-0 w-full pb-12">
            <div className="flex flex-col gap-4 max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="bg-[#2089CA] text-white text-xs font-bold px-3 py-1.5 rounded-full">
                  {blog.category}
                </span>
                <span className="text-zinc-300 text-xs flex items-center gap-1">
                  <Icon icon="mdi:clock-outline" width="13" />
                  {blog.readTime}
                </span>
                <span className="text-zinc-300 text-xs flex items-center gap-1">
                  <Icon icon="mdi:calendar-outline" width="13" />
                  {blog.publishDate}
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                {blog.title}
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-0 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">
          {/* Article body */}
          <article className="lg:col-span-2">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-zinc-400 mb-10">
              <Link href="/" className="hover:text-zinc-700 transition-colors">
                Home
              </Link>
              <Icon icon="mdi:chevron-right" width="14" />
              <Link
                href="/blogs"
                className="hover:text-zinc-700 transition-colors"
              >
                Blog
              </Link>
              <Icon icon="mdi:chevron-right" width="14" />
              <span className="text-zinc-600 truncate max-w-xs">
                {blog.title}
              </span>
            </nav>

            <div className="prose prose-zinc prose-lg max-w-none">
              {paragraphs.map((para, i) => {
                if (para.startsWith("**") && para.endsWith("**")) {
                  return (
                    <h3
                      key={i}
                      className="text-xl font-bold text-zinc-900 mt-8 mb-3"
                    >
                      {para.replace(/\*\*/g, "")}
                    </h3>
                  );
                }
                if (para.startsWith("**")) {
                  const parts = para.split(/\*\*(.*?)\*\*/g);
                  return (
                    <p
                      key={i}
                      className="text-zinc-600 text-base leading-relaxed mb-4"
                    >
                      {parts.map((part, j) =>
                        j % 2 === 1 ? (
                          <strong key={j} className="text-zinc-900 font-bold">
                            {part}
                          </strong>
                        ) : (
                          part
                        ),
                      )}
                    </p>
                  );
                }
                if (para.startsWith("- ")) {
                  const items = para
                    .split("\n")
                    .filter((l) => l.startsWith("- "));
                  return (
                    <ul key={i} className="flex flex-col gap-2 mb-4 ml-2">
                      {items.map((item, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-3 text-zinc-600 text-base"
                        >
                          <span className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                            <Icon
                              icon="mdi:check"
                              width="12"
                              className="text-[#2089CA]"
                            />
                          </span>
                          {item.replace("- ", "")}
                        </li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p
                    key={i}
                    className="text-zinc-600 text-base leading-relaxed mb-4"
                  >
                    {para}
                  </p>
                );
              })}
            </div>

            {/* Back link */}
            <div className="mt-12 pt-8 border-t border-zinc-100">
              <Link
                href="/blogs"
                className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-600 hover:text-zinc-900 transition-colors"
              >
                <Icon icon="mdi:arrow-left" width="16" />
                Back to all articles
              </Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="flex flex-col gap-8">
            {/* CTA card */}
            <div className="bg-linear-to-b from-[#037ecb]  to-[#2089CA] rounded-xl p-7 flex flex-col gap-5">
              <div className="w-12 h-12 rounded-xl bg-[#2089CA]/20 border border-[#2089CA]/30 flex items-center justify-center">
                <Icon
                  icon="mdi:account-group-outline"
                  width="22"
                  className="text-white"
                />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">
                  Need Skilled Workers?
                </h3>
                <p className="text-gray-100 text-sm mt-2 leading-relaxed">
                  We supply trained, verified Nepali workers to Gulf employers —
                  fast and hassle-free.
                </p>
              </div>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 bg-white text-zinc-900 hover:bg-gray-100 font-semibold px-5 py-3 rounded-xl hover:bg-[#1a70a8] transition-colors duration-200 text-sm"
              >
                Request Manpower
                <Icon icon="mdi:arrow-right" width="15" />
              </Link>
            </div>

            {/* Related posts */}
            {related.length > 0 && (
              <div className="flex flex-col gap-5">
                <h4 className="text-base font-bold text-zinc-900">
                  Related Articles
                </h4>
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blogs/${r.slug}`}
                    className="group flex gap-4 items-start"
                  >
                    <div className="relative w-20 h-16 rounded-xl overflow-hidden shrink-0">
                      <Image
                        src={r.image}
                        alt={r.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-xs text-[#2089CA] font-semibold">
                        {r.category}
                      </span>
                      <p className="text-sm font-semibold text-zinc-800 leading-snug group-hover:text-[#2089CA] transition-colors line-clamp-2">
                        {r.title}
                      </p>
                      <span className="text-xs text-zinc-400">
                        {r.readTime}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {/* All posts */}
            <div className="flex flex-col gap-4">
              <h4 className="text-base font-bold text-zinc-900">
                All Articles
              </h4>
              {blogs
                .filter((b) => b.slug !== blog.slug)
                .map((b) => (
                  <Link
                    key={b.slug}
                    href={`/blogs/${b.slug}`}
                    className="group flex items-center gap-3 text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
                  >
                    <Icon
                      icon="mdi:chevron-right"
                      width="14"
                      className="text-[#2089CA] shrink-0"
                    />
                    <span className="line-clamp-1">{b.title}</span>
                  </Link>
                ))}
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
