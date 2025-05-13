import React, { useState } from "react";
import { useAppDispatch } from "@/store/store";
import { uploadImageToCloudinary } from "@/store/slices/courseForm";
const useChooseImg = () => {
  const dispatch = useAppDispatch();

  const [profilePic, setProfilePic] = useState<File | null>(null);
  // const [cnicFront, setCnicFront] = useState<File | null>(null);
  // const [cnicBack, setCnicBack] = useState<File | null>(null);

  // const [profilePicURL, setProfilePicURL] = useState<string>("");
  // const [cnicFrontURL, setCnicFrontURL] = useState<string>("");
  // const [cnicBackURL, setCnicBackURL] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setProfilePic(file);
    }
  };
  console.log("this is profileImg", profilePic);

  const handleImgSubmit = () => {
    console.log("button wa clicked");

    if (profilePic) dispatch(uploadImageToCloudinary(profilePic));
  };

  return {
    profilePic,
    setProfilePic,
    // cnicFront,
    // cnicBack,
    // profilePicURL,
    // cnicFrontURL,
    // cnicBackURL,
    handleChange,
    handleImgSubmit,
  };
};

export default useChooseImg;
