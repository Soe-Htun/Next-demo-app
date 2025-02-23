"use client";
import React, { use, useEffect, useState } from "react";
import { useHttp } from "../../utils/http";
import { Product } from "../../@type/product";
import Image from "next/image";
import { notFound } from "next/navigation";
import BackButton from "@/app/components/back";

export default function ProductDetails({ params }: { params: Promise<{ productId: string }> }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { productId } = use(params)

  async function getProduct() {
    const data = await useHttp<Product>(
      `https://fakestoreapi.com/products/${productId}`,
      { method: "GET" }
    );
    
    if (!data || parseInt(productId) > 100) {
      notFound()
    }

    setProduct(data);
    setIsLoading(false);
  }

  useEffect(() => {
    getProduct();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-blue-500"></div>
        <p className="ml-2">Loading product...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col p-6">
      <BackButton url="/products" />
      {/* Title */}
      <h1 className="text-2xl font-bold mb-4">{product?.title}</h1>

      {/* Image */}
      <div className="w-64 h-64 flex bg-gray-100 rounded-lg p-4">
        <Image
          src={product?.image || "/placeholder.png"}
          alt={product?.title || "Product Image"}
          width={200}
          height={200}
          className="object-contain"
        />
      </div>

      {/* Description */}
      <p className="text-gray-700 mt-4">{product?.description}</p>

      {/* Price */}
      <p className="text-lg font-semibold text-green-600 mt-2">Price: ${product?.price}</p>
    </div>
  );
}
