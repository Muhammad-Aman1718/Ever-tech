import React from "react";
import Image, { StaticImageData } from "next/image";
import WebDevelopmentCoursesImg from "../../../public/assets/courses/web-dev.jpeg";
import Link from "next/link";

interface CoursesCardPropsTypes {
  cardImg?: string | StaticImageData;
  courseHeading?: string;
  coursePoints?: string[];
}

const CoursesCard: React.FC<CoursesCardPropsTypes> = ({
  cardImg,
  courseHeading,
  coursePoints,
}) => {
  return (
    <div className=" bg-white rounded-2xl shadow-lg overflow-hidden  hover:shadow-xl transition-shadow duration-300">
      <Image
        src={WebDevelopmentCoursesImg}
        alt="Course Banner"
        className="w-full h-48 object-fit"
      />

      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          {courseHeading}
        </h2>
        <ul className="list-disc pl-5 text-gray-600 text-sm space-y-2 mb-6">
          {coursePoints?.map((point, index) => (
            <li key={index}> {point} </li>
          ))}
        </ul>

        <div className="flex justify-between gap-2">
          <button className="flex-1 border border-[#2A75BB] text-[#2A75BB] py-2 rounded-xl hover:bg-[#2A75BB1a] hover:cursor-pointer transition">
            View Details
          </button>
          <button className="flex-1 bg-[#2A75BB] text-white py-2 rounded-xl hover:bg-[#225f99] transition hover:cursor-pointer ">
            <Link
              href={`/applyCourse/form?course=${encodeURIComponent(
                courseHeading ?? ""
              )}`}
            >
              Apply Now
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoursesCard;
