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
    <div>
      <h1 className="text-[#4D4D4D] text-[36px] font-semibold leading-[44px] text-center mb-[50px]">
        Courses
      </h1>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-[40px] lg:grid-cols-3">
        {visibleCourses.map((course, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
          >
            <CoursesCard
              courseHeading={course.courseHeading}
              coursePoints={course.coursePoints}
            />
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <button
          onClick={handleToggle}
          className="bg-[#2A75BB] text-white px-6 py-2 rounded-xl hover:bg-[#225f99] transition"
        >
          {visibleCount >= allCourses.length ? "Show Less" : "View More"}
        </button>
      </div>
    </div>
  );
};

export default CoursesSection;
