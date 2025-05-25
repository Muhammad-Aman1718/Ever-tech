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

    <div>
      <label
        className={` ${labelClassName} block text-sm font-medium text-gray-700 mb-2`}
      >
        {label}
      </label>
      <input
        type={inputType}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={` ${inputClassName} w-full px-4 py-3 border border-gray-200 rounded-lg 
                   placeholder:text-gray-400 text-gray-700
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                   transition-colors`}
      />
    </div>
  );
};

export default InputField;
