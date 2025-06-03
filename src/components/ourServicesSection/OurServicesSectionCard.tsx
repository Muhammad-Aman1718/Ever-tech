import React from "react";
import Button from "../buttons/Button";
import { ArrowRight } from "lucide-react";
import { OurServicesSectionCardPropsTypes } from "@/types/types";

const OurServicesSectionCard: React.FC<OurServicesSectionCardPropsTypes> = ({
  title,
  discription,
  icon: Icon,
}) => {
  return (
    <div className="bg-gradient-to-br bg-white dark:from-[#0d1b36] dark:to-[#0a192f] p-8 rounded-2xl shadow-xl border border-gray-200 hover:border-blue-300 dark:border-[#2A75BB]/20 dark:hover:border-[#2A75BB]/50 transition-all duration-300 transform hover:-translate-y-1">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] dark:from-[#2A75BB] dark:to-[#3498db] rounded-2xl mb-6">
        {Icon && <Icon className="h-8 w-8 text-white" />}
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
        {discription}
      </p>
      <Button className="inline-flex items-center text-blue-600 dark:text-[#2A75BB] font-medium group hover:text-blue-800 dark:hover:text-[#3498db] transition-colors">
        Learn More
        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </Button>
    </div>
  );
};

export default OurServicesSectionCard;
