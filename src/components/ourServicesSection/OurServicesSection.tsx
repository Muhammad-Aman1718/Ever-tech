import React from "react";
import OurServicesSectionCard from "./OurServicesSectionCard";

const OurServicesSection = () => {
  return (
    <div>
      <h1 className="text-[#4D4D4D] text-[36px] font-semibold leading-[44px] text-center mb-[50px]  ">
        Our Services
      </h1>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] place-items-center lg:grid-cols-3 ">
        <OurServicesSectionCard />
        <OurServicesSectionCard />
        <OurServicesSectionCard />
        <OurServicesSectionCard />
        <OurServicesSectionCard />
      </div>
    </div>
  );
};

export default OurServicesSection;
