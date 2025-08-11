import Signup from "@/auth/Signup";
import BloodAppeal from "@/components/home/BloodAppeal";
import BloodCard from "@/components/home/BloodCard";
import DonorCard from "@/components/home/DonorCard";
import GoodToKnow from "@/components/home/GoodToKnow";
import Herosection from "@/components/home/Herosection";
import Animationcard from "@/utils/Animationcard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full">
      <Herosection />
      {/* <DonorCard /> */}
      <Animationcard />
      <BloodCard />
      <GoodToKnow />
      <BloodAppeal />
      <Signup />
    </div>
  );
}
