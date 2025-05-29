import { LucideIcon } from "lucide-react";
import React from "react";

interface progressCardPropsTypes {
  statLabel?: string;
  statValue?: string;
  statIcon?: LucideIcon;
}

const ProgressCard: React.FC<progressCardPropsTypes> = ({
  statLabel,
  statValue,
  statIcon: StatIcon,
}) => {
  return (
    <div className="bg-gradient-to-br from-[#0d1b36] to-[#0a192f] p-8 rounded-2xl text-center border border-[#2A75BB]/20 hover:border-[#2A75BB]/50 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-[#2A75BB]/10 rounded-full mb-4">
        {/* <Users className="h-8 w-8 text-[#2A75BB]" /> */}
        {StatIcon && <StatIcon className="h-8 w-8 text-[#2A75BB]" />}
      </div>
      <div className="text-4xl font-bold text-white mb-2">{statValue}</div>
      <p className="text-gray-400">{statLabel}</p>
    </div>
  );
};

export default ProgressCard;
