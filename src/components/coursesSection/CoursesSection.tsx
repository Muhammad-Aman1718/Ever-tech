"use client";
import React from "react";
import CoursesCard from "./coursesSectionComponent/CoursesCard";
import { motion } from "framer-motion";
import useCourseSection from "@/hooks/useCourseSection";
import { ourCoursesDetials } from "@/constant/data";

const CoursesSection = () => {
  const { visibleCount, visibleCourses, cardVariants, handleToggle } =
    useCourseSection();

  return (
    <section id="courses" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#3498db]/5 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center ">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Transform Your Career
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Master the latest technologies with industry experts
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8  ">
          {visibleCourses.map((course, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <CoursesCard
                key={index}
                level={course.level}
                duration={course.duration}
                students={course.students}
                tags={course.tags}
                title={course.title}
              />
            </motion.div>
          ))}
        </div>
        <button
          onClick={handleToggle}
          className=" bg-gradient-to-r from-[#2A75BB] to-[#3498db] text-white text-center mt-8 px-7 py-3 rounded-lg font-medium hover:from-[#2A75BB]/90 hover:to-[#3498db]/90 transition-all duration-300 shadow-md shadow-[#2A75BB]/30"
        >
          {visibleCount >= ourCoursesDetials.length ? "Show Less" : "View More"}
        </button>
      </div>
    </section>
  );
};

export default CoursesSection;
