"use client";
import React, { useState, useEffect } from "react";

const images = [
  "/images/blood-drop-transparent.webp",
  "/images/blood2.png",
  "/images/blood3.png",
  "/images/blood4.png",
];

export default function SliderComponent() {
  const [index, setIndex] = useState(0);
  const [phone, setPhone] = useState("");

  // Auto-slide carousel every 4s
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Send code to:", phone);
    // Backend API call to send OTP goes here
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center min-h-screen px-4 bg-[#F9FAFB] lg:mt-16 mt-32">
      {/* Left Image Carousel */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center">
        <div className="max-w-md w-full border-2 border-red-100 shadow-lg rounded-xl p-4 bg-white transition duration-300">
          <img
            src={images[index]}
            alt={`Slide ${index + 1}`}
            className="w-full h-auto rounded-lg"
          />
          <div className="flex justify-center gap-1 mt-3">
            {images.map((_, i) => (
              <span
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i === index ? "bg-red-500" : "bg-gray-300"
                }`}
              ></span>
            ))}
          </div>
        </div>
      </div>

      {/* Right Form Section */}
      <div className="w-full md:w-1/2 text-center">
        <h2 className="text-2xl md:text-3xl font-bold font-Urbanist text-[#1F1F1F]">
          Welcome to <span className="text-red-600">Blood Donor</span>
        </h2>
        <p className="text-sm text-gray-600 mt-2">Verify your phone number</p>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4 max-w-xs mx-auto">
          <div className="flex items-center border rounded-md px-3 py-2 bg-white">
            <span className="text-gray-600 mr-2">🇮🇳</span>
            <input
              type="tel"
              placeholder="+91"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="outline-none flex-1 text-sm"
            />
          </div>
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white w-full py-2 rounded-md font-medium transition"
          >
            Send code via SMS
          </button>
        </form>
      </div>
    </div>
  );
}
