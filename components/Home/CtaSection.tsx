import Image from "next/image";
import { Icon } from "@iconify/react";

const trustPoints = [
  { icon: "mdi:clock-fast", text: "Response within 24 hours" },
  { icon: "mdi:shield-check", text: "100% confidential inquiry" },
  { icon: "mdi:account-check", text: "Pre-vetted candidates only" },
];

const CtaSection = () => {
  return (
    <section className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-0">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-14">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white text-sm font-semibold px-4 py-2 rounded-full">
            <Icon icon="mdi:send" width="16" className="text-[#2089CA]" />
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Scale Your Team with <br className="hidden md:block" />
            <span className="text-[#2089CA]">Pre-Vetted Talent</span>
          </h2>
          <p className="text-zinc-400 max-w-xl text-base md:text-lg leading-relaxed">
            Tell us what you need — we&apos;ll match the right workers and
            handle everything from recruitment to deployment.
          </p>
        </div>

        {/* Main card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          {/* Left — image + info */}
          <div className="relative min-h-[420px] lg:min-h-auto">
            <Image
              src="/office/workers.jpg"
              alt="Workers"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-zinc-950/90 via-zinc-950/50 to-zinc-950/20" />

            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
              <div className="flex flex-col gap-6">
                <div>
                  <p className="text-blue-300 text-sm font-semibold uppercase tracking-widest mb-2">
                    Why hire through us
                  </p>
                  <h3 className="text-2xl font-bold text-white leading-snug">
                    Trusted by 100+ Gulf companies since 2005
                  </h3>
                </div>

                <div className="flex flex-col gap-3">
                  {trustPoints.map((t) => (
                    <div key={t.text} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#2089CA]/20 border border-[#2089CA]/30 flex items-center justify-center shrink-0">
                        <Icon
                          icon={t.icon}
                          width="16"
                          className="text-[#2089CA]"
                        />
                      </div>
                      <span className="text-zinc-200 text-sm font-medium">
                        {t.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Office locations */}
                <div className="flex gap-4 pt-2">
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
                    <Icon icon="twemoji:flag-nepal" width="16" />
                    <span className="text-white text-xs font-medium">
                      Kathmandu, Nepal
                    </span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
                    <Icon icon="twemoji:flag-united-arab-emirates" width="16" />
                    <span className="text-white text-xs font-medium">
                      Dubai, UAE
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-white p-8 md:p-10 flex flex-col gap-6">
            <div>
              <h3 className="text-2xl font-bold text-zinc-900">
                Send a Hiring Inquiry
              </h3>
              <p className="text-zinc-500 text-sm mt-1">
                Fill in the details and we&apos;ll get back to you within 24
                hours.
              </p>
            </div>

            <form className="flex flex-col gap-4">
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
                  rows={3}
                  placeholder="Any specific skills, certifications, or requirements..."
                  className="w-full px-4 py-3 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2089CA] focus:border-transparent transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#2089CA] text-white font-bold py-4 rounded-xl text-base hover:bg-[#1a70a8] transition-colors duration-200 mt-1"
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
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
