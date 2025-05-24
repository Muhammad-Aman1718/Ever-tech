import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { toast } from "react-toastify";
import { useAppDispatch } from "@/store/store";
import { courseForm, resetFormState } from "@/store/slices/userData";
import { showToast } from "@/utils/showToast";

const useApplyCourse = () => {
  const dispatch = useAppDispatch();
  const searchParams = useSearchParams();

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

  useEffect(() => {
    const courseFromURL = searchParams.get("course");
    if (courseFromURL) {
      setCourse(courseFromURL);
    }
  }, [searchParams]);

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

    const MAX_FILE_SIZE_MB = 2;
    const MAX_SIZE = MAX_FILE_SIZE_MB * 1024 * 1024;

    if (profilePic.size > MAX_SIZE) {
      showToast("error", "Profile picture must be less than 2 MB");
      return false;
    }

    if (cnicFront.size > MAX_SIZE) {
      showToast("error", "CNIC front image must be less than 2 MB");
      return false;
    }

    if (cnicBack.size > MAX_SIZE) {
      showToast("error", "CNIC back image must be less than 2 MB");
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

    console.log("build form is run ======> ", formData);
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
      console.log(
        "5. Dispatching Action and form Data ======> ",
        ...formData.entries()
      ); // ✅ Step 5
      const result = await dispatch(courseForm(formData));
      console.log("6. Action Result:", result); // ✅ Step 6

      if (courseForm.fulfilled.match(result)) {
        toast.success("Application submitted successfully!");
        dispatch(resetFormState());

        setFullName("");
        setFatherName("");
        setEmail("");
        setPhoneNumber("");
        setCity("");
        setProvince("");
        setEducation("");
        setCourse("");
        setMessage("");
        setProfilePic(null);
        setCnicFront(null);
        setCnicBack(null);
      }
      if (courseForm.rejected.match(result)) {
        const errorMessage =
          (result.payload as { message: string })?.message ||
          "Submission failed";
        toast.error(errorMessage); // ✅ Show toast for error
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
    if (!file) return;

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
