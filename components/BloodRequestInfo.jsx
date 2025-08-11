'use client';

import React, { useState } from 'react';

export default function BloodRequestinfo() {
  const [formData, setFormData] = useState({
    patientFirstName: '',
    patientLastName: '',
    attendeeFirstName: '',
    attendeeLastName: '',
    phoneNumber: '',
    requestType: 'Blood',
    bloodGroup: '',
    quantity: '',
    dateOfRequirement: '',
    hospitalName: '',
    address: '',
    isCritical: false,
    agreeToTerms: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white py-8 px-4">
      {/* Main container */}
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-8 text-left">
          Submit your information to raise a{' '}
          <span className="text-red-600">blood request.</span>
        </h1>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
          {/* Section Header */}
          <h2 className="text-2xl font-semibold mb-6 border-b pb-2 border-gray-200 text-left">
            Basic Information
          </h2>

          <form onSubmit={handleSubmit}>
            {/* Two Column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5 mb-6">
              {/* Patient First Name */}
              <div>
                <label className="block text-sm font-semibold mb-1">Patient First Name</label>
                <input
                  type="text"
                  name="patientFirstName"
                  value={formData.patientFirstName}
                  onChange={handleInputChange}
                  placeholder="Enter First Name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              {/* Patient Last Name */}
              <div>
                <label className="block text-sm font-semibold mb-1">Patient Last Name</label>
                <input
                  type="text"
                  name="patientLastName"
                  value={formData.patientLastName}
                  onChange={handleInputChange}
                  placeholder="Enter Last Name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              {/* Attendee First Name */}
              <div>
                <label className="block text-sm font-semibold mb-1">Attendee First Name</label>
                <input
                  type="text"
                  name="attendeeFirstName"
                  value={formData.attendeeFirstName}
                  onChange={handleInputChange}
                  placeholder="Enter First Name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              {/* Attendee Last Name */}
              <div>
                <label className="block text-sm font-semibold mb-1">Attendee Last Name</label>
                <input
                  type="text"
                  name="attendeeLastName"
                  value={formData.attendeeLastName}
                  onChange={handleInputChange}
                  placeholder="Enter Last Name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              {/* Phone Number */}
              <div>
                <label className="block text-sm font-semibold mb-1">Phone Number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="90909 09099"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              {/* Blood Group */}
              <div>
                <label className="block text-sm font-semibold mb-1">Blood Group</label>
                <select
                  name="bloodGroup"
                  value={formData.bloodGroup}
                  onChange={handleInputChange}
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
              </div>
              {/* Request Type */}
              <div>
                <label className="block text-sm font-semibold mb-1">Request Type</label>
                <select
                  name="requestType"
                  value={formData.requestType}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white"
                >
                  <option value="Blood">Blood</option>
                  <option value="Plasma">Plasma</option>
                  <option value="Platelets">Platelets</option>
                </select>
              </div>
              {/* Quantity (optional) */}
              <div>
                <label className="block text-sm font-semibold mb-1">Quantity (optional)</label>
                <input
                  type="text"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleInputChange}
                  placeholder="Enter Quantity"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              {/* Date Of Requirement */}
              <div>
                <label className="block text-sm font-semibold mb-1">Date Of Requirement</label>
                <input
                  type="date"
                  name="dateOfRequirement"
                  value={formData.dateOfRequirement}
                  onChange={handleInputChange}
                  placeholder="DD-MM-YYYY"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              {/* Address */}
              <div>
                <label className="block text-sm font-semibold mb-1">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Enter Current Address"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              {/* Hospital Name */}
              <div>
                <label className="block text-sm font-semibold mb-1">Hospital Name</label>
                <input
                  type="text"
                  name="hospitalName"
                  value={formData.hospitalName}
                  onChange={handleInputChange}
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
                  name="isCritical"
                  checked={formData.isCritical}
                  onChange={handleInputChange}
                  className="w-4 h-4 accent-red-600 border-gray-300 rounded"
                />
                <label className="ml-2 text-sm text-gray-700">
                  It is critical and emergency
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleInputChange}
                  className="w-4 h-4 accent-red-600 border-gray-300 rounded"
                />
                <label className="ml-2 text-sm text-gray-700">
                  I have read and agree the Terms & Service and Privacy Policy
                </label>
              </div>
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
  );
} 