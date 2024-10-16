import React from 'react';
import { Outlet } from 'react-router-dom';
import CartList from './CartList';
import Search from './Search';
import { Link } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="xl:container md:container  mx-auto overflow-hidden relative">
      <header className="py-4 bg-black text-white  shadow-sm  fixed top-0 container z-50">
        <div className=" mx-auto px-4 flex items-center justify-between">
          {/* <Logo /> */}

          <Link to="/">
            <img
              src="https://algostar.tech/_next/static/media/logo.7e79f355.svg"
              alt=""
              className="bg-black p-2 h-12"
            />
          </Link>
          <div className="hidden md:flex xl:flex lg:flex">
            <Search />
          </div>
          <div className="flex items-center space-x-4">
            <CartList />
          </div>
        </div>
      </header>
      <div className="pt-20 p-4">
        <Outlet />
      </div>
    </div>
  );
}
