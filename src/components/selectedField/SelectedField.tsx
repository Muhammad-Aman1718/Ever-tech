import { SelectFieldPropsTypes } from "@/types/types";
import React from "react";


const SelectField: React.FC<SelectFieldPropsTypes> = ({
  label,
  value,
  onChange,
  options,
  placeholder,
  required,
}) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <select
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3  bg-gray-50 dark:text-white dark:bg-[#0d1b36] border border-gray-300 dark:border-[#2A75BB]/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-[#2A75BB] dark:focus:border-[#2A75BB] outline-none transition-colors placeholder:text-gray-600"
        required={required}
      >
        <option value="" hidden className="placeholder:text-gray-600">
          {placeholder}
        </option>
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
