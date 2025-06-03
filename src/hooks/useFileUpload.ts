import { FileUploadPropsTypes } from "@/types/types";
import React from "react";

const useFileUpload = (onChange: (file: File | null) => void) => {
  const handleDragOver = (e: React.DragEvent<HTMLInputElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      onChange(droppedFile);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      onChange(selectedFile);
    }
  };

  const removeFile = () => {
    onChange(null);
  };

  return {
    handleDragOver,
    handleDrop,
    handleFileSelect,
    removeFile,
  };
};

export default useFileUpload;
