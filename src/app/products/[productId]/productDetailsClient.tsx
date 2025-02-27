"use client";
import React, { use, useEffect, useState } from "react";
import { useHttp } from "../../utils/useHttp";
import { Product } from "../../@type/product";
import Image from "next/image";
import { notFound } from "next/navigation";
import BackButton from "@/app/components/back";
export default function ProductDetailsClient({ productId }: { productId: number }) {

  // Will call error.tsx page when got error
  
  // if(productId === 40) {
  //   throw new Error("Test error boundary")
  // }
  const { data: product, isLoading, error } = useHttp<Product>(
    `https://fakestoreapi.com/products/${productId}`
  );

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-blue-500"></div>
        <p className="ml-2">Loading product details...</p>
      </div>
    );
  }

  if (error || !product || productId > 100) {
    notFound();
  }

  return (
    <div className="flex flex-col p-6">
      <BackButton url="/products" />
      <h1 className="text-2xl font-bold mb-4">{product.title}</h1>

      <div className="w-64 h-64 flex bg-gray-100 rounded-lg p-4">
        <Image
          src={product.image || "/placeholder.png"}
          alt={product.title || "Product Image"}
          width={200}
          height={200}
          className="object-contain"
        />
      </div>

      <p className="text-gray-700 mt-4">{product.description}</p>

      <p className="text-lg font-semibold text-green-600 mt-2">Price: ${product.price}</p>
    </div>
  );
}