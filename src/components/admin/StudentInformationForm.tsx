import React from "react";
import { userData } from "@/types/types";
import useDashboard from "@/hooks/useDashboard";

interface StudentInformationFormPropsTypes {
  student: userData;
  onClick: () => void;
}

const StudentInformationForm: React.FC<StudentInformationFormPropsTypes> = ({
  student,
  onClick,
}) => {
  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-white/30 flex justify-center items-center z-50 px-4">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl w-full max-w-3xl shadow-2xl relative border border-gray-200 dark:border-gray-700">
        <button
          onClick={onClick}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-600 transition-colors text-xl"
        >
          &times;
        </button>

        <h2 className="text-2xl font-semibold text-[#2A75BB] mb-6 border-b pb-2">
          Student Details
        </h2>

        {/* Profile Section */}
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <img
            src={student.profilePic}
            alt="Profile"
            className="w-32 h-32 object-cover rounded-full border border-gray-300 shadow-md"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-sm text-gray-700 dark:text-gray-300">
            <p>
              <strong>Full Name:</strong> {student.fullName}
            </p>
            <p>
              <strong>Father Name:</strong> {student.fatherName}
            </p>
            <p>
              <strong>Email:</strong> {student.email}
            </p>
            <p>
              <strong>Phone:</strong> {student.phoneNumber}
            </p>
            <p>
              <strong>City:</strong> {student.city}
            </p>
            <p>
              <strong>Province:</strong> {student.province}
            </p>
            <p>
              <strong>Education:</strong> {student.education}
            </p>
            <p>
              <strong>Course:</strong> {student.course}
            </p>
            <p>
              <strong>Status:</strong> {student.status}
            </p>
            <p className="col-span-2">
              <strong>Message:</strong> {student.message}
            </p>
          </div>
        </div>

        {/* CNIC Images */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <p className="font-semibold text-sm mb-1">CNIC Front:</p>
            <img
              src={student.cnicFront}
              alt="CNIC Front"
              className="w-full h-auto border rounded-lg shadow-sm"
            />
          </div>
          <div>
            <p className="font-semibold text-sm mb-1">CNIC Back:</p>
            <img
              src={student.cnicBack}
              alt="CNIC Back"
              className="w-full h-auto border rounded-lg shadow-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentInformationForm;
