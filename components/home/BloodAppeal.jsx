import BloodCard from "./BloodCard";

export default function BloodCardList() {
  const cards = [
    {
      img: "/donor1.png",
      title: "Blood Appeal",
      desc: "Blood is a precious asset that can save lives. At NUHVIN Blood Bank, we invite you to donate blood and help save lives.",
    },
    {
      img: "/donor2.png",
      title: "Blood Donation",
      desc: "Donating blood is a kind gesture of providing blood to people in need of transfusions for surgeries or injuries.",
    },
    {
      img: "/donor3.png",
      title: "Blood Bank",
      desc: "A blood bank is a vital facility that collects, preserves, and distributes donated blood for clinical use.",
    },
    {
      img: "/donor1.png",
      title: "Become a Volunteer",
      desc: "Join the dedicated team at Nuhvin Blood Bank as a volunteer and make a real difference in people’s lives.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
      {cards.map((card, index) => (
        <BloodCard1
          key={index}
          img={card.img}
          title={card.title}
          desc={card.desc}
        />
      ))}
    </div>
  );
}

function BloodCard1({ img, title, desc }) {
  return (
    <div className="bg-white  flex shadow-lg rounded-xl overflow-hidden ">
      <div className="">
        <img src={img} alt={title} className="w-full h-48 object-cover" />
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-[#2E2E2E] mb-2">{title}</h3>
        <p className="text-gray-700 text-sm flex-grow">{desc}</p>

        <button className="mt-4 bg-red-600 hover:bg-red-700 w-fit text-white px-4 py-2 rounded text-sm">
          Request Blood
        </button>
      </div>
    </div>
  );
}
