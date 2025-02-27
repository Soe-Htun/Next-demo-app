import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-80 bg-red-100 text-red-800">
      <div className="max-w-md p-6 text-center bg-white shadow-lg rounded-lg border border-red-400">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <h2 className="text-2xl font-semibold mt-2">Page Not Found</h2>
        <p className="text-gray-600 mt-2">
          Oops! The page you are looking for doesn’t exist.
        </p>
        <div className="mt-6">
          <Link href="/">
            <button className="btn-error">
              Go to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
