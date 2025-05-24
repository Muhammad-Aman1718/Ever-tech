import React from "react";

interface buttonTypesProps {
  title?: string;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<buttonTypesProps> = ({ title, className, onClick }) => {
  return (
    <button
      className={` ${className} text-[14px] bg-[#2A75BB] text-white font-semibold cursor-pointer py-4 px-4 rounded-[8px] hover:bg-[#4b80b1] `}
    >
      {title}
    </button>
  );
};

export default Button;
