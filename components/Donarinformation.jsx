"use client";

import React, { useState } from "react";

export default function DonorInformation() {
  const [form, setForm] = useState({
    fullName: "",
    dob: "",
    phone: "",
    email: "",
    gender: "",
    address: "",
    bloodGroup: "",
    notSure: false,
    available: false,
  });

  return (
    <div className="min-h-screen bg-white-50 py-8 px-4 flex flex-col items-center">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-8">
        We’d Love to Have <span className="text-red-600">You as a Donor!</span>
      </h1>
      {/* Form Card */}
      <div className="bg-white rounded-2xl shadow-lg max-w-4xl w-full p-8 mx-auto">
        <h2 className="text-2xl font-semibold mb-6 border-b pb-2 border-gray-200">
          BASIC INFORMATION
        </h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-semibold mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Enter Full Name"
              className="w-full border rounded p-2"
              value={form.fullName}
              onChange={e => setForm({ ...form, fullName: e.target.value })}
            />
          </div>
          {/* Date of Birth */}
          <div>
            <label className="block text-sm font-semibold mb-1">Date Of Birth</label>
            <input
              type="date"
              placeholder="DD-MM-YYYY"
              className="w-full border rounded p-2"
              value={form.dob}
              onChange={e => setForm({ ...form, dob: e.target.value })}
            />
          </div>
          {/* Phone Number */}
          <div>
            <label className="block text-sm font-semibold mb-1">Phone Number</label>
            <input
              type="text"
              placeholder="90909 09099"
              className="w-full border rounded p-2"
              value={form.phone}
              onChange={e => setForm({ ...form, phone: e.target.value })}
            />
          </div>
          {/* Email ID */}
          <div>
            <label className="block text-sm font-semibold mb-1">Email ID</label>
            <input
              type="email"
              placeholder="Enter Mail ID"
              className="w-full border rounded p-2"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
            />
          </div>
          {/* Gender */}
          <div>
            <label className="block text-sm font-semibold mb-1">Gender</label>
            <select
              className="w-full border rounded p-2"
              value={form.gender}
              onChange={e => setForm({ ...form, gender: e.target.value })}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          {/* Address */}
          <div>
            <label className="block text-sm font-semibold mb-1">Address</label>
            <input
              type="text"
              placeholder="Enter Mail ID"
              className="w-full border rounded p-2"
              value={form.address}
              onChange={e => setForm({ ...form, address: e.target.value })}
            />
          </div>
          {/* Blood Group */}
          <div>
            <label className="block text-sm font-semibold mb-1">Blood Group</label>
            <select
              className="w-full border rounded p-2"
              value={form.bloodGroup}
              onChange={e => setForm({ ...form, bloodGroup: e.target.value })}
            >
              <option value="">select blood group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
          </div>
        </form>
        {/* Checkboxes and Button */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-6 gap-4">
          <div className="flex flex-col gap-2">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="accent-red-600 mr-2"
                checked={form.notSure}
                onChange={e => setForm({ ...form, notSure: e.target.checked })}
              />
              <span className="text-sm">Not sure about my blood group</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="accent-red-600 mr-2"
                checked={form.available}
                onChange={e => setForm({ ...form, available: e.target.checked })}
              />
              <span className="text-sm">I am Available Now</span>
            </label>
          </div>
          <button className="bg-red-600 text-white px-10 py-2 rounded font-semibold text-lg mt-2 md:mt-0 w-full md:w-auto">
            Become a Donor
          </button>
        </div>
        <div className="mt-4 text-xs text-gray-500">
          Note* : Your blood will be taken only if you are healthy while donating blood
        </div>
      </div>
    </div>
  );
}