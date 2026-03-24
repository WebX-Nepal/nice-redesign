import Image from "next/image";
import Link from "next/link";
import logo from "../../public/nice-logo.png";
import { navbar } from "@/constants/constant";
import { Icon } from "@iconify/react";

const services = [
  "Construction Workers",
  "Hospitality Staff",
  "Security Personnel",
  "General Labour",
  "Facility Management",
  "Driver & Logistics",
];

const socials = [
  { icon: "mdi:facebook", href: "#", label: "Facebook" },
  { icon: "mdi:instagram", href: "#", label: "Instagram" },
  { icon: "mdi:linkedin", href: "#", label: "LinkedIn" },
  {
    icon: "logos:whatsapp-icon",
    href: "https://wa.me/9779706414359",
    label: "WhatsApp",
  },
];

const Footer = () => {
  return (
    <footer className="bg-zinc-950 pt-16 pb-6 mt-0">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-0">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand col */}
          <div className="lg:col-span-1 flex flex-col gap-5">
            <Image
              src={logo}
              alt="Nice Manpower"
              className="w-32 brightness-0 invert"
            />
            <p className="text-zinc-400 text-sm leading-relaxed">
              Nepal&apos;s trusted government-licensed manpower recruitment
              agency, connecting skilled workers with Gulf employers since 2005.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#2089CA] flex items-center justify-center transition-colors duration-200"
                >
                  <Icon icon={s.icon} width="18" className="text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold text-base">Quick Links</h4>
            <ul className="flex flex-col gap-2.5">
              {navbar.map((nav) => (
                <li key={nav.id}>
                  <Link
                    href={nav.href}
                    className="text-zinc-400 text-sm hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <Icon
                      icon="mdi:chevron-right"
                      width="14"
                      className="text-[#2089CA] opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    {nav.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold text-base">Our Services</h4>
            <ul className="flex flex-col gap-2.5">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-zinc-400 text-sm hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <Icon
                      icon="mdi:chevron-right"
                      width="14"
                      className="text-[#2089CA] opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold text-base">Contact Us</h4>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:info@nicerecruitment.org"
                className="flex items-start gap-3 group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#2089CA] transition-colors duration-200">
                  <Icon
                    icon="mdi:email-outline"
                    width="16"
                    className="text-white"
                  />
                </div>
                <div>
                  <p className="text-zinc-500 text-xs">Email</p>
                  <p className="text-zinc-300 text-sm group-hover:text-white transition-colors">
                    info@nicerecruitment.org
                  </p>
                </div>
              </a>

              <a
                href="tel:+9779706414359"
                className="flex items-start gap-3 group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#2089CA] transition-colors duration-200">
                  <Icon
                    icon="mdi:phone-outline"
                    width="16"
                    className="text-white"
                  />
                </div>
                <div>
                  <p className="text-zinc-500 text-xs">Phone</p>
                  <p className="text-zinc-300 text-sm group-hover:text-white transition-colors">
                    +977 970-6414359
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <Icon
                    icon="mdi:map-marker-outline"
                    width="16"
                    className="text-white"
                  />
                </div>
                <div>
                  <p className="text-zinc-500 text-xs">Office</p>
                  <p className="text-zinc-300 text-sm">
                    Samakhusi, Kathmandu, Nepal
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <Icon icon="twemoji:flag-united-arab-emirates" width="16" />
                </div>
                <div>
                  <p className="text-zinc-500 text-xs">Branch</p>
                  <p className="text-zinc-300 text-sm">Dubai, UAE</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Nice Recruiting Agency. All rights
            reserved.
          </p>
          <a
            href="https://webxnepal.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-zinc-500 text-sm hover:text-zinc-300 transition-colors duration-200 group"
          >
            <span>Designed & Developed by</span>
            <Image
              src="/logo/webx.png"
              alt="WebX Nepal"
              width={52}
              height={20}
              className="object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-200"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
