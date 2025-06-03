import React, { useState } from "react";

const useImageUploader = () => {
  const [imageUrl, setImageUrl] = useState("");

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

  };
  return {
    imageUrl,
    setImageUrl,
    handleUpload,
  };
};

export default useImageUploader;
