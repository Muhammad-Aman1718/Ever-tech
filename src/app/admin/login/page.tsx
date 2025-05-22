"use client";
import React from "react";
import InputField from "@/components/inputs/InputField";
import MainContainer from "@/components/MainContainer";
import useLogin from "@/hooks/useLogin";
import { CgEye } from "react-icons/cg";
import { FaRegEyeSlash } from "react-icons/fa";

const Login = () => {
  const {
    email,
    password,
    showPassword,
    setEmail,
    setPassword,
    setShowPassword,
    handleSubmit,
  } = useLogin();

  return (
    <div className="border flex items-center justify-center h-screen w-full ">
      <MainContainer className=" border ">
        <div className=" border w-[450px] mx-auto flex flex-col gap-y-[30px] max-sm:w-[300px] ">
          <h1 className="text-center text-[#4D4D4D] text-3xl font-semibold  ">
            Login as Admin
          </h1>
          <InputField
            label="Email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            inputType="email"
          />
          <div className=" flex items-center ">
            <div>
              <label className={` block mb-1  text-gray-700 `}>Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className={` placeholder:text-[#504f4f] w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2A75BB] transition`}
              />
            </div>
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <CgEye className=" w-5 h-4 text-[#777E90] " />
              ) : (
                <FaRegEyeSlash className=" w-5 h-4 text-[#777E90] " />
              )}
            </button>
          </div>
        </div>
        <button
          onClick={handleSubmit}
          className="border rounded-[10px] mt-[60px] py-[10px] w-[150px] cursor-pointer "
        >
          Login
        </button>
      </MainContainer>
    </div>
  );
};

export default Login;
