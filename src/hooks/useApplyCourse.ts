import { courseForm } from "@/store/slices/courseForm";
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

  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.courseFormReducer.loading);

  useEffect(() => {
    if (selectedCourse) {
      setCourse(selectedCourse);
    }
  }, [selectedCourse]);

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

  const handleSubmit = async () => {
    if (!validateForm()) {
      return; // Stop the submission if validation fails
    }
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
    };

    try {
      console.log(" handleSubmit was clicked");

      await dispatch(courseForm(userData));
      //   if (courseForm.rejected.match(resultAction)) {
      //     showToast(
      //       "error",
      //       resultAction.error.message || "Something went wrong!"
      //     );
      //     return;
      //   }
      setFullName("");
      setFatherName("");
      setEmail("");
      setPhoneNumber("");
      setCity("");
      setProvince("");
      setEducation("");
      setCourse("");
      setMessage("");
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
    loading,
    handleSubmit,
  };
};

export default useApplyCourse;
