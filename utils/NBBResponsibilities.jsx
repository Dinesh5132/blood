"use client";

import React from "react";

export default function NBBResponsibilities({
  heading = { highlight: "", rest: "" },
  subheading = "",
  description = "",
  principlesHeading = "",
  principles = [],
}) {
  return (
    <div className="w-full max-w-[1200px] mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-10 px-4 sm:px-6 md:px-16 py-10 md:py-16 shadow-[0px_4px_16px_#0000001A] rounded-lg bg-[#F9FAFB] mt-8 md:mt-12">
      <div className="w-full md:w-1/2 space-y-4 order-2 md:order-1">
        <div>
          <h2 className="font-Urbanist text-3xl md:text-4xl font-bold text-black">
            <span className="text-red-600">{heading?.highlight}</span>{" "}
            {heading?.rest}
          </h2>
          <div className="h-[2px] w-16 bg-red-600 mt-2"></div>
        </div>

        <p className="font-Outfit text-red-500 text-lg md:text-xl">
          {subheading}
        </p>

        <p className="font-Outfit text-[#333333] leading-relaxed text-sm md:text-[16px]">
          {description}
        </p>

        <p className="font-Outfit text-red-500 font-semibold mt-4 text-base md:text-[20px]">
          {principlesHeading}
        </p>

        <ul className="list-disc ml-5 space-y-1 font-Outfit text-[#333333] text-sm md:text-[16px]">
          {principles?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="w-full md:w-[450px] h-auto order-1 md:order-2">
        <img
          src="/images/man.png"
          alt="Be a Hero - Give Blood"
          className="w-full h-full max-h-[450px] object-cover rounded-md"
        />
      </div>
    </div>
  );
}
