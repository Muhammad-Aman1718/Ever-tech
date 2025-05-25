"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../../public/assets/logo.png";
import { RxCross1 } from "react-icons/rx";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = ["Home", "Courses", "Services", "About Us", "Contact Us"];

  return (
    // <div className=" flex items-center justify-around py-[22px] ">
    //   <div className=" flex-[2]  flex items-center ">
    //     <Image
    //       src={Logo}
    //       alt="logo does not show"
    //       className="w-[110px] h-[110px] "
    //     />
    //     <div className=" flex flex-col justify-center ">
    //       <h3 className=" text-[#2A75BB] text-[28px] leading-[15px] ">
    //         EVERTECH
    //       </h3>
    //       <h3 className=" text-[27px] leading-[40px] ">SOLUTIONS</h3>
    //       <p className=" text-[9px] font-bold leading-0 ">
    //         Skill Development & Software House
    //       </p>
    //       {/* </div> */}
    //     </div>
    //   </div>
    //   <div className=" flex-[3]">
    //     <ul className=" flex items-center justify-around ">
    //       <ul className="flex items-center justify-evenly gap-4">
    //         {["Home", "Courses", "Services", "About Us", "Contact Us"].map(
    //           (item, idx) => (
    //             <li
    //               key={idx}
    //               className="px-4 py-2 rounded-md text-nowrap text-[#18191F] text-[16px] font-medium transition-all duration-300 ease-in-out hover:bg-[#2A75BB] hover:text-white hover:cursor-pointer "
    //             >
    //               {item}
    //             </li>
    //           )
    //         )}
    //       </ul>
    //     </ul>
    //   </div>
    // </div>

    <>
      <div className="w-full  relative z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className=" flex-[2]  flex items-center ">
              <Image
                src={Logo}
                alt="logo does not show"
                className="w-[90px] h-[90px] "
              />
              <div className=" flex flex-col justify-center ">
                <h3 className=" text-[#2A75BB] text-[24px] leading-[20px] ">
                  EVERTECH
                </h3>
                <h3 className=" text-[22px] leading-[30px] ">SOLUTIONS</h3>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 cursor-pointer"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
            >
              {isMobileMenuOpen ? (
                <RxCross1 className="w-6 h-6 text-gray-700" />
              ) : (
                <FiMenu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Background Overlay */}
          <div
            className="fixed inset-0 backdrop-blur-lg bg-opacity-50 z-30 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>

          {/* Mobile Menu */}
          <div className="relative -top-10 bg-white rounded-lg shadow-xl z-40 lg:hidden">
            <div className="py-4">
              {navItems.map((item, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium transition-colors duration-200 cursor-pointer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

{
  /* <div className="flex items-center justify-center flex-[1.5]  ">
  <button className=" py-[10px] px-[40px] bg-[#2A75BB] rounded-[4px] text-white text-[14px]  hover:cursor-pointer hover:bg-[#4A90E2]  ">
    Login
  </button>
</div> */
}
export default Navbar;
