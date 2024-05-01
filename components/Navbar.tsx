import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-slate-800">
      <div className="max-container padding-container flex flexBetween py-2">
        <p className="text-xl text-white font-bold">Purchase Order System</p>
        <div className="flex gap-16 text-white">
          <Link href="/" className="">
            Create Purchase Order
          </Link>
          <Link href="/orders" className="">
            Purchase Orders
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
