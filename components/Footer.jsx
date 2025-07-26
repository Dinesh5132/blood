import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#F9FAFB] text-[#333] py-10 px-6 shadow-[0px_4px_16px_#0000001A]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        <div className="space-y-4">
          <img src="/images/logo.png" alt="NBB Logo" className="w-20 h-auto" />
          <p className="font-Outfit text-sm text-[#581202]">
            Nuhvin Blood Bank connects donors with those in urgent need,
            ensuring timely access to life-saving blood across India.
          </p>
          <div className="flex gap-3 pt-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-gray-300 hover:text-[#EB1202] transition"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-gray-300 hover:text-[#EB1202] transition"
            >
              <FaInstagram size={16} />
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-gray-300 hover:text-[#EB1202] transition"
            >
              <FaPinterestP size={16} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-gray-300 hover:text-[#EB1202] transition"
            >
              <FaGithub size={16} />
            </a>
          </div>
        </div>
        <div className="flex justify-around gap-8">
          <div>
            <h4 className="font-Urbanist font-bold text-red-600 mb-2">HOME</h4>
            <ul className="space-y-1 text-sm font-Outfit">
              <li><a href="#" className="hover:text-[#EB1202]">Who We Are</a></li>
              <li><a href="#" className="hover:text-[#EB1202]">How we help</a></li>
              <li><a href="#" className="hover:text-[#EB1202]">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-Urbanist font-bold text-red-600 mb-2">HELP</h4>
            <ul className="space-y-1 text-sm font-Outfit">
              <li><a href="#" className="hover:text-[#EB1202]">Contact Us</a></li>
              <li><a href="#" className="hover:text-[#EB1202]">Donor</a></li>
              <li><a href="#" className="hover:text-[#EB1202]">Request Blood</a></li>
              <li><a href="#" className="hover:text-[#EB1202]">Blood Bank</a></li>
              <li><a href="#" className="hover:text-[#EB1202]">Volunteer</a></li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center md:justify-center">
          <img
            src="/images/heart.png"
            alt="Footer Graphic"
            className="w-[300px] h-auto rounded-lg"
          />
        </div>
      </div>
      <div className="mt-10 pt-4 flex flex-col md:flex-row justify-between items-center text-sm font-Outfit">
        <a
          href="/"
          className="text-[#2E2E2E] hover:text-[#EB1202] font-medium"
        >
          Privacy Policy
        </a>

        <p className="text-center text-sm font-Outfit text-[#2E2E2E]">
          ©2024 Nuhvin Blood Bank, All Rights Reserved
        </p>

        <a
          href="/terms-and-conditions"
          className="text-[#2E2E2E] hover:text-[#EB1202] font-medium"
        >
          Terms and Conditions
        </a>
      </div>
    </footer>
  );
}
