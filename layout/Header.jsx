"use client";

import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion"; // ✅ Import motion

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const Links = [
    { label: "Donor", href: "/donorregistration" },
    { label: "Request Blood", href: "/donorregistration" },
    // { label: "Blood Bank", href: "/blood-bank" },
    // { label: "Volunteer", href: "/volunteer" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 shadow-[0px_4px_16px_#0000001A]">
      {/* 🔴 Scrolling Banner */}
      <div className="bg-[#1F1F1F] text-white text-sm flex items-center px-4 py-1 overflow-hidden relative">
        <span className="bg-red-600 z-20 text-white rounded px-3 py-1 lg:ml-10 font-semibold lg:w-[130px] text-[15px] text-center">
          Caution:
        </span>
        <div className="relative ml-3 flex-1 overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-[50px] bg-[#1F1F1F]"></div>
          <div className="whitespace-nowrap animate-scroll pl-[60px]">
            We never charge for blood donations. Don’t pay for blood; it's a
            selfless act. ❤️ We never charge for blood donations. Don’t pay for
            blood; it's a selfless act. ❤️
          </div>
        </div>
      </div>

      {/* 🔴 Navbar */}
      <div className="bg-[#F9FAFB] flex items-center justify-between px-2 md:px-10 py-1 relative h-auto md:h-[70px]">
        <Link
          href={"/"}
          className="flex items-center gap-4 w-[40px] h-[40px] lg:w-[195px] lg:h-[95px]"
        >
          <img src="images/logo.png" alt="Logo" className="w-full h-full" />
        </Link>

        <nav className="hidden md:flex w-full items-center justify-between font-outfit text-[15px] text-black px-8">
          <Link href="/whoweare" className="hover:text-red-600 transition-colors">
            Who We Are
          </Link>
          <Link href="/howwehelp" className="hover:text-red-600 transition-colors">
            How We Help
          </Link>
          <Link href="/contact" className="hover:text-red-600 transition-colors">
            Contact
          </Link>
          <Link href="/Funds" className="hover:text-red-600 transition-colors">
            Funds
          </Link>
          <Link href="/donorregistration" className="hover:text-red-600 transition-colors">
            Blood Bank
          </Link>
          <Link href="/donorregistration" className="hover:text-red-600 transition-colors">
            Volunteers
          </Link>
        </nav>

        <div className="hidden w-full md:flex justify-end space-x-13">
          {Links.map(({ label, href }, index) => (
            <Link
              key={index}
              href={href}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md font-outfit text-sm transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <HiX className="w-6 h-6 text-black" />
            ) : (
              <HiMenu className="w-6 h-6 text-black" />
            )}
          </button>
        </div>
      </div>

      {/* 🔴 Mobile Menu with Animation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="font-outfit bg-[#F9FAFB] px-6 pb-4 md:hidden text-sm space-y-3"
          >
            <Link
              href="/whoweare"
              className="block text-black hover:text-red-600"
            >
              Who We Are
            </Link>
            <Link
              href="/howwehelp"
              className="block text-black hover:text-red-600"
            >
              How We Help
            </Link>
            <Link
              href="/contact"
              className="block text-black hover:text-red-600"
            >
              Contact
            </Link>

            <Link
              href="/Funds"
              className="block text-black hover:text-red-600"
            >
               Funds
            </Link>

            <Link
              href="/donorregistration"
              className="block text-black hover:text-red-600"
            >
               Blood Bank
            </Link>

            <Link
              href="/Volunteers"
              className="block text-black hover:text-red-600"
            >
               Volunteers
            </Link>

            <div className="pt-3 space-y-2">
              {Links.map(({ label, href }, index) => (
                <Link
                  key={index}
                  href={href}
                  className="block w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-center"
                >
                  {label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
