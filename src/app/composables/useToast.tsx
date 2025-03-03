"use client"; // Ensures this runs in a client component

import { toast, ToastIcon } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const useToast = () => {
  const toaster = (variant: "success" | "error" | "info" | "warning", message: string) => {
    toast(message, {
      // icon: defineIcon(variant),
      type: variant,
      position: "top-center",
      hideProgressBar: true,
      closeButton: true,
      autoClose: 3000, // Auto close after 3 seconds
    });
  };

  return { toaster };
};
