"use client";
import React from "react";
import useBloodreqHook from "@/app/Bloodrequestinfo/hooks/useBloodreqHook";
import ConfirmationCard from "./Popup";

export default function BloodRequestinfo() {
  const {
    errors,
    handleSubmit,
    onSubmit,
    router,
    register,
    isSubmitted,
    setIsSubmitted,
  } = useBloodreqHook();
  return (
    <div className="">
      {isSubmitted ? (
        <ConfirmationCard
          className="max-w-3xl"
          title={"Request received — we’ll connect you with donors shortly."}
          highlight={
            "Request received — we’ll connect you with donors shortly."
          }
          message={
            " We’re alerting nearby donors in your area. You’ll be notified as soon as a match is found.Thank you for trusting us — help is on the way."
          }
          imgSrc={"/handsHeart.png"}
          onDone={() => router.push("/")}
        />
      ) : (
        <div className="min-h-screen bg-white py-8 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-left">
              Submit your information to raise a{" "}
              <span className="text-red-600">blood request.</span>
            </h1>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
              <h2 className="text-2xl font-semibold mb-6 border-b pb-2 border-gray-200 text-left">
                Basic Information
              </h2>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5 mb-6">
                  <div>
                    <label className="block text-sm font-semibold mb-1">
                      Patient First Name
                    </label>
                    <input
                      type="text"
                      {...register("patientFirstName")}
                      placeholder="Enter First Name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                    {errors.patientFirstName && (
                      <p className="text-red-500 text-sm">
                        {errors.patientFirstName.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-1">
                      Patient Last Name
                    </label>
                    <input
                      type="text"
                      {...register("patientLastName")}
                      placeholder="Enter Last Name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-1">
                      Attendee First Name
                    </label>
                    <input
                      type="text"
                      {...register("attendeeFirstName")}
                      placeholder="Enter First Name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                  </div>

                  {/* Attendee Last Name */}
                  <div>
                    <label className="block text-sm font-semibold mb-1">
                      Attendee Last Name
                    </label>
                    <input
                      type="text"
                      {...register("attendeeLastName")}
                      placeholder="Enter Last Name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-sm font-semibold mb-1">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      {...register("phoneNumber")}
                      placeholder="90909 09099"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                    {errors.phoneNumber && (
                      <p className="text-red-500 text-sm">
                        {errors.phoneNumber.message}
                      </p>
                    )}
                  </div>

                  {/* Blood Group */}
                  <div>
                    <label className="block text-sm font-semibold mb-1">
                      Blood Group
                    </label>
                    <select
                      {...register("bloodGroup")}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white"
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
                      <p className="text-red-500 text-sm">
                        {errors.bloodGroup.message}
                      </p>
                    )}
                  </div>

                  {/* Request Type */}
                  <div>
                    <label className="block text-sm font-semibold mb-1">
                      Request Type
                    </label>
                    <select
                      {...register("requestType")}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white"
                    >
                      <option value="Blood">Blood</option>
                      <option value="Plasma">Plasma</option>
                      <option value="Platelets">Platelets</option>
                    </select>
                  </div>

                  {/* Quantity */}
                  <div>
                    <label className="block text-sm font-semibold mb-1">
                      Quantity (optional)
                    </label>
                    <input
                      type="text"
                      {...register("quantity")}
                      placeholder="Enter Quantity"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                    {errors.quantity && (
                      <p className="text-red-500 text-sm">
                        {errors.quantity.message}
                      </p>
                    )}
                  </div>

                  {/* Date Of Requirement */}
                  <div>
                    <label className="block text-sm font-semibold mb-1">
                      Date Of Requirement
                    </label>
                    <input
                      type="date"
                      {...register("dateOfRequirement")}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                    {errors.dateOfRequirement && (
                      <p className="text-red-500 text-sm">
                        {errors.dateOfRequirement.message}
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
                      {...register("address")}
                      placeholder="Enter Current Address"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                  </div>

                  {/* Hospital Name */}
                  <div>
                    <label className="block text-sm font-semibold mb-1">
                      Hospital Name
                    </label>
                    <input
                      type="text"
                      {...register("hospitalName")}
                      placeholder="Enter Hospital Name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                {/* Checkboxes */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      {...register("isCritical")}
                      className="w-4 h-4 accent-red-600 border-gray-300 rounded"
                    />
                    <label className="ml-2 text-sm text-gray-700">
                      It is critical and emergency
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      {...register("agreeToTerms")}
                      className="w-4 h-4 accent-red-600 border-gray-300 rounded"
                    />
                    <label className="ml-2 text-sm text-gray-700">
                      I have read and agree the Terms & Service and Privacy
                      Policy
                    </label>
                  </div>
                  {errors.agreeToTerms && (
                    <p className="text-red-500 text-sm">
                      {errors.agreeToTerms.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700 font-semibold text-lg"
                  >
                    Request Blood Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
