import NBBMisstion from "@/utils/NBBMisstion";
import NBBResponsibilities from "@/utils/NBBResponsibilities";
import FirstSection from "@/whoweare/FirstSection";
import LastSection from "@/whoweare/LastSection";
import React from "react";

export default function page() {
  return (
    <div>
      <FirstSection />
      <NBBMisstion
        heading={{ highlight: "NBB", rest: "MISSION :" }}
        subheading="Life-saving | Expertises | Commitment"
        description="We are committed to assembly the desires of sufferers by means of making sure a sufficient deliver of blood merchandise, while upholding the best requirements of pleasant, protection, and professionalism. Thought our dedication to excellence and innovation we aim to make a significant difference within the lives of character and communities we serve."
        principlesHeading="Our mission is driven by three core principles:"
        principles={[
          "Saving lives through blood donation, serving as a lifeline for those in need.",
          "Leveraging our experties to ensure the safety the efficacy of every donation.",
          "Demonstrating unwaveing commitment to our donors, patients, and community, fostering culture of care and compassion.",
        ]}
      />

        <NBBResponsibilities
      heading={{ highlight: 'NBB', rest: 'Responsibilities :' }}
      subheading="Proactivity | Thoroughness | Consistency"
      description="At NUHVIN BLOOD BANK, our responsibilities are paramount. We are entrusted with the vital task of saving lives by providing secure and dependable blood donation service. We prioritize meeting the urgent needs of patients by guaranteeing an ample supply of blood products, all while maintaining uncompromising standard of quality, safety, and professionalism. Through our unwavering commitment to excellence and well-being of individuals and the communities we serve."
      principlesHeading="Our responsibility is rooted in three foundational principle:"
      principles={[
        "Proactivity drives our forward-thinking approach.",
        "Thoroughness ensures meticulous attention to detail.",
        "Consistency underpins our reliability in every action.",
      ]}
    />

       <NBBMisstion
        heading={{ highlight: "NBB", rest: "Transparency :" }}
        subheading="Visibility | Cardor | Reliability"
        description="At NUHVIN BLOOD BANK, transparency is foundational to our responsibilities. We believe in clear and honest communication, providing donors and patients with comprehensive information about our blood donation service. By fostering transparency, we build trust and confidence in our operations, ensuring the safety and"
        principlesHeading="Our transparency exemplified by three guiding principles :"
        principles={[
          "Visibility ensure clarity in our actions,",
          "Candor fosters open and honest communication,",
          "Reliability ensures consistency and trust worthiness",
        ]}
      />

      <LastSection />
    </div>
  );
}
