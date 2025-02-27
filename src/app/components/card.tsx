import React from "react";
import { Product } from "../@type/product";
import Link from "next/link";
import Image from "next/image";

export default function Card({ product }: { product: Product}) {
  return (
    <Link key={product.id} href={`/products/${product.id}`} className="card" > 
        <div>
            <h2 className="card-title">{product.title.length > 40 ? `${product.title.substring(0,40)}...` : product.title}</h2>
            <div className="w-full h-40 flex justify-center">
                <Image 
                    src={product.image} 
                    alt={product.title}
                    width={100}
                    height={100}
                />
            </div>
            <p className="card-footer">Price: ${product.price}</p>
            <div className="flex justify-end mt-auto">
                <span className="text-blue-500 underline">Details</span>
            </div>
        </div>
    </Link>
  );
}
