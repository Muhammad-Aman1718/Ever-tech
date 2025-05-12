import React from "react";

const OurServicesSectionCard = () => {
  return (
    <div className="bg-white shadow-[0_4px_6px_0_rgba(0,0,0,0.1)] rounded-xl p-6 hover:shadow-lg transition">
      <div className="mb-4">
        <img
          src="/icons/web-dev.svg"
          alt="Web Development"
          className="w-12 h-12"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">
        Web Development
      </h3>
      <p className="text-gray-600 text-sm mb-4">
        We build scalable, high-performance websites using modern technologies
        like React, Next.js, and Tailwind CSS.
      </p>
      <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700 transition">
        Learn More
      </button>
    </div>
  );
};

export default OurServicesSectionCard;
