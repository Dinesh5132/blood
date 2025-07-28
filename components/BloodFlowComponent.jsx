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
  const [fillHeight, setFillHeight] = useState("100%");

  useEffect(() => {
    if (selectedType) {
      const recipients = bloodCompatibility[selectedType]?.length || 0;
      const percentage = 100 - (recipients / 8) * 100;
      setAnimate(false);

      const timeout = setTimeout(() => {
        setFillHeight(`${percentage}%`);
        setAnimate(true);
      }, 300);

      return () => clearTimeout(timeout);
    }
  }, [selectedType]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 font-Outfit">
      <h2 className="text-xl font-bold mb-6">Select the donor blood type:</h2>
      <div className="flex flex-col gap-2">
        {[0, 1].map((row) => (
          <div key={row} className="flex gap-2">
            {allTypes.slice(row * 4, row * 4 + 4).map((type) => (
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
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4 items-start relative">
        {/* Left recipients */}
        <div className="flex flex-col items-end gap-10 mt-28 mr-14">
          {leftTypes.map((type) => (
            <div
              key={type}
              className="flex items-center gap-2 w-24 justify-end"
            >
              <span className="text-sm">{type}</span>
              <FaUser className="text-gray-700" />
            </div>
          ))}
        </div>

        <div className="relative h-[260px] mt-8 flex flex-col items-center justify-start">
          <div className="w-14 h-20 bg-white border-4 border-blue-200 rounded-b-xl shadow-md relative overflow-hidden z-20">
            <div className="w-full h-3 bg-gray-300 absolute -top-3 rounded-sm" />
            <div
              className="absolute bottom-0 w-full bg-red-600 transition-all duration-1000 ease-in-out"
              style={{ height: fillHeight }}
            />
          </div>

          <div className="w-1 bg-gray-300 absolute top-20 h-[195px] z-0" />
          <div
            className="w-1 bg-red-600 absolute top-20 origin-top z-10"
            style={{
              height: animate ? "195px" : "0px",
              transition: "height 1.2s ease-in-out",
            }}
          />
          <div className="absolute top-20 left-0 w-full h-full">
            {[0, 1, 2, 3].map((i) => {
              const leftType = leftTypes[i];
              const rightType = rightTypes[i];
              const offsetY = i * 60 + 12;

              const canDonateLeft =
                bloodCompatibility[selectedType]?.includes(leftType);
              const canDonateRight =
                bloodCompatibility[selectedType]?.includes(rightType);

              return (
                <React.Fragment key={i}>
                  <div
                    className="absolute h-[4px] bg-gray-300 lg:w-[410px] w-[220px] md:w-[290px]"
                    style={{
                      top: `${offsetY}px`,
                      right: "50%",
                      transform: "translateX(50%)",
                    }}
                  />
                  <div
                    className="absolute h-[4px] bg-gray-300 lg:w-[150px] md:w-[150px] w-[100px]"
                    style={{ top: `${offsetY}px`, left: "50%" }}
                  />

                  {canDonateLeft && (
                    <div
                      className="absolute h-[4px] bg-red-600 origin-right transition-[width] ease-in-out delay-700"
                      style={{
                        top: `${offsetY}px`,
                        right: "50%",
                        transform: "translateX(50%)",
                        width: animate
                          ? window.innerWidth < 768
                            ? "220px"
                            : "420px"
                          : "0px",
                      }}
                    /> 
                  )}
                  {canDonateRight && (
                    <div
                      className="absolute h-[4px] bg-red-600 origin-left transition-[width] ease-in-out delay-700"
                      style={{
                        top: `${offsetY}px`,
                        left: "50%",
                        width: animate
                          ? window.innerWidth < 768 
                            ? "100px" 
                            : "150px"
                          : "0px",
                      }}
                    />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col items-start gap-10 mt-28 ml-14">
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
