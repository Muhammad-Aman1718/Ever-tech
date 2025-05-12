import React from "react";

interface ContactUsInputPropsTypes {
  labelClassName?: string;
  inputClassName?: string;
  label?: string;
  inputType?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  value?: string;
  onChange?: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
}

const InputField: React.FC<ContactUsInputPropsTypes> = ({
  labelClassName,
  inputClassName,
  label,
  inputType,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div>
      <label className={` ${labelClassName} block mb-1  text-gray-700 `}>
        {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        type={inputType}
        placeholder={placeholder}
        className={` ${inputClassName} placeholder:text-[#504f4f] w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2A75BB] transition`}
      />
    </div>
  );
};

export default InputField;
