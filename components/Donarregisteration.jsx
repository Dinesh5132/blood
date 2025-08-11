import Image from "next/image";

export default function HeroRegistration() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-16 bg-white">
      {/* Left Image */}
      {/* <div className="max-w-sm">
        <Image
          src="/4ea406df-6b77-4aa0-af32-e74042e1968e.png"
          alt="Hero Illustration"
          width={400}
          height={400}
          className="object-contain"
        />
      </div> */}

      {/* Right Content */}
      <div className="w-full max-w-md text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Hi there, <span className="text-red-600">Hero!</span>
        </h1>

        <p className="text-2xl md:text-3xl font-semibold text-gray-800 mt-4">
          Let's get you registered to{" "}
          <span className="text-red-600 font-bold">save lives!</span>
        </p>

        {/* Phone Input with Flag Dropdown */}
        <div className="mt-10">
          <div className="flex items-center border border-gray-300 rounded-xl px-4 py-3 bg-white shadow-sm w-full">
            {/* Country Code Dropdown */}
            <select className="bg-transparent text-lg outline-none pr-2">
              <option value="+91">🇮🇳 +91</option>
              <option value="+1">🇺🇸 +1</option>
              <option value="+44">🇬🇧 +44</option>
              <option value="+61">🇦🇺 +61</option>
            </select>

            {/* Input Field */}
            <input
              type="tel"
              placeholder="Mobile number"
              className="flex-1 bg-transparent outline-none text-lg placeholder-gray-400 ml-2"
            />
          </div>
          <p className="text-sm text-gray-500 mt-2 text-center md:text-left">
            We’ll send you a code to verify. No spam—promise
          </p>
        </div>

        {/* OTP Button */}
        <button className="mt-6 bg-red-600 hover:bg-red-700 text-white font-semibold text-lg px-8 py-3 rounded-md transition w-full">
          Send OTP to verify
        </button>
      </div>
    </section>
  );
}