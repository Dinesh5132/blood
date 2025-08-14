"use client";
import UseFormHook from "@/app/contact/hooks/UseFormHook";
import React from "react";

export default function ContactForm() {
  const { onSubmit, handleSubmit, errors, reset, register } = UseFormHook();

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center lg:mt-20">
      <form
        onSubmit={handleSubmit(onSubmit, (err) => {
          console.log("Validation errors:", err);
        })}
        className="space-y-4 w-full max-w-xl mx-auto"
      >
        <h2 className="text-2xl font-bold font-Urbanist">Send us a message</h2>
        <p className="text-[#333] text-sm font-Outfit">
          If you have any blood-related questions, please message us. We're glad
          to assist.
        </p>

        <input
          type="text"
          {...register("name")}
          placeholder="Enter your Name"
          className="w-full p-3 rounded-md bg-[#f4f4fa] text-sm outline-none"
        />
        {errors.name && (
          <p className="text-red-500 mt-1">{errors.name.message}</p>
        )}

        {/* Email */}
        <input
          type="email"
          {...register("email")}
          placeholder="Enter your Email"
          className="w-full p-3 rounded-md bg-[#f4f4fa] text-sm outline-none"
        />
        {errors.email && (
          <p className="text-red-500 mt-1">{errors.email.message}</p>
        )}

        {/* Message */}
        <textarea
          {...register("message")}
          placeholder="Enter your Message"
          rows="5"
          className="w-full p-3 rounded-md bg-[#f4f4fa] text-sm outline-none"
        />
        {errors.message && (
          <p className="text-red-500 mt-1">{errors.message.message}</p>
        )}

        {/* Submit */}
        <button
          type="submit"
          className="bg-red-600 cursor-pointer hover:bg-red-700 text-white px-6 py-2 rounded-md font-semibold font-Outfit transition"
        >
          Send Now
        </button>
      </form>

      {/* Image */}
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
