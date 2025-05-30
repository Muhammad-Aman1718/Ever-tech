"use client";
import React from "react";
import MainContainer from "@/components/MainContainer";
import useLogin from "@/hooks/useLogin";
import { CgEye } from "react-icons/cg";
import { FaRegEyeSlash } from "react-icons/fa";
import ContactUsInputField from "@/components/inputs/ContactUsInputField";

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
    // <div className="border flex items-center justify-center h-screen w-full ">
    //   <MainContainer className=" border ">
    //     <div className=" border w-[450px] mx-auto flex flex-col gap-y-[30px] max-sm:w-[300px] ">
    //       <h1 className="text-center text-[#4D4D4D] text-3xl font-semibold  ">
    //         Login as Admin
    //       </h1>
    //       <InputField
    //         label="Email"
    //         placeholder="Enter your email"
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //         inputType="email"
    //       />
    //       <div className=" flex items-center ">
    //         <div>
    //           <label className={` block mb-1  text-gray-700 `}>Password</label>
    //           <input
    //             value={password}
    //             onChange={(e) => setPassword(e.target.value)}
    //             type={showPassword ? "text" : "password"}
    //             placeholder="Enter your password"
    //             className={` placeholder:text-[#504f4f] w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2A75BB] transition`}
    //           />
    //         </div>
    //         <button
    //           type="button"
    //           onClick={() => setShowPassword(!showPassword)}
    //         >
    //           {showPassword ? (
    //             <CgEye className=" w-5 h-4 text-[#777E90] " />
    //           ) : (
    //             <FaRegEyeSlash className=" w-5 h-4 text-[#777E90] " />
    //           )}
    //         </button>
    //       </div>
    //     </div>
    //     <button
    //       onClick={handleSubmit}
    //       className="border rounded-[10px] mt-[60px] py-[10px] w-[150px] cursor-pointer "
    //     >
    //       Login
    //     </button>
    //   </MainContainer>
    // </div>

    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <MainContainer className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-gray-800 mb-2">
              Login as Admin
            </h1>
            <p className="text-gray-500 text-sm">
              Please enter your credentials
            </p>
          </div>

          {/* Form */}
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-lg 
                           placeholder:text-gray-400 text-gray-700
                           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                           transition-colors"
            />

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-lg 
                           placeholder:text-gray-400 text-gray-700
                           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                           transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <CgEye className="w-5 h-5" />
                  ) : (
                    <FaRegEyeSlash className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Login button */}

          <button
            onClick={handleSubmit}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg 
                     transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Login
          </button>
        </div>
      </MainContainer>
    </div>
  );
};

export default Login;
