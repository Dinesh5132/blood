import React from "react";
import { FaHeartbeat } from "react-icons/fa";

const helpItems = [
  {
    amount: "₹500",
    description: "Supports One Emergency Blood Request",
    highlighted: true,
  },
  {
    amount: "₹1,000",
    description: "Powers A Mobile Donation Drive",
  },
  {
    amount: "₹2,500",
    description: "Buys Testing Kits For 50 Units",
  },
  {
    amount: "₹5,000+",
    description: "Helps Run Monthly Awareness Campaigns",
  },
];

const HowDonationHelps = () => {
  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-8 text-center">
        How Your Donation Helps
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {helpItems.map((item, index) => (
          <div
            key={index}
            className={`rounded p-6 flex flex-col items-center justify-center text-center shadow ${
              item.highlighted
                ? "bg-red-600 text-white"
                : "bg-gray-100 text-gray-900"
            }`}
          >
            <FaHeartbeat size={32} />
            <p className="text-xl font-semibold mt-2">{item.amount}</p>
            <p className="mt-1">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Image Section */}
      <div className="mt-10 flex justify-center">
        <img
          src="/funds/image2.png" // <-- Update this path as needed
          alt="Donation Awareness"
          className="max-w-[400px] h-auto rounded shadow-md"
        />
      </div>
    </section>
  );
};

export default HowDonationHelps;