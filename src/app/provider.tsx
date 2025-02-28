"use client"; // ✅ This makes only this file a Client Component

import { Provider } from "react-redux";
import { store } from "./store/product";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
