"use client";
import useBloodBankForm from "@/app/Bloodbankregis/hooks/useBloodBankForm";
import React from "react";
import DonorConfirmation from "./Popup";
import ConfirmationCard from "./Popup";

export default function BloodBankRegistration() {
  const {
    register,
    handleSubmit,
    errors,
    onSubmit,
    isSubmitted,
    setIsSubmitted,
    router,
  } = useBloodBankForm();

  return (
    <div className="">
      {isSubmitted ? (
        <ConfirmationCard
          title="Your Blood Bank is"
          highlight="Registered!"
          message="Thank you for registering your blood bank with NUHVIN. 
                   Your participation will help save countless lives."
          imgSrc="/bloodbag.png"
          onDone={() => router.push("/")}
        />
      ) : (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 py-6">
          <h1 className="text-2xl font-bold text-center mb-4">
            Blood Bank Registration
          </h1>
          <div className="border border-gray-300 rounded-lg p-4 max-w-2xl w-full shadow-md">
            <h2 className="font-semibold text-base mb-3 border-b pb-2">
              Basic Information
            </h2>

            <form
              className="grid grid-cols-1 md:grid-cols-2 gap-3"
              onSubmit={handleSubmit(onSubmit)}
            >
              {/* Blood Bank Name */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Blood Bank Name
                </label>
                <input
                  {...register("bloodBankName")}
                  placeholder="Enter Blood Bank Name"
                  className="w-full border border-gray-300 rounded-md px-2 py-1.5"
                />
                {errors.bloodBankName && (
                  <p className="text-red-500 text-sm">
                    {errors.bloodBankName.message}
                  </p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Phone Number
                </label>
                <input
                  {...register("phone")}
                  placeholder="9090909090"
                  className="w-full border border-gray-300 rounded-md px-2 py-1.5"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone.message}</p>
                )}
              </div>

              {/* Registration ID */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Registration ID / License Number
                </label>
                <input
                  {...register("registrationId")}
                  placeholder="Enter Registration ID"
                  className="w-full border border-gray-300 rounded-md px-2 py-1.5"
                />
                {errors.registrationId && (
                  <p className="text-red-500 text-sm">
                    {errors.registrationId.message}
                  </p>
                )}
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Address
                </label>
                <input
                  {...register("address")}
                  placeholder="Enter Address"
                  className="w-full border border-gray-300 rounded-md px-2 py-1.5"
                />
                {errors.address && (
                  <p className="text-red-500 text-sm">
                    {errors.address.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  {...register("email")}
                  placeholder="Enter Email"
                  className="w-full border border-gray-300 rounded-md px-2 py-1.5"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              {/* Blood Components */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Blood Components Available
                </label>
                <select
                  {...register("components")}
                  className="w-full border border-gray-300 rounded-md px-2 py-1.5"
                >
                  <option value="">Select Blood Components</option>
                  <option value="plasma">Plasma</option>
                  <option value="platelets">Platelets</option>
                  <option value="whole_blood">Whole Blood</option>
                  <option value="RBC">RBC</option>
                </select>
                {errors.components && (
                  <p className="text-red-500 text-sm">
                    {errors.components.message}
                  </p>
                )}
              </div>

              {/* Operating Hours */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">
                  Operating Hours
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">
                      Opening Time
                    </label>
                    <input
                      type="time"
                      {...register("openingTime")}
                      className="w-full border border-gray-300 rounded-md px-2 py-1.5"
                    />
                    {errors.openingTime && (
                      <p className="text-red-500 text-sm">
                        {errors.openingTime.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">
                      Closing Time
                    </label>
                    <input
                      type="time"
                      {...register("closingTime")}
                      className="w-full border border-gray-300 rounded-md px-2 py-1.5"
                    />
                    {errors.closingTime && (
                      <p className="text-red-500 text-sm">
                        {errors.closingTime.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Contact Person Name */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Contact Person Name
                </label>
                <input
                  {...register("contactName")}
                  placeholder="Enter Contact Person Name"
                  className="w-full border border-gray-300 rounded-md px-2 py-1.5"
                />
                {errors.contactName && (
                  <p className="text-red-500 text-sm">
                    {errors.contactName.message}
                  </p>
                )}
              </div>

              {/* Contact Person Phone */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Contact Person Phone Number
                </label>
                <input
                  {...register("contactPhone")}
                  placeholder="Enter Contact Number"
                  className="w-full border border-gray-300 rounded-md px-2 py-1.5"
                />
                {errors.contactPhone && (
                  <p className="text-red-500 text-sm">
                    {errors.contactPhone.message}
                  </p>
                )}
              </div>

              {/* Upload Documents */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Upload Documents type
                </label>
                <select
                  {...register("documentType")}
                  className="w-full border border-gray-300 rounded-md px-2 py-1.5 mb-2"
                >
                  <option value="">Select Document Type</option>
                  <option value="Registration Proof">Registration Proof</option>
                  <option value="Valid ID Proof">Valid ID Proof</option>
                </select>
                {errors.documentType && (
                  <p className="text-red-500 text-sm">
                    {errors.documentType.message}
                  </p>
                )}
              </div>
              <div className="mb-3">
                <label
                  className="block text-sm font-medium mb-1"
                  style={{ color: "#B22222" }}
                >
                  Upload Document
                </label>

                <input
                  type="file"
                  {...register("documentFile")}
                  className="w-full rounded-md px-2 py-1.5 mb-2"
                  style={{
                    border: "1px solid #B22222",
                    backgroundColor: "#FFF5F5",
                  }}
                  accept=".pdf,.jpg,.jpeg,.png"
                />

                {errors.documentFile && (
                  <p className="text-red-500 text-sm">
                    {errors.documentFile.message}
                  </p>
                )}
              </div>

              {/* Terms & Submit */}
              <div className="md:col-span-2 mt-3">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    {...register("terms")}
                    className="mr-2"
                  />
                  <label className="text-sm text-gray-600">
                    I agree to the terms & conditions
                  </label>
                </div>
                {errors.terms && (
                  <p className="text-red-500 text-sm">{errors.terms.message}</p>
                )}
                <div className="mt-4 text-center">
                  <button
                    type="submit"
                    className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition text-sm"
                  >
                    Submit Details
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
