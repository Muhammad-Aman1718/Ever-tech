import React from "react";
import { BookOpen } from "lucide-react";
import Link from "next/link";
import Button from "@/components/buttons/Button";

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
    <div className="h-[350px] bg-gradient-to-br from-[#0d1b36] to-[#0a192f] rounded-2xl border border-[#2A75BB]/20 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group transform hover:-translate-y-1">
      <div className=" flex flex-col justify-between h-full p-6">
        <div>
          <div className="flex justify-between items-start">
            <div className="bg-gradient-to-r from-[#2A75BB] to-[#3498db] p-3 rounded-lg mb-4 group-hover:scale-110 transition-transform">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <span className="bg-[#2A75BB]/20 text-[#2A75BB] text-xs font-medium px-2.5 py-0.5 rounded-full">
              {level}
            </span>
          </div>

          <h3 className="text-start text-xl font-bold text-white mb-3">
            {title}
          </h3>
        </div>

        <div>
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

          <Link href="/applyCourse/form">
            <Button
              title="Enroll Now"
              className="w-full bg-gradient-to-r from-[#2A75BB] to-[#3498db] text-white py-3 rounded-lg font-medium hover:from-[#2A75BB]/90 hover:to-[#3498db]/90 transition-all duration-300 shadow-md shadow-[#2A75BB]/30"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CoursesCard;
