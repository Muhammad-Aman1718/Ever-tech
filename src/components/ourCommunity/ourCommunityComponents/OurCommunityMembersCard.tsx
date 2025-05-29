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
    <div className="bg-gradient-to-br from-[#0d1b36] to-[#0a192f] rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-[#2A75BB]/20 hover:border-[#2A75BB]/50 hover:-translate-y-1">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#2A75BB] to-[#3498db] flex items-center justify-center text-white font-bold">
          {name![0]}
        </div>
        <div className="ml-4">
          <p className="font-semibold text-white">{name}</p>
          <p className="text-sm text-gray-400">{role}</p>
        </div>
      </div>
      <p className="text-gray-300">"{text}"</p>
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
