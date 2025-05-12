import React from "react";
import InputField from "../inputs/InputField";

const ContactUsSection = () => {
  return (
    <section className="py-16 ">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#4D4D4D] mb-8 text-center">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 p-6 rounded-md shadow-md">
          {/* Left Column */}
          <div className="space-y-4">
            <InputField
              labelClassName="font-medium"
              label="Name"
              placeholder="Enter your name"
              inputType="text"
            />

            <InputField
              labelClassName="font-medium"
              label="Phone Number (Optional)"
              placeholder="+92-300-1234567"
              inputType="tel"
            />
            <InputField
              labelClassName="font-medium"
              label="Subject"
              placeholder="Inquiry about services"
              inputType="text"
            />
          </div>

          <div className="space-y-4">
            <div>
              <InputField
                label="Email "
                labelClassName="font-medium"
                placeholder=" Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows={6}
                placeholder="Write your message here..."
                className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-[#2A75BB] focus:border-[#2A75BB] outline-none"
                required
              ></textarea>
            </div>
          </div>

          {/* Submit Button - Full Width */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className=" bg-[#2A75BB] text-white py-3 px-5 rounded-md font-semibold hover:bg-[#4A90E2] transition"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
