"use client";
import { useState } from "react";
import { admin } from "@/store/slices/admin";
import { useAppDispatch } from "@/store/store";
import { showToast } from "@/utils/showToast";
import { useRouter } from "next/navigation";

const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleSubmit = async () => {
    const adminData = { email, password };

    try {
      console.log("Dispatching admin login...");

      const resultAction = await dispatch(admin(adminData)).unwrap();

      if (admin.rejected.match(resultAction)) {
        const errorMessage =
          resultAction.payload?.message || "Login failed. Please try again.";
        showToast("error", errorMessage);
        console.error("Login failed:", errorMessage);
      } else {
        showToast("success", "Admin login successfully");
        console.log("Admin login successful!");
        setEmail("");
        setPassword("");
        // if (resultAction?.token) {
        //   localStorage.setItem("adminToken", resultAction.token);
        //   router.push("/admin/dashboard"); // Redirect to dashboard
        // }
      }
    } catch (error) {
      // Catch any unexpected errors
      console.error("Unexpected error:", error);
      showToast("error", "Unexpected error occurred.");
    }
  };

  return {
    email,
    password,
    showPassword,
    setEmail,
    setPassword,
    setShowPassword,
    handleSubmit,
  };
};

export default useLogin;
