import React from "react";

interface ourClientsCardPropsTypes {
  clientsName?: string;
}

const OurClientsCard: React.FC<ourClientsCardPropsTypes> = ({
  clientsName,
}) => {
  return (
    <div className="bg-gradient-to-br from-[#0d1b36] to-[#0a192f] p-4 rounded-xl text-center hover:shadow-xl transition-all duration-300 group border border-[#2A75BB]/20 hover:border-[#2A75BB]/50 hover:-translate-y-1">
      <div className="bg-gradient-to-r from-[#2A75BB] to-[#3498db] w-14 h-14 rounded-xl mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
        <span className="text-xl font-bold text-white">{clientsName![0]}</span>
      </div>
      <p className="font-semibold text-white">{clientsName}</p>
    </div>
  );
};

export default OurClientsCard;
