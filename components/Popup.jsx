import React from "react";

export default function ConfirmationCard({
  title,
  highlight,
  message,
  imgSrc,
  onDone,
  className = "max-w-lg",
}) {
  return (
    <div className="fixed inset-0 bg-black/70 bg-opacity-50 flex items-center justify-center z-50">
      <div
        className={`bg-white ${className} rounded-lg shadow-lg p-6 md:p-8  w-full relative animate-fadeIn`}
      >
        {/* Close Button */}
        <button
          onClick={onDone}
          className="absolute cursor-pointer top-3 right-3 text-gray-400 hover:text-gray-600 text-xl"
        >
          ✕
        </button>
        <div className="flex flex-col md:flex-row items-center">
          {/* Text Content */}
          <div className="text-center md:text-left md:mr-6 md:w-1/2 max-w-sm">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              {title} <span className="text-red-600">{highlight}</span>
            </h1>
            <p className="text-gray-500 mt-4">{message}</p>
            <button
              onClick={onDone}
              className="mt-6 cursor-pointer bg-red-600 mx-auto flex justify-center items-center hover:bg-red-700 text-white font-semibold py-2 px-6 rounded shadow"
            >
              Done
            </button>
          </div>

          {/* Image */}
          <div className="mt-6 md:mt-0 md:w-1/2 flex justify-center">
            <img src={imgSrc} alt={highlight} className="max-w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}
