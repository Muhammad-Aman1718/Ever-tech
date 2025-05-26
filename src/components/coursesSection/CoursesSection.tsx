"use client";

import React from "react";
import CoursesCard from "./CoursesCard";
import { motion } from "framer-motion";
import { allCourses } from "@/constant/data";
import useCourseSection from "@/hooks/useCourseSection";

const CoursesSection = () => {
  const { visibleCount, visibleCourses, cardVariants, handleToggle } =
    useCourseSection();

  return (
    // <div>
    //   <h1 className="text-[#4D4D4D] text-[36px] font-semibold leading-[44px] text-center mb-[50px]">
    //     Courses
    //   </h1>
    //   <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-[40px] lg:grid-cols-3">
    //     {visibleCourses.map((course, index) => (
    //       <motion.div
    //         key={index}
    //         custom={index}
    //         initial="hidden"
    //         animate="visible"
    //         variants={cardVariants}
    //       >
    //         <CoursesCard
    //           courseHeading={course.courseHeading}
    //           coursePoints={course.coursePoints}
    //         />
    //       </motion.div>
    //     ))}
    //   </div>
    //   <div className="flex justify-center mt-10">
    //     <button
    //       onClick={handleToggle}
    //       className="bg-[#2A75BB] text-white px-6 py-2 rounded-xl hover:bg-[#225f99] transition"
    //     >
    //       {visibleCount >= allCourses.length ? "Show Less" : "View More"}
    //     </button>
    //   </div>
    // </div>

    <div className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 text-center mb-12">
          Courses
        </h2>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {visibleCourses.map((course, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
            >
              <CoursesCard
                // key={index}
                courseHeading={course.courseHeading}
                coursePoints={course.coursePoints}
              />
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <button
            onClick={handleToggle}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
          >
            {visibleCount >= allCourses.length ? "Show Less" : "View More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoursesSection;
