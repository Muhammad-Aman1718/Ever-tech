import { LucideIcon } from "lucide-react";
import React from "react";

interface ourCommunityProgressCardPropsTypes {
  color?: string;
  value?: string;
  label?: string;
  icon?: LucideIcon;
}

const OurCommunityProgressCard: React.FC<
  ourCommunityProgressCardPropsTypes
> = ({ color, value, label, icon: Icon }) => {
  return (
    <div
      className={`bg-gradient-to-br ${color} p-6 rounded-2xl text-center text-white shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1`}
    >
      <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
        {Icon && <Icon className="h-10 w-10 text-white" />}
      </div>
      <h3 className="text-2xl font-bold mb-2">{value}</h3>
      <p>{label}</p>
    </div>
  );
};

export default OurCommunityProgressCard;
