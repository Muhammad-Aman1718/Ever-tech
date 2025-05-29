import React from "react";
import { Code, Users, BookOpen, Star } from "lucide-react";
import { ourCommunityMembers, ourCommunityProgress } from "@/constant/data";
import OurCommunityProgressCard from "./ourCommunityComponents/OurCommunityProgressCard";
import OurCommunityMembersCard from "./ourCommunityComponents/OurCommunityMembersCard";

const OurCommunity = () => {
  return (
    <section
      id="community"
      className="py-20 bg-gradient-to-br from-[#0a192f] to-[#0d1b36] relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2A75BB]/5 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join Our Thriving Community
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Thousands of developers and learners growing together
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ourCommunityProgress.map((item, index) => (
            <OurCommunityProgressCard
              key={index}
              color={item.color}
              value={item.value}
              icon={item.icon}
              label={item.label}
            />
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-br from-[#0d1b36] to-[#0a192f] rounded-2xl p-8 shadow-xl border border-[#2A75BB]/20">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-white">
              What Our Community Says
            </h3>
            <p className="text-gray-400 mt-2">Real stories from our members</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ourCommunityMembers.map((testimonial, index) => (
              <OurCommunityMembersCard
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                text={testimonial.text}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCommunity;
