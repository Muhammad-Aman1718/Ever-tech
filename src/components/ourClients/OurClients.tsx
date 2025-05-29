import React from "react";
import OurClientsCard from "./ourClientsComponents/OurClientsCard";
import ProgressCard from "./ourClientsComponents/ProgressCard";
import { clientsName, progress } from "@/constant/data";

const OurClients = () => {
  return (
    <section id="clients" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted By Industry Leaders
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            We partner with innovative companies worldwide to deliver
            exceptional digital solutions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
          {clientsName.map((client, index) => (
            <OurClientsCard key={index} clientsName={client} />
          ))}
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {progress.map((stat, index) => (
            <ProgressCard
              key={index}
              statLabel={stat.label}
              statValue={stat.value}
              statIcon={stat.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClients;
