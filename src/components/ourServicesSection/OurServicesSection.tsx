"use client";
import React from "react";
import OurServicesSectionCard from "./OurServicesSectionCard";
import { ourServices } from "@/constant/data";

const OurServicesSection = () => {
  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br bg-gray-50 dark:from-[#0a192f] dark:to-[#0d1b36] relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-[#2A75BB]/5 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold  text-gray-900 dark:text-white mb-4">
            Our Digital Solutions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive services to transform your business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ourServices.map((service, index) => (
            <OurServicesSectionCard
              key={index}
              discription={service.desc}
              title={service.title}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServicesSection;
