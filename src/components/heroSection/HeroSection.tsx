import React from "react";
import Image from "next/image";
import HeroSectionImg from "../../../public/assets/heroSectionImg.svg";

const HeroSection = () => {
  return (
    <div className=" flex items-center justify-around py-[90px]  ">
      <div className=" flex flex-col gap-y-4  ">
        <h1 className=" text-[64px] leading-[76px] font-semibold  ">
          Lessons and insights
        </h1>{" "}
        <h1 className="text-[64px] leading-[76px] font-semibold ">
          from 8 years
        </h1>
        <p className=" text-[#717171] leading-[24px]  ">
          Where to grow your business as a photographer: site or social media?
        </p>
      </div>
      <div>
        <Image src={HeroSectionImg} alt="hero section img does not show" />
      </div>
    </div>
  );
};

export default HeroSection;
