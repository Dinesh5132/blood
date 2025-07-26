"use client";
import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus("An error occurred. Try again later.");
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center lg:mt-20">
      <form
        onSubmit={handleSubmit}
        className="space-y-4 w-full max-w-xl mx-auto"
      >
        <h2 className="text-2xl font-bold font-Urbanist">Send us a message</h2>
        <p className="text-[#333] text-sm font-Outfit">
          If you have any blood-related questions, please message us. We're glad to assist.
        </p>

        <input
          type="text"
          name="name"
          placeholder="Enter your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-md bg-[#f4f4fa] text-sm outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-md bg-[#f4f4fa] text-sm outline-none"
        />
        <textarea
          name="message"
          placeholder="Enter your Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="5"
          className="w-full p-3 rounded-md bg-[#f4f4fa] text-sm outline-none"
        />
        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md font-semibold font-Outfit transition"
        >
          Send Now
        </button>
        {status && <p className="text-sm mt-2 font-Outfit text-gray-600">{status}</p>}
      </form>

      <div className="w-full flex justify-center lg:justify-end">
        <img
          src="/images/blood-drop-transparent.webp"
          alt="Contact Us"
          className="max-w-[350px] h-auto"
        />
      </div>
    </div>
  );
}
