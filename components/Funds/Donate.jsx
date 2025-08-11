import Image from "next/image";

export default function Donate() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto py-12 px-4">
      <div className="flex-1 flex flex-col items-start md:items-start text-left">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Every Drop Counts. So Does <br className="hidden md:block" /> Your Support.
        </h1>
        <p className="text-gray-600 mb-8 max-w-md">
          Help us maintain life-saving services, support blood donation camps, and improve facilities for donors and patients.
        </p>
        <button className="bg-red-600 text-white px-8 py-2 rounded hover:bg-red-700 transition duration-300 font-semibold">
          Donate now
        </button>
      </div>
      <div className="flex-1 flex justify-center mt-8 md:mt-0">
        <Image
          src="/funds/image1.png"
          alt="Blood donation illustration"
          width={350}
          height={250}
          priority
        />
      </div>
    </section>
  );
}