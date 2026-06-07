import { getOutletBySlug, getAllOutletSlugs } from "@/lib/outlets";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

export async function generateStaticParams() {
  return getAllOutletSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const outlet = getOutletBySlug(slug);
  if (!outlet) return {};
  return {
    title: `${outlet.city} Office | Nice Recruiting Agency`,
    description: outlet.description,
  };
}

export default async function OutletPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const outlet = getOutletBySlug(slug);
  if (!outlet) notFound();

  const paragraphs = outlet.longDescription.split("\n\n");

  const outletSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `Nice Recruitment Agency - ${outlet.city} Office`,
    url: `https://nicerecruitment.org/outlets/${slug}`,
    description: outlet.description,

    image: outlet.heroImage,

    address: {
      "@type": "PostalAddress",
      streetAddress: outlet.address || "",
      addressLocality: outlet.city,
      addressCountry: "NP",
    },

    telephone: outlet.phone || ["+977 970-6414359", "+977 970-4804825"],
    email: outlet.email || "info@nicerecruitment.org",

    parentOrganization: {
      "@type": "Organization",
      name: "Nice Recruitment Agency",
      url: "https://nicerecruitment.org",
      logo: "https://nicerecruitment.org/og/og-nice.jpg",
    },

    areaServed: "NP",
  };

  return (
    <main className="bg-white pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(outletSchema),
        }}
      />
      {/* Hero */}
      <div className="relative w-full h-[60vh] min-h-[400px]">
        <Image
          src={outlet.heroImage}
          alt={outlet.city}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-zinc-950/65" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-0 w-full pb-12">
            <div className="flex flex-col gap-4 max-w-2xl">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-3 py-2">
                  <Icon icon={outlet.flag} width="18" />
                  <span className="text-white text-xs font-semibold">
                    {outlet.country}
                  </span>
                </div>
                <span className="bg-[#2089CA] text-white text-xs font-bold px-3 py-1.5 rounded-full">
                  {outlet.role}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                {outlet.city} <span className="text-[#2089CA]">Office</span>
              </h1>
              <p className="text-zinc-300 text-base md:text-lg">
                {outlet.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-0">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
            {outlet.stats.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center py-7 gap-1"
              >
                <span className="text-3xl font-bold text-white">{s.value}</span>
                <span className="text-zinc-400 text-sm">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-0">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-zinc-400 mb-12">
            <Link href="/" className="hover:text-zinc-700 transition-colors">
              Home
            </Link>
            <Icon icon="mdi:chevron-right" width="14" />
            <span className="text-zinc-600">Our Offices</span>
            <Icon icon="mdi:chevron-right" width="14" />
            <span className="text-zinc-800 font-medium">{outlet.city}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">
            {/* Main content */}
            <div className="lg:col-span-2 flex flex-col gap-10">
              {/* About */}
              <div className="flex flex-col gap-5">
                <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2089CA] text-sm font-semibold px-4 py-2 rounded-full w-fit">
                  <Icon icon="mdi:information-outline" width="16" />
                  About This Office
                </div>
                <div className="flex flex-col gap-4">
                  {paragraphs.map((p, i) => (
                    <p
                      key={i}
                      className="text-zinc-600 text-base leading-relaxed"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div className="flex flex-col gap-5">
                <h3 className="text-2xl font-bold text-zinc-900">
                  What We Do Here
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {outlet.services.map((s, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 bg-zinc-50 border border-zinc-100 rounded-xl p-4"
                    >
                      <span className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                        <Icon
                          icon="mdi:check"
                          width="16"
                          className="text-[#2089CA]"
                        />
                      </span>
                      <span className="text-zinc-700 text-sm font-medium">
                        {s}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gallery */}
              <div className="flex flex-col gap-5">
                <h3 className="text-2xl font-bold text-zinc-900">
                  Photo Gallery
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {outlet.gallery.map((img, i) => (
                    <div
                      key={i}
                      className="group relative rounded-2xl overflow-hidden aspect-square"
                    >
                      <Image
                        src={img.src}
                        alt={img.caption}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-zinc-950/0 group-hover:bg-zinc-950/40 transition-colors duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <span className="text-white text-xs font-semibold bg-zinc-950/60 backdrop-blur-sm px-2 py-1 rounded-lg">
                          {img.caption}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="flex flex-col gap-6">
              {/* Contact card */}
              <div className="bg-zinc-950 rounded-2xl p-7 flex flex-col gap-5">
                <h4 className="text-white font-bold text-lg">
                  Contact This Office
                </h4>
                <div className="flex flex-col gap-4">
                  <a
                    href={`tel:${outlet.phone}`}
                    className="group flex items-center gap-3"
                  >
                    <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#2089CA] transition-colors duration-200">
                      <Icon
                        icon="mdi:phone-outline"
                        width="16"
                        className="text-white"
                      />
                    </div>
                    <div>
                      <p className="text-zinc-500 text-xs">Phone</p>
                      <p className="text-zinc-200 text-sm font-medium group-hover:text-white transition-colors">
                        {outlet.phone}
                      </p>
                    </div>
                  </a>
                  <a
                    href={`mailto:${outlet.email}`}
                    className="group flex items-center gap-3"
                  >
                    <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#2089CA] transition-colors duration-200">
                      <Icon
                        icon="mdi:email-outline"
                        width="16"
                        className="text-white"
                      />
                    </div>
                    <div>
                      <p className="text-zinc-500 text-xs">Email</p>
                      <p className="text-zinc-200 text-sm font-medium group-hover:text-white transition-colors">
                        {outlet.email}
                      </p>
                    </div>
                  </a>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                      <Icon
                        icon="mdi:map-marker-outline"
                        width="16"
                        className="text-white"
                      />
                    </div>
                    <div>
                      <p className="text-zinc-500 text-xs">Address</p>
                      <p className="text-zinc-200 text-sm font-medium">
                        {outlet.address}
                      </p>
                    </div>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 bg-[#2089CA] text-white font-semibold px-5 py-3 rounded-xl hover:bg-[#1a70a8] transition-colors duration-200 text-sm mt-1"
                >
                  Send Inquiry
                  <Icon icon="mdi:arrow-right" width="15" />
                </Link>
              </div>

              {/* Other branch */}
              <div className="flex flex-col gap-3">
                <h4 className="text-base font-bold text-zinc-900">
                  Our Other Office
                </h4>
                <Link
                  href={`/outlets/${outlet.slug === "kathmandu" ? "dubai" : "kathmandu"}`}
                  className="group relative rounded-2xl overflow-hidden h-40"
                >
                  <Image
                    src={
                      outlet.slug === "kathmandu"
                        ? "/office/dubai.jpg"
                        : "/About/nice-building.avif"
                    }
                    alt="Other branch"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-zinc-950/50" />
                  <div className="absolute inset-0 flex flex-col justify-end p-4">
                    <p className="text-white font-bold text-base">
                      {outlet.slug === "kathmandu"
                        ? "Dubai Office"
                        : "Kathmandu Office"}
                    </p>
                    <p className="text-zinc-300 text-xs flex items-center gap-1 mt-1">
                      View branch
                      <Icon icon="mdi:arrow-right" width="12" />
                    </p>
                  </div>
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
