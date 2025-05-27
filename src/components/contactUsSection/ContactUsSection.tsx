"use client"
// import React from "react";
// import InputField from "../inputs/InputField";

// const ContactUsSection = () => {
//   return (
//     <section className="py-16 ">
//       <div className="max-w-4xl mx-auto px-4">
//         <h2 className="text-3xl font-bold text-[#4D4D4D] mb-8 text-center">
//           Contact Us
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 p-6 rounded-md shadow-md">
//           {/* Left Column */}
//           <div className="space-y-4">
//             <InputField
//               labelClassName="font-medium"
//               label="Name"
//               placeholder="Enter your name"
//               inputType="text"
//             />

//             <InputField
//               labelClassName="font-medium"
//               label="Phone Number (Optional)"
//               placeholder="+92-300-1234567"
//               inputType="tel"
//             />
//             <InputField
//               labelClassName="font-medium"
//               label="Subject"
//               placeholder="Inquiry about services"
//               inputType="text"
//             />
//           </div>

//           <div className="space-y-4">
//             <div>
//               <InputField
//                 label="Email "
//                 labelClassName="font-medium"
//                 placeholder=" Enter your email"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Message
//               </label>
//               <textarea
//                 rows={6}
//                 placeholder="Write your message here..."
//                 className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-[#2A75BB] focus:border-[#2A75BB] outline-none"
//                 required
//               ></textarea>
//             </div>
//           </div>

//           {/* Submit Button - Full Width */}
//           <div className="md:col-span-2">
//             <button
//               type="submit"
//               className=" bg-[#2A75BB] text-white py-3 px-5 rounded-md font-semibold hover:bg-[#4A90E2] transition"
//             >
//               Submit
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactUsSection;






import React, { useState } from "react";
import InputField from "../inputs/InputField";

const ContactUsSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-6 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to start your project? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600">+92-300-1234567</p>
              <p className="text-gray-600">+92-301-7654321</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600">info@company.com</p>
              <p className="text-gray-600">support@company.com</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600">123 Business Street</p>
              <p className="text-gray-600">City, State 12345</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="fade-in" style={{ animationDelay: '0.1s' }}>
                  <InputField
                    labelClassName="block text-sm font-semibold text-gray-700 mb-2"
                    label="Full Name *"
                    placeholder="Enter your full name"
                    inputType="text"
                    // name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="fade-in" style={{ animationDelay: '0.2s' }}>
                  <InputField
                    labelClassName="block text-sm font-semibold text-gray-700 mb-2"
                    label="Email Address *"
                    placeholder="Enter your email"
                    inputType="email"
                    // name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="fade-in" style={{ animationDelay: '0.3s' }}>
                  <InputField
                    labelClassName="block text-sm font-semibold text-gray-700 mb-2"
                    label="Phone Number"
                    placeholder="+92-300-1234567"
                    inputType="tel"
                    // name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="fade-in" style={{ animationDelay: '0.4s' }}>
                  <InputField
                    labelClassName="block text-sm font-semibold text-gray-700 mb-2"
                    label="Subject *"
                    placeholder="What's this about?"
                    inputType="text"
                    // name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="mb-8 fade-in" style={{ animationDelay: '0.5s' }}>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Tell us about your project or ask us anything..."
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 resize-none hover:border-gray-300"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 fade-in" style={{ animationDelay: '0.6s' }}>
                <div className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  We'll respond within 24 hours
                </div>

                <button
                  type="submit"
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center"
                >
                  <span className="mr-2">Send Message</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Prefer to talk directly?
            </h3>
            <p className="text-gray-600 mb-6">
              Schedule a free consultation call with our team to discuss your project in detail.
            </p>
            <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 border-2 border-blue-200 hover:border-blue-300">
              Schedule a Call
            </button>
          </div>
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

export default ContactUsSection;