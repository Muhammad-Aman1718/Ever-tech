import React from "react";
import { ContactUsInputFieldPropsTypes } from "@/types/types";

const ContactUsInputField: React.FC<ContactUsInputFieldPropsTypes> = ({
  label,
  inputType,
  name,
  value,
  onChange,
  placeholder,
  required,
}) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-2">
        {label}
      </label>
      <input
        type={inputType}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 bg-gray-50  dark:bg-[#0d1b36] border  border-gray-300 dark:border-[#2A75BB]/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-[#2A75BB] dark:focus:border-[#2A75BB] outline-none transition-colors placeholder:text-gray-600 dark:text-white"
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default ContactUsInputField;
