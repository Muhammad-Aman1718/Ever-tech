import React from "react";
interface LoaderPropsTypes {
  className?: string;
}
const Loader: React.FC<LoaderPropsTypes> = ({ className }) => {
  return (
    <div className="flex justify-center items-center ">
      <div
        className={` ${className} animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent rounded-full dark:text-white `}
        role="status"
        aria-label="loading"
      ></div>
    </div>
  );
};

export default Loader;
