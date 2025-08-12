import Image from "next/image";
import DonarBtn from "@/utils/DonarBtn";

export default function FirstSection() {
  return (
    <section className="flex flex-col md:flex-row gap-5 items-center justify-between px-6 md:px-16 py-12 bg-white">
      {/* Text Section */}
      <div className="md:w-1/2 max-w-xl space-y-6">
        <h2 className="font-Urbanist text-3xl sm:text-4xl font-bold text-black">
          who we <span className="text-red-600">are</span>
        </h2>

        <h3 className="font-Urbanist text-xl sm:text-2xl font-semibold text-gray-800">
          Passionate about <span className="text-red-500">Protecting Life</span>
        </h3>

        <p className="font-Outfit text-gray-700 text-sm sm:text-base leading-relaxed">
          NUHVIN BLOOD BANK is committed to protecting life. Our dedicated crew
          is dedicated to creating each donation count by delivering critical
          blood resources to patients in need. We believe in the power of
          community and the benefits of philanthropy. Your decision to donate
          not only saves lives but also gives hope and strength to families
          suffering medical emergencies. Join us on our journey to make a
          difference and save the lives of those who need it most.
        </p>

        <DonarBtn label="Become a donor" href="/" />
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <div className="relative w-full max-w-[550px] aspect-[1/1] transition-transform duration-300 hover:scale-105">
          <Image
            src="/images/hand.png"
            alt="Helping Hands"
            fill
            className="object-fill"
            priority
          />
        </div>
      </div>
    </section>
  );
}
