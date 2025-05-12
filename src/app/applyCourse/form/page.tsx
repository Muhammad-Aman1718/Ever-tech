"use client";
import React, { useState } from "react";
import InputField from "@/components/inputs/InputField";
import MainContainer from "@/components/MainContainer";
import useApplyCourse from "@/hooks/useApplyCourse";
import Loader from "@/components/Loader";
import ImageUploader from "@/components/ImageUploader";
import { courseOptions, educationOptions } from "@/constant/data";
import { provinces } from "@/types/types";
import ChooseImg from "@/components/coursesSection/ChooseImg";

const Form = () => {
  const {
    fullName,
    setFullName,
    fatherName,
    setFatherName,
    email,
    setEmail,
    phoneNumber,
    setPhoneNumber,
    city,
    setCity,
    province,
    setProvince,
    education,
    setEducation,
    course,
    setCourse,
    message,
    setMessage,
    profilePic,
    setProfilePic,
    cnicFront,
    setCnicFront,
    cnicBack,
    setCnicBack,
    handleFileChange,
    loading,
    handleSubmit,
  } = useApplyCourse();

  return (
    <div>
      <MainContainer className="py-10 ">
        <h1 className="text-center text-[#4D4D4D] text-[36px] font-semibold leading-[44px] my-10 ">
          Apply Course
        </h1>
        <div className="grid grid-cols-2  gap-x-10 gap-y-7 ">
          <InputField
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            label="Full Name"
            labelClassName=" font-bold "
            placeholder="Enter your full name"
            inputType="text"
          />
          <InputField
            value={fatherName}
            onChange={(e) => setFatherName(e.target.value)}
            label="Father Name"
            labelClassName="font-bold"
            placeholder="Enter your father name "
            inputType="text"
          />
          <InputField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email Address"
            labelClassName="font-bold"
            placeholder="Enter your email address"
          />
          <InputField
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            label="Phone Number"
            labelClassName="font-bold"
            placeholder="+92 (300) 1234567"
          />
          <InputField
            value={city}
            onChange={(e) => setCity(e.target.value)}
            label="City"
            labelClassName="font-bold"
            placeholder="Enter your city name"
          />

          <div>
            <label className="block mb-1 text-gray-700  font-bold">
              Province
            </label>
            <select
              value={province}
              onChange={(e) => setProvince(e.target.value)}
              name="province"
              required
              className="w-full border border-gray-300 rounded-md text-[#504f4f] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2A75BB] transition"
            >
              <option value="" hidden>
                -- Select your Province --
              </option>
              {provinces.map((level, idx) => (
                <option key={idx} value={level}>
                  {level}
                </option>
              ))}
            </select>
          </div>

          {/*  */}

          <div>
            <label className="block mb-1 text-gray-700  font-bold">
              Education Level
            </label>
            <select
              value={education}
              onChange={(e) => setEducation(e.target.value)}
              name="education"
              required
              className="w-full border border-gray-300 rounded-md text-[#504f4f] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2A75BB] transition"
            >
              <option value="" hidden>
                -- Select Education Level --
              </option>
              {educationOptions.map((level, idx) => (
                <option key={idx} value={level}>
                  {level}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-1 text-gray-700  font-bold">
              Select Course
            </label>
            <select
              name="course"
              required
              className="w-full border border-gray-300 rounded-md text-[#504f4f] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2A75BB] transition"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            >
              <option value="" hidden>
                -- Choose a course --
              </option>
              {courseOptions.map((course, idx) => (
                <option key={idx} value={course}>
                  {course}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-1 text-gray-700  font-bold">
              Message (optional)
            </label>
            <textarea
              value={message}
              name="message"
              rows={4}
              className=" w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2A75BB] transition"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>
        <div className="">
          {/* <ChooseImg /> */}
          <div className="flex flex-col gap-6 py-5  rounded-xl w-full max-w-md ">
            <h2 className="text-[#4D4D4D] text-xl font-bold text-strat">
              Upload Documents
            </h2>

            <div>
              <label className="block text-[#4D4D4D] font-medium mb-1">
                Profile Picture
              </label>
              <input
                type="file"
                onChange={(e) => handleFileChange(e, "profile")}
                className="block w-full p-2 border border-[#2A75BB] rounded cursor-pointer"
                required
              />
              {profilePic && (
                <p className="text-sm text-gray-600 mt-1">
                  Selected: {profilePic.name}
                </p>
              )}
            </div>

            <div>
              <label className="block text-[#4D4D4D] font-medium mb-1">
                CNIC Front
              </label>
              <input
                type="file"
                onChange={(e) => handleFileChange(e, "front")}
                className="block w-full p-2 border border-[#2A75BB] rounded cursor-pointer"
                required
              />
              {cnicFront && (
                <p className="text-sm text-gray-600 mt-1">
                  Selected: {cnicFront.name}
                </p>
              )}
            </div>

            <div>
              <label className="block text-[#4D4D4D] font-medium mb-1">
                CNIC Back
              </label>
              <input
                required
                type="file"
                onChange={(e) => handleFileChange(e, "back")}
                className="block w-full p-2 border border-[#2A75BB] rounded cursor-pointer"
              />
              {cnicBack && (
                <p className="text-sm text-gray-600 mt-1">
                  Selected: {cnicBack.name}
                </p>
              )}
            </div>
          </div>
        </div>
        <button
          onClick={handleSubmit}
          className="bg-[#2A75BB] text-white w-[134px] font-semibold rounded-xl py-3 px-6 mt-10 transition-colors duration-300 ease-in-out hover:bg-[#1e5a93] cursor-pointer "
        >
          {loading ? <Loader /> : "Apply Now"}
        </button>
      </MainContainer>
    </div>
  );
};

export default Form;
