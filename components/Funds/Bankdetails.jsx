"use client";
import React from "react";
import Image from "next/image";

const BankDetails = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center bg-white p-8 rounded-lg shadow-md max-w-5xl mx-auto my-10">
      {/* Bank Info */}
      <div className="text-left space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Our Bank Account Details
        </h2>
        <div className="text-gray-700 space-y-1">
          <p>
            <span className="font-semibold">Account Name</span>: NBB Organization
          </p>
          <p>
            <span className="font-semibold">Account Number</span>: 59100411230413
          </p>
          <p>
            <span className="font-semibold">IFSC Code</span>: HDFC0003777
          </p>
          <p>
            <span className="font-semibold">Location</span>: Hydernagar
          </p>
        </div>
      </div>

      {/* Image */}
      <div className="mt-6 md:mt-0 md:ml-10">
        <Image
          src="/funds/image3.png" // ✅ Ensure this is in the public folder
          alt="Heart Handshake"
          width={250}
          height={250}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default BankDetails;