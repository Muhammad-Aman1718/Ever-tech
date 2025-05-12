// import React from "react";
// import Image from "next/image";
// import Logo from "../../../public/assets/logo.png";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaInstagram,
//   FaLinkedinIn,
// } from "react-icons/fa";

// const Footer = () => {
//   return (
//     // <div className="bg-[#E1F0FF] grid grid-cols-3 ">
//     //   <div className="">
//     //     {/* <div className="flex items-center  ">
//     //       <Image
//     //         src={Logo}
//     //         alt="logo does not show"
//     //         className="w-[130px] h-[130px] "
//     //       />
//     //       <div className=" flex flex-col justify-center ">
//     //         <h3 className=" text-[#2A75BB] text-[38px] leading-[20px] ">
//     //           EVERTECH
//     //         </h3>
//     //         <h3 className=" text-[36px] leading-[50px] ">SOLUTIONS</h3>
//     //         <p className=" text-[9px] font-bold leading-0 ">
//     //           Institute of Skill Development & Software House
//     //         </p>
//     //       </div>
//     //     </div> */}
//     //     {/* <div> */}
//     //     <h1 className=" text-[40px] text-[#4D4D4D] ">Office Address</h1>
//     //     <h3 className=" text-[18px] ">
//     //       1st Floor Al-Haram City Plaza, Office # 23 , Near Rex City Faisalabad
//     //     </h3>
//     //     <h3>+92 (345) 7888815 </h3>
//     //     <h3>+92 (322) 6265241 </h3>
//     //     {/* </div> */}
//     //   </div>
//     //   <div></div>
//     //   <div></div>
//     // </div>

//     <footer className="bg-[#2A75BB] text-white py-12 px-6">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
//         {/* Company Info */}
//         <div>
//           <h3 className="text-xl font-semibold mb-4">EVERTECH SOLUTIONS</h3>
//           <p className="text-sm">
//             Office #23, Al-Haram City Plaza, <br />
//             Near Rex City, Faisalabad, Pakistan
//           </p>
//           <p className="text-sm mt-2">Email: info@evertechsol.com</p>
//           <p className="text-sm">Phone: +92-345-7888815</p>
//         </div>

//         {/* Services */}
//         <div>
//           <h4 className="text-lg font-semibold mb-4">Our Services</h4>
//           <ul className="space-y-2 text-sm">
//             <li>Web Development</li>
//             <li>App Development</li>
//             <li>Graphic Design</li>
//             <li>SEO & Marketing</li>
//           </ul>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
//           <ul className="space-y-2 text-sm">
//             <li>Home</li>
//             <li>Courses</li>
//             <li>About Us</li>
//             <li>Contact Us</li>
//           </ul>
//         </div>

//         {/* Follow Us */}
//         <div>
//           <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
//           <div className="flex gap-4">
//             <a href="#" className="hover:text-gray-300 transition">
//               <FaFacebookF />
//             </a>
//             <a href="#" className="hover:text-gray-300 transition">
//               <FaTwitter />
//             </a>
//             <a href="#" className="hover:text-gray-300 transition">
//               <FaInstagram />
//             </a>
//             <a href="#" className="hover:text-gray-300 transition">
//               <FaLinkedinIn />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Footer Bottom */}
//       <div className="mt-8 text-center text-sm border-t border-white pt-4">
//         copyright © {new Date().getFullYear()} Evertech Solutions. All rights
//         reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { SlPhone } from "react-icons/sl";
import { CiLocationOn } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="bg-[#] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
        {/* Company Info */}
        <div className="col-span-1 md:col-span-2  ">
          <h3 className="text-[24px] font-bold mb-4 text-white ">
            EVERTECH SOLUTIONS
          </h3>
          <p className=" leading-[20px] text-gray-200 flex items-start  gap-x-[10px]  ">
            <CiLocationOn className="h-6 w-6" />
            Office #23, Al-Haram City Plaza, <br />
            Near Rex City, Faisalabad, Pakistan
          </p>
          <p className="mt-2 text-gray-200 flex items-center gap-x-[10px] leading-[40px]  ">
            <CiMail className="h-6 w-6 " />
            info@evertechsol.com
          </p>
          <p className="text-sm text-gray-200 flex items-center gap-x-[10px] leading-[40px]  ">
            <SlPhone className="h-5 w-5 " />
            +92 (345) 7888815 <span className="h-4 w-[1px] bg-white "></span>
            +92 (322) 6265241
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
          <ul className="space-y-4 text-sm text-gray-200 list-disc">
            <li className="hover:text-white transition cursor-pointer">
              Web Development
            </li>
            <li className="hover:text-white transition cursor-pointer">
              App Development
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Graphic Design
            </li>
            <li className="hover:text-white transition cursor-pointer">
              SEO & Marketing
            </li>
          </ul>
        </div>

        {/* Courses */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Courses</h4>
          <ul className="space-y-4 text-sm text-gray-200 list-disc">
            <li className="hover:text-white transition cursor-pointer">
              MERN Stack
            </li>
            <li className="hover:text-white transition cursor-pointer">
              UI/UX Design
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Flutter Dev
            </li>
            <li className="hover:text-white transition cursor-pointer">
              WordPress
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Follow Us</h4>
          <div className="flex gap-4">
            <a
              href="#"
              className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 text-center text-sm border-t border-white/20 pt-4 text-gray-300">
        © {new Date().getFullYear()} Evertech Solutions. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
