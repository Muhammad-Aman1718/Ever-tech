"use client";
import React, { useState } from "react";
import useDashboard from "@/hooks/useDashboard";
import MainContainer from "@/components/MainContainer";
import Button from "@/components/button/Button";
import StudentTable from "@/components/admin/studentTable/StudentTable";

const Dashboard = () => {
  const { userData, loading, handleLogout, handleAccept, handleDecline } =
    useDashboard();

  const handleViewDetails = (id: string) => {
    alert(`Viewing details of student ID: ${id}`);
  };

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
              onClick={handleLogout}
              title="New Students"
            />
            <Button
              className=" "
              onClick={handleLogout}
              title="Accepted Students"
            />
            <Button
              className=" "
              onClick={handleLogout}
              title="Declined Students"
            />
          </div>
          <Button className=" " onClick={handleLogout} title="Logout" />
        </div>

        <StudentTable
          students={userData}
          onAccept={handleAccept}
          onDecline={handleDecline}
          onViewDetails={handleViewDetails}
        />
      </MainContainer>
    </div>
  );
};

export default Dashboard;
