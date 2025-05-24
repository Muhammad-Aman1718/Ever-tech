import { useAppSelector } from "@/store/store";
import React from "react";

type Student = {
  id?: string;
  fullName?: string;
  email?: string;
  phoneNumber?: string;
  city?: string;
  course?: string;
  status?: string | null;
};

type Props = {
  students: Student[];
  onAccept: (id: string) => void;
  onDecline: (id: string) => void;
  onViewDetails: (id: string) => void;
};

const StudentTable: React.FC<Props> = ({
  students,
  onAccept,
  onDecline,
  onViewDetails,
}) => {
  const userData = useAppSelector((state) => state.userDataReducer.userData);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 text-sm text-left bg-white">
        <thead className="bg-[#2A75BB] text-white">
          <tr>
            <th className="px-4 py-2 border">#</th>
            <th className="px-4 py-2 border">Full Name</th>
            <th className="px-4 py-2 border">Email</th>
            {/* <th className="px-4 py-2 border">Phone</th> */}
            <th className="px-4 py-2 border">City</th>
            <th className="px-4 py-2 border">Course</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students?.map((student, index) => (
            <tr key={student.id} className="border-t hover:bg-blue-50">
              <td className="px-4 py-2 border">{index + 1}</td>
              <td className="px-4 py-2 border">{student.fullName}</td>
              <td className="px-4 py-2 border">{student.email}</td>
              {/* <td className="px-4 py-2 border">{student.phoneNumber}</td> */}
              <td className="px-4 py-2 border">{student.city}</td>
              <td className="px-4 py-2 border">{student.course}</td>
              <td className="px-4 py-2 border space-x-2">
                <button
                  className="bg-green-600 text-white px-2 py-1 rounded hover:bg-green-700"
                  onClick={() => onAccept(student.id!)}
                >
                  Accept
                </button>
                <button
                  className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
                  onClick={() => onDecline(student.id!)}
                >
                  Decline
                </button>
                <button
                  className="bg-[#2A75BB] text-white px-2 py-1 rounded hover:bg-blue-800"
                  //   onClick={() => onViewDetails(student.id)}
                >
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
