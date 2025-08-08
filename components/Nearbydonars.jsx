"use client";

import React, { useState } from "react";
import { FaSearch, FaFilter, FaTimes } from "react-icons/fa";

export default function DonorInformation() {
  const [selectedRange, setSelectedRange] = useState(0);

  const donorData = [
    {
      id: 1,
      name: "Donor",
      bloodGroup: "+O",
      contact: "+91 90909 90909",
      email: "xyz@gmail.com",
      dob: "Oct 15, 2023",
      address: "Hyderbed",
      avatar: "👤"
    },
    {
      id: 2,
      name: "Donor",
      bloodGroup: "+O",
      contact: "+91 90909 90909",
      email: "xyz@gmail.com",
      dob: "Oct 15, 2023",
      address: "Hyderbad",
      avatar: "👤"
    },
    {
      id: 3,
      name: "Donor",
      bloodGroup: "-",
      contact: "+91 90909 90909",
      email: "xyz@gmail.com",
      dob: "Oct 15, 2023",
      address: "Hyderbad",
      avatar: "👤"
    },
    {
      id: 4,
      name: "Donor",
      bloodGroup: "+O",
      contact: "+91 90909 90909",
      email: "xyz@gmail.com",
      dob: "Oct 15, 2023",
      address: "Hyderbad",
      avatar: "👤"
    },
    {
      id: 5,
      name: "Donor",
      bloodGroup: "-",
      contact: "+91 90909 90909",
      email: "xyz@gmail.com",
      dob: "Oct 15, 2023",
      address: "Khammam",
      avatar: "👤"
    }
  ];

  return (
    <div className="min-h-screen bg-white-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-center mb-8">
          Near By <span className="text-red-600">Blood Donors</span>
        </h1>

        {/* Filters Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            {/* Location Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search Location"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <FaSearch className="absolute right-3 top-3 text-gray-400" />
              </div>
            </div>

            {/* Gender Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Gender
              </label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500">
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Range Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select range
              </label>
              <div className="relative">
                <div className="w-full border border-gray-300 rounded-md px-3 py-2 flex items-center justify-between bg-white">
                  {/* Decrement Button */}
                  <button
                    onClick={() => setSelectedRange(Math.max(0, selectedRange - 5))}
                    className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded transition-colors"
                    disabled={selectedRange <= 0}
                  >
                    <span className="text-lg font-semibold">-</span>
                  </button>
                  
                  {/* Current Value Display */}
                  <span className="text-gray-900 font-medium">
                    {selectedRange} Km
                  </span>
                  
                  {/* Increment Button */}
                  <button
                    onClick={() => setSelectedRange(selectedRange + 5)}
                    className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded transition-colors"
                  >
                    <span className="text-lg font-semibold">+</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Filters Button */}
            {/* <div>
              <button className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md flex items-center justify-center space-x-2 transition-colors">
                <FaFilter className="w-4 h-4" />
                <span>Filters</span>
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </button>
            </div> */}
            <div>
              {/* <label className="block text-sm font-medium text-gray-700 mb-2">
                Filters
              </label> */}
              <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500">
                <option value="">Filters</option>
                <option value="Donars">Donars</option>
                <option value="Near by Blood Bank">Near by Blood Bank</option>
               
              </select>
            </div>
          </div>
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Donor Information</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Blood Group
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contact Number
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email-ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date of Birth
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Address
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {donorData.map((donor) => (
                  <tr key={donor.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center text-lg">
                            {donor.avatar}
                          </div>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {donor.name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-gray-900">{donor.bloodGroup}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-gray-900">{donor.contact}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-gray-900">{donor.email}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-gray-900">{donor.dob}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-gray-900">{donor.address}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}