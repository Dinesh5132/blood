import Image from "next/image";
import React from "react";

export default function Imagewithchild({ children }) {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 min-h-screen w-full px-4">
      {/* Image section */}
      <div className="w-[90%] md:w-1/2 flex items-center justify-center">
        <Image
          src="/blueboy.png"
          alt="Hero Illustration"
          width={500}
          height={500}
          className="object-contain max-w-full h-auto"
          priority
        />
      </div>

      {/* Content section */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-start">
        {children}
      </div>
    </section>
  );
}
