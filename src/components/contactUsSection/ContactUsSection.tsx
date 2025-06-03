"use client";
import React from "react";
import Button from "../buttons/Button";
import InformationCard from "./contactUsComponents/InformationCard";
import ContactUsInputField from "../inputs/ContactUsInputField";
import { companyInformation } from "@/constant/data";
import useContactUs from "@/hooks/useContactUs";

const ContactUsSection = () => {
  const {
    firstName,
    lastName,
    email,
    subject,
    message,
    loading,
    setFirstName,
    setLastName,
    setEmail,
    setSubject,
    setMessage,
    handleSubmit,
  } = useContactUs();
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br bg-gray-50 dark:from-[#0a192f] dark:to-[#0d1b36] relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#3498db]/5 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Let&apos;s Build Together
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Ready to start your project? Get in touch with our team
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
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
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Business Hours
              </h3>
              <div className="space-y-2 text-gray-600 dark:text-gray-400">
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

          <div className="bg-gradient-to-br bg-white dark:from-[#0d1b36] dark:to-[#0a192f] p-8 rounded-2xl border border-gray-200 dark:border-[#2A75BB]/20 shadow-sm dark:shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Send us a message
            </h3>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <ContactUsInputField
                  label="First Name"
                  inputType="text"
                  name="firstName"
                  placeholder="Your first name"
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                />
                <ContactUsInputField
                  label="Last Name"
                  inputType="text"
                  name="lastName"
                  placeholder="Your last name"
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                />
              </div>

              <ContactUsInputField
                label="Email"
                inputType="email"
                name="email"
                placeholder="your.email@example.com"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <ContactUsInputField
                label="Subject"
                inputType="text"
                name="subject"
                placeholder="What's this about?"
                onChange={(e) => setSubject(e.target.value)}
                value={subject}
              />
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  name="message"
                  className="w-full px-4 py-3 bg-gray-50  dark:bg-[#0d1b36] border  border-gray-300 dark:border-[#2A75BB]/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-[#2A75BB] dark:focus:border-[#2A75BB] outline-none transition-colors resize-none placeholder:text-gray-600"
                  placeholder="Tell us about your project or inquiry..."
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                ></textarea>
              </div>

              <Button
                title={loading ? "Sending..." : "Send Message"}
                className="w-full bg-gradient-to-r from-[#2A75BB] to-[#3498db] text-white py-4 px-6 rounded-lg font-semibold hover:from-[#2A75BB]/90 hover:to-[#3498db]/90 transition-all duration-300 shadow-lg shadow-[#2A75BB]/30"
                onClick={handleSubmit}
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
