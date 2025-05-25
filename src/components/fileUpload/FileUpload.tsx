import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import { RxUpload } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

interface FileUploadPropsTypes {
  label: string;
  acceptedFiles?: string;
  onChange: (file: File | null) => void;
  file: File | null;
  required?: boolean;
}

const FileUpload: React.FC<FileUploadPropsTypes> = ({
  label,
  acceptedFiles,
  onChange,
  file,
  required,
}) => {
  const handleDragOver = (e: any) => {
    e.preventDefault();
  };

  const handleDrop = (e: any) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      onChange(droppedFile);
    }
  };

  const handleFileSelect = (e: any) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      onChange(selectedFile);
    }
  };

  const removeFile = () => {
    onChange(null);
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      {!file ? (
        <div
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center hover:border-blue-400 transition-colors cursor-pointer"
        >
          <input
            type="file"
            accept={acceptedFiles}
            onChange={handleFileSelect}
            className="hidden"
            id={`file-${label.replace(/\s+/g, "-").toLowerCase()}`}
          />
          <label
            htmlFor={`file-${label.replace(/\s+/g, "-").toLowerCase()}`}
            className="cursor-pointer"
          >
            <RxUpload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm text-gray-600">
              Click to upload or drag and drop
            </p>
            <p className="text-xs text-gray-400 mt-1">
              PNG, JPG, GIF up to 2MB
            </p>
          </label>
        </div>
      ) : (
        <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center space-x-2">
            <FiCheckCircle className="w-5 h-5 text-green-600" />
            <span className="text-sm text-green-800">{file.name}</span>
          </div>
          <button
            type="button"
            onClick={removeFile}
            className="text-red-500 hover:text-red-700 transition-colors"
          >
            <RxCross2 className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
