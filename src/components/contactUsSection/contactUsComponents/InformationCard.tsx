import { LucideIcon } from "lucide-react";
import React from "react";

interface InformationCardPropsTypes {
  icon?: LucideIcon;
  heading?: string;
  text1?: string;
  text2?: string;
}

const InformationCard: React.FC<InformationCardPropsTypes> = ({
  icon: Icon,
  heading,
  text1,
  text2,
}) => {
  return (
    <div className="flex items-start space-x-6">
      <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-r from-[#3b82f6] to-[#93c5fd] dark:from-[#2A75BB] dark:to-[#3498db] flex items-center justify-center">
        {Icon && <Icon className="h-6 w-6 text-white" />}
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {heading}
          {/* Office Address */}
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          {text1}
          {/* 123 Tech Street, Innovation District */}
          <br />
          {text2}
          {/* Karachi, Pakistan 75000 */}
        </p>
      </div>
    </div>
  );
};

export default InformationCard;
