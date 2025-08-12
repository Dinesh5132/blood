"use client";
import useOtpHook from "@/hook/useOtpHook";
import Image from "next/image";

export default function HeroRegistration() {
  const { errors, handleSubmit, onSubmit, register } = useOtpHook();

  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-10 px-4 py-12 bg-white">
      <div className="w-full max-w-md text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
          Hi there, <span className="text-red-600">Hero!</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mt-4">
          Let's get you registered to
          <span className="text-red-600 font-bold">save lives!</span>
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4">
          {/* Phone input group */}
          <div className="flex items-center border border-gray-300 rounded-xl px-3 py-2 bg-white shadow-sm w-full">
            <select
              {...register("countryCode")}
              className="bg-transparent text-base outline-none pr-2"
              defaultValue="+91"
            >
              <option value="+91">🇮🇳 +91</option>
              <option value="+1">🇺🇸 +1</option>
              <option value="+44">🇬🇧 +44</option>
              <option value="+61">🇦🇺 +61</option>
            </select>

            <input
              type="tel"
              placeholder="Mobile number"
              {...register("phoneNumber", {
                required: "Mobile number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Enter a valid 10-digit number",
                },
              })}
              className="flex-1 bg-transparent outline-none text-base placeholder-gray-400 ml-2"
            />
          </div>

          {/* Error message */}
          {errors.phoneNumber && (
            <p className="text-red-600 text-sm">{errors.phoneNumber.message}</p>
          )}

          {/* Info text */}
          <p className="text-xs sm:text-sm text-gray-500 text-center md:text-left">
            We’ll send you a code to verify. No spam—promise
          </p>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold text-base sm:text-lg px-6 py-3 rounded-md transition"
          >
            Send OTP to verify
          </button>
        </form>
      </div>
    </section>
  );
}
