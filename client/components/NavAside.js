import Image from "next/image";
import React from "react";
import { IoHome, IoBulbOutline, IoChatbubblesOutline } from "react-icons/io5";
import { MdOutlineWidgets } from "react-icons/md";
import { PiBookmarkSimple } from "react-icons/pi";
import { TbMedicineSyrup } from "react-icons/tb";
import { IoMdBook } from "react-icons/io";
import { BiSolidDonateHeart } from "react-icons/bi";
import "../app/globals.css";

const NavAside = () => {
  return (
    <div className="w-28 flex items-center flex-col text-2xl ml-6 mt-9 overflow-auto h-[90vh] rounded-md pb-2 bg-white">
      <Image
        src={`https://i.ibb.co/2gJt8PW/dua-icon.png`}
        alt=""
        width={90}
        height={90}
      />
      <div className="flex flex-col gap-y-8 mt-6  mb-16 text-gray-500">
        <IoHome />
        <MdOutlineWidgets />
        <IoBulbOutline />
        <PiBookmarkSimple />
        <TbMedicineSyrup />
        <IoChatbubblesOutline />
        <IoMdBook />
      </div>
      <div className="bg-green-500 text-white p-4 rounded-lg text-2xl">
        <BiSolidDonateHeart />
      </div>
    </div>
  );
};

export default NavAside;
