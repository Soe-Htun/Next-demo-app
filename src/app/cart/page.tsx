"use client"
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/product";
import { Product } from "../@type/product";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { removeFromCart, clearCart, updateQuantity } from "../store/cartSlice";
import BackButton from "../components/back";
import { useToast } from "@/app/composables/useToast";

export default function CartPage() {
  const cart = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const router = useRouter();
  const { toaster } = useToast()

  const getTotalPrice = (): string => {
    return cart
      .reduce((acc: number, item: Product) => acc + item.price * (item.quantity || 1), 0)
      .toFixed(2);
  };
  const handleClearCart = () => {
    dispatch(clearCart())
    toaster("success", "Clear cart successfully")
  }

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-xl">Your cart is empty.</p>
        <button
          onClick={() => router.push("/products")}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="p-6">
      <BackButton url="/products" />
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>

      {cart.map((item: Product) => (
        <div key={item.id} className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center">
            <Image src={item.image} alt={item.title} width={50} height={50} className="mr-4" />
            <div>
              <p className="font-semibold">{item.title}</p>
              <p className="text-gray-600">Price: ${item.price}</p>
            </div>
          </div>

          {/* Quantity Controls */}
          <div className="flex space-x-3">
            <div className="flex items-center">
                <button
                    onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
                    className="px-2 py-1 bg-gray-300 rounded"
                    disabled={item.quantity <= 1}
                >
                -
                </button>
                <span className="mx-6">{item.quantity}</span>
                <button
                    onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                    className="px-2 py-1 bg-gray-300 rounded"
                >
                +
                </button>
            </div>

            <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="text-red-500 hover:underline mx-6"
            >
                Remove
            </button>
          </div>
        </div>
      ))}

      <div className="mt-4">
        <p className="text-lg font-bold">Total: ${getTotalPrice()}</p>
        <div className="mt-3 flex space-x-4">
            <button
                onClick={handleClearCart}
                className="btn-error"
            >
                Clear Cart
            </button>
            <button className="btn-default">
                Proceed to Checkout
            </button>
        </div>
      </div>
    </div>
  );
}
