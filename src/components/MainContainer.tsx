import { MainContainerPropsTypes } from "@/types/types";
import React from "react";

const MainContainer: React.FC<MainContainerPropsTypes> = ({
  children,
  className,
}) => {
  return (
    <div
      className={` mx-auto max-w-[1216px] max-xl:mx-[40px] max-sm:mx-[20px]  ${className}`}
    >
      {children}
    </div>
  );
};

export default MainContainer;
