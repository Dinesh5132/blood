import React from "react";
import Link from "next/link";

export default function LastSection() {
  return (
    <div className="w-full bg-[#F9FAFB] py-12 lg:mt-6 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto bg-[#fd5151] rounded-xl text-center px-6 py-10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-40 h-40 rounded-full border-4 border-[#FFF] opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40  rounded-full border-4 border-[#FFF] translate-x-1/2 translate-y-1/2"></div>
        <h2 className="font-Urbanist text-white text-[20px] sm:text-3xl md:text-4xl font-bold mb-4">
          Every Drop Counts – Help Save <br/>Lives Today
        </h2>
        <p className="font-Outfit text-white text-sm md:text-[13px] max-w-xl mx-auto mb-6">
          Join our growing network of lifesavers by donating blood or staying updated on urgent needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/donate">
            <button className="bg-[#2E2E2E] text-white px-6 py-2 rounded-md font-Outfit font-medium hover:bg-gray-900 transition">
              Become a Donor
            </button>
          </Link>
          <Link href="/register">
            <button className="bg-white text-black px-6 py-2 rounded-md font-Outfit font-medium hover:bg-gray-100 transition">
              Become a Donor
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
