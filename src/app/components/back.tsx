import Link from "next/link";
import React from "react";

export default function BackButton({ url, label = "Go Back" }: { url: string; label?: string }) {
  return (
    <Link href={url} className="px-4 mb-6 text-gray-700 rounded-lg hover:text-gray-600 transition duration-300 w-40">
      ← {label}
    </Link>
  );
}
