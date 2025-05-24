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
        <h1 className="text-[#4D4D4D] text-[36px] font-semibold leading-[44px] text-center my-[50px] ">
          Admin Dashboard
        </h1>
        <div className="flex items-center justify-between my-3 ">
          <div className="flex items-center gap-x-[20px]   ">
            <Button
              className=" "
              onClick={handleNewStudents}
              title="New Students"
            />
            <Button
              className=" "
              onClick={handleAcceptedStudents}
              title="Accepted Students"
            />
            <Button
              className=" "
              onClick={handleDeclinedStudents}
              title="Declined Students"
            />
          </div>
          <Button className=" " onClick={handleLogout} title="Logout" />
        </div>

        <StudentTable
          students={filteredStudents}
          onAccept={handleAccept}
          onDecline={handleDecline}
          onViewDetails={handleViewDetails}
        />

        {selectedStudent && (
          <div className=" dark:bg-white bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg  ">
              <button
                onClick={() => setSelectedStudent(null)}
                className="border  right-2 text-xl text-white hover:text-red-500"
              >
              </button>

              <StudentInformationForm student={selectedStudent} />
            </div>
          </div>
        )}
      </MainContainer>
    </div>
  );
};

export default Dashboard;
