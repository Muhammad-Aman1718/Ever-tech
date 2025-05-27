"use client";
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

// import React from "react";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaInstagram,
//   FaLinkedinIn,
// } from "react-icons/fa";
// import { CiMail } from "react-icons/ci";
// import { SlPhone } from "react-icons/sl";
// import { CiLocationOn } from "react-icons/ci";

// const Footer = () => {
//   return (
//     <footer className="bg-[#] text-white py-12 px-6">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
//         {/* Company Info */}
//         <div className="col-span-1 md:col-span-2  ">
//           <h3 className="text-[24px] font-bold mb-4 text-white ">
//             EVERTECH SOLUTIONS
//           </h3>
//           <p className=" leading-[20px] text-gray-200 flex items-start  gap-x-[10px]  ">
//             <CiLocationOn className="h-6 w-6" />
//             Office #23, Al-Haram City Plaza, <br />
//             Near Rex City, Faisalabad, Pakistan
//           </p>
//           <p className="mt-2 text-gray-200 flex items-center gap-x-[10px] leading-[40px]  ">
//             <CiMail className="h-6 w-6 " />
//             info@evertechsol.com
//           </p>
//           <p className="text-sm text-gray-200 flex items-center gap-x-[10px] leading-[40px]  ">
//             <SlPhone className="h-5 w-5 " />
//             +92 (345) 7888815 <span className="h-4 w-[1px] bg-white "></span>
//             +92 (322) 6265241
//           </p>
//         </div>

//         <div>
//           <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
//           <ul className="space-y-4 text-sm text-gray-200 list-disc">
//             <li className="hover:text-white transition cursor-pointer">
//               Web Development
//             </li>
//             <li className="hover:text-white transition cursor-pointer">
//               App Development
//             </li>
//             <li className="hover:text-white transition cursor-pointer">
//               Graphic Design
//             </li>
//             <li className="hover:text-white transition cursor-pointer">
//               SEO & Marketing
//             </li>
//           </ul>
//         </div>

//         {/* Courses */}
//         <div>
//           <h4 className="text-lg font-semibold mb-4 text-white">Courses</h4>
//           <ul className="space-y-4 text-sm text-gray-200 list-disc">
//             <li className="hover:text-white transition cursor-pointer">
//               MERN Stack
//             </li>
//             <li className="hover:text-white transition cursor-pointer">
//               UI/UX Design
//             </li>
//             <li className="hover:text-white transition cursor-pointer">
//               Flutter Dev
//             </li>
//             <li className="hover:text-white transition cursor-pointer">
//               WordPress
//             </li>
//           </ul>
//         </div>

//         {/* Follow Us */}
//         <div>
//           <h4 className="text-lg font-semibold mb-4 text-white">Follow Us</h4>
//           <div className="flex gap-4">
//             <a
//               href="#"
//               className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition"
//             >
//               <FaFacebookF />
//             </a>
//             <a
//               href="#"
//               className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition"
//             >
//               <FaTwitter />
//             </a>
//             <a
//               href="#"
//               className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition"
//             >
//               <FaInstagram />
//             </a>
//             <a
//               href="#"
//               className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition"
//             >
//               <FaLinkedinIn />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Footer Bottom */}
//       <div className="mt-12 text-center text-sm border-t border-white/20 pt-4 text-gray-300">
//         © {new Date().getFullYear()} Evertech Solutions. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// this i cloude.ai code

// import React from "react";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaInstagram,
//   FaLinkedinIn,
// } from "react-icons/fa";
// import { CiMail } from "react-icons/ci";
// import { SlPhone } from "react-icons/sl";
// import { CiLocationOn } from "react-icons/ci";

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
//       {/* Background Pattern */}
//       {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1.5"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
//        */}
//       {/* Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>

//       <div className="relative px-6 pt-16 pb-8">
//         <div className="max-w-7xl mx-auto">
//           {/* Main Footer Content */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
//             {/* Company Info - Takes more space */}
//             <div
//               className="lg:col-span-5 fade-in"
//               style={{ animationDelay: "0.1s" }}
//             >
//               <div className="mb-8">
//                 <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//                   EVERTECH SOLUTIONS
//                 </h3>
//                 <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6"></div>
//                 <p className="text-lg text-gray-300 mb-6 leading-relaxed">
//                   Empowering businesses with cutting-edge technology solutions
//                   and comprehensive skill development programs.
//                 </p>
//               </div>

//               {/* Contact Info Cards */}
//               <div className="space-y-4">
//                 <div className="flex items-start gap-4 p-4 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group">
//                   <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
//                     <CiLocationOn className="h-5 w-5 text-white" />
//                   </div>
//                   <div>
//                     <p className="text-gray-200 leading-relaxed">
//                       Office #23, Al-Haram City Plaza,
//                       <br />
//                       Near Rex City, Faisalabad, Pakistan
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group">
//                   <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
//                     <CiMail className="h-5 w-5 text-white" />
//                   </div>
//                   <p className="text-gray-200">info@evertechsol.com</p>
//                 </div>

//                 <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group">
//                   <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
//                     <SlPhone className="h-4 w-4 text-white" />
//                   </div>
//                   <div className="text-gray-200">
//                     <span>+92 (345) 7888815</span>
//                     <span className="mx-3 text-white/30">•</span>
//                     <span>+92 (322) 6265241</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Services */}
//             <div
//               className="lg:col-span-2 fade-in"
//               style={{ animationDelay: "0.2s" }}
//             >
//               <h4 className="text-xl font-bold mb-6 text-white">Services</h4>
//               <ul className="space-y-3">
//                 {[
//                   "Web Development",
//                   "App Development",
//                   "Graphic Design",
//                   "SEO & Marketing",
//                 ].map((service, index) => (
//                   <li key={index} className="group">
//                     <a
//                       href="#"
//                       className="flex items-center text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2"
//                     >
//                       <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:bg-blue-400 transition-colors duration-300"></div>
//                       {service}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Courses */}
//             <div
//               className="lg:col-span-2 fade-in"
//               style={{ animationDelay: "0.3s" }}
//             >
//               <h4 className="text-xl font-bold mb-6 text-white">Courses</h4>
//               <ul className="space-y-3">
//                 {["MERN Stack", "UI/UX Design", "Flutter Dev", "WordPress"].map(
//                   (course, index) => (
//                     <li key={index} className="group">
//                       <a
//                         href="#"
//                         className="flex items-center text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2"
//                       >
//                         <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 group-hover:bg-purple-400 transition-colors duration-300"></div>
//                         {course}
//                       </a>
//                     </li>
//                   )
//                 )}
//               </ul>
//             </div>

//             {/* Follow Us */}
//             <div
//               className="lg:col-span-3 fade-in"
//               style={{ animationDelay: "0.4s" }}
//             >
//               <h4 className="text-xl font-bold mb-6 text-white">
//                 Connect With Us
//               </h4>
//               <p className="text-gray-300 mb-6">
//                 Stay updated with our latest projects and insights
//               </p>

//               <div className="flex gap-4 mb-6">
//                 {[
//                   {
//                     icon: FaFacebookF,
//                     color: "from-blue-600 to-blue-700",
//                     hoverColor: "hover:from-blue-500 hover:to-blue-600",
//                   },
//                   {
//                     icon: FaTwitter,
//                     color: "from-sky-500 to-sky-600",
//                     hoverColor: "hover:from-sky-400 hover:to-sky-500",
//                   },
//                   {
//                     icon: FaInstagram,
//                     color: "from-pink-500 to-purple-600",
//                     hoverColor: "hover:from-pink-400 hover:to-purple-500",
//                   },
//                   {
//                     icon: FaLinkedinIn,
//                     color: "from-blue-700 to-blue-800",
//                     hoverColor: "hover:from-blue-600 hover:to-blue-700",
//                   },
//                 ].map((social, index) => (
//                   <a
//                     key={index}
//                     href="#"
//                     className={`w-12 h-12 bg-gradient-to-r ${social.color} ${social.hoverColor} rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-6 shadow-lg hover:shadow-xl`}
//                   >
//                     <social.icon className="text-white text-lg" />
//                   </a>
//                 ))}
//               </div>

//               {/* Newsletter Signup */}
//               <div className="bg-white/5 rounded-2xl p-4 backdrop-blur-sm border border-white/10">
//                 <h5 className="text-sm font-semibold text-white mb-2">
//                   Newsletter
//                 </h5>
//                 <div className="flex gap-2">
//                   <input
//                     type="email"
//                     placeholder="Enter your email"
//                     className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   />
//                   <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white text-sm font-medium hover:from-blue-500 hover:to-purple-500 transition-all duration-300 hover:scale-105">
//                     Subscribe
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Footer Bottom */}
//           <div className="border-t border-white/10 pt-8">
//             <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//               <div className="text-center md:text-left">
//                 <p className="text-gray-400 text-sm">
//                   © {currentYear} Evertech Solutions. All rights reserved.
//                 </p>
//                 <p className="text-gray-500 text-xs mt-1">
//                   Institute of Skill Development & Software House
//                 </p>
//               </div>

//               <div className="flex items-center gap-6 text-sm text-gray-400">
//                 <a
//                   href="#"
//                   className="hover:text-white transition-colors duration-300"
//                 >
//                   Privacy Policy
//                 </a>
//                 <span className="text-gray-600">•</span>
//                 <a
//                   href="#"
//                   className="hover:text-white transition-colors duration-300"
//                 >
//                   Terms of Service
//                 </a>
//                 <span className="text-gray-600">•</span>
//                 <a
//                   href="#"
//                   className="hover:text-white transition-colors duration-300"
//                 >
//                   Sitemap
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .fade-in {
//           opacity: 0;
//           transform: translateY(20px);
//           animation: fadeInUp 0.8s ease-out forwards;
//         }

//         @keyframes fadeInUp {
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//       `}</style>
//     </footer>
//   );
// };

// export default Footer;

//   this is chatGPT code

import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { CiMail, CiLocationOn } from "react-icons/ci";
import { SlPhone } from "react-icons/sl";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:20px_20px]"></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>

      <div className="relative px-6 pt-16 pb-8 animate-fade-in">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 mb-16">
            {/* Company Info */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient-move">
                  EVERTECH SOLUTIONS
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2"></div>
                <p className="text-gray-300 leading-relaxed mt-4">
                  Empowering businesses with cutting-edge technology solutions
                  and comprehensive skill development programs.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  {
                    icon: <CiLocationOn className="text-white w-5 h-5" />,
                    text: "Office #23, Al-Haram City Plaza, Near Rex City, Faisalabad, Pakistan",
                    color: "from-blue-500 to-blue-600",
                  },
                  {
                    icon: <CiMail className="text-white w-5 h-5" />,
                    text: "info@evertechsol.com",
                    color: "from-green-500 to-green-600",
                  },
                  {
                    icon: <SlPhone className="text-white w-4 h-4" />,
                    text: "+92 (345) 7888815 • +92 (322) 6265241",
                    color: "from-purple-500 to-purple-600",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition duration-300"
                  >
                    <div
                      className={`w-10 h-10 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center`}
                    >
                      {item.icon}
                    </div>
                    <p className="text-gray-200 leading-relaxed text-sm">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="lg:col-span-2">
              <h4 className="text-xl font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                {[
                  "Web Development",
                  "App Development",
                  "Graphic Design",
                  "SEO & Marketing",
                ].map((item, i) => (
                  <li key={i} className="hover:translate-x-2 transition-all">
                    <a
                      href="#"
                      className="flex items-center text-gray-300 hover:text-white"
                    >
                      <span className="w-2 h-2 mr-3 bg-blue-500 rounded-full"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Courses */}
            <div className="lg:col-span-2">
              <h4 className="text-xl font-bold mb-4">Courses</h4>
              <ul className="space-y-2 text-sm">
                {["MERN Stack", "UI/UX Design", "Flutter Dev", "WordPress"].map(
                  (item, i) => (
                    <li key={i} className="hover:translate-x-2 transition-all">
                      <a
                        href="#"
                        className="flex items-center text-gray-300 hover:text-white"
                      >
                        <span className="w-2 h-2 mr-3 bg-purple-500 rounded-full"></span>
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Connect */}
            <div className="lg:col-span-3 space-y-6">
              <div>
                <h4 className="text-xl font-bold mb-2">Connect With Us</h4>
                <p className="text-gray-300 text-sm mb-4">
                  Stay updated with our latest projects and insights
                </p>
                <div className="flex gap-3">
                  {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
                    (Icon, i) => (
                      <a
                        key={i}
                        href="#"
                        className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-all flex items-center justify-center hover:scale-110"
                      >
                        <Icon className="text-white text-base" />
                      </a>
                    )
                  )}
                </div>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10 backdrop-blur-sm">
                <h5 className="text-sm font-semibold mb-2">Newsletter</h5>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 bg-transparent border border-white/20 rounded-l-md text-sm text-white placeholder-gray-400 focus:outline-none"
                  />
                  <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-r-md text-sm font-medium hover:from-blue-500 hover:to-purple-500 transition-all">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-6 border-t border-white/10 text-sm text-gray-400 text-center">
            <p>© {currentYear} Evertech Solutions. All rights reserved.</p>
            <p className="text-xs mt-1">
              Institute of Skill Development & Software House
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
