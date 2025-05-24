"use client";
import React from "react";
import useDashboard from "@/hooks/useDashboard";
import MainContainer from "@/components/MainContainer";
import Button from "@/components/button/Button";

const Dashboard = () => {
  const { handleLogout } = useDashboard();

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
      </MainContainer>
    </div>
  );
};

export default Dashboard;
