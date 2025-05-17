// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { toast } from "react-toastify";
// import { useAppDispatch } from "@/store/store";
// import { courseForm } from "@/store/slices/courseForm";

// const useApplyCourse = () => {
//   const dispatch = useAppDispatch();
//   const router = useRouter();

//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [cnic, setCnic] = useState("");
//   const [city, setCity] = useState("");
//   const [address, setAddress] = useState("");
//   const [profilePic, setProfilePic] = useState<File | null>(null);
//   const [cnicFront, setCnicFront] = useState<File | null>(null);
//   const [cnicBack, setCnicBack] = useState<File | null>(null);

//   const [isLoading, setIsLoading] = useState(false);

//   const validateFields = () => {
//     if (!fullName || !email || !phone || !cnic || !city || !address) {
//       toast.error("Please fill in all required fields.");
//       return false;
//     }
//     if (!profilePic || !cnicFront || !cnicBack) {
//       toast.error("Please upload all required images.");
//       return false;
//     }
//     return true;
//   };

//   const handleImageUpload = async (file: File | null): Promise<string> => {
//     if (!file) return "";
//     const result = await dispatch(uploadImageToCloudinary([file]));
//     if (uploadImageToCloudinary.fulfilled.match(result)) {
//       const urls = result.payload as string[];
//       return urls[0];
//     } else {
//       toast.error("Image upload failed.");
//       return "";
//     }
//   };

//   const handleSubmit = async (courseId: string) => {
//     if (!validateFields()) return;

//     setIsLoading(true);
//     try {
//       // Upload all 3 images
//       const [profilePicURL, cnicFrontURL, cnicBackURL] = await Promise.all([
//         handleImageUpload(profilePic),
//         handleImageUpload(cnicFront),
//         handleImageUpload(cnicBack),
//       ]);

//       if (!profilePicURL || !cnicFrontURL || !cnicBackURL) {
//         toast.error("Image upload failed. Please try again.");
//         setIsLoading(false);
//         return;
//       }

//       const formData = {
//         fullName,
//         email,
//         phone,
//         cnic,
//         city,
//         address,
//         profilePic: profilePicURL,
//         cnicFront: cnicFrontURL,
//         cnicBack: cnicBackURL,
//         course: courseId,
//       };

//       const result = await dispatch(courseForm(formData));
//       if (courseForm.fulfilled.match(result)) {
//         toast.success("Successfully Applied!");
//         router.push("/dashboard");
//       } else {
//         toast.error("Application failed. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error applying for course:", error);
//       toast.error("Something went wrong. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return {
//     fullName,
//     setFullName,
//     email,
//     setEmail,
//     phone,
//     setPhone,
//     cnic,
//     setCnic,
//     city,
//     setCity,
//     address,
//     setAddress,
//     profilePic,
//     setProfilePic,
//     cnicFront,
//     setCnicFront,
//     cnicBack,
//     setCnicBack,
//     isLoading,
//     handleSubmit,
//   };
// };

// export default useApplyCourse;





import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useAppDispatch } from "@/store/store";
import { courseForm, resetFormState } from "@/store/slices/courseForm";

const useApplyCourse = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  // Text fields
  const [fullName, setFullName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [education, setEducation] = useState("");
  const [course, setCourse] = useState("");
  const [message, setMessage] = useState("");

  // File fields
  const [profilePic, setProfilePic] = useState<File | null>(null);
  const [cnicFront, setCnicFront] = useState<File | null>(null);
  const [cnicBack, setCnicBack] = useState<File | null>(null);

  const [isLoading, setIsLoading] = useState(false);

  const validateFields = () => {
    const requiredFields = [
      fullName, fatherName, email, phoneNumber, 
      city, province, education, course
    ];
    
    if (requiredFields.some(field => !field)) {
      toast.error("Please fill all required fields");
      return false;
    }

    if (!profilePic || !cnicFront || !cnicBack) {
      toast.error("Please upload all required documents");
      return false;
    }

    return true;
  };

  const buildFormData = () => {
    const formData = new FormData();
    
    // Append text fields
    formData.append('fullName', fullName);
    formData.append('fatherName', fatherName);
    formData.append('email', email);
    formData.append('phoneNumber', phoneNumber);
    formData.append('city', city);
    formData.append('province', province);
    formData.append('education', education);
    formData.append('course', course);
    formData.append('message', message);

    // Append files
    if (profilePic) formData.append('profilePic', profilePic);
    if (cnicFront) formData.append('cnicFront', cnicFront);
    if (cnicBack) formData.append('cnicBack', cnicBack);

    return formData;
  };

  const handleSubmit = async () => {
    if (!validateFields()) return;

    setIsLoading(true);
    try {
      const formData = buildFormData();
      const result = await dispatch(courseForm(formData));

      if (courseForm.fulfilled.match(result)) {
        toast.success("Application submitted successfully!");
        router.push("/dashboard");
        dispatch(resetFormState());
      } else {
        toast.error("Submission failed");
      }
    } catch (error) {
      toast.error("An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileChange = (type: 'profile' | 'front' | 'back', file: File | null) => {
    switch (type) {
      case 'profile':
        setProfilePic(file);
        break;
      case 'front':
        setCnicFront(file);
        break;
      case 'back':
        setCnicBack(file);
        break;
    }
  };

  return {
    // State
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

    // Setters
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

    // Actions
    handleSubmit
  };
};

export default useApplyCourse;