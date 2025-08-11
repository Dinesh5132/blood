"use client";
import UseFormHook from "@/app/contact/hooks/UseFormHook";
import React, { useState } from "react";

export default function ContactForm() {
  const { onSubmit, handleSubmit, errors, register } = UseFormHook();
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center lg:mt-20">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 w-full max-w-xl mx-auto"
      >
        <h2 className="text-2xl font-bold font-Urbanist">Send us a message</h2>
        <p className="text-[#333] text-sm font-Outfit">
          If you have any blood-related questions, please message us. We're glad
          to assist.
        </p>

        <input
          type="text"
          name="name"
          {...register("name", { required: "name is required" })}
          placeholder="Enter your Name"
          className="w-full p-3 rounded-md bg-[#f4f4fa] text-sm outline-none"
        />
        {errors?.name && (
          <p className="text-red-500 mt-1">{errors?.name?.message}</p>
        )}
        <input
          type="email"
          name="email"
          placeholder="Enter your Email"
          {...register("email", { required: "email is reuired" })}
          className="w-full p-3 rounded-md bg-[#f4f4fa] text-sm outline-none"
        />
        {errors?.email && (
          <p className="text-red-500 mt-1">{errors?.email?.message}</p>
        )}
        <textarea
          name="desc"
          placeholder="Enter your Message"
          {...register("message", { required: "Enter you message" })}
          rows="5"
          className="w-full p-3 rounded-md bg-[#f4f4fa] text-sm outline-none"
        />
        {errors?.message && (
          <p className="text-red-500 mt-1">{errors?.message?.message}</p>
        )}
        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md font-semibold font-Outfit transition"
        >
          Send Now
        </button>
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
