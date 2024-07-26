import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

function Header() {
  const { loading, cartItems } = useSelector((state) => state.cart);

  return (
    <header>
      <nav className='flex justify-between items-center h-12 px-4 shadow-md bg-gray-800 text-white'>
        <Link href='/' className='text-lg font-bold'>
          Academy Storefront
        </Link>
        <div>
          <span className='cart-badge'>
            {loading ? "" : cartItems.reduce((a, c) => a + c.qty, 0)}
          </span>
          <Link href='/cart'>Cart</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
