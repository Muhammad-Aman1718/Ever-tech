import useChooseImg from "@/hooks/useChooseImg";
import React, { useState } from "react";

const ChooseImg = () => {
  const { profilePic, cnicFront, cnicBack, handleFileChange } = useChooseImg();

  return (
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
  );
};

export default ChooseImg;
