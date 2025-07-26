export default function DonorCard() {
  const cards = [
    {
      img: "/donor1.png",
      title: "Become a Donor",
      desc: `Become a Lifesaver Today! Donating blood is an easy yet effective way to make a difference. Your single donation can save up to three lives, providing hope and support to those in critical need. At Nuhvin Blood Bank, we make the process simple and comfortable, ensuring that your contribution has a lasting impact. Join us in our mission to save lives—sign up to donate today and be a hero in someone’s story.`,
    },
    {
      img: "/donor2.png",
      title: "Why Donate Blood",
      desc: `Your blood donation is a powerful gift that can save up to three lives in just a few minutes. It’s a simple and safe act that makes a huge difference, providing critical support to those in emergencies and medical treatments. Every drop counts and helps ensure a steady supply of this irreplaceable resource. By donating, you become a hero in someone’s story, making a profound impact in your community.`,
    },
    {
      img: "/donor3.png",
      title: "How Donations Help?",
      desc: `Every blood donation is a beacon of hope, turning moments of crisis into chances for survival. Your generous contribution helps provide life-saving support for surgeries, trauma care, and critical illnesses. By donating, you ensure that hospitals have the resources needed to save lives and manage emergencies effectively. Your act of kindness creates a ripple effect, offering a lifeline to those in need and transforming lives with every drop.`,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-lg  flex flex-col items-center text-center"
        >
          <img
            src={card.img}
            alt={card.title}
            className="w-full rounded object-contain mb-4"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold text-red-600 mb-2">
              {card.title}
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">{card.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
