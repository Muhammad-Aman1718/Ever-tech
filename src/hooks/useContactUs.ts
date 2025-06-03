import { contact } from "@/store/slices/contact";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { ContactUs } from "@/types/types";
import { showToast } from "@/utils/showToast";
import { useState } from "react";

const useContactUs = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.contactReducer.loading);

  const handleSubmit = async () => {
    try {
      const contactData: ContactUs = {
        firstName,
        lastName,
        email,
        subject,
        message,
      };
      const result = await dispatch(contact(contactData));

      if (contact.fulfilled.match(result)) {
        showToast("success", "Message submitted successfully!");
        setFirstName("");
        setLastName("");
        setEmail("");
        setSubject("");
        setMessage("");
      }
      if (contact.rejected.match(result)) {
        const errorMessage =
          (result.payload as { message: string })?.message ||
          "Submission failed";
        showToast("error", errorMessage); // ✅ Show toast for error
      }
    } catch (error) {}
  };

  return {
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
  };
};

export default useContactUs;
