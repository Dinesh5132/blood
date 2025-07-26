"use client";
import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 shadow-[0px_4px_16px_#0000001A]">
      <div className="bg-[#1F1F1F] text-white text-sm flex items-center px-4 py-1">
        <span className="bg-red-600 text-white px-3 py-1 lg:ml-10 font-semibold lg:w-[130px] text-[15px] text-center">
          Caution:
        </span>
        <p className="ml-3 font-Outfit text-[14px]">
          We never charge for blood donations. Don’t pay for blood; it's a selfless act.
        </p>
      </div>
      <div className="bg-[#F9FAFB] flex items-center justify-between px-4 md:px-10 py-3 relative h-auto md:h-[70px]">
        <div className="flex items-center gap-4 w-[40px] h-[40px] lg:w-[95px] lg:h-[95px]">
          <img
            src="images/logo.png"
            alt="Logo"
            className="w-full h-full"
          />
        </div>
        <nav className="hidden md:flex items-center gap-28 font-Outfit text-[15px] text-black">
          <a href="#" className="hover:text-red-600">Who We Are</a>
          <a href="#" className="hover:text-red-600">How We Help</a>
          <a href="#" className="hover:text-red-600">Contact</a>
        </nav>
        <div className="hidden md:flex gap-20">
          {["Donor", "Request Blood", "Blood bank", "Volunteer"].map((text, index) => (
            <button
              key={index}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-1.5 rounded font-Outfit text-sm"
            >
              {text}
            </button>
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
      {menuOpen && (
        <div className="bg-[#F9FAFB] px-6 pb-4 md:hidden font-Outfit text-sm space-y-3">
          <a href="#" className="block text-black hover:text-red-600">Who We Are</a>
          <a href="#" className="block text-black hover:text-red-600">How We Help</a>
          <a href="#" className="block text-black hover:text-red-600">Contact</a>
          <div className="pt-3 space-y-2">
            {["Donor", "Request Blood", "Blood bank", "Volunteer"].map((text, index) => (
              <button
                key={index}
                className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded font-Outfit"
              >
                {text}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
