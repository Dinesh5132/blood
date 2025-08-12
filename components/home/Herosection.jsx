export default function Herosection() {
  return (
    <div className=" relative">
      <img
        src="/blood.gif"
        alt="Blood Donation"
        className="w-full h-[50vh] md:h-[90vh]"
      />
      <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-bold text-md sm:text-4xl md:text-5xl lg:text-5xl tracking-wide leading-snug">
        Donate Your <span className="text-red-500">Blood</span> to Us,
        <br />
        <span className="text-red-500">Save</span> More Lives Together
      </p>
    </div>
  );
}
