"use client";
import React, { useState } from "react";
import InputField from "../inputs/InputField";
import { Mail, Phone, MapPin } from "lucide-react";
import Button from "../buttons/Button";
import InformationCard from "./contactUsComponents/InformationCard";
import ContactUsInputField from "../inputs/ContactUsInputField";

const ContactUsSection = () => {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   phone: '',
  //   subject: '',
  //   message: ''
  // });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('Form submitted:', formData);
  //   // Handle form submission here
  // };

  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value
  //   });
  // };

  const companyInformation = [
    {
      icon: MapPin,
      heading: "Office Address",
      txt1: "123 Tech Street, Innovation District",
      txt2: "Karachi, Pakistan 75000",
    },
    {
      icon: Phone,
      heading: "Phone Number",
      txt1: "+92 300 1234567",
      txt2: "+92 21 12345678",
    },
    {
      icon: Mail,
      heading: "Office Address",
      txt1: "123 Tech Street, Innovation District",
      txt2: "Karachi, Pakistan 75000",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-[#0a192f] to-[#0d1b36] relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#3498db]/5 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's Build Together
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Ready to start your project? Get in touch with our team
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            {/* <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-r from-[#2A75BB] to-[#3498db] flex items-center justify-center">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Office Address
                </h3>
                <p className="text-gray-400">
                  123 Tech Street, Innovation District
                  <br />
                  Karachi, Pakistan 75000
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-r from-[#2A75BB] to-[#3498db] flex items-center justify-center">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Phone Number
                </h3>
                <p className="text-gray-400">
                  +92 300 1234567
                  <br />
                  +92 21 12345678
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-r from-[#2A75BB] to-[#3498db] flex items-center justify-center">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Email Address
                </h3>
                <p className="text-gray-400">
                  info@techsoft.com
                  <br />
                  support@techsoft.com
                </p>
              </div>
            </div> */}

            {companyInformation.map((data, index) => (
              <InformationCard
                key={index}
                icon={data.icon}
                heading={data.heading}
                text1={data.txt1}
                text2={data.txt2}
              />
            ))}

            <div className="pt-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                Business Hours
              </h3>
              <div className="space-y-2 text-gray-400">
                <p className="flex justify-between">
                  <span>Monday - Friday</span> <span>9:00 AM - 6:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Saturday</span> <span>10:00 AM - 4:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Sunday</span> <span>Closed</span>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#0d1b36] to-[#0a192f] p-8 rounded-2xl border border-[#2A75BB]/20 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-8">
              Send us a message
            </h3>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <ContactUsInputField
                  label="First Name"
                  inputType="text"
                  name="firstName"
                  placeholder="Your first name"
                />
                <ContactUsInputField
                  label="Last Name"
                  inputType="text"
                  name="lastName"
                  placeholder="Your last name"
                />
                {/* <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                  First Name
                  </label>
                  <input
                  type="text"
                  name="firstName"
                  // value={formData.firstName}
                  // onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-[#0d1b36] border border-[#2A75BB]/30 rounded-lg focus:ring-2 focus:ring-[#2A75BB] focus:border-[#2A75BB] outline-none transition-colors placeholder:text-gray-600"
                  placeholder="Your first name"
                  />
                  </div>
                  <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                  Last Name
                  </label>
                  <input
                  type="text"
                  name="lastName"
                    // value={formData.lastName}
                    // onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#0d1b36] border border-[#2A75BB]/30 rounded-lg focus:ring-2 focus:ring-[#2A75BB] focus:border-[#2A75BB] outline-none transition-colors placeholder:text-gray-600"
                    placeholder="Your last name"
                  />
                </div> */}
              </div>

              <ContactUsInputField
                label="Email"
                inputType="email"
                name="email"
                placeholder="your.email@example.com"
              />
              {/* <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  // value={formData.email}
                  // onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-[#0d1b36] border border-[#2A75BB]/30 rounded-lg focus:ring-2 focus:ring-[#2A75BB] focus:border-[#2A75BB] outline-none transition-colors placeholder:text-gray-600"
                  placeholder="your.email@example.com"
                />
              </div> */}

              <ContactUsInputField
                label="Subject"
                inputType="text"
                name="subject"
                placeholder="What's this about?"
              />
              {/* <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  // value={formData.subject}
                  // onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-[#0d1b36] border border-[#2A75BB]/30 rounded-lg focus:ring-2 focus:ring-[#2A75BB] focus:border-[#2A75BB] outline-none transition-colors placeholder:text-gray-600"
                  placeholder="What's this about?"
                />
              </div> */}

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  name="message"
                  // value={formData.message}
                  // onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-[#0d1b36] border border-[#2A75BB]/30 rounded-lg focus:ring-2 focus:ring-[#2A75BB] focus:border-[#2A75BB] outline-none transition-colors resize-none placeholder:text-gray-600"
                  placeholder="Tell us about your project or inquiry..."
                ></textarea>
              </div>

              <Button
                // onClick={handleSubmit}
                title="Send Message"
                className="w-full bg-gradient-to-r from-[#2A75BB] to-[#3498db] text-white py-4 px-6 rounded-lg font-semibold hover:from-[#2A75BB]/90 hover:to-[#3498db]/90 transition-all duration-300 shadow-lg shadow-[#2A75BB]/30"
              />

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
