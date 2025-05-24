"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import useDashboard from "@/hooks/useDashboard";

const Dashboard = () => {
  const { handleLogout } = useDashboard();

  return (
    <div>
      Dashboard
      <button
        className="border py-5 w-[150px] cursor-pointer "
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
