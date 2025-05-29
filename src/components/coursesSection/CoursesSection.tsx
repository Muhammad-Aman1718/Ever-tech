"use client";

import React from "react";
import CoursesCard from "./coursesSectionComponent/CoursesCard";
import { motion } from "framer-motion";
import { allCourses, ourCoursesDetials } from "@/constant/data";
import useCourseSection from "@/hooks/useCourseSection";
import { BookOpen } from "lucide-react";

const CoursesSection = () => {
  const { visibleCount, visibleCourses, cardVariants, handleToggle } =
    useCourseSection();

  return (
    <section id="courses" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#3498db]/5 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Transform Your Career
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Master the latest technologies with industry experts
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ourCoursesDetials.map((course, index) => (
            <CoursesCard
              key={index}
              level={course.level}
              duration={course.duration}
              students={course.students}
              tags={course.tags}
              title={course.title}
            />
          ))}
        </div>
      </div>
      {/* <button
        onClick={handleToggle}
        className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
      >
        {visibleCount >= allCourses.length ? "Show Less" : "View More"}
      </button> */}
    </section>
  );
};

export default CoursesSection;
