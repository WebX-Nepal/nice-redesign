import type { Metadata } from "next";
import { Icon } from "@iconify/react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact Us | Nice Recruiting Agency",
  description:
    "Get in touch with Nice Recruiting Agency. Submit a hiring inquiry or reach us directly via phone, email, or WhatsApp.",
};

const trustPoints = [
  { icon: "mdi:clock-fast", text: "Response within 24 hours" },
  { icon: "mdi:shield-check", text: "100% confidential inquiry" },
  { icon: "mdi:account-check", text: "Pre-vetted candidates only" },
];

const contacts = [
  {
    icon: "mdi:email-outline",
    label: "Email",
    value: "info@nicerecruitment.org",
    href: "mailto:info@nicerecruitment.org",
  },
  {
    icon: "mdi:phone-outline",
    label: "Phone",
    value: "+977 970-6414359",
    href: "tel:+9779706414359",
  },
  {
    icon: "logos:whatsapp-icon",
    label: "WhatsApp",
    value: "+977 970-6414359",
    href: "https://wa.me/9779706414359",
  },
  {
    icon: "mdi:map-marker-outline",
    label: "Office",
    value: "Samakhusi, Kathmandu, Nepal",
    href: "https://maps.google.com/?q=Samakhusi,Kathmandu",
  },
];

export default function ContactPage() {
  return (
    <main className="bg-white pt-16">
      {/* Hero */}
      <div className="relative w-full min-h-[45vh] flex items-center justify-center">
        <Image
          src="/About/about_hero.jpg"
          alt="Contact Us"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-zinc-950/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-0 flex flex-col items-center text-center gap-5 py-20">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-sm font-semibold px-4 py-2 rounded-full">
            <Icon icon="mdi:send" width="16" className="text-[#2089CA]" />
            Get In Touch
          </div>
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-tight">
            Let&apos;s Build Your{" "}
            <span className="text-[#2089CA]">Workforce</span>
          </h1>
          <p className="text-zinc-300 text-base md:text-lg max-w-xl leading-relaxed">
            Submit a hiring inquiry or reach us directly — we&apos;ll get back
            to you within 24 hours.
          </p>
        </div>
      </div>

      {/* Main content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            {/* Left — form */}
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="text-3xl font-bold text-zinc-900">
                  Send a Hiring Inquiry
                </h2>
                <p className="text-zinc-500 text-base mt-2">
                  Fill in the details and we&apos;ll match the right workers for
                  your needs.
                </p>
              </div>

              <form className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-semibold text-zinc-700">
                      Company Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Al Futtaim Group"
                      className="w-full px-4 py-3 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2089CA] focus:border-transparent transition"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-semibold text-zinc-700">
                      Country
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. UAE"
                      className="w-full px-4 py-3 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2089CA] focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-semibold text-zinc-700">
                      Job Type
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Construction Workers"
                      className="w-full px-4 py-3 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2089CA] focus:border-transparent transition"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-semibold text-zinc-700">
                      Workers Required
                    </label>
                    <input
                      type="number"
                      placeholder="e.g. 50"
                      className="w-full px-4 py-3 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2089CA] focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-zinc-700">
                    Contact (Email or WhatsApp)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. hr@company.com or +971 50 000 0000"
                    className="w-full px-4 py-3 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2089CA] focus:border-transparent transition"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-zinc-700">
                    Additional Notes
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Any specific skills, certifications, or requirements..."
                    className="w-full px-4 py-3 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2089CA] focus:border-transparent transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#2089CA] text-white font-bold py-4 rounded-xl text-base hover:bg-[#1a70a8] transition-colors duration-200"
                >
                  Send Hiring Inquiry
                  <Icon icon="mdi:send" width="18" />
                </button>

                <p className="text-center text-xs text-zinc-400 flex items-center justify-center gap-1.5">
                  <Icon icon="mdi:lock-outline" width="14" />
                  Your information is kept strictly confidential
                </p>
              </form>
            </div>

            {/* Right — info */}
            <div className="flex flex-col gap-8">
              {/* Image */}
              <div className="relative h-64 rounded-2xl overflow-hidden">
                <Image
                  src="/office/workers.jpg"
                  alt="Our team"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-zinc-950/40" />
                <div className="absolute inset-0 flex flex-col justify-end p-7">
                  <p className="text-blue-300 text-xs font-semibold uppercase tracking-widest mb-1">
                    Trusted since 2005
                  </p>
                  <h3 className="text-white font-bold text-xl">
                    100+ Gulf companies rely on us
                  </h3>
                  <div className="flex flex-col gap-2 mt-4">
                    {trustPoints.map((t) => (
                      <div key={t.text} className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-lg bg-[#2089CA]/30 border border-[#2089CA]/40 flex items-center justify-center shrink-0">
                          <Icon
                            icon={t.icon}
                            width="14"
                            className="text-[#2089CA]"
                          />
                        </div>
                        <span className="text-zinc-200 text-sm">{t.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact tiles */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contacts.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group flex items-start gap-4 bg-zinc-50 border border-zinc-100 rounded-2xl p-5 hover:border-[#2089CA]/30 hover:bg-blue-50/30 transition-all duration-200"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white border border-zinc-200 flex items-center justify-center shrink-0 group-hover:bg-[#2089CA] group-hover:border-[#2089CA] transition-colors duration-200">
                      <Icon
                        icon={c.icon}
                        width="18"
                        className="text-zinc-600 group-hover:text-white transition-colors duration-200"
                      />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-400 font-medium">
                        {c.label}
                      </p>
                      <p className="text-sm font-semibold text-zinc-800 mt-0.5 group-hover:text-[#2089CA] transition-colors duration-200">
                        {c.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Office locations */}
              <div className="flex flex-col gap-4 bg-zinc-950 rounded-2xl p-6">
                <h4 className="text-white font-bold text-base">Our Offices</h4>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <Icon icon="twemoji:flag-nepal" width="20" />
                    <div>
                      <p className="text-white text-sm font-semibold">
                        Kathmandu, Nepal
                      </p>
                      <p className="text-zinc-400 text-xs">
                        Samakhusi — Head Office
                      </p>
                    </div>
                  </div>
                  <div className="w-full h-px bg-white/10" />
                  <div className="flex items-center gap-3">
                    <Icon icon="twemoji:flag-united-arab-emirates" width="20" />
                    <div>
                      <p className="text-white text-sm font-semibold">
                        Dubai, UAE
                      </p>
                      <p className="text-zinc-400 text-xs">
                        Gulf Branch Office
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
