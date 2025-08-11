import React from "react";

export default function DonationType() {
  return (
    <section className="bg-[#F9FAFB] py-12 px-6 md:px-16 shadow-[0px_4px_16px_#0000001A] rounded-lg max-w-7xl mx-auto">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
        <div className="lg:w-7/12 w-full space-y-4">
          <h2 className="text-xl md:text-4xl font-Urbanist font-semibold text-[#2E2E2E]">
            The help we provide favors all those in need, including: 
          </h2>
          <ul className="list-disc ml-5 space-y-2 font-Outfit text-[16px] text-[##2E2E2E]">
            <li className="py-2">
              <span className="text-red-600-fontmedium">Blood Donation: </span>
              Offering essential support to patients requiring blood transfusions for diverse medical conditions.
            </li>
            <li className="py-2">
              <span className="text-red-600 font-medium">Plasma Donation: </span>
              Enabling critical treatments for patients with clotting disorders and immune deficiencies.
            </li>
            <li className="py-2">
              <span className="text-red-600 font-medium">Platelet Donation: </span>
              Assisting in the treatment of cancer patients or those with clotting disorders, providing vital support for their recovery.
            </li>
          </ul>
        </div>
        <div className="lg:w-5/12 w-full">
          <img
            src="images/bloodbag.png"
            alt="Blood Donation Bag"
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
