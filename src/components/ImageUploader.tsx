"use client";

import React from "react";
import useImageUploader from "@/hooks/useImageUploader";
import Image from "next/image";

export default function ImageUploader() {
  const { imageUrl, handleUpload } = useImageUploader();

  return (
    <div>
      <input type="file" onChange={handleUpload} />
      {imageUrl && (
        <Image src={imageUrl} alt="Uploaded" className="mt-4 w-64" />
      )}
    </div>
  );
}
