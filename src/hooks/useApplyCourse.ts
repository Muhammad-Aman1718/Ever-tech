import { courseForm, uploadImageToCloudinary } from "@/store/slices/courseForm";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { showToast } from "@/utils/showToast";
import { AxiosError } from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const useApplyCourse = () => {
  const searchParams = useSearchParams();
  const selectedCourse = searchParams.get("course");
  const [fullName, setFullName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [education, setEducation] = useState("");
  const [course, setCourse] = useState("");
  const [message, setMessage] = useState("");

  const [profilePic, setProfilePic] = useState<File | null>(null);
  const [cnicFront, setCnicFront] = useState<File | null>(null);
  const [cnicBack, setCnicBack] = useState<File | null>(null);

  const [profilePicURL, setProfilePicURL] = useState<string>("");
  const [cnicFrontURL, setCnicFrontURL] = useState<string>("");
  const [cnicBackURL, setCnicBackURL] = useState<string>("");

  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.courseFormReducer.loading);

  useEffect(() => {
    if (selectedCourse) {
      setCourse(selectedCourse);
    }
  }, [selectedCourse]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setProfilePic(e.target.files[0]);

    // setProfilePic(file);
    // switch (type) {
    //   case "profile":
    //     break;
    //   case "front":
    //     setCnicFront(file);
    //     break;
    //   case "back":
    //     setCnicBack(file);
    //     break;
    // }
  };
  console.log("this is profileImg", profilePic);

  const validateForm = () => {
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(fullName)) {
      showToast("error", "Full Name should only contain alphabets.");
      return false;
    }

    if (!nameRegex.test(fatherName)) {
      showToast("error", "Father's Name should only contain alphabets.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showToast("error", "Please enter a valid email.");
      return false;
    }

    const phoneRegex = /^[0-9]+$/;
    if (!phoneRegex.test(phoneNumber)) {
      showToast("error", "Phone Number should only contain numbers.");
      return false;
    }

    if (!nameRegex.test(city)) {
      showToast("error", "City should only contain alphabets. ");
      return false;
    }

    if (
      !fullName ||
      !fatherName ||
      !email ||
      !phoneNumber ||
      !city ||
      !province ||
      !education ||
      !course ||
      !message
    ) {
      showToast("error", "All fields are required!");
      return false;
    }

    return true;
  };

  // const handleSubmit = async () => {
  //   if (!validateForm()) {
  //     return; // Stop the submission if validation fails
  //   }
  //   const userData = {
  //     fullName,
  //     fatherName,
  //     email,
  //     phoneNumber,
  //     city,
  //     province,
  //     education,
  //     course,
  //     message,
  //   };

  //   try {
  //     console.log(" handleSubmit was clicked");

  //     await dispatch(courseForm(userData));
  //     setFullName("");
  //     setFatherName("");
  //     setEmail("");
  //     setPhoneNumber("");
  //     setCity("");
  //     setProvince("");
  //     setEducation("");
  //     setCourse("");
  //     setMessage("");
  //   } catch (error) {
  //     const errorAxios = error as AxiosError;
  //     showToast(
  //       "error",
  //       errorAxios.message ||
  //         "There was an issue submitting your form. Please try again."
  //     );
  //   }
  // };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }

    try {
      // let uploadedProfilePicURL = profilePicURL;
      // let uploadedCnicFrontURL = cnicFrontURL;
      // let uploadedCnicBackURL = cnicBackURL;

      if (profilePic) {
        const result = await dispatch(uploadImageToCloudinary(profilePic));
        // if (uploadImageToCloudinary.fulfilled.match(result)) {
        //   uploadedProfilePicURL = result.payload as string;
        // }
        console.log(" this is result ======> ", result);
      }

      // if (cnicFront) {
      //   const result = await dispatch(uploadImageToCloudinary(cnicFront));
      //   if (uploadImageToCloudinary.fulfilled.match(result)) {
      //     uploadedCnicFrontURL = result.payload as string;
      //   }
      // }

      // if (cnicBack) {
      //   const result = await dispatch(uploadImageToCloudinary(cnicBack));
      //   if (uploadImageToCloudinary.fulfilled.match(result)) {
      //     uploadedCnicBackURL = result.payload as string;
      //   }
      // }

      const userData = {
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
      };

      await dispatch(courseForm(userData));

      // Clear form after submit
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
      setProfilePicURL("");
      setCnicFrontURL("");
      setCnicBackURL("");
    } catch (error) {
      const errorAxios = error as AxiosError;
      showToast(
        "error",
        errorAxios.message ||
          "There was an issue submitting your form. Please try again."
      );
    }
  };

  return {
    fullName,
    setFullName,
    fatherName,
    setFatherName,
    email,
    setEmail,
    phoneNumber,
    setPhoneNumber,
    city,
    setCity,
    province,
    setProvince,
    education,
    setEducation,
    course,
    setCourse,
    message,
    setMessage,
    profilePic,
    setProfilePic,
    cnicFront,
    setCnicFront,
    cnicBack,
    setCnicBack,
    handleFileChange,
    loading,
    handleSubmit,
  };
};

export default useApplyCourse;
