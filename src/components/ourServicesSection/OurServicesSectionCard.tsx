import React from "react";
import { BsArrowRight } from "react-icons/bs";

interface OurServicesSectionCardPropsTypes {
  title?: string;
  description?: string;
}

const OurServicesSectionCard: React.FC<OurServicesSectionCardPropsTypes> = ({
  title,
  description,
}) => {
  return (
    // <div className="bg-white shadow-[0_4px_6px_0_rgba(0,0,0,0.1)] rounded-xl p-6 hover:shadow-lg transition">
    //   <div className="mb-4">
    //     <img
    //       src="/icons/web-dev.svg"
    //       alt="Web Development"
    //       className="w-12 h-12"
    //     />
    //   </div>
    //   <h3 className="text-xl font-semibold mb-2 text-gray-800">
    //     Web Development
    //   </h3>
    //   <p className="text-gray-600 text-sm mb-4">
    //     We build scalable, high-performance websites using modern technologies
    //     like React, Next.js, and Tailwind CSS.
    //   </p>
    //   <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700 transition">
    //     Learn More
    //   </button>
    // </div>

    <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2 p-6 sm:p-8">
      {/* Icon Section */}
      <div className="mb-6">
        <div className="relative">
          {/* Background gradient circle */}
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            {/* <span className="text-white text-2xl">{icon}</span> */}
          </div>
          {/* Floating accent */}
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-blue-200 rounded-full opacity-60 group-hover:scale-125 transition-transform duration-300"></div>
        </div>
      </div>

      {/* Content Section */}
      <div className="space-y-4">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>

        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          {description}
        </p>
      </div>

      {/* Action Button */}
      <div className="mt-6 pt-4">
        <button className="group/btn inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-all duration-300 font-medium text-sm transform hover:scale-105 shadow-lg hover:shadow-xl">
          <span>Learn More</span>
          <BsArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
        </button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-50 to-transparent rounded-bl-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-indigo-50 to-transparent rounded-tr-3xl opacity-30"></div>
    </div>
  );
};

export default OurServicesSectionCard;
