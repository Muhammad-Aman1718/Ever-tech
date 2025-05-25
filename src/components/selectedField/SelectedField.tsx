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
        className="w-full px-4 py-3 border border-gray-200 rounded-lg 
                   text-gray-700 bg-white
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                   transition-colors"
        required={required}
      >
        <option value="" hidden>
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
