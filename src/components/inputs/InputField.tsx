import React from "react";

interface InputFieldPropsTypes {
  labelClassName?: string;
  inputClassName?: string;
  label?: string;
  inputType?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  value?: string;
  required?: boolean;
  onChange?: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  darkMode?: boolean;
}

const InputField: React.FC<InputFieldPropsTypes> = ({
  labelClassName,
  inputClassName,
  label,
  inputType,
  placeholder,
  value,
  required,
  onChange,
  darkMode = false,
}) => {
  return (
    // <div>
    //   <label className={` ${labelClassName} block mb-1  text-gray-700 `}>
    //     {label}
    //   </label>
    //   <input
    //     value={value}
    //     onChange={onChange}
    //     type={inputType}
    //     placeholder={placeholder}
    //     className={` ${inputClassName} placeholder:text-[#504f4f] w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2A75BB] transition`}
    //   />
    // </div>

    <div className="space-y-2">
      <label
        className={`block text-sm font-medium ${
          darkMode ? "text-[#cbd5e1]" : "text-gray-700"
        }`}
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={inputType}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full px-4 py-3 rounded-xl ${
          darkMode
            ? "bg-[#1e293b] border border-[#2a3b5c] text-[#cbd5e1] placeholder-[#64748b] focus:ring-[#2A75BB] focus:border-[#2A75BB]"
            : "bg-white border border-gray-200 text-gray-700 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
        } focus:outline-none focus:ring-2 transition-colors`}
        required={required}
      />
    </div>
  );
};

export default InputField;
