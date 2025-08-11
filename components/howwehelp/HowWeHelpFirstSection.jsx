"use client";

import DonarBtn from "@/utils/DonarBtn";
import Image from "next/image";
import React from "react";

export default function HoeWeHelpFirstSection() {
  return (
    <section className="w-full mx-auto px-6 md:px-16 py-12 md:pt-[100px] pt-[85px] flex flex-col lg:flex-row items-center gap-10 rounded-lg lg:mt-10">
      <div className="w-full lg:w-1/2">
        <Image
          alt="Blood Donation Help"
          src="/images/image1.png"
          className="w-full h-auto rounded-md object-cover"
          width={500}
          height={600}
        />
      </div>
      <div className="w-full lg:w-1/2 space-y-4">
        <h2 className="font-Urbanist text-3xl lg:text-4xl font-bold text-black ">
          How <span className="text-red-600">We Help</span>
        </h2>

        <p className="font-Outfit text-lg text-[#2E2E2E] lg:text-3xl">
          Educating the community on{" "}
          <span className="text-red-500 font-semibold">blood donation</span>
          importance
        </p>

        <p className="font-Outfit text-sm lg:text-base text-[#333] leading-relaxed">
          At <span className="font-semibold">NUHVIN BLOOD BANK</span>, we
          provide critical assist to those in want through our comprehensive
          donation offerings. By facilitating blood, plasma, and platelets
          donation, we make a contribution to life-saving remedies for patients
          dealing with diverse clinical situations, together with most cancers,
          clotting disorders, and immune deficiencies.
        </p>

        <p className="font-Outfit text-sm lg:text-base text-[#333] leading-relaxed">
          Our efforts empower individuals to make a meaningful difference in the
          lives of others by means of imparting safe, reliable, and handy
          donation opportunities. Through our unwavering dedication to
          excellence and compassion, we make certain that sufferers obtain the
          vital help they require for recovery and improved health.
        </p>
        <DonarBtn label="Become a donor" href="/" />
      </div>
    </section>
  );
}
