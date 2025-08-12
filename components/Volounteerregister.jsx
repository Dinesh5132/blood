"use client";
import useVolunteerhook from "@/app/Volunteer/hook/useVolunteerhook";
import React from "react";
import ConfirmationCard from "./Popup";

export default function Volunteer() {
  const {
    errors,
    handleSubmit,
    onSubmit,
    register,
    router,
    isSubmitted,
    setIsSubmitted,
  } = useVolunteerhook();
  return (
    <>
      {isSubmitted ? (
        <ConfirmationCard
          title={"You’re officially "}
          highlight={"a Volunteer!"}
          message={
            "Your willingness to donate blood can save up to 3 lives.Let’s keep making a difference — together!"
          }
          imgSrc={"/bloodbag.png"}
          onDone={() => router.push("/")}
        />
      ) : (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 py-8">
          <h1 className="text-3xl font-bold text-center mb-6">
            We’d Love to Have <span className="text-red-600">You</span> as a{" "}
            <span className="text-red-600">Volunteer!</span>
          </h1>

          <div className="border border-gray-300 rounded-2xl p-6 max-w-4xl w-full shadow-md">
            <h2 className="font-semibold text-lg mb-4 border-b pb-2">
              BASIC INFORMATION
            </h2>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <div>
                <label className="block text-sm font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Full Name"
                  {...register("fullName")}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              {/* Date of Birth */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Date Of Birth
                </label>
                <input
                  type="date"
                  {...register("dob")}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                {errors.dob && (
                  <p className="text-red-500 text-sm">{errors.dob.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="90909 09099"
                  {...register("phone")}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone.message}</p>
                )}
              </div>

              {/* Email ID */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Email ID
                </label>
                <input
                  type="email"
                  placeholder="Enter Mail ID"
                  {...register("email")}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              {/* Gender */}
              <div>
                <label className="block text-sm font-medium mb-1">Gender</label>
                <select
                  {...register("gender")}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
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
                <label className="block text-sm font-medium mb-1">
                  Address
                </label>
                <input
                  type="text"
                  placeholder="Enter Address"
                  {...register("address")}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                {errors.address && (
                  <p className="text-red-500 text-sm">
                    {errors.address.message}
                  </p>
                )}
              </div>

              {/* Area of Interest */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Area of Interest
                </label>
                <select
                  {...register("interest")}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="">Select Area of Interest</option>
                  <option value="Organizing blood camps">
                    Organizing blood camps
                  </option>
                  <option value="Promoting blood donation awareness">
                    Promoting blood donation awareness
                  </option>
                  <option value="Assisting donors at camps">
                    Assisting donors at camps
                  </option>
                  <option value="Coordinating with hospitals">
                    Coordinating with hospitals
                  </option>
                </select>
                {errors.interest && (
                  <p className="text-red-500 text-sm">
                    {errors.interest.message}
                  </p>
                )}
              </div>

              {/* Availability */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Availability
                </label>
                <select
                  {...register("availability")}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="">Select Availability</option>
                  <option value="Daily">Daily</option>
                  <option value="Weekly">Weekly</option>
                  <option value="Weekends Only">Weekends Only</option>
                </select>
                {errors.availability && (
                  <p className="text-red-500 text-sm">
                    {errors.availability.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Upload ID Proof Type (Optional)
                </label>
                <select
                  {...register("idProofType")}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 mb-2"
                >
                  <option value="">Select ID Proof Type</option>
                  <option value="aadhar">Aadhar Card</option>
                  <option value="passport">Passport</option>
                  <option value="driving_license">Driving License</option>
                </select>
              </div>
              <div className="">
                <label className="block text-sm font-medium mb-1">
                  Upload ID Proof Document (Optional)
                </label>
                <input
                  type="file"
                  {...register("idProofFile")}
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              {/* Terms */}
              <div className="mt-4 flex items-center col-span-1 md:col-span-2">
                <input
                  type="checkbox"
                  {...register("terms")}
                  className="mr-2"
                />
                <label className="text-sm text-gray-600">
                  I agree to volunteer terms
                </label>
              </div>
              {errors.terms && (
                <p className="text-red-500 text-sm col-span-2">
                  {errors.terms.message}
                </p>
              )}

              {/* Submit Button */}
              <div className="mt-6 text-center col-span-1 md:col-span-2">
                <button
                  type="submit"
                  className="bg-red-600 text-white px-8 py-2 rounded-full hover:bg-red-700 transition"
                >
                  Become a Donor
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
