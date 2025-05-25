import React from "react";

interface buttonTypesProps {
  title?: string;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<buttonTypesProps> = ({ title, className, onClick }) => {
  return (
    <button
      className={` ${className} text-nowrap text-[14px]  text-white font-semibold cursor-pointer py-4 px-4 rounded-[8px] hover:bg-[#4b80b1] `}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
