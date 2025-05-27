// "use client";
// import React from "react";
// import OurServicesSectionCard from "./OurServicesSectionCard";

// const OurServicesSection = () => {
//   const services = [
//     {
//       // icon: "💻",
//       title: "Web Development",
//       description:
//         "We build scalable, high-performance websites using modern technologies like React, Next.js, and Tailwind CSS.",
//     },
//     {
//       // icon: "📱",
//       title: "Mobile Development",
//       description:
//         "Create stunning mobile applications for iOS and Android using React Native and Flutter frameworks.",
//     },
//     {
//       // icon: "🎨",
//       title: "UI/UX Design",
//       description:
//         "Design beautiful and intuitive user interfaces that provide exceptional user experiences across all devices.",
//     },
//     {
//       // icon: "☁️",
//       title: "Cloud Solutions",
//       description:
//         "Deploy and manage your applications on cloud platforms like AWS, Google Cloud, and Microsoft Azure.",
//     },
//   ];
//   return (
//     <div className="w-full px-4 sm:px-6 lg:px-8 py-12 bg-gray-50">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
//           Our Services
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="opacity-0 animate-fade-in"
//               style={{
//                 animationDelay: `${index * 100}ms`,
//                 animationFillMode: "forwards",
//               }}
//             >
//               <OurServicesSectionCard
//                 // icon={service.icon}
//                 title={service.title}
//                 description={service.description}
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes fade-in {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-fade-in {
//           animation: fade-in 0.6s ease-out;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default OurServicesSection;






"use client";
import React from "react";
import OurServicesSectionCard from "./OurServicesSectionCard";

const OurServicesSection = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "We build scalable, high-performance websites using modern technologies like React, Next.js, and Tailwind CSS.",
    },
    {
      title: "Mobile Development",
      description:
        "Create stunning mobile applications for iOS and Android using React Native and Flutter frameworks.",
    },
    {
      title: "UI/UX Design",
      description:
        "Design beautiful and intuitive user interfaces that provide exceptional user experiences across all devices.",
    },
    {
      title: "Cloud Solutions",
      description:
        "Deploy and manage your applications on cloud platforms like AWS, Google Cloud, and Microsoft Azure.",
    },
  ];

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional solutions to help your business grow and succeed
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <OurServicesSectionCard
                title={service.title}
                description={service.description}
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.6s ease-out forwards;
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default OurServicesSection;