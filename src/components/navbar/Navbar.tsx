import React from "react";
import Image from "next/image";
import Logo from "../../../public/assets/logo.png";

const Navbar = () => {
  return (
    <div className=" flex items-center justify-around py-[22px] ">
      <div className=" flex-[2]  flex items-center ">
        {/* <Image
          src={Logo}
          alt="Logo does not show "
          className=" w-[150px] h-[150px] "
        /> */}

        {/* <div className="flex items-center  "> */}
        <Image
          src={Logo}
          alt="logo does not show"
          className="w-[110px] h-[110px] "
        />
        <div className=" flex flex-col justify-center ">
          <h3 className=" text-[#2A75BB] text-[28px] leading-[15px] ">
            EVERTECH
          </h3>
          <h3 className=" text-[27px] leading-[40px] ">SOLUTIONS</h3>
          <p className=" text-[9px] font-bold leading-0 ">
            Skill Development & Software House
          </p>
          {/* </div> */}
        </div>
      </div>
      <div className=" flex-[3]">
        <ul className=" flex items-center justify-around ">
          <ul className="flex items-center justify-evenly gap-4">
            {["Home", "Courses", "Services", "About Us", "Contact Us"].map(
              (item, idx) => (
                <li
                  key={idx}
                  className="px-4 py-2 rounded-md text-nowrap text-[#18191F] text-[16px] font-medium transition-all duration-300 ease-in-out hover:bg-[#2A75BB] hover:text-white hover:cursor-pointer "
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </ul>
      </div>
      {/* <div className="flex items-center justify-center flex-[1.5]  ">
        <button className=" py-[10px] px-[40px] bg-[#2A75BB] rounded-[4px] text-white text-[14px]  hover:cursor-pointer hover:bg-[#4A90E2]  ">
          Login
        </button>
      </div> */}
    </div>
  );
};

export default Navbar;
