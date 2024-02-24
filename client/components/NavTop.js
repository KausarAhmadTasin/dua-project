import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { BiSolidDownArrow } from "react-icons/bi";

const NavTop = () => {
  return (
    <div className="flex justify-between gap-x-96 items-center max-h-14 mt-2 ml-10">
      <p className="text-2xl font-poppins font-semibold ">Dua Page</p>
      <div className="flex gap-x-56">
        <div className="relative">
          <input
            type="text"
            placeholder="Search by Dua Name"
            className="border min-w-96 border-gray-300 rounded-lg pl-2 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <div className="absolute inset-y-0 text-gray-500 text-xl right-0 m-1 rounded pl-3 flex items-center pointer-events-none bg-gray-200 p-2">
            <IoSearchSharp />
          </div>
        </div>
        <div className="flex items-center gap-1 text-gray-600">
          <div className="text-4xl">
            <CgProfile />
          </div>
          <BiSolidDownArrow />
        </div>
      </div>
    </div>
  );
};

export default NavTop;
