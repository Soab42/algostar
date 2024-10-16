import React, { useState } from 'react';
import { FaBagShopping, FaHeart, FaUser } from 'react-icons/fa6';
import { useSelector } from 'react-redux';
import { selectCart } from '../features/silces/cartSlice';
import CartPage from '../pages/Carts';

export default function CartList() {
  const [open, setOpen] = useState(false);
  const totalItems = useSelector(selectCart).length;
  return (
    <div className="flex items-center justify-between space-x-6 relative">
      <div className="space-y-1 flex flex-col items-center">
        <FaHeart className="text-3xl text-rose-400" />
        <p>Wishlist</p>
      </div>
      <div className="relative space-y-1 flex flex-col items-center">
        <button onClick={() => setOpen(!open)}>
          <span
            className={`absolute top-2.5 right-1 w-5 h-5 rounded-full ${open ? 'bg-green-500 text-white' : ''} font-black text-black flex items-center justify-center`}
          >
            {totalItems}
          </span>
          <FaBagShopping
            className={`text-3xl ${open ? 'text-green-500 ' : ''}`}
          />
        </button>
        <div
          className={`absolute top-[4.5rem] -right-[1rem]  h-[70vh] xl:w-[40vw] md:w-[50vw] w-[100vw] bg-white  transition-all duration-300 ${open ? 'xl:translate-x-48 md:translate-x-20 translate-x-20' : 'translate-x-[120vw]'}`}
        >
          <CartPage setOpen={setOpen} />
        </div>
        <p className={` ${open ? 'text-green-500 ' : ''}`}>Cart</p>
      </div>
      <div className="space-y-1 flex flex-col items-center">
        <FaUser className="text-3xl" />
        <p>Account</p>
      </div>
    </div>
  );
}
