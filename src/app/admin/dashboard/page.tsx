"use client";
import React from "react";
import useDashboard from "@/hooks/useDashboard";
import MainContainer from "@/components/MainContainer";
import Button from "@/components/buttons/Button";
import StudentTable from "@/components/admin/studentTable/StudentTable";
import StudentInformationForm from "@/components/admin/StudentInformationForm";

const Dashboard = () => {
  const {
    loading,
    filterStatus,
    filteredStudents,
    selectedStudent,
    setSelectedStudent,
    handleLogout,
    handleAccept,
    handleDecline,
    handleViewDetails,
    handleAcceptedStudents,
    handleDeclinedStudents,
    handleNewStudents,
  } = useDashboard();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <MainContainer className="relative">
        <div className="relative z-10 text-center pt-12 pb-8">
          <h1 className="text-[#4D4D4D] text-[36px] font-bold leading-[44px] text-center my-[50px] max-sm:text-[25px] max-sm:my-[30px] relative">
            Admin Dashboard
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#2A75BB] to-[#4D4D4D] rounded-full"></div>
          </h1>
        </div>

        <div className="relative z-10 bg-white/80 backdrop-blur-xl rounded-3xl p-3 mb-8 shadow-xl border border-white/20">
          <div className="flex items-center justify-between gap-x-[20px] my-3 max-md:overflow-scroll">
            <div className="flex items-center gap-x-[10px]">
              <Button
                className={`
              relative px-6 py-3 font-semibold text-white rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg
              ${
                filterStatus === null
                  ? "bg-gradient-to-r from-red-400 to-red-500 shadow-red-200"
                  : "bg-gradient-to-r from-[#2A75BB] to-[#1e5a94] shadow-blue-200 hover:shadow-blue-300"
              }
              before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:to-transparent before:rounded-xl before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100
            `}
                onClick={handleNewStudents}
                title="New Students"
              />
              <Button
                className={`
              relative px-6 py-3 font-semibold text-white rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg
              ${
                filterStatus === "Accepted"
                  ? "bg-gradient-to-r from-red-400 to-red-500 shadow-red-200"
                  : "bg-gradient-to-r from-[#2A75BB] to-[#1e5a94] shadow-blue-200 hover:shadow-blue-300"
              }
              before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:to-transparent before:rounded-xl before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100
            `}
                onClick={handleAcceptedStudents}
                title="Accepted Students"
              />
              <Button
                className={`
              relative px-6 py-3 font-semibold text-white rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg
              ${
                filterStatus === "Declined"
                  ? "bg-gradient-to-r from-red-400 to-red-500 shadow-red-200"
                  : "bg-gradient-to-r from-[#2A75BB] to-[#1e5a94] shadow-blue-200 hover:shadow-blue-300"
              }
              before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:to-transparent before:rounded-xl before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100
            `}
                onClick={handleDeclinedStudents}
                title="Declined Students"
              />
            </div>
            <Button
              className="
            relative px-6 py-3 font-semibold text-white rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg
            bg-gradient-to-r from-[#2A75BB] to-[#1e5a94] shadow-blue-200 hover:shadow-blue-300
            before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:to-transparent before:rounded-xl before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100
            flex items-center gap-2
          "
              onClick={handleLogout}
              title={loading ? "Logging out..." : "Logout"}
            />
          </div>
        </div>

        <StudentTable
          students={filteredStudents!}
          onAccept={handleAccept}
          onDecline={handleDecline}
          onViewDetails={handleViewDetails}
        />

        {selectedStudent && (
          <>
            <StudentInformationForm
              onClick={() => setSelectedStudent(null)}
              student={selectedStudent}
            />
          </>
        )}
      </MainContainer>
    </div>
  );
};

export default Dashboard;
