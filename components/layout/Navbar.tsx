"use client"
import logo from "../../public/nice-logo.png";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { navbar } from "@/constants/constant";
import { useEffect, useState } from "react";

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
  
        if (currentScrollY > lastScrollY && currentScrollY > 50) {
          setShowNavbar(false); // scrolling down
        } else {
          setShowNavbar(true); // scrolling up
        }
  
        setLastScrollY(currentScrollY);
      };
  
      window.addEventListener("scroll", handleScroll, { passive: true });
  
      return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);
  

  return (
    <div
      className={`w-full z-50 px-2 py-2 fixed top-0 left-0 bg-white transition-transform duration-500 ease-in-out
      ${showNavbar ? "translate-y-0" : "-translate-y-full"}
      bg-transparent`}
      >
      <div className="flex justify-between max-w-7xl mx-auto px-4 md:px-8 lg:px-0">
        <div className="flex items-center gap-8">
          <Image
            src={logo}
            alt="logo"
            className="w-25 object-contain   cursor-pointer"
          />

          <ul className="flex items-center list-none gap-[1.2rem] ">
            {navbar.map((nav) => (
              <Link
                key={nav.id}
                href={nav.href}
                className="hover:text-[#22C55E] cursor-pointer hover:-translate-y-0.5 transition-all duration-300 ease-in-out"
              >
                {nav.title}
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex gap-4 items-center">
          <Icon
            icon="logos:whatsapp-icon"
            width="20"
            height="20"
            className="hover:-translate-y-0.5 transition-all duration-300 ease-in-out"
          />
          <p>+977 9846758390</p>

          <button
            className="px-[2vw] py-[0.5vw] text-[1vw] font-semibold cursor-pointer text-[#f8fafc] bg-[#2089CA] rounded-full 
               hover:bg-[#2563eb] hover:-translate-y-0.5 transition-all duration-300 ease-in-out"
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
