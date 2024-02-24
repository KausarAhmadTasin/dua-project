import React from "react";
import { IoLanguageOutline } from "react-icons/io5";
import { MdOutlineWidgets } from "react-icons/md";
import { TfiLayersAlt } from "react-icons/tfi";
import { PiToggleLeftFill } from "react-icons/pi";
const Settings = () => {
  return (
    <div className="bg-white p-5 mt-3 rounded-3xl h-[80vh]">
      <h2 className="text-center font-bold text-lg text-gray-900 mb-3">
        Settings
      </h2>
      <div className="flex items-center gap-3 font-medium mb-3 text-gray-500 text-base  bg-gray-100 rounded p-3">
        <div className="flex items-center justify-center bg-gray-200 text-xl rounded-full w-8 h-8 ">
          <IoLanguageOutline className="text-gray-400" />
        </div>
        <p>Language Settings</p>
      </div>

      <div className="flex items-center gap-3 font-medium mb-3  text-gray-500 text-base  bg-gray-100 rounded p-3">
        <div className="flex items-center justify-center bg-gray-200 text-xl rounded-full w-8 h-8 ">
          <TfiLayersAlt className="text-gray-400" />
        </div>
        <p>General Settings</p>
      </div>

      <div className="flex items-center gap-3 font-medium mb-3 text-gray-500 text-base  bg-gray-100 rounded p-3">
        <div className="flex items-center justify-center bg-gray-200 text-xl rounded-full w-8 h-8 ">
          <MdOutlineWidgets className="text-gray-400" />
        </div>
        <p>Font Settings</p>
      </div>

      <div className="flex border-l-4 border-green-500 items-center gap-3 font-medium text-green-600 text-base bg-gray-100 rounded p-3">
        <div className="flex items-center justify-center bg-gray-200 text-xl rounded-full w-8 h-8 ">
          <MdOutlineWidgets />
        </div>
        <p>Appearance Settings</p>
      </div>

      <div className="border border-gray-200 flex items-center justify-between pt-8 pb-4 pl-4 pr-4 text-gray-600">
        <p>Night Mode</p>
        <PiToggleLeftFill className="text-2xl" />
      </div>
    </div>
  );
};

export default Settings;
