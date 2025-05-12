import React from "react";

const AboutUsSection = () => {
  const team = [
    {
      name: "Ali Raza",
      role: "Frontend Developer",
      //   image: team1,
    },
    {
      name: "Ayesha Khan",
      role: "UI/UX Designer",
      //   image: team2,
    },
    {
      name: "Usman Tariq",
      role: "Backend Developer",
      //   image: team3,
    },
  ];

  return (
    <div>
      AboutUsSection
      <section className="py-16 ">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#4D4D4D] mb-8">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6"
              >
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#2A75BB]">
                  {/* <Image
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  /> */}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-[#4A90E2] font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsSection;
