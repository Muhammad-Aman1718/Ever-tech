import React from "react";

interface contactUsInputFieldPropsTypes {
  label?: string;
  inputType?: React.HTMLInputTypeAttribute;
  name?: string;
  value?: string;
  onChange?: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  placeholder?: string;
  required?: boolean;
}

const ContactUsInputField: React.FC<contactUsInputFieldPropsTypes> = ({
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
      <label className="block text-sm font-medium text-gray-400 mb-2">
        {/* First Name */}
        {label}
      </label>
      <input
        type={inputType}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 bg-[#0d1b36] border border-[#2A75BB]/30 rounded-lg focus:ring-2 focus:ring-[#2A75BB] focus:border-[#2A75BB] outline-none transition-colors placeholder:text-gray-600 text-white"
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default ContactUsInputField;
