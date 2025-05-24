import React from "react";
import { userData } from "@/types/types";

interface StudentInformationFormPropsTypes {
  student: userData;
}

const StudentInformationForm: React.FC<StudentInformationFormPropsTypes> = ({
  student,
}) => {

  return (
    <div className="fixed inset-0  bg-opacity-50 flex justify-center items-center z-50">
      <div className="border bg-white  p-6 rounded-lg w-full max-w-2xl relative">
        <div className="flex gap-4">
          <img
            src={student.profilePic}
            alt="Profile"
            className="w-32 h-32 object-cover rounded-full"
          />
          <div>
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
            <p>
              <strong>Message:</strong> {student.message}
            </p>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4">
          <div>
            <p className="font-semibold">CNIC Front:</p>
            <img
              src={student.cnicFront}
              alt="CNIC Front"
              className="w-full border rounded"
            />
          </div>
          <div>
            <p className="font-semibold">CNIC Back:</p>
            <img
              src={student.cnicBack}
              alt="CNIC Back"
              className="w-full border rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentInformationForm;
