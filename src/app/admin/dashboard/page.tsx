"use client";
import React, { useState } from "react";
import useDashboard from "@/hooks/useDashboard";
import MainContainer from "@/components/MainContainer";
import Button from "@/components/button/Button";
import StudentTable from "@/components/admin/studentTable/StudentTable";

const Dashboard = () => {
  const { handleLogout } = useDashboard();

  const dummyStudents = [
    {
      id: "1",
      fullName: "Ali Raza",
      email: "ali@example.com",
      phoneNumber: "03001234567",
      city: "Lahore",
      course: "Web Development",
      status: null,
    },
    {
      id: "2",
      fullName: "Fatima Khan",
      email: "fatima@example.com",
      phoneNumber: "03111234567",
      city: "Karachi",
      course: "Graphic Design",
      status: null,
    },
    {
      id: "3",
      fullName: "Ahmed Ali",
      email: "ahmed@example.com",
      phoneNumber: "03211234567",
      city: "Islamabad",
      course: "App Development",
      status: null,
    },
  ];

  const [students, setStudents] = useState(dummyStudents);

  const handleAccept = (id: string) => {
    alert(`Accepted student with ID: ${id}`);
  };

  const handleDecline = (id: string) => {
    alert(`Declined student with ID: ${id}`);
  };

  const handleViewDetails = (id: string) => {
    alert(`Viewing details of student ID: ${id}`);
  };

  return (
    <div>
      <MainContainer>
        <h1 className="text-[#4D4D4D] text-[36px] font-semibold leading-[44px] text-center my-[50px] ">
          Admin Dashboard
        </h1>
        <div className="flex items-center justify-between ">
          <div className="flex items-center gap-x-[20px]   ">
            <Button
              className=" "
              // onClick={handleLogout}
              title="Accepted Students"
            />
            <Button
              className=" "
              // onClick={handleLogout}
              title="Declined Students"
            />
          </div>
          <Button className=" " onClick={handleLogout} title="Logout" />
        </div>

        <StudentTable
          students={students}
          onAccept={handleAccept}
          onDecline={handleDecline}
          onViewDetails={handleViewDetails}
        />
      </MainContainer>
    </div>
  );
};

export default Dashboard;
