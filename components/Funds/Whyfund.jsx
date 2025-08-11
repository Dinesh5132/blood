import React from "react";

const fundItems = [
  {
    title: "Maintain Storage & Equipment",
    description: "Ensure our labs and cold storage are reliable and up-to-date.",
  },
  {
    title: "Support Mobile Donation Drives",
    description: "Help fund blood donation camps in rural and urban areas.",
  },
  {
    title: "Awareness & Education",
    description: "Campaigns to encourage more donors and educate the public.",
  },
  {
    title: "Improve Testing & Safety",
    description: "Enhance blood screening to ensure safe transfusions.",
  },
  {
    title: "Help Patients in Need",
    description: "Offer free blood to underprivileged patients and emergencies.",
  },
];

const WhyFundSection = () => {
  return (
    <section className="text-center space-y-8 max-w-5xl w-full mx-auto px-4 py-10">
      <h2 className="font-bold text-2xl border-b-4 border-red-600 inline-block pb-1">
        Why Fund the Blood Bank?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {fundItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-2 text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-b from-red-900 to-red-700 rounded-full" />
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyFundSection;