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
    // <div className=" backdrop-blur-sm bg-white/30 flex justify-center items-center  px-4">
    //   <div className="border-5 absolute top flex justify-center flex-col  border-green-600 bg-white dark:bg-gray-900 p-6 rounded-2xl w-full max-w-3xl shadow-2xl ">
    //     <div className="  flex items-start justify-between">
    //       <h2 className="text-2xl font-semibold text-[#2A75BB]  ">
    //         Student Details
    //       </h2>
    //       <button
    //         onClick={onClick}
    //         className="right-4 text-gray-500 hover:text-red-600 transition-colors text-xl"
    //       >
    //         &times;
    //       </button>
    //     </div>

    //     <hr className="text-[#2A75BB] py-5 " />

    //     {/* Profile Section */}
    //     <div className="flex flex-col md:flex-row gap-6 items-start">
    //       <img
    //         src={student.profilePic}
    //         alt="Profile"
    //         className="w-32 h-32 object-cover rounded-full border border-gray-300 shadow-md"
    //       />

    //       <div className="grid grid-cols-1 md:grid-cols-2 max-md:flex max-md:flex-col gap-x-8 gap-y-3 text-sm text-gray-700 dark:text-gray-300">
    //         <p>
    //           <strong>Full Name:</strong> {student.fullName}
    //         </p>
    //         <p>
    //           <strong>Father Name:</strong> {student.fatherName}
    //         </p>
    //         <p>
    //           <strong>Email:</strong> {student.email}
    //         </p>
    //         <p>
    //           <strong>Phone:</strong> {student.phoneNumber}
    //         </p>
    //         <p>
    //           <strong>City:</strong> {student.city}
    //         </p>
    //         <p>
    //           <strong>Province:</strong> {student.province}
    //         </p>
    //         <p>
    //           <strong>Education:</strong> {student.education}
    //         </p>
    //         <p>
    //           <strong>Course:</strong> {student.course}
    //         </p>
    //         <p>
    //           <strong>Status:</strong> {student.status}
    //         </p>
    //         <p className="col-span-2">
    //           <strong>Message:</strong> {student.message}
    //         </p>
    //       </div>
    //     </div>

    //     {/* CNIC Images */}
    //     <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
    //       <div>
    //         <p className="font-semibold text-sm mb-1">CNIC Front:</p>
    //         <img
    //           src={student.cnicFront}
    //           alt="CNIC Front"
    //           className="w-[400px] border rounded-lg shadow-sm max-sm:w-[200px] "
    //         />
    //       </div>
    //       <div>
    //         <p className="font-semibold text-sm mb-1">CNIC Back:</p>
    //         <img
    //           src={student.cnicBack}
    //           alt="CNIC Back"
    //           className="w-[400px]  border rounded-lg shadow-sm max-sm:w-[200px]"
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </div>

    // <div className="fixed inset-0 backdrop-blur-sm bg-white/30 flex justify-center items-center px-4 py-12 z-50">
    //   <div className="border-5 flex justify-start flex-col border-green-600 bg-white dark:bg-gray-900 p-6 rounded-2xl w-full max-w-3xl shadow-2xl max-h-[calc(100vh-100px)] overflow-y-auto">
    //     <div className="flex items-start justify-between">
    //       <h2 className="text-2xl font-semibold text-[#2A75BB]">
    //         Student Details
    //       </h2>
    //       <button
    //         onClick={onClick}
    //         className="right-4 text-gray-500 hover:text-red-600 transition-colors text-xl"
    //       >
    //         &times;
    //       </button>
    //     </div>

    //     <hr className="text-[#2A75BB] py-5" />

    //     {/* Profile Section */}
    //     <div className="flex flex-col md:flex-row gap-6 items-start">
    //       <img
    //         src={student.profilePic}
    //         alt="Profile"
    //         className="w-32 h-32 object-cover rounded-full border border-gray-300 shadow-md"
    //       />

    //       <div className="grid grid-cols-1 md:grid-cols-2 max-md:flex max-md:flex-col gap-x-8 gap-y-3 text-sm text-gray-700 dark:text-gray-300">
    //         <p>
    //           <strong>Full Name:</strong> {student.fullName}
    //         </p>
    //         <p>
    //           <strong>Father Name:</strong> {student.fatherName}
    //         </p>
    //         <p>
    //           <strong>Email:</strong> {student.email}
    //         </p>
    //         <p>
    //           <strong>Phone:</strong> {student.phoneNumber}
    //         </p>
    //         <p>
    //           <strong>City:</strong> {student.city}
    //         </p>
    //         <p>
    //           <strong>Province:</strong> {student.province}
    //         </p>
    //         <p>
    //           <strong>Education:</strong> {student.education}
    //         </p>
    //         <p>
    //           <strong>Course:</strong> {student.course}
    //         </p>
    //         <p>
    //           <strong>Status:</strong> {student.status}
    //         </p>
    //         <p className="col-span-2">
    //           <strong>Message:</strong> {student.message}
    //         </p>
    //       </div>
    //     </div>

    //     {/* CNIC Images */}
    //     <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
    //       <div>
    //         <p className="font-semibold text-sm mb-1">CNIC Front:</p>
    //         <img
    //           src={student.cnicFront}
    //           alt="CNIC Front"
    //           className="w-[400px] border rounded-lg shadow-sm max-sm:w-[200px]"
    //         />
    //       </div>
    //       <div>
    //         <p className="font-semibold text-sm mb-1">CNIC Back:</p>
    //         <img
    //           src={student.cnicBack}
    //           alt="CNIC Back"
    //           className="w-[400px] border rounded-lg shadow-sm max-sm:w-[200px]"
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </div>
    //

    // this is very stylish form

    // <div className="fixed inset-0 backdrop-blur-md bg-gradient-to-br from-blue-900/20 via-blue-800/10 to-blue-700/20 flex justify-center items-center px-4 py-12 z-50">
    //   <div className="relative border-2 border-[#2A75BB]/30 shadow-[0_0_30px_rgba(42,117,187,0.3)] flex justify-start flex-col bg-gradient-to-br from-white via-blue-50/50 to-white dark:from-gray-900 dark:via-blue-950/30 dark:to-gray-900 p-8 rounded-3xl w-full max-w-3xl max-h-[calc(100vh-100px)] overflow-y-auto backdrop-blur-sm border-t-4 border-t-[#2A75BB]">
    //     <div className="flex items-start justify-between mb-6">
    //       <h2 className="text-3xl font-bold text-[#2A75BB] drop-shadow-sm">
    //         Student Details
    //       </h2>
    //       <button
    //         onClick={onClick}
    //         className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-red-50 text-gray-500 hover:text-red-600 transition-all duration-200 text-2xl font-light shadow-md hover:shadow-lg"
    //       >
    //         &times;
    //       </button>
    //     </div>

    //     <div className="w-full h-px bg-gradient-to-r from-transparent via-[#2A75BB]/50 to-transparent mb-6"></div>

    //     {/* Profile Section */}
    //     <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
    //       <div className="relative">
    //         <img
    //           src={student.profilePic}
    //           alt="Profile"
    //           className="w-36 h-36 object-cover rounded-2xl border-4 border-[#2A75BB]/30 shadow-xl"
    //         />
    //         <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-[#2A75BB] rounded-full border-2 border-white shadow-md"></div>
    //       </div>

    //       <div className="grid grid-cols-1 md:grid-cols-2 max-md:flex max-md:flex-col gap-x-10 gap-y-4 text-sm flex-1">
    //         <div className="space-y-4">
    //           <div className="bg-gradient-to-r from-[#2A75BB]/5 to-transparent p-3 rounded-lg border-l-4 border-[#2A75BB]">
    //             <p className="text-gray-700 dark:text-gray-300">
    //               <span className="font-semibold text-[#2A75BB]">
    //                 Full Name:
    //               </span>{" "}
    //               {student.fullName}
    //             </p>
    //           </div>
    //           <div className="bg-gradient-to-r from-[#2A75BB]/5 to-transparent p-3 rounded-lg border-l-4 border-[#2A75BB]">
    //             <p className="text-gray-700 dark:text-gray-300">
    //               <span className="font-semibold text-[#2A75BB]">
    //                 Father Name:
    //               </span>{" "}
    //               {student.fatherName}
    //             </p>
    //           </div>
    //           <div className="bg-gradient-to-r from-[#2A75BB]/5 to-transparent p-3 rounded-lg border-l-4 border-[#2A75BB]">
    //             <p className="text-gray-700 dark:text-gray-300">
    //               <span className="font-semibold text-[#2A75BB]">Email:</span>{" "}
    //               {student.email}
    //             </p>
    //           </div>
    //           <div className="bg-gradient-to-r from-[#2A75BB]/5 to-transparent p-3 rounded-lg border-l-4 border-[#2A75BB]">
    //             <p className="text-gray-700 dark:text-gray-300">
    //               <span className="font-semibold text-[#2A75BB]">Phone:</span>{" "}
    //               {student.phoneNumber}
    //             </p>
    //           </div>
    //           <div className="bg-gradient-to-r from-[#2A75BB]/5 to-transparent p-3 rounded-lg border-l-4 border-[#2A75BB]">
    //             <p className="text-gray-700 dark:text-gray-300">
    //               <span className="font-semibold text-[#2A75BB]">City:</span>{" "}
    //               {student.city}
    //             </p>
    //           </div>
    //         </div>
    //         <div className="space-y-4">
    //           <div className="bg-gradient-to-r from-[#2A75BB]/5 to-transparent p-3 rounded-lg border-l-4 border-[#2A75BB]">
    //             <p className="text-gray-700 dark:text-gray-300">
    //               <span className="font-semibold text-[#2A75BB]">
    //                 Province:
    //               </span>{" "}
    //               {student.province}
    //             </p>
    //           </div>
    //           <div className="bg-gradient-to-r from-[#2A75BB]/5 to-transparent p-3 rounded-lg border-l-4 border-[#2A75BB]">
    //             <p className="text-gray-700 dark:text-gray-300">
    //               <span className="font-semibold text-[#2A75BB]">
    //                 Education:
    //               </span>{" "}
    //               {student.education}
    //             </p>
    //           </div>
    //           <div className="bg-gradient-to-r from-[#2A75BB]/5 to-transparent p-3 rounded-lg border-l-4 border-[#2A75BB]">
    //             <p className="text-gray-700 dark:text-gray-300">
    //               <span className="font-semibold text-[#2A75BB]">Course:</span>{" "}
    //               {student.course}
    //             </p>
    //           </div>
    //           <div className="bg-gradient-to-r from-[#2A75BB]/5 to-transparent p-3 rounded-lg border-l-4 border-[#2A75BB]">
    //             <p className="text-gray-700 dark:text-gray-300">
    //               <span className="font-semibold text-[#2A75BB]">Status:</span>{" "}
    //               {student.status}
    //             </p>
    //           </div>
    //         </div>
    //         <div className="md:col-span-2 bg-gradient-to-r from-[#2A75BB]/5 to-transparent p-4 rounded-lg border-l-4 border-[#2A75BB]">
    //           <p className="text-gray-700 dark:text-gray-300">
    //             <span className="font-semibold text-[#2A75BB]">Message:</span>{" "}
    //             {student.message}
    //           </p>
    //         </div>
    //       </div>
    //     </div>

    //     {/* CNIC Images */}
    //     <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    //       <div className="bg-gradient-to-br from-[#2A75BB]/5 to-transparent p-4 rounded-xl border border-[#2A75BB]/20">
    //         <p className="font-semibold text-[#2A75BB] mb-3 text-center">
    //           CNIC Front
    //         </p>
    //         <div className="relative group">
    //           <img
    //             src={student.cnicFront}
    //             alt="CNIC Front"
    //             className="w-full max-w-[400px] mx-auto border-2 border-[#2A75BB]/30 rounded-xl shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-[1.02]"
    //           />
    //           <div className="absolute inset-0 bg-gradient-to-t from-[#2A75BB]/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    //         </div>
    //       </div>
    //       <div className="bg-gradient-to-br from-[#2A75BB]/5 to-transparent p-4 rounded-xl border border-[#2A75BB]/20">
    //         <p className="font-semibold text-[#2A75BB] mb-3 text-center">
    //           CNIC Back
    //         </p>
    //         <div className="relative group">
    //           <img
    //             src={student.cnicBack}
    //             alt="CNIC Back"
    //             className="w-full max-w-[400px] mx-auto border-2 border-[#2A75BB]/30 rounded-xl shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-[1.02]"
    //           />
    //           <div className="absolute inset-0 bg-gradient-to-t from-[#2A75BB]/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    //     <div className="fixed inset-0 backdrop-blur-sm bg-black/50 flex justify-center items-center px-4 py-12 z-50">
    //   <div className="bg-white dark:bg-gray-900 p-6 rounded-lg w-full max-w-3xl shadow-lg max-h-[calc(100vh-100px)] overflow-y-auto border border-[#2A75BB]">
    //     <div className="flex items-start justify-between mb-4">
    //       <h2 className="text-2xl font-semibold text-[#2A75BB]">
    //         Student Details
    //       </h2>
    //       <button
    //         onClick={onClick}
    //         className="text-gray-500 hover:text-red-600 transition-colors text-xl"
    //       >
    //         &times;
    //       </button>
    //     </div>

    //     <hr className="border-[#2A75BB]/30 mb-6" />

    //     {/* Profile Section */}
    //     <div className="flex flex-col md:flex-row gap-6 items-start mb-6">
    //       <img
    //         src={student.profilePic}
    //         alt="Profile"
    //         className="w-32 h-32 object-cover rounded-lg border-2 border-[#2A75BB]/30"
    //       />

    //       <div className="grid grid-cols-1 md:grid-cols-2 max-md:flex max-md:flex-col gap-x-8 gap-y-3 text-sm text-gray-700 dark:text-gray-300 flex-1">
    //         <p>
    //           <span className="font-semibold text-[#2A75BB]">Full Name:</span> {student.fullName}
    //         </p>
    //         <p>
    //           <span className="font-semibold text-[#2A75BB]">Father Name:</span> {student.fatherName}
    //         </p>
    //         <p>
    //           <span className="font-semibold text-[#2A75BB]">Email:</span> {student.email}
    //         </p>
    //         <p>
    //           <span className="font-semibold text-[#2A75BB]">Phone:</span> {student.phoneNumber}
    //         </p>
    //         <p>
    //           <span className="font-semibold text-[#2A75BB]">City:</span> {student.city}
    //         </p>
    //         <p>
    //           <span className="font-semibold text-[#2A75BB]">Province:</span> {student.province}
    //         </p>
    //         <p>
    //           <span className="font-semibold text-[#2A75BB]">Education:</span> {student.education}
    //         </p>
    //         <p>
    //           <span className="font-semibold text-[#2A75BB]">Course:</span> {student.course}
    //         </p>
    //         <p>
    //           <span className="font-semibold text-[#2A75BB]">Status:</span> {student.status}
    //         </p>
    //         <p className="md:col-span-2">
    //           <span className="font-semibold text-[#2A75BB]">Message:</span> {student.message}
    //         </p>
    //       </div>
    //     </div>

    //     {/* CNIC Images */}
    //     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    //       <div>
    //         <p className="font-semibold text-[#2A75BB] mb-2">CNIC Front:</p>
    //         <img
    //           src={student.cnicFront}
    //           alt="CNIC Front"
    //           className="w-full max-w-[400px] border border-[#2A75BB]/30 rounded-lg"
    //         />
    //       </div>
    //       <div>
    //         <p className="font-semibold text-[#2A75BB] mb-2">CNIC Back:</p>
    //         <img
    //           src={student.cnicBack}
    //           alt="CNIC Back"
    //           className="w-full max-w-[400px] border border-[#2A75BB]/30 rounded-lg"
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </div>

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
            <img
              src={student.profilePic}
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
            <img
              src={student.cnicFront}
              alt="CNIC Front"
              className="w-full max-w-[400px] mx-auto border border-[#2A75BB]/30 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            />
          </div>
        
          <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
            <p className="font-semibold text-[#2A75BB] mb-3 text-center">
              CNIC Back
            </p>
            <img
              src={student.cnicBack}
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
