import React from "react";

export default function BloodBankRegistration() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 py-6">
      {/* Heading */}
      <h1 className="text-2xl font-bold text-center mb-4">
        Blood Bank Registration
      </h1>

      {/* Form Container */}
      <div className="border border-gray-300 rounded-lg p-4 max-w-2xl w-full shadow-md">
        <h2 className="font-semibold text-base mb-3 border-b pb-2">
          Basic Information
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {/* Blood Bank Name */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Blood Bank Name
            </label>
            <input
              type="text"
              placeholder="Enter Full Name"
              className="w-full border border-gray-300 rounded-md px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
            />
          </div>

          {/* Blood Bank Name (Again) */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Blood Bank Name
            </label>
            <input
              type="text"
              placeholder="Enter Full Name"
              className="w-full border border-gray-300 rounded-md px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="90909 09099"
              className="w-full border border-gray-300 rounded-md px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
            />
          </div>

          {/* Registration ID */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Registration ID / License Number
            </label>
            <input
              type="text"
              placeholder="Enter Full Name"
              className="w-full border border-gray-300 rounded-md px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium mb-1">Address</label>
            <input
              type="text"
              placeholder="Enter Address"
              className="w-full border border-gray-300 rounded-md px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
            />
          </div>

          {/* Email ID */}
          <div>
            <label className="block text-sm font-medium mb-1">Email ID</label>
            <input
              type="email"
              placeholder="Enter Mail ID"
              className="w-full border border-gray-300 rounded-md px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
            />
          </div>

          {/* Operating Hours */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Operating Hours
            </label>
            <input
              type="time"
              className="w-full border border-gray-300 rounded-md px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
            />
          </div>

          {/* Blood Components */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Blood Components Available
            </label>
            <select className="w-full border border-gray-300 rounded-md px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm">
              <option value="">Select Blood Components</option>
              <option value="plasma">Plasma</option>
              <option value="platelets">Platelets</option>
              <option value="whole_blood">Whole Blood</option>
              <option value="RBC">RBC</option>
            </select>
          </div>

          {/* Contact Person Name */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Contact Person Name
            </label>
            <input
              type="text"
              placeholder="Enter Contact Person Name"
              className="w-full border border-gray-300 rounded-md px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
            />
          </div>

          {/* Contact Person Phone */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Contact Person Phone Number
            </label>
            <input
              type="tel"
              placeholder="Enter Contact Person Number"
              className="w-full border border-gray-300 rounded-md px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
            />
          </div>

          {/* Upload Documents */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Upload Documents
            </label>
            <select className="w-full border border-gray-300 rounded-md px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm">
              <option value="">Select Documents</option>
              <option value="Registration Proof">Registration Proof</option>
              <option value="Valid ID Proof">Valid ID Proof</option>
            </select>
          </div>
        </form>

        {/* Terms & Conditions */}
        <div className="mt-3 flex items-center">
          <input type="checkbox" className="mr-2" />
          <label className="text-sm text-gray-600">
            I agree to the terms & conditions
          </label>
        </div>

        {/* Submit Button */}
        <div className="mt-4 text-center">
          <button
            type="submit"
            className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition text-sm"
          >
            Submit Details
          </button>
        </div>
      </div>
    </div>
  );
}
