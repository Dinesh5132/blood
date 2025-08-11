import React from "react";

export default function Volunteer() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 py-8">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-6">
        We’d Love to Have <span className="text-red-600">You</span> as a{" "}
        <span className="text-red-600">Donor!</span>
      </h1>

      {/* Form Container */}
      <div className="border border-gray-300 rounded-2xl p-6 max-w-4xl w-full shadow-md">
        <h2 className="font-semibold text-lg mb-4 border-b pb-2">
          BASIC INFORMATION
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Enter Full Name"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block text-sm font-medium mb-1">Date Of Birth</label>
            <input
              type="date"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium mb-1">Phone Number</label>
            <input
              type="tel"
              placeholder="90909 09099"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Email ID */}
          <div>
            <label className="block text-sm font-medium mb-1">Email ID</label>
            <input
              type="email"
              placeholder="Enter Mail ID"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-medium mb-1">Gender</label>
            <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500">
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium mb-1">Address</label>
            <input
              type="text"
              placeholder="Enter Address"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Area of Interest */}
          <div>
            <label className="block text-sm font-medium mb-1">Area of Interest</label>
            <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500">
              <option value="">Select Area of Interest</option>
              <option value="Organizing blood camps">Organizing blood camps</option>
              <option value="Promoting blood donation awareness">Promoting blood donation awareness</option>
              <option value="Assisting donors at camps">Assisting donors at camps</option>
              <option value="Coordinating with hospitals">Coordinating with hospitals</option>
            </select>
          </div>

          {/* Availability */}
          <div>
            <label className="block text-sm font-medium mb-1">Availability</label>
            <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500">
              <option value="">Select Availability</option>
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
              <option value="Weekends Only">Weekends Only</option>
            </select>
          </div>

          {/* Upload ID Proof */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Upload ID Proof (Optional)
            </label>
            <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500">
              <option value="">Upload Now</option>
              <option value="aadhar">Aadhar Card</option>
              <option value="passport">Passport</option>
              <option value="driving_license">Driving License</option>
            </select>
          </div>
        </form>

        {/* Terms */}
        <div className="mt-4 flex items-center">
          <input type="checkbox" className="mr-2" />
          <label className="text-sm text-gray-600">
            I agree to volunteer terms
          </label>
        </div>

        {/* Submit Button */}
        <div className="mt-6 text-center">
          <button
            type="submit"
            className="bg-red-600 text-white px-8 py-2 rounded-full hover:bg-red-700 transition"
          >
            Become a Donor
          </button>
        </div>
      </div>
    </div>
  );
}
