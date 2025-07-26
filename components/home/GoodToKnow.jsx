import { Heart, Award, Smile, Droplet, HeartPulse } from "lucide-react";

export default function GoodToKnow() {
  const stats = [
    { title: "Good To Know", value: 2578, icon: HeartPulse },
    { title: "Helpful Information", value: 3235, icon: Heart },
    { title: "Success Smile", value: 3568, icon: Smile },
    { title: "Total Awards", value: 1364, icon: Award },
  ];

  const tips = [
    "Maintain a healthy iron level by eating iron-rich foods.",
    "Drink an extra 16 oz. of water prior to your donation.",
    "Avoid alcohol consumption before your blood donation.",
    "Remember to bring the donor card or national ID/Passport.",
    "Finally, try to get a good night’s sleep after donation.",
  ];

  return (
    <div className="w-full flex  justify-evenly items-center px-4 py-10">
      <div className="bg-white  rounded p-6">
        <p className="relative inline-block text-xl font-semibold pb-2">
          Good To Know
          <span className="absolute bottom-1 left-1 w-1/3 h-[2px] bg-red-600"></span>
        </p>

        <h2 className="text-xl font-bold text-red-600 mb-4">
          Helpful Information
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          {tips.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`${
              index === 0
                ? "bg-[#EB1202] text-white"
                : " bg-white text-gray-800"
            }  shadow-lg rounded p-6 flex flex-col items-center text-center"`}
          >
            <item.icon className="w-10 h-10 mb-3 " />
            <p className="text-2xl ">{item.value}</p>
            <h3 className="text-lg ">{item.title}</h3>
          </div>
        ))}
      </div>

      {/* Tips Section */}
    </div>
  );
}
