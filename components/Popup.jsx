import React from 'react';

export default function DonorConfirmation() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-white px-6 py-12">
      {/* Text Content */}
      <div className="text-center md:text-left md:mr-10 max-w-md">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          You're officially <span className="text-red-600">a donor!</span>
        </h1>
        <p className="text-gray-500 mt-4">
          Your willingness to donate blood can save up to 3 lives.
          <br />
          Let’s keep making a difference — together!
        </p>
        <button className="mt-6 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded">
          Done
        </button>
      </div>

      {/* Image */}
      <div className="mt-10 md:mt-0">
        <img
          src="/bloodbag.png"
          alt="Blood Bag"
          className="w-40 md:w-52 lg:w-60"
        />
      </div>
    </div>
  );
}
