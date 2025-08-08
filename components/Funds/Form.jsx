"use client";
import React, { useState } from "react";

const DonationForm = () => {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState("");
  const [selectedMethod, setSelectedMethod] = useState(null);

  const amounts = ["₹500", "₹1000", "₹2500", "Custom"];
  const methods = ["UPI", "CARDS", "NET BANKING", "PAYTM"];

  return (
    <main className="flex flex-col items-center p-0 m-0 w-full">
      <section className="flex flex-col md:flex-row justify-center items-start gap-24 w-full max-w-6xl mx-auto py-10">
        {/* Form */}
        <div className="w-full max-w-md flex flex-col justify-start">
          <h2 className="font-bold text-3xl text-gray-900 mb-7 text-left">Make a Difference Today</h2>
          <form className="flex flex-col gap-5">
            <div>
              <label className="block text-sm font-semibold mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Enter Full Name"
                className="w-full border rounded p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter Mail ID"
                className="w-full border rounded p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Donation Amount</label>
              <div className="flex gap-2 mb-2">
                {amounts.map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    className={`border rounded px-4 py-2 font-semibold transition-all duration-200 ${selectedAmount === amt ? "bg-red-600 text-white border-red-600" : "bg-white text-gray-800 hover:bg-red-50"}`}
                    onClick={() => setSelectedAmount(amt)}
                  >
                    {amt}
                  </button>
                ))}
              </div>
              <input
                type="number"
                placeholder="Enter Custom Amount (₹)"
                className="w-full border rounded p-2"
                value={customAmount}
                onChange={e => {
                  setCustomAmount(e.target.value);
                  setSelectedAmount("Custom");
                }}
                disabled={selectedAmount !== "Custom"}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Payment Method</label>
              <div className="flex gap-3">
                {methods.map((method) => (
                  <label key={method} className="flex flex-col items-center cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMethod"
                      className="accent-red-600 mb-1"
                      checked={selectedMethod === method}
                      onChange={() => setSelectedMethod(method)}
                    />
                    <span className="text-xs font-medium">{method}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="monthly" className="accent-red-600" />
              <label htmlFor="monthly" className="text-sm">Donate Monthly</label>
            </div>
            <button className="bg-red-600 text-white w-full py-3 rounded font-semibold text-lg hover:bg-red-700 transition duration-300 mt-2">
              Proceed to Donate
            </button>
          </form>
        </div>
        {/* QR */}
        <div className="w-full max-w-xs flex flex-col items-center justify-start mt-16 md:mt-20">
          <h2 className="font-bold text-2xl text-center mb-6">
            Scan QR & directly give to the<br />NBB Organization
          </h2>
          <div className="bg-gray-200 w-64 h-64 flex justify-center items-center text-gray-700 text-xl font-bold rounded mx-auto">
            QR CODE
          </div>
        </div>
      </section>
    </main>
  );
};

export default DonationForm;