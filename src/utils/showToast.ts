import { toast } from "react-toastify";

export const showToast = (
  type: "success" | "error" | "info" | "warn",
  message: string
) => {
  toast[type](message, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  });
};
