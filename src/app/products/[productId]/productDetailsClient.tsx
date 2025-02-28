"use client";
import React, { use, useEffect, useState } from "react";
import { useHttp } from "../../utils/useHttp";
import { Product } from "../../@type/product";
import Image from "next/image";
import { notFound, useParams } from "next/navigation";
import BackButton from "@/app/components/back";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import Link from "next/link";

export default function ProductDetailsClient() {

  // Will call error.tsx page when got error
  
  // if(productId === 40) {
  //   throw new Error("Test error boundary")
  // }
  const { productId } = useParams()

  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const { data: product, isLoading, error } = useHttp<Product>(
    `https://fakestoreapi.com/products/${productId}`
  );

  const handleAddToCart = () => {
    if(product) {
      dispatch(addToCart({...product, quantity}))
    }
  }
  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };


  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-blue-500"></div>
        <p className="ml-2">Loading product details...</p>
      </div>
    );
  }

  if (error || !product) {
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
      <div className="flex items-center mt-4">
        <button onClick={decreaseQuantity} className="px-4 py-2 bg-gray-200 rounded">
          -
        </button>
        <span className="mx-4"> {quantity}</span>
        <button onClick={increaseQuantity} className="px-4 py-2 bg-gray-200 rounded">
          +
        </button>
      </div>

      <div className="flex space-x-3">
        <button
          onClick={handleAddToCart}
          className="btn-default mr-6"
        >
          Add to Cart
        </button>

        <Link href={`/cart`}>
          <button
            className="btn-default"
          >
            Go to Cart
          </button>
        </Link>
      </div>

    </div>
  );
}