"use client";
import React, { useState } from "react";
import useDashboard from "@/hooks/useDashboard";
import MainContainer from "@/components/MainContainer";
import Button from "@/components/button/Button";
import StudentTable from "@/components/admin/studentTable/StudentTable";
import StudentInformationForm from "@/components/admin/StudentInformationForm";

const Dashboard = () => {
  const {
    userData,
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
    <div>
      <MainContainer>
        <h1 className="text-[#4D4D4D] text-[36px] font-semibold leading-[44px] text-center my-[50px] max-sm:text-[25px] max-sm:my-[30px] ">
          Admin Dashboard
        </h1>
        <div className="flex items-center justify-between gap-x-[20px] my-3 max-md:overflow-scroll ">
          <div className="flex items-center gap-x-[10px]   ">
            <Button
              className={` ${
                filterStatus === null ? "bg-red-400" : "bg-[#2A75BB]"
              } `}
              onClick={handleNewStudents}
              title="New Students"
            />
            <Button
              className={` ${
                filterStatus === "Accepted" ? "bg-red-400" : "bg-[#2A75BB]"
              } `}
              onClick={handleAcceptedStudents}
              title="Accepted Students"
            />
            <Button
              className={` ${
                filterStatus === "Declined" ? "bg-red-400" : "bg-[#2A75BB]"
              } `}
              onClick={handleDeclinedStudents}
              title="Declined Students"
            />
          </div>
          <Button
            className="bg-[#2A75BB] "
            onClick={handleLogout}
            title="Logout"
          />
        </div>

        <StudentTable
          students={filteredStudents}
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
