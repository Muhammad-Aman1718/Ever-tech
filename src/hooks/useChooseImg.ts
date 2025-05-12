
import { uploadImageToCloudinary } from "@/store/slices/courseForm";
import { useAppDispatch } from "@/store/store";
import React, { useState } from "react";
const useChooseImg = () => {
  const dispatch = useAppDispatch();

  const [profilePic, setProfilePic] = useState<File | null>(null);
  const [cnicFront, setCnicFront] = useState<File | null>(null);
  const [cnicBack, setCnicBack] = useState<File | null>(null);

  const [profilePicURL, setProfilePicURL] = useState<string>("");
  const [cnicFrontURL, setCnicFrontURL] = useState<string>("");
  const [cnicBackURL, setCnicBackURL] = useState<string>("");





  return {
    profilePic,
    cnicFront,
    cnicBack,
    profilePicURL,
    cnicFrontURL,
    cnicBackURL,
    // handleFileChange,
  };
};

export default useChooseImg;
