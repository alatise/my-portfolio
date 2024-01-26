import React from "react";

const Nav = () => {
  return (
    <div>
      <nav className="flex justify-between px-16 py-6 shadow-md rounded-lg text-[#2d2e32] font-poppins font-bold items-center">
        <p className="text-2xl cursor-pointer">Alat.dev</p>
        <div className="flex gap-4 text-lg  ">
          <p className="hover:text-blue-500 cursor-pointer">Home</p>
          <p className="hover:text-blue-500 cursor-pointer">About</p>
          <p className="hover:text-blue-500 cursor-pointer">Projects</p>
          <p className="hover:text-blue-500 cursor-pointer">Contact</p>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
