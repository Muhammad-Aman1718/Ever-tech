// "use client";
// import React from "react";
// import InputField from "@/components/inputs/InputField";
// import MainContainer from "@/components/MainContainer";
// import useApplyCourse from "@/hooks/useApplyCourse";
// import Loader from "@/components/Loader";
// import { courseOptions, educationOptions, provinces } from "@/constant/data";
// import FileUpload from "@/components/fileUpload/FileUpload";
// import SelectField from "@/components/selectedField/SelectedField";

// const Form = () => {
//   const {
//     // State
//     fullName,
//     fatherName,
//     email,
//     phoneNumber,
//     city,
//     province,
//     education,
//     course,
//     message,
//     profilePic,
//     cnicFront,
//     cnicBack,
//     isLoading,

//     // Setters
//     setFullName,
//     setFatherName,
//     setEmail,
//     setPhoneNumber,
//     setCity,
//     setProvince,
//     setEducation,
//     setCourse,
//     setMessage,
//     handleFileChange,

//     // Actions
//     handleSubmit,
//   } = useApplyCourse();

//   return (
//     // <div>
//     //   <MainContainer className="py-10">
//     //     <h1 className="text-center text-[#4D4D4D] text-3xl font-semibold mb-10">
//     //       Apply Course
//     //     </h1>

//     //     <div className="grid grid-cols-2 gap-x-8 gap-y-6 mb-8">
//     //       <InputField
//     //         label="Full Name"
//     //         value={fullName}
//     //         onChange={(e) => setFullName(e.target.value)}
//     //         // required
//     //       />

//     //       <InputField
//     //         label="Father's Name"
//     //         value={fatherName}
//     //         onChange={(e) => setFatherName(e.target.value)}
//     //         // required
//     //       />

//     //       <InputField
//     //         label="Email"
//     //         inputType="email"
//     //         value={email}
//     //         onChange={(e) => setEmail(e.target.value)}
//     //         // required
//     //       />

//     //       <InputField
//     //         label="Phone Number"
//     //         inputType="tel"
//     //         value={phoneNumber}
//     //         onChange={(e) => setPhoneNumber(e.target.value)}
//     //       />

//     //       <InputField
//     //         label="City"
//     //         value={city}
//     //         onChange={(e) => setCity(e.target.value)}
//     //       />

//     //       <div className="space-y-2">
//     //         <label className="block font-medium">Province</label>
//     //         <select
//     //           value={province}
//     //           onChange={(e) => setProvince(e.target.value)}
//     //           className="w-full p-3 border rounded-lg"
//     //           required
//     //         >
//     //           <option value="">Select Province</option>
//     //           {provinces.map((p) => (
//     //             <option key={p} value={p}>
//     //               {p}
//     //             </option>
//     //           ))}
//     //         </select>
//     //       </div>

//     //       <div className="space-y-2">
//     //         <label className="block font-medium">Education Level</label>
//     //         <select
//     //           value={education}
//     //           onChange={(e) => setEducation(e.target.value)}
//     //           className="w-full p-3 border rounded-lg"
//     //           required
//     //         >
//     //           <option value="">Select Education</option>
//     //           {educationOptions.map((e) => (
//     //             <option key={e} value={e}>
//     //               {e}
//     //             </option>
//     //           ))}
//     //         </select>
//     //       </div>

//     //       <div className="space-y-2">
//     //         <label className="block font-medium">Select Course</label>
//     //         <select
//     //           value={course}
//     //           onChange={(e) => setCourse(e.target.value)}
//     //           className="w-full p-3 border rounded-lg"
//     //           required
//     //         >
//     //           <option value="">Select Course</option>
//     //           {courseOptions.map((c) => (
//     //             <option key={c} value={c}>
//     //               {c}
//     //             </option>
//     //           ))}
//     //         </select>
//     //       </div>

//     //       <div className="col-span-2 space-y-2">
//     //         <label className="block font-medium">Message (Optional)</label>
//     //         <textarea
//     //           value={message}
//     //           onChange={(e) => setMessage(e.target.value)}
//     //           className="w-full p-3 border rounded-lg h-32"
//     //         />
//     //       </div>
//     //     </div>

//     //     <div className="space-y-6 mb-8">
//     //       <div className="space-y-4">
//     //         <h2 className="text-xl font-semibold">Upload Documents</h2>

//     //         <FileUpload
//     //           label="Profile Picture"
//     //           acceptedFiles="image/*"
//     //           onChange={(file: any) => handleFileChange("profile", file)}
//     //           file={profilePic}
//     //         />

//     //         <FileUpload
//     //           label="CNIC Front"
//     //           acceptedFiles="image/*"
//     //           onChange={(file: any) => handleFileChange("front", file)}
//     //           file={cnicFront}
//     //         />

//     //         <FileUpload
//     //           label="CNIC Back"
//     //           acceptedFiles="image/*"
//     //           onChange={(file: any) => handleFileChange("back", file)}
//     //           file={cnicBack}
//     //         />
//     //       </div>
//     //     </div>

//     //     <button
//     //       onClick={handleSubmit}
//     //       disabled={isLoading}
//     //       className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
//     //     >
//     //       {isLoading ? <Loader /> : "Submit Application"}
//     //     </button>
//     //   </MainContainer>
//     // </div>

//     <div className="min-h-screen bg-gray-50 py-8">
//       <MainContainer className="py-10">
//         {/* Header */}
//         <div className="text-center mb-8">
//           <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800 mb-2">
//             Apply for Course
//           </h1>
//           <p className="text-gray-600">
//             Fill out the form below to apply for your desired course
//           </p>
//         </div>

//         <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
//           {/* Personal Information Section */}
//           <div className="mb-8">
//             <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
//               Personal Information
//             </h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <InputField
//                 label="Full Name"
//                 value={fullName}
//                 placeholder="Enter your name"
//                 onChange={(e) => setFullName(e.target.value)}
//                 required={true}
//               />

//               <InputField
//                 label="Father's Name"
//                 placeholder="Enter your father name"
//                 value={fatherName}
//                 onChange={(e) => setFatherName(e.target.value)}
//                 required={true}
//               />

//               <InputField
//                 label="Email Address"
//                 inputType="email"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required={true}
//               />

//               <InputField
//                 label="Phone Number"
//                 inputType="tel"
//                 placeholder="Enter your mobile number"
//                 value={phoneNumber}
//                 onChange={(e) => setPhoneNumber(e.target.value)}
//                 required
//               />

//               <InputField
//                 label="City"
//                 value={city}
//                 placeholder="Enter your city name"
//                 onChange={(e) => setCity(e.target.value)}
//                 required
//               />

//               <SelectField
//                 label="Province"
//                 value={province}
//                 onChange={(e) => setProvince(e.target.value)}
//                 options={provinces}
//                 placeholder="Select Province"
//                 required
//               />
//             </div>
//           </div>

//           {/* Academic Information Section */}
//           <div className="mb-8">
//             <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
//               Academic Information
//             </h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <SelectField
//                 label="Education Level"
//                 value={education}
//                 onChange={(e) => setEducation(e.target.value)}
//                 options={educationOptions}
//                 placeholder="Select Education Level"
//                 required
//               />

//               <SelectField
//                 label="Select Course"
//                 value={course}
//                 onChange={(e) => setCourse(e.target.value)}
//                 options={courseOptions}
//                 placeholder="Select Course"
//                 required
//               />
//             </div>

//             <div className="mt-6">
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Message (Optional)
//               </label>
//               <textarea
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 placeholder="Tell us about your goals and why you want to take this course..."
//                 className="w-full px-4 py-3 border border-gray-200 rounded-lg
//                          placeholder:text-gray-400 text-gray-700
//                          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
//                          transition-colors h-32 resize-none"
//               />
//             </div>
//           </div>

//           {/* Documents Section */}
//           <div className="mb-8">
//             <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
//               Upload Documents
//             </h2>

//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//               <FileUpload
//                 label="Profile Picture"
//                 acceptedFiles="image/*"
//                 onChange={(file) => handleFileChange("profile", file)}
//                 file={profilePic}
//                 required
//               />

//               <FileUpload
//                 label="CNIC Front"
//                 acceptedFiles="image/*"
//                 onChange={(file) => handleFileChange("front", file)}
//                 file={cnicFront}
//                 required
//               />

//               <FileUpload
//                 label="CNIC Back"
//                 acceptedFiles="image/*"
//                 onChange={(file) => handleFileChange("back", file)}
//                 file={cnicBack}
//                 required
//               />
//             </div>
//           </div>

//           {/* Submit Button */}
//           <div className="flex flex-col sm:flex-row gap-4 justify-end pt-6 border-t border-gray-200">
//             <button
//               type="button"
//               className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors order-2 sm:order-1"
//             >
//               Save as Draft
//             </button>

//             <button
//               onClick={handleSubmit}
//               disabled={isLoading}
//               className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg
//                        transition-colors flex items-center justify-center space-x-2
//                        disabled:opacity-50 disabled:cursor-not-allowed order-1 sm:order-2"
//             >
//               {isLoading ? (
//                 <>
//                   <Loader />
//                   <span>Submitting...</span>
//                 </>
//               ) : (
//                 <span>Submit Application</span>
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Help Section */}
//         <div className="mt-8 text-center">
//           <p className="text-sm text-gray-500">
//             Need help?{" "}
//             <a
//               href="#"
//               className="text-blue-600 hover:text-blue-500 font-medium"
//             >
//               Contact Support
//             </a>
//           </p>
//         </div>
//       </MainContainer>
//     </div>
//   );
// };

// // const FileUpload = ({ label, acceptedFiles, onChange, file }: any) => (
// //   <div className="space-y-2">
// //     <label className="block font-medium">{label}</label>
// //     <input
// //       type="file"
// //       accept={acceptedFiles}
// //       onChange={(e) => onChange(e.target.files?.[0] || null)}
// //       className="w-full p-2 border rounded-lg"
// //     />
// //     <p className="text-sm text-gray-600">
// //       {file ? file.name : "No file selected"}
// //     </p>
// //   </div>
// // );

// export default Form;

"use client";
import React from "react";
import MainContainer from "@/components/MainContainer";
import useApplyCourse from "@/hooks/useApplyCourse";
import Loader from "@/components/Loader";
import { courseOptions, educationOptions, provinces } from "@/constant/data";
import FileUpload from "@/components/fileUpload/FileUpload";
import SelectField from "@/components/selectedField/SelectedField";
import ContactUsInputField from "@/components/inputs/ContactUsInputField";

const Form = () => {
  const {
    fullName,
    fatherName,
    email,
    phoneNumber,
    city,
    province,
    education,
    course,
    message,
    profilePic,
    cnicFront,
    cnicBack,
    isLoading,
    setFullName,
    setFatherName,
    setEmail,
    setPhoneNumber,
    setCity,
    setProvince,
    setEducation,
    setCourse,
    setMessage,
    handleFileChange,
    handleSubmit,
  } = useApplyCourse();

  return (
    <div className="min-h-screen bg-white dark:bg-[#0c1625] py-8 font-sans">
      <MainContainer className="py-10">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Apply for Course
          </h1>
          <p className="text-gray-600 dark:text-[#94a3b8] max-w-2xl mx-auto">
            Fill out the form below to apply for your desired course
          </p>
        </div>

        <div className="bg-gradient-to-br dark:from-[#0d1b36] dark:to-[#0a192f] p-8 rounded-2xl border border-[#2A75BB]/20 shadow-xl">
          {/* Personal Information Section */}
          <div className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 pb-3 border-b border-[#2a3b5c]">
              Personal Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ContactUsInputField
                label="Full Name"
                value={fullName}
                placeholder="Enter your name"
                onChange={(e) => setFullName(e.target.value)}
                required={true}
              />

              <ContactUsInputField
                label="Father's Name"
                placeholder="Enter your father name"
                value={fatherName}
                onChange={(e) => setFatherName(e.target.value)}
                required={true}
              />

              <ContactUsInputField
                label="Email Address"
                inputType="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required={true}
              />

              <ContactUsInputField
                label="Phone Number"
                inputType="tel"
                placeholder="Enter your mobile number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />

              <ContactUsInputField
                label="City"
                value={city}
                placeholder="Enter your city name"
                onChange={(e) => setCity(e.target.value)}
                required
              />

              <SelectField
                label="Province"
                value={province}
                onChange={(e) => setProvince(e.target.value)}
                options={provinces}
                placeholder="Select Province"
                required
              />
            </div>
          </div>

          {/* Academic Information Section */}
          <div className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 pb-3 border-b border-[#2a3b5c]">
              Academic Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SelectField
                label="Education Level"
                value={education}
                onChange={(e) => setEducation(e.target.value)}
                options={educationOptions}
                placeholder="Select Education Level"
                required
              />

              <SelectField
                label="Select Course"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                options={courseOptions}
                placeholder="Select Course"
                required
              />
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-[#cbd5e1] mb-3">
                Message (Optional)
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us about your goals and why you want to take this course..."
                className="w-full px-4 py-3 bg-gray-50 dark:text-white dark:bg-[#0d1b36] border border-gray-300 dark:border-[#2A75BB]/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-[#2A75BB] dark:focus:border-[#2A75BB] outline-none placeholder:text-gray-600 
                         transition-colors h-40 resize-none"
              />
            </div>
          </div>

          {/* Documents Section */}
          <div className="mb-10">
            <h2 className="text-xl font-semibold text-white mb-6 pb-3 border-b border-[#2a3b5c]">
              Upload Documents
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <FileUpload
                label="Profile Picture"
                acceptedFiles="image/*"
                onChange={(file) => handleFileChange("profile", file)}
                file={profilePic}
                required
              />

              <FileUpload
                label="CNIC Front"
                acceptedFiles="image/*"
                onChange={(file) => handleFileChange("front", file)}
                file={cnicFront}
                required
              />

              <FileUpload
                label="CNIC Back"
                acceptedFiles="image/*"
                onChange={(file) => handleFileChange("back", file)}
                file={cnicBack}
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-end pt-8 border-t border-[#2a3b5c]">

            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="relative overflow-hidden bg-gradient-to-r from-[#2A75BB] to-[#3498db] text-white px-8 py-3 rounded-xl 
                       transition-all flex items-center justify-center space-x-2
                       disabled:opacity-50 disabled:cursor-not-allowed hover:from-[#2A75BB]/90 hover:to-[#3498db]/90
                       shadow-lg shadow-[#2A75BB]/30 hover:shadow-[#2A75BB]/50"
            >
              {isLoading ? (
                <>
                  <Loader />
                  <span>Submitting...</span>
                </>
              ) : (
                <span>Submit Application</span>
              )}
            </button>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-10 text-center">
          <p className="text-sm text-[#94a3b8]">
            Need help?{" "}
            <a
              href="#"
              className="text-[#2A75BB] hover:text-[#3498db] font-medium"
            >
              Contact Support
            </a>
          </p>
        </div>
      </MainContainer>
    </div>
  );
};

export default Form;
