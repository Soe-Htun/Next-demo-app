"use client";
import React, { useEffect, useState } from 'react'
import { useHttp } from '../utils/http';
import { Product } from '../@type/product';
import Card from '../components/card';
export default function ProductList() {

  const [products, setProduct] = useState<Product[]>([])
  const [isLoading, setLoading] = useState<Boolean>(true)
  async function getProducts() {
    const data = await useHttp<Product[]>("https://fakestoreapi.com/products", { method: "GET" });
    console.log(data);
    setProduct(data)
    setLoading(false)
  }
  useEffect(()=> {
    getProducts()
  }, [])
  return (
    <div>
      {isLoading ? (
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-blue-500"></div>
          <p className="ml-2">Loading products...</p>
        </div>
      ) : (
        <>
          <h1 className="text-xl font-bold mb-4">Product List</h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {products.map((item) => (
              <Card key={item.id} product={item} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
