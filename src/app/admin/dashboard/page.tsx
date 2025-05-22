"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/router";

const Dashboard = () => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if (!token || role !== "admin") {
      router.push("/admin/login");
    }
  }, []);
  return <div>Dashboard</div>;
};

export default Dashboard;
