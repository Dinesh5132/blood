"use client";
import React from "react";
import { useForm } from "react-hook-form";
import SignupHook from "./hooks/SignupHook";

export default function Signup() {
  const { errors, handleSubmit, register, onSubmit } = SignupHook();
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-xl shadow-lg w-96"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>

        {/* Name */}
        <label className="block mb-1 font-medium">Name</label>
        <input
          type="text"
          {...register("name")}
          className="w-full p-2 border rounded mb-1"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mb-2">{errors.name.message}</p>
        )}

        {/* Email */}
        <label className="block mb-1 font-medium">Email</label>
        <input
          type="email"
          {...register("email")}
          className="w-full p-2 border rounded mb-1"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mb-2">{errors.email.message}</p>
        )}

        {/* Mobile */}
        <label className="block mb-1 font-medium">Mobile Number</label>
        <input
          type="tel"
          {...register("mobile")}
          className="w-full p-2 border rounded mb-1"
        />
        {errors.mobile && (
          <p className="text-red-500 text-sm mb-2">{errors.mobile.message}</p>
        )}

        {/* Password */}
        <label className="block mb-1 font-medium">Password</label>
        <input
          type="password"
          {...register("password")}
          className="w-full p-2 border rounded mb-1"
        />
        {errors.password && (
          <p className="text-red-500 text-sm mb-2">{errors.password.message}</p>
        )}

        {/* Blood Group */}
        <label className="block mb-1 font-medium">Blood Group</label>
        <select
          {...register("bloodGroup")}
          className="w-full p-2 border rounded mb-1"
        >
          <option value="">Select Blood Group</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </select>
        {errors.bloodGroup && (
          <p className="text-red-500 text-sm mb-2">
            {errors.bloodGroup.message}
          </p>
        )}

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition mt-2"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
