"use client";
import React from "react";
import Button from "../buttons/Button";
import { aboutUs } from "@/constant/data";

const AboutUsSection = () => {
  return (
    <section
      id="about"
      className="py-20 relative overflow-hidden dark:bg-gradient-to-b dark:from-[#0a192f] dark:to-[#0d1b36] bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="bg-gradient-to-br bg-white dark:from-[#0d1b36] dark:to-[#0a192f] border-gray-200 rounded-2xl p-8 border dark:border-[#2A75BB]/20 shadow-xl">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Our Vision & Mission
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-blue-600 dark:text-[#2A75BB] mb-2">
                      Vision
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      To become the leading technology partner that transforms
                      businesses through innovative software solutions.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-blue-600 dark:text-[#2A75BB] mb-2">
                      Mission
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      To deliver high-quality software solutions and provide
                      world-class training to create skilled professionals for
                      the global market.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-8 -left-8 bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] dark:from-[#2A75BB] dark:to-[#3498db] p-6 rounded-2xl shadow-lg max-w-xs">
              <div className="text-4xl font-bold text-white mb-2">5+</div>
              <p className="text-white font-medium">Years of Excellence</p>
            </div>
          </div>

          <div>
            <div className="inline-block bg-gradient-to-r from-[#3b82f6] to-[#93c5fd] dark:from-[#2A75BB] dark:to-[#3498db] text-white dark:text-gray-800 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              About TechSoft
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Innovating Since 2019
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              We are a passionate team of developers, designers, and educators
              committed to delivering exceptional software solutions and
              empowering the next generation of tech professionals.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              Founded in 2019, we&apos;ve grown from a small startup to a trusted
              technology partner for businesses worldwide, bridging the gap
              between innovative technology and practical business solutions.
            </p>

            <div className="space-y-4 mb-10">
              {aboutUs.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#2A75BB]/20 flex items-center justify-center mr-3">
                    <div className="w-2 h-2 rounded-full bg-blue-600  dark:bg-[#2A75BB]"></div>
                  </div>
                  <span className="text-gray-600 dark:text-gray-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <Button
              title="Our Journey"
              className="bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] dark:from-[#2A75BB] dark:to-[#3498db] text-white px-8 py-4 rounded-lg font-semibold hover:from-[#3b82f6]/90 hover:to-[#60a5fa]/90 dark:hover:from-[#2A75BB]/90 dark:hover:to-[#3498db]/90 transition-all duration-300 shadow-lg shadow-[#2A75BB]/30"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
