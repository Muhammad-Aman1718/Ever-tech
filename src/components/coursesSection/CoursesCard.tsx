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
    // <div className=" bg-white rounded-2xl shadow-lg overflow-hidden  hover:shadow-xl transition-shadow duration-300">
    //   <Image
    //     src={WebDevelopmentCoursesImg}
    //     alt="Course Banner"
    //     className="w-full h-48 object-fit"
    //   />

    //   <div className="p-6">
    //     <h2 className="text-xl font-semibold text-gray-800 mb-4">
    //       {courseHeading}
    //     </h2>
    //     <ul className="list-disc pl-5 text-gray-600 text-sm space-y-2 mb-6">
    //       {coursePoints?.map((point, index) => (
    //         <li key={index}> {point} </li>
    //       ))}
    //     </ul>

    //     <div className="flex justify-between gap-2">
    //       <button className="flex-1 border border-[#2A75BB] text-[#2A75BB] py-2 rounded-xl hover:bg-[#2A75BB1a] hover:cursor-pointer transition">
    //         View Details
    //       </button>
    //       <button className="flex-1 bg-[#2A75BB] text-white py-2 rounded-xl hover:bg-[#225f99] transition hover:cursor-pointer ">
    //         <Link
    //           href={`/applyCourse/form?course=${encodeURIComponent(
    //             courseHeading ?? ""
    //           )}`}
    //         >
    //           Apply Now
    //         </Link>
    //       </button>
    //     </div>
    //   </div>
    // </div>

    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      {/* Course Image Placeholder */}
      <div className="h-48 bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
        <div className="text-white text-center">
          <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full mx-auto mb-2 flex items-center justify-center">
            <span className="text-2xl">📚</span>
          </div>
          <p className="text-sm font-medium">Course Image</p>
        </div>
      </div>

      {/* Course Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 text-nowrap">
          {courseHeading}
        </h3>

        <ul className="text-gray-600 text-sm space-y-2 mb-6">
          {coursePoints?.map((point, index) => (
            <li key={index} className="flex items-start text-nowrap">
              <span className="text-blue-500 mr-2">•</span>
              {point}
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="flex gap-3">
          {/* <button className="flex-1 border border-blue-500 text-blue-600 py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors duration-200 text-sm font-medium">
            View Details
          </button> */}
          <Link
            href={`/applyCourse/form?course=${encodeURIComponent(
              courseHeading ?? ""
            )}`}
          >
            <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium cursor-pointer">
              Apply Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CoursesCard;
