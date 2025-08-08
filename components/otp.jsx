'use client';

import React, { useState, useRef } from "react";

export default function OTPVerification() {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputsRef = useRef([]);

  const handleChange = (value, index) => {
    if (isNaN(value)) return; // only numbers
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move focus to next input
    if (value && index < 5) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 w-full">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-4">
        <span className="text-red-600">OTP</span> Verification
      </h1>

      {/* Subtitle */}
      <p className="text-gray-500 text-base mb-8 text-center max-w-md">
        We’ve sent a 6-digit code to <span className="font-medium">+91 XXXXX 3245</span> <br />
        Please enter the code below to continue
      </p>

      {/* OTP Inputs */}
      <div className="flex gap-6 mb-8">
        {otp.map((data, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            value={data}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            ref={(el) => (inputsRef.current[index] = el)}
            className="w-20 h-20 text-center border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500 text-2xl"
          />
        ))}
      </div>

      {/* Continue Button */}
      <button className="bg-red-600 text-white px-24 py-4 rounded-full hover:bg-red-700 text-lg font-semibold mb-2">
        Continue
      </button>

      {/* Resend Link */}
      <div className="mt-6 text-base">
        <span className="text-red-500 cursor-pointer hover:underline">
          Didn’t receive it?
        </span>{" "}
        <span className="text-gray-500">Resend in 00:26</span>
      </div>
    </div>
  );
}