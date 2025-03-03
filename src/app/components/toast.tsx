// "use client";

// import { useState, useEffect } from "react";
// import { X } from "lucide-react";

// interface NotificationProps {
//   message: string;
//   type?: "success" | "error" | "warning" | "info";
//   duration?: number; // Auto-close time in ms
//   onClose: () => void;
// }

// export default function Notification({
//   message,
//   type = "info",
//   duration = 3000,
//   onClose,
// }: NotificationProps) {
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       onClose();
//     }, duration);

//     return () => clearTimeout(timer);
//   }, [duration, onClose]);

//   const bgColor = {
//     success: "bg-green-500",
//     error: "bg-red-500",
//     warning: "bg-yellow-500",
//     info: "bg-blue-500",
//   }[type];

//   return (
//     <div className={`fixed top-4 right-4 px-4 py-2 text-white rounded-md shadow-lg flex items-center justify-between ${bgColor}`}>
//       <span>{message}</span>
//       <button onClick={onClose} className="ml-4">
//         <X size={18} />
//       </button>
//     </div>
//   );
// }
