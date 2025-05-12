import { imgUploader } from "@/store/slices/courseForm";
import { useAppDispatch } from "@/store/store";
import React, { useState } from "react";

const useImageUploader = () => {
  const [imageUrl, setImageUrl] = useState("");

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const dispatch = useAppDispatch();
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      await dispatch(imgUploader());
    } catch (error) {}
  };
  return {
    imageUrl,
    setImageUrl,
    handleUpload,
  };
};

export default useImageUploader;
