"use client";

import React from "react";
import useImageUploader from "@/hooks/useImageUploader";

export default function ImageUploader() {
  const { imageUrl, handleUpload } = useImageUploader();

  return (
    <div>
      <input type="file" onChange={handleUpload} />
      {imageUrl && <img src={imageUrl} alt="Uploaded" className="mt-4 w-64" />}
    </div>
  );
}
