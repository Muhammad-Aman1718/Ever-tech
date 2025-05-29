"use client";
import React from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import Button from "../buttons/Button";
import useHeroSection from "@/hooks/useHeroSection";

const HeroSection = () => {
  const { isVisible, heroRef } = useHeroSection();

  return (
    <section
      id="home"
      className="pt-20 min-h-screen flex items-center relative overflow-hidden"
      ref={heroRef}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#2A75BB]/10 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-20 w-72 h-72 bg-[#3498db]/10 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-[#2A75BB]/20 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-[#3498db]/20 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-slow animation-delay-3000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-block bg-gradient-to-r from-[#2A75BB] to-[#3498db] px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              <span className="mr-2">🚀</span> Leading software solutions
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Building Digital
              <span className="block mt-2 bg-gradient-to-r from-[#2A75BB] to-[#3498db] bg-clip-text text-transparent">
                Excellence
              </span>
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
              We provide cutting-edge development services and comprehensive
              training programs to empower businesses and individuals in the
              digital world.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                // onClick={() => scrollToSection("services")}
                className="bg-gradient-to-r from-[#2A75BB] to-[#3498db] text-white px-8 py-4 rounded-lg font-semibold hover:from-[#2A75BB]/90 hover:to-[#3498db]/90 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-[#2A75BB]/30"
              >
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                // onClick={() => scrollToSection("courses")}
                title="View Courses"
                className="bg-transparent border-2 border-[#2A75BB] text-[#2A75BB] px-8 py-4 rounded-lg font-semibold hover:bg-[#2A75BB]/10 transition-colors duration-300"
              />

              {/* </Button> */}
              {/* <Button title="amangujjar" />
              <Button>amana </Button> */}
            </div>

            <div className="flex items-center pt-4 gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white overflow-hidden"
                  >
                    <div className="w-full h-full bg-gray-700 border-2 border-dashed rounded-xl" />
                  </div>
                ))}
              </div>
              <p className="text-gray-300">
                <span className="font-semibold text-white">50+</span> Experts
                Team
              </p>
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-gradient-to-br from-[#2A75BB]/10 to-[#3498db]/10 backdrop-blur-lg rounded-3xl p-8 space-y-6 border border-[#2A75BB]/30 shadow-xl relative overflow-hidden">
              {/* Animated background */}
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#2A75BB]/10 rounded-full z-0 animate-pulse-slow"></div>

              <div className="relative z-10">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-green-400 rounded-full blur opacity-75 animate-pulse"></div>
                    <div className="relative bg-green-500 h-3 w-3 rounded-full"></div>
                  </div>
                  <span className="text-green-300 font-medium">
                    Live Projects Running
                  </span>
                </div>

                <div className="space-y-4 mt-6">
                  {[
                    { label: "Web Development", value: 85 },
                    { label: "Mobile Apps", value: 70 },
                    { label: "UI/UX Design", value: 90 },
                  ].map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-300">{item.label}</span>
                        <span className="text-white font-medium">
                          {item.value}%
                        </span>
                      </div>
                      <div className="bg-[#0d1b36] h-2 rounded-full">
                        <div
                          className="bg-gradient-to-r from-green-400 to-cyan-400 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${isVisible ? item.value : 0}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-6 flex justify-center">
                  <div className="bg-gradient-to-r from-[#2A75BB] to-[#3498db] p-0.5 rounded-full">
                    <div className="bg-[#0a192f] rounded-full px-6 py-2 text-center">
                      <span className="text-sm font-medium text-gray-300">
                        200+ Projects Completed
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-[#2A75BB]" />
      </div>
    </section>
  );
};

export default HeroSection;
