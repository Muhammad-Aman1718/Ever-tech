import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Button from "../buttons/Button";
import { ArrowRight, LucideIcon } from "lucide-react";

interface OurServicesSectionCardPropsTypes {
  title?: string;
  discription?: string;
  icon?: LucideIcon;
}

const OurServicesSectionCard: React.FC<OurServicesSectionCardPropsTypes> = ({
  title,
  discription,
  icon: Icon,
}) => {
  return (
    <div className="bg-gradient-to-br from-[#0d1b36] to-[#0a192f] p-8 rounded-2xl shadow-xl border border-[#2A75BB]/20 hover:border-[#2A75BB]/50 transition-all duration-300 transform hover:-translate-y-1">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#2A75BB] to-[#3498db] rounded-2xl mb-6">
        {Icon && <Icon className="h-8 w-8 text-white" />}
      </div>
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-400 leading-relaxed mb-6">{discription}</p>
      <Button className="inline-flex items-center text-[#2A75BB] font-medium group hover:text-[#3498db] transition-colors">
        Learn More
        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </Button>
    </div>
  );
};

export default OurServicesSectionCard;
