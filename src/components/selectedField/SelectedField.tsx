import React from "react";

interface SelectFieldPropsTypes {
  label?: string;
  placeholder?: string;
  value?: string;
  required?: boolean;
  onChange?: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  options?: string[];
}

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
      <label className="block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <select
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 text-white bg-[#0d1b36] border border-[#2A75BB]/30 rounded-lg focus:ring-2 focus:ring-[#2A75BB] focus:border-[#2A75BB] outline-none transition-colors placeholder:text-gray-600"
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
