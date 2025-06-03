import React from "react";
import { CheckCircle, Upload, X } from "lucide-react";
import { FileUploadPropsTypes } from "@/types/types";
import useFileUpload from "@/hooks/useFileUpload";

const FileUpload: React.FC<FileUploadPropsTypes> = ({
  label,
  acceptedFiles,
  onChange,
  file,
  required,
}) => {
  const { handleDragOver, handleDrop, handleFileSelect, removeFile } =
    useFileUpload(onChange);

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
            <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm text-gray-600">
              Click to upload or drag and drop
            </p>
            <p className="text-xs text-gray-400 mt-1">
              PNG, JPG, GIF up to 2MB
            </p>
          </label>
        </div>
      ) : (
        <div className="flex items-center justify-between p-3  border border-green-200 rounded-lg">
          {/* bg-green-50 */}
          {/* #2A75BB */}
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <span className="text-sm text-green-800">{file.name}</span>
          </div>
          <button
            type="button"
            onClick={removeFile}
            className="text-red-500 hover:text-red-700 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
