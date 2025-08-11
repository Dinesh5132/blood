import React from "react";
import "../CSS/AnimationCard.css";

export default function Animationcard() {
  const cards = [
    {
      img: "/donor1.png",
      title: "Become a Donor",
      desc: `Become a Lifesaver Today! Donating blood is an easy yet effective way to make a difference. Your single donation can save up to three lives, providing hope and support to those in critical need.`,
    },
    {
      img: "/donor2.png",
      title: "Why Donate Blood",
      desc: `Your blood donation is a powerful gift that can save up to three lives in just a few minutes. It’s a simple and safe act that makes a huge difference, providing critical support to those in emergencies.`,
    },
    {
      img: "/donor3.png",
      title: "How Donations Help?",
      desc: `Every blood donation is a beacon of hope, turning moments of crisis into chances for survival. Your generous contribution helps provide life-saving support for surgeries, trauma care, and critical illnesses.`,
    },
  ];

  return (
    <div className="flex flex-col md:flex-row w-full gap-20 p-4">
      {cards.map((e, index) => (
        <div className="card  w-full" key={index}>
          <div className="w-full object-contain">
            <img
              src={e.img}
              className="w-full  rounded object-fill mb-4"
              alt={e.title}
            />
          </div>

          <strong>{e.title}</strong>

          <div className="card__body px-3">
            {e.desc.length > 100 ? e.desc.substring(0, 100) + "..." : e.desc}
          </div>

          <span>{e.desc}</span>
        </div>
      ))}
    </div>
  );
}
