import React from "react";
import { ButtonPropsTypes } from "@/types/types";

const Button: React.FC<ButtonPropsTypes> = ({
  title,
  className,
  onClick,
  children,
}) => {
  return (
    <button
      type="button"
      className={`${className} cursor-pointer `}
      onClick={onClick}
    >
      {title}
      {children}
    </button>
  );
};

export default Button;
