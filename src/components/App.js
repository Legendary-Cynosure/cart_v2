"use client";

import { useEffect } from "react";
import CartSidebar from "./CartSidebar";
import Header from "./Header";
import { hideLoading } from "@/redux/slices/cartSlice";
import { useDispatch } from "react-redux";

export default function App({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(hideLoading());
  }, [dispatch]);

  return (
    <div>
      <div className='mr-32'>
        <Header />
        <main className='p-4'>{children}</main>
      </div>
      <CartSidebar />
    </div>
  );
}
