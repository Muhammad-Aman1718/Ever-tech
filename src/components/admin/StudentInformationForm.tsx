import React from "react";
import { userData } from "@/types/types";
import Image from "next/image";

interface StudentInformationFormPropsTypes {
  student: userData;
  onClick: () => void;
}

const StudentInformationForm: React.FC<StudentInformationFormPropsTypes> = ({
  student,
  onClick,
}) => {
  return (
    <div className="fixed inset-0 backdrop-blur-md bg-gradient-to-br from-black/40 to-black/60 flex justify-center items-center px-4 py-12 z-50">
      <div className="bg-white dark:bg-gray-900 p-8 rounded-xl w-full max-w-3xl shadow-2xl max-h-[calc(100vh-100px)] overflow-y-auto border-2 border-[#2A75BB]/20 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2A75BB] via-blue-400 to-[#2A75BB]"></div>
        <div className="flex items-start justify-between mb-6">
          <h2 className="text-3xl font-bold text-[#2A75BB] tracking-tight">
            Student Details
          </h2>
          <button
            onClick={onClick}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-red-50 text-gray-500 hover:text-red-600 transition-all duration-200 text-xl shadow-sm hover:shadow-md"
          >
            &times;
          </button>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#2A75BB]/40 to-transparent mb-8"></div>

        {/* Profile Section */}
        <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
          <div className="relative">
            <Image
              src={student.profilePic!}
              alt="Profile"
              className="w-36 h-36 object-cover rounded-xl border-3 border-[#2A75BB]/20 shadow-lg"
            />
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#2A75BB] rounded-full border-2 border-white"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 max-md:flex max-md:flex-col gap-x-10 gap-y-4 text-sm text-gray-700 dark:text-gray-300 flex-1">
            <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg border-l-4 border-[#2A75BB]">
              <span className="font-semibold text-[#2A75BB]">Full Name:</span>
              <p className="mt-1">{student.fullName}</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg border-l-4 border-[#2A75BB]">
              <span className="font-semibold text-[#2A75BB]">Father Name:</span>
              <p className="mt-1">{student.fatherName}</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg border-l-4 border-[#2A75BB]">
              <span className="font-semibold text-[#2A75BB]">Email:</span>
              <p className="mt-1">{student.email}</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg border-l-4 border-[#2A75BB]">
              <span className="font-semibold text-[#2A75BB]">Phone:</span>
              <p className="mt-1">{student.phoneNumber}</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg border-l-4 border-[#2A75BB]">
              <span className="font-semibold text-[#2A75BB]">City:</span>
              <p className="mt-1">{student.city}</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg border-l-4 border-[#2A75BB]">
              <span className="font-semibold text-[#2A75BB]">Province:</span>
              <p className="mt-1">{student.province}</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg border-l-4 border-[#2A75BB]">
              <span className="font-semibold text-[#2A75BB]">Education:</span>
              <p className="mt-1">{student.education}</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg border-l-4 border-[#2A75BB]">
              <span className="font-semibold text-[#2A75BB]">Course:</span>
              <p className="mt-1">{student.course}</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg border-l-4 border-[#2A75BB]">
              <span className="font-semibold text-[#2A75BB]">Status:</span>
              <p className="mt-1">{student.status}</p>
            </div>
            <div className="md:col-span-2 bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg border-l-4 border-[#2A75BB]">
              <span className="font-semibold text-[#2A75BB]">Message:</span>
              <p className="mt-1">{student.message}</p>
            </div>
          </div>
        </div>

        {/* CNIC Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
            <p className="font-semibold text-[#2A75BB] mb-3 text-center">
              CNIC Front
            </p>
            <Image
              src={student.cnicFront!}
              alt="CNIC Front"
              className="w-full max-w-[400px] mx-auto border border-[#2A75BB]/30 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            />
          </div>

          <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
            <p className="font-semibold text-[#2A75BB] mb-3 text-center">
              CNIC Back
            </p>
            <Image
              src={student.cnicBack!}
              alt="CNIC Back"
              className="w-full max-w-[400px] mx-auto border border-[#2A75BB]/30 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentInformationForm;
