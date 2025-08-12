"use client";

import useDonorInformation from "@/app/Donarinfo/hook/useDonorInformation";
import React, { useState } from "react";
import ConfirmationCard from "./Popup";

export default function DonorInformation() {
  const {
    errors,
    handleSubmit,
    onSubmit,
    register,
    reset,
    isSubmitted,
    setIsSubmitted,
    router,
  } = useDonorInformation();

  return (
    <div className="">
      {isSubmitted ? (
        <ConfirmationCard
          title="You’re officially "
          highlight="a donor!"
          message="Your willingness to donate blood can save up to 3 lives.
Let’s keep making a difference — together!"
          imgSrc="/bloodbag.png"
          onDone={() => router.push("/")}
        />
      ) : (
        <div className="min-h-screen bg-white-50 py-8 px-4 flex flex-col items-center">
          <h1 className="text-4xl font-bold text-center mb-8">
            We’d Love to Have{" "}
            <span className="text-red-600">You as a Donor!</span>
          </h1>

          <div className="bg-white rounded-2xl shadow-lg max-w-4xl w-full p-8 mx-auto">
            <h2 className="text-2xl font-semibold mb-6 border-b pb-2 border-gray-200">
              BASIC INFORMATION
            </h2>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5"
            >
              {/* Full Name */}
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Full Name"
                  className="w-full border rounded p-2"
                  {...register("fullName")}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              {/* Date of Birth */}
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Date Of Birth
                </label>
                <input
                  type="date"
                  className="w-full border rounded p-2"
                  {...register("dob")}
                />
                {errors.dob && (
                  <p className="text-red-500 text-sm">{errors.dob.message}</p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Phone Number
                </label>
                <input
                  type="text"
                  placeholder="90909 09099"
                  className="w-full border rounded p-2"
                  {...register("phone")}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone.message}</p>
                )}
              </div>

              {/* Email ID */}
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Email ID
                </label>
                <input
                  type="email"
                  placeholder="Enter Mail ID"
                  className="w-full border rounded p-2"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              {/* Gender */}
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Gender
                </label>
                <select
                  className="w-full border rounded p-2"
                  {...register("gender")}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                {errors.gender && (
                  <p className="text-red-500 text-sm">
                    {errors.gender.message}
                  </p>
                )}
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Address
                </label>
                <input
                  type="text"
                  placeholder="Enter Address"
                  className="w-full border rounded p-2"
                  {...register("address")}
                />
                {errors.address && (
                  <p className="text-red-500 text-sm">
                    {errors.address.message}
                  </p>
                )}
              </div>

              {/* Blood Group */}
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Blood Group
                </label>
                <select
                  className="w-full border rounded p-2"
                  {...register("bloodGroup")}
                >
                  <option value="">Select blood group</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                </select>
                {errors.bloodGroup && (
                  <p className="text-red-500 text-sm">
                    {errors.bloodGroup.message}
                  </p>
                )}
              </div>

              {/* Checkboxes */}
              <div className="col-span-1 md:col-span-2 flex flex-col gap-2">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="accent-red-600 mr-2"
                    {...register("notSure")}
                  />
                  <span className="text-sm">Not sure about my blood group</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="accent-red-600 mr-2"
                    {...register("available")}
                  />
                  <span className="text-sm">I am Available Now</span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="col-span-1 md:col-span-2 flex justify-end mt-4">
                <button
                  type="submit"
                  className="bg-red-600 text-white px-10 py-2 rounded font-semibold text-lg"
                >
                  Become a Donor
                </button>
              </div>
            </form>

            <div className="mt-4 text-xs text-gray-500">
              Note*: Your blood will be taken only if you are healthy while
              donating blood
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
