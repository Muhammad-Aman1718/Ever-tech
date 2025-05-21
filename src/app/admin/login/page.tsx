import InputField from "@/components/inputs/InputField";
import MainContainer from "@/components/MainContainer";
import React from "react";

const Login = () => {
  return (
    <div className="border flex items-center justify-center h-screen w-full ">
      <MainContainer className=" border ">
        <div className=" border w-[450px] mx-auto flex flex-col gap-y-[30px] max-sm:w-[300px] ">
          <h1 className="text-center text-[#4D4D4D] text-3xl font-semibold  ">
            Login as Admin
          </h1>
          <InputField label="Email" placeholder="Enter your email"  />
          <InputField label="Password" placeholder="Enter your password" />
        </div>
      </MainContainer>
    </div>
  );
};

export default Login;
