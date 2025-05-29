import React from "react";

interface buttonTypesProps {
  title?: string;
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

const Button: React.FC<buttonTypesProps> = ({
  title,
  className,
  onClick,
  children,
}) => {
  return (
    <button className={`${className} cursor-pointer `} onClick={onClick}>
      {title}
      {children}
    </button>
  );
};

export default Button;
