import React from "react";
import { Star } from "lucide-react";

interface OurCommunityMembersCardPropsTypes {
  name?: string;
  role?: string;
  text?: string;
}

const OurCommunityMembersCard: React.FC<OurCommunityMembersCardPropsTypes> = ({
  name,
  role,
  text,
}) => {
  return (
    <div className="bg-gradient-to-br bg-white dark:from-[#0d1b36] dark:to-[#0a192f] rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-300  dark:border-[#2A75BB]/20 dark:hover:border-[#2A75BB]/50 hover:-translate-y-1">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#3b82f6] to-[#93c5fd] dark:from-[#2A75BB] dark:to-[#3498db] flex items-center justify-center text-white font-bold">
          {name![0]}
        </div>
        <div className="ml-4">
          <p className="font-semibold text-gray-900 dark:text-white">{name}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">{role}</p>
        </div>
      </div>
      <p className="text-gray-700 dark:text-gray-300">"{text}"</p>
      <div className="flex mt-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className="h-5 w-5 fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>
    </div>
  );
};

export default OurCommunityMembersCard;
