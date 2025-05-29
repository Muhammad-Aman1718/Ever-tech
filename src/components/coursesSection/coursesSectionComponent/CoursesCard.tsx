import React from "react";
import { BookOpen } from "lucide-react";

interface CoursesCardPropsTypes {
  title?: string;
  level?: string;
  tags?: string[];
  duration?: string;
  students?: string;
}

const CoursesCard: React.FC<CoursesCardPropsTypes> = ({
  title,
  level,
  tags,
  duration,
  students,
}) => {
  return (
    <div className="bg-gradient-to-br from-[#0d1b36] to-[#0a192f] rounded-2xl border border-[#2A75BB]/20 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group transform hover:-translate-y-1">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div className="bg-gradient-to-r from-[#2A75BB] to-[#3498db] p-3 rounded-lg mb-4 group-hover:scale-110 transition-transform">
            <BookOpen className="h-6 w-6 text-white" />
          </div>
          <span className="bg-[#2A75BB]/20 text-[#2A75BB] text-xs font-medium px-2.5 py-0.5 rounded-full">
            {level}
          </span>
        </div>

        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags?.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="bg-[#2A75BB]/10 text-[#2A75BB] text-xs px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex justify-between text-gray-400 text-sm mb-6">
          <span>⏱ {duration}</span>
          <span>👥 {students} students</span>
        </div>

        <button className="w-full bg-gradient-to-r from-[#2A75BB] to-[#3498db] text-white py-3 rounded-lg font-medium hover:from-[#2A75BB]/90 hover:to-[#3498db]/90 transition-all duration-300 shadow-md shadow-[#2A75BB]/30">
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default CoursesCard;
