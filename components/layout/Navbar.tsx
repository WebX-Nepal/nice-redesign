"use client";
import logo from "../../public/nice-logo.png";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { navbar } from "@/constants/constant";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Button from "../shared/Button";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <header
        className={`w-full z-50 fixed top-0 left-0 transition-all font-fustat duration-500 ease-in-out
        ${showNavbar ? "translate-y-0" : "-translate-y-full"}
        ${scrolled
            ? "bg-white/90 backdrop-blur-md border-b border-gray-300"
            : "bg-white border-b border-gray-300"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-0 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image src={logo} alt="logo" className="w-28 object-contain" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navbar.map((nav) => {
              const isActive = pathname === nav.href;
              return (
                <Link
                  key={nav.id}
                  href={nav.href}
                  className={`relative px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200
                  ${isActive
                      ? "text-[#2089CA]"
                      : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50"
                    }`}
                >
                  {nav.title}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#2089CA] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-3">
            <div className="w-px h-5 bg-zinc-200" />
            <a
              href="https://wa.me/9779706414359"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900 transition-colors duration-200 group"
            >
              <Icon
                icon="logos:whatsapp-icon"
                width="18"
                height="18"
                className="group-hover:-translate-y-0.5 transition-transform duration-200"
              />
              <span className="font-medium">+977 970-6414359</span>
            </a>

            

            {/* <Button
              href="/contact"
              icon="mdi:phone"
              label="Contact Us"
              className=""
            /> */}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-md text-zinc-600 hover:bg-zinc-100 transition-colors"
            aria-label="Toggle menu"
          >
            <Icon
              icon={mobileOpen ? "mdi:close" : "mdi:menu"}
              width="22"
              height="22"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-t border-zinc-100
          ${mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="px-4 py-3 flex flex-col gap-1">
            {navbar.map((nav) => {
              const isActive = pathname === nav.href;
              return (
                <Link
                  key={nav.id}
                  href={nav.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-3 py-2.5 rounded-md text-sm font-medium transition-colors duration-200
                  ${isActive
                      ? "text-[#2089CA] bg-blue-50"
                      : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50"
                    }`}
                >
                  {nav.title}
                </Link>
              );
            })}
            <div className="mt-2 pt-3 border-t border-zinc-100 flex items-center justify-between">
              <a
                href="https://wa.me/9779706414359"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-zinc-600"
              >
                <Icon icon="logos:whatsapp-icon" width="18" height="18" />
                <span>+977 970-6414359</span>
              </a>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="px-4 py-2 text-sm font-semibold text-white bg-[#2089CA] rounded-full hover:bg-[#1a70a8] transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </header>
      <div
        onClick={() => setMobileOpen(false)}
        className={`fixed inset-0 z-40 bg-black/80 backdrop-blur-sm transition-all duration-300 md:hidden
    ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />
    </>

  );
};

export default Navbar;
