"use client";
import React from "react";
import { useHttp } from "../utils/useHttp";
import { Product } from "../@type/product";
import Card from "../components/card";

export default function ProductList() {
  const { data: products, isLoading, error } = useHttp<Product[]>("https://fakestoreapi.com/products");

  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-blue-500"></div>
        <p className="ml-2">Loading products...</p>
      </div>
    );
  }

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Product List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products?.map((item) => (
          <Card key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}
