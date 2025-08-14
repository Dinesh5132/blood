"use client";
import React from "react";

const PartnerSection = () => {
  return (
    <section className="py-12 text-center bg-white">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Partner With Us</h2>

      {/* Description */}
      <p className="text-gray-600 max-w-xl mx-auto mb-6">
        Looking for CSR collaborations or institutional funding? We welcome
        partnerships from companies, hospitals, NGOs, and communities.
      </p>

      {/* Button */}
      <button className="bg-red-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-red-700 transition mb-10">
        Become a partner
      </button>

      {/* Boxes */}
      <div className="flex flex-wrap justify-center gap-6 px-4">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="w-[200px] h-[100px] bg-gray-300 rounded-xl"
          />
        ))}
      </div>
    </section>
  );
};

export default PartnerSection;
