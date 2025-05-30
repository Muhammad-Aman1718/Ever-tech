"use client";

import React from "react";
import { Code } from "lucide-react";
import {
  footerCourses,
  footerServices,
  footerSocialLinks,
} from "@/constant/data";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-[#0a192f] border-t  border-gray-200 dark:border-[#2A75BB]/20 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-[#2A75BB] to-[#3498db] p-2 rounded-lg">
                <Code className="h-6 w-6 text-white" />
              </div>
              <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-[#2A75BB] to-[#3498db] bg-clip-text text-transparent">
                TechSoft
              </span>
            </div>
            <p className=" text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              Building digital excellence through innovative software solutions
              and comprehensive training programs.
            </p>
            <div className="flex space-x-4">
              {footerSocialLinks.map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#0d1b36] flex items-center justify-center hover:bg-gradient-to-r from-[#2A75BB] to-[#3498db] transition-colors"
                >
                  <div className="bg-gray-400 border-2 border-dashed rounded-xl w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Services</h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
              {footerServices.map((service, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className="hover:text-blue-600 dark:hover:text-[#2A75BB] transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Courses</h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
              {footerCourses.map((course, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className="hover:text-blue-600 dark:hover:text-[#2A75BB] transition-colors  "
                  >
                    {course}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              Newsletter
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-3 bg-gray-50 dark:bg-[#0d1b36] rounded-l-lg focus:outline-none focus:ring-1 focus:ring-blue-500 dark:focus:ring-[#2A75BB] w-full dark:placeholder:text-gray-600"
              />
              <button className="bg-gradient-to-r from-[#3b82f6] to-[#93c5fd] dark:from-[#2A75BB] dark:to-[#3498db] dark:text-gray-900 text-white px-4 rounded-r-lg font-medium hover:opacity-90 transition-opacity">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-[#2A75BB]/20 mt-12 pt-8 text-center text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} TechSoft. All rights reserved.
            Crafted with passion for technology.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
