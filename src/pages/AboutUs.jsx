import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-[#B5E3D8] text-slate-700">
      <div className="text-center pb-6 text-4xl md:text-5xl pt-[128px] ">
        <h1>ABOUT US</h1>
      </div>
      <div className="text-center pb-6 text-3xl md:text-5x">
        <h2>PROJECT 4 CELESTIAL MINK OF FREMEN THE MAGICIAN</h2>
      </div>

      <div className="flex justify-center pt-8">
        <div className="w-24">
          <img
            className="rounded-full"
            src="https://ca.slack-edge.com/T06Q05U9QFL-U06RR06GBQF-b7e54e73384d-512"
          />
        </div>
        <div className="m-8">
          <h3 className="text-xl">11_Kanokwan(Namfah/น้ำฟ้า)</h3>
        </div>
      </div>

      <div className="flex justify-center pt-12 pr-12">
        <div className="w-24">
          <img
            className="rounded-full"
            src="https://ca.slack-edge.com/T06Q05U9QFL-U06R7FQUCHJ-3da1ddb51720-512"
          />
        </div>
        <div className="m-8">
          <h3 className="text-xl">05_Bongkan(Fear/เฟียร์)</h3>
        </div>
      </div>

      <div className="flex justify-center pt-12 pr-16">
        <div className="w-24">
          <img
            className="rounded-full"
            src="https://ca.slack-edge.com/T06Q05U9QFL-U06RTTCRZB2-4e4c9ef96157-512"
          />
        </div>
        <div className="m-8">
          <h3 className="text-xl">28_Ronnapat(Sun/ซัน)</h3>
        </div>
      </div>

      <div className="flex justify-center pt-12 pl-[70px]">
        <div className="w-24">
          <img
            className="rounded-full"
            src="https://ca.slack-edge.com/T06Q05U9QFL-U06R7T1PE3E-396b1437e276-512"
          />
        </div>
        <div className="m-8 pb-20">
          <h3 className="text-xl">25_Phawngam(Modtanoy/มดตะนอย)</h3>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
