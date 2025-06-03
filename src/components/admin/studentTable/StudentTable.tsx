import React from "react";
import { StudentTablePropsTypes } from "@/types/types";

const StudentTable: React.FC<StudentTablePropsTypes> = ({
  students,
  onAccept,
  onDecline,
  onViewDetails,
}) => {
  return (
    <div className="overflow-x-auto my-8 bg-white rounded-xl shadow-lg border border-[#2A75BB]/20">
      <table className="min-w-full text-sm text-left">
        <thead className="bg-gradient-to-r from-[#2A75BB] to-blue-600 text-white">
          <tr>
            <th className="text-nowrap px-6 py-4 font-semibold tracking-wide">
              #
            </th>
            <th className="text-nowrap px-6 py-4 font-semibold tracking-wide">
              Full Name
            </th>
            <th className="text-nowrap px-6 py-4 font-semibold tracking-wide">
              Email
            </th>
            <th className="text-nowrap px-6 py-4 font-semibold tracking-wide">
              City
            </th>
            <th className="text-nowrap px-6 py-4 font-semibold tracking-wide">
              Course
            </th>
            <th className="text-nowrap px-6 py-4 font-semibold tracking-wide text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {students?.map((student, index) => (
            <tr
              key={student.id}
              className="hover:bg-gradient-to-r hover:from-[#2A75BB]/5 hover:to-blue-50/50 transition-all duration-200 group"
            >
              <td className="px-6 py-4 font-medium text-[#2A75BB]">
                {index + 1}
              </td>
              <td className="text-nowrap px-6 py-4 text-gray-800 font-medium">
                {student.fullName}
              </td>
              <td className="text-nowrap px-6 py-4 text-gray-600">
                {student.email}
              </td>
              <td className="text-nowrap px-6 py-4 text-gray-600">
                {student.city}
              </td>
              <td className="text-nowrap px-6 py-4 text-gray-600">
                <span className="bg-gray-100 px-2 py-1 rounded-full text-xs">
                  {student.course?.slice(0, 15) + "..."}
                </span>
              </td>
              <td className="text-nowrap px-6 py-4 text-center">
                <div className="text-nowrap flex justify-center gap-2 ">
                  {(student.status === null ||
                    student.status === "Declined") && (
                    <button
                      className="bg-green-500 hover:bg-green-600 text-white px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 shadow-sm hover:shadow-md transform hover:scale-105"
                      onClick={() => onAccept(student.id!)}
                    >
                      Accept
                    </button>
                  )}

                  {(student.status === null ||
                    student.status === "Accepted") && (
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 shadow-sm hover:shadow-md transform hover:scale-105"
                      onClick={() => onDecline(student.id!)}
                    >
                      Decline
                    </button>
                  )}

                  <button
                    className="bg-[#2A75BB] hover:bg-blue-700 text-white px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 shadow-sm hover:shadow-md transform hover:scale-105"
                    onClick={() => onViewDetails(student.id!)}
                  >
                    View Details
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
