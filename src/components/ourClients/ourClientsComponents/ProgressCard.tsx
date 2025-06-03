import React from "react";
import { ProgressCardPropsTypes } from "@/types/types";

const ProgressCard: React.FC<ProgressCardPropsTypes> = ({
  statLabel,
  statValue,
  statIcon: StatIcon,
}) => {
  return (
    <div className=" bg-white bg-gradient-to-br dark:from-[#0d1b36] dark:to-[#0a192f] p-8 rounded-2xl text-center border border-gray-200 hover:border-blue-300 dark:border-[#2A75BB]/20 dark:hover:border-[#2A75BB]/50 shadow-sm dark:shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-[#2A75BB]/10 rounded-full mb-4">
        {/* <Users className="h-8 w-8 text-[#2A75BB]" /> */}
        {StatIcon && <StatIcon className="h-8 w-8 text-[#2A75BB]" />}
      </div>
      <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
        {statValue}
      </div>
      <p className="text-gray-400 dark:text-gray-400">{statLabel}</p>
    </div>
  );
};

export default ProgressCard;
