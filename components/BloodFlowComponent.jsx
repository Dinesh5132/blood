"use client";
import React, { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";

const bloodCompatibility = {
  "O-": ["O-", "O+", "A-", "A+", "B-", "B+", "AB-", "AB+"],
  "O+": ["O+", "A+", "B+", "AB+"],
  "A-": ["A-", "A+", "AB-", "AB+"],
  "A+": ["A+", "AB+"],
  "B-": ["B-", "B+", "AB-", "AB+"],
  "B+": ["B+", "AB+"],
  "AB-": ["AB-", "AB+"],
  "AB+": ["AB+"],
};

const allTypes = ["O-", "A-", "B-", "AB-", "O+", "A+", "B+", "AB+"];
const leftTypes = allTypes.slice(0, 4);
const rightTypes = allTypes.slice(4, 8);

export default function BloodFlowAnimation() {
  const [selectedType, setSelectedType] = useState("");
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (selectedType) {
      setAnimate(false);
      setTimeout(() => setAnimate(true), 100);
    }
  }, [selectedType]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 font-Outfit">
      <h2 className="text-xl font-Urbanist font-bold mb-6">
        Select the donor blood type:
      </h2>

      {/* Donor blood buttons */}
      <div className="flex flex-wrap gap-2 mb-12">
        {allTypes.map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`border-2 px-4 py-2 rounded-lg text-sm transition-all duration-300 ${
              selectedType === type
                ? "border-red-600 text-red-600 font-semibold"
                : "border-gray-400 hover:border-red-500 hover:text-red-500"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Blood flow diagram */}
      <div className="grid grid-cols-3 gap-4 items-start relative">
        {/* Left Side */}
        <div className="flex flex-col items-end gap-12 mt-20">
          {leftTypes.map((type) => (
            <div key={type} className="flex items-center gap-2 w-24 justify-end">
              <span className="text-sm">{type}</span>
              <FaUser className="text-gray-700" />
            </div>
          ))}
        </div>

        {/* Blood Bag & Animated Lines */}
        <div className="relative h-[380px] flex flex-col items-center">
          {/* Blood Bag */}
          <div className="w-14 h-20 bg-red-600 rounded-b-xl border-4 border-white shadow-md relative z-20">
            <div className="w-full h-3 bg-gray-300 absolute -top-3 rounded-sm" />
          </div>

          {/* Vertical Blood Flow */}
          <div
            className={`w-1 bg-red-600 absolute top-20 transition-all duration-700 ease-out origin-top ${
              animate ? "h-[320px]" : "h-0"
            }`}
          />

          {/* Horizontal Flow Lines */}
          <div className="absolute top-20 left-0 w-full h-full z-0">
            {allTypes.map((type, index) => {
              const isLeft = index < 4;
              const offsetY = index * 80 + 12;
              const canDonate = bloodCompatibility[selectedType]?.includes(type);

              return (
                <div
                  key={type}
                  className={`absolute h-[2px] bg-red-600 transition-all duration-700 ease-out origin-${
                    isLeft ? "right" : "left"
                  } ${animate && canDonate ? "w-[150px] delay-[700ms]" : "w-0"}`}
                  style={{
                    top: `${offsetY}px`,
                    left: "50%",
                  }}
                />
              );
            })}
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col items-start gap-12 mt-20">
          {rightTypes.map((type) => (
            <div key={type} className="flex items-center gap-2 w-24">
              <FaUser className="text-gray-700" />
              <span className="text-sm">{type}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
