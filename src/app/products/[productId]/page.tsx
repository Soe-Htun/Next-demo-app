import { Metadata } from "next";
import ProductDetailsClient from "./productDetailsClient";

export const generateMetadata = ({params} : { params: { productId: number } }): Metadata => {
  const { productId } = params
  return {
    title: `Product ${productId}`,
  }
}

export default function ProductDetails() {
  return <ProductDetailsClient />
}