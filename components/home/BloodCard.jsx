export default function BloodCard() {
  return (
    <div className="bg-white flex flex-col md:flex-row  gap-5 rounded-3xl shadow-lg p-6 w-full h-auto text-center">
      <div className="">
        <img
          src="/bloodsample.png"
          alt="Blood Sample"
          className="w-full object-cover rounded-xl mb-4"
        />
      </div>

      <div className="flex justify-center items-start flex-col">
        <h3 className="text-xl text-start font-bold text-red-600 mb-3">
          Blood is Essential for Life
        </h3>

        <p className="text-gray-700 text-sm leading-relaxed mb-4 text-justify">
          Life cannot exist without blood. It transports oxygen and nutrients
          into cells, eliminates waste products, regulates temperature, and
          protects against infections. Without it, the body cannot operate,
          emphasizing its crucial relevance for survival.
        </p>

        <button className="px-5 py-2 bg-red-600  text-white rounded-lg font-medium hover:bg-red-700 transition">
          Explore Now
        </button>
      </div>
    </div>
  );
}
