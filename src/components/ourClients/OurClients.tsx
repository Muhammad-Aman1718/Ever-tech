import React from "react";
import Image from "next/image";
import ClientImg1 from "../../../public/assets/ourClients/Logo.svg";
import ClientImg2 from "../../../public/assets/ourClients/Logo (1).svg";
import ClientImg3 from "../../../public/assets/ourClients/Logo (2).svg";
import ClientImg4 from "../../../public/assets/ourClients/Logo (3).svg";
import ClientImg5 from "../../../public/assets/ourClients/Logo (4).svg";
import ClientImg6 from "../../../public/assets/ourClients/Logo (5).svg";

const OurClients = () => {
  return (
    <div className=" flex flex-col items-center justify-center gap-y-4 py-10  ">
      <div className=" flex flex-col items-center justify-center gap-y-2 ">
        <h1 className=" text-[#4D4D4D] text-[36px] font-semibold leading-[44px] ">
          Our Clients
        </h1>
        <p className=" text-[#717171] text-[18px] leading-[32px]  ">
          We have been working with some Fortune 500+ clients
        </p>
      </div>
      <div className=" flex items-center justify-around w-full ">
        <Image src={ClientImg1} alt="logo does not show " />
        <Image src={ClientImg2} alt="logo does not show " />
        <Image src={ClientImg3} alt="logo does not show " />
        <Image src={ClientImg4} alt="logo does not show " />
        <Image src={ClientImg5} alt="logo does not show " />
        <Image src={ClientImg6} alt="logo does not show " />
      </div>
    </div>
  );
};

export default OurClients;
