import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useAppDispatch } from "@/store/store";
import { courseForm, resetFormState } from "@/store/slices/courseForm";
import { showToast } from "@/utils/showToast";

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
      fullName,
      fatherName,
      email,
      phoneNumber,
      city,
      province,
      education,
      course,
    ];

    if (requiredFields.some((field) => !field)) {
      showToast("error", "Please fill all required fields");
      return false;
    }

    if (!profilePic || !cnicFront || !cnicBack) {
      showToast("error", "Please upload all required documents");
      return false;
    }

    return true;
  };

  const buildFormData = () => {
    console.log("build form is run ======> ");

    const formData = new FormData();

    // Append text fields
    formData.append("fullName", fullName);
    formData.append("fatherName", fatherName);
    formData.append("email", email);
    formData.append("phoneNumber", phoneNumber);
    formData.append("city", city);
    formData.append("province", province);
    formData.append("education", education);
    formData.append("course", course);
    formData.append("message", message);

    // Append files
    if (profilePic) formData.append("profilePic", profilePic);
    if (cnicFront) formData.append("cnicFront", cnicFront);
    if (cnicBack) formData.append("cnicBack", cnicBack);

    return formData;
  };

  const handleSubmit = async () => {
    console.log("1. Submit Button Clicked"); // ✅ Step 1
    if (!validateFields()) {
      console.log("2. Validation Failed");
      return;
    }
    console.log("3. Validation Passed"); // ✅ Step 3

    setIsLoading(true);
    try {
      console.log("4. Building FormData"); // ✅ Step 4
      const formData = buildFormData();
      console.log("5. Dispatching Action"); // ✅ Step 5
      const result = await dispatch(courseForm(formData));
      console.log("6. Action Result:", result); // ✅ Step 6

      if (courseForm.fulfilled.match(result)) {
        toast.success("Application submitted successfully!");
        dispatch(resetFormState());
      } else {
        showToast("error", "Submission failed");
      }
    } catch (error) {
      showToast("error", "An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileChange = (
    type: "profile" | "front" | "back",
    file: File | null
  ) => {
    switch (type) {
      case "profile":
        setProfilePic(file);
        break;
      case "front":
        setCnicFront(file);
        break;
      case "back":
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
    handleSubmit,
  };
};

export default useApplyCourse;
