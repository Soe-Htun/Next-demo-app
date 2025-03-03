import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../@type/product";

interface CartState {
  items: Product[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);
    
      if (existingItemIndex !== -1) {
        // Replace the existing item with the new one, ensuring the quantity matches the latest selection
        state.items[existingItemIndex] = { ...action.payload, quantity: action.payload.quantity };
      } else {
        state.items.push({ ...action.payload, quantity: action.payload.quantity || 1 });
      }
    },
    
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item && action.payload.quantity > 0) {
        item.quantity = action.payload.quantity;
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
