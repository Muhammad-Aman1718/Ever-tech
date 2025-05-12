import { useState } from "react";
import { allCourses } from "@/constant/data";

const useCourseSection = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleToggle = () => {
    setVisibleCount((prev) => (prev >= allCourses.length ? 3 : prev + 3));
  };

  const visibleCourses = allCourses.slice(0, visibleCount);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: i * 0.1 },
    }),
  };
  return { visibleCount, visibleCourses, cardVariants, handleToggle };
};

export default useCourseSection;
