import React from "react";

interface ContainerProps {
  children?: React.ReactNode;
  className?: string;
}

const MainContainer: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={` mx-auto max-w-[1216px] max-xl:mx-[40px] max-sm:mx-[20px]  ${className}`}>
      {children}
    </div>
  );
};

export default MainContainer;
