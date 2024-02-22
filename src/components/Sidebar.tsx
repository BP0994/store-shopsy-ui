/** @format */

import React from "react";

import {
  HomeIcon,
  ChartBarIcon,
  CreditCardIcon,
  BellIcon,
  ArrowUpIcon,
  MagnifyingGlassIcon,
  DocumentIcon,
} from "@heroicons/react/24/solid";
import { FiExternalLink } from "react-icons/fi";

const Sidebar = () => {
  return (
    <div className="bg-[#070F2B] flex-none w-12 sm:w-12 h-screen z-80">
      <div className="fixed left-3 sm:left-3 top-[100px] ">
        <HomeIcon
          width={30}
          className="bg-gray-600 p-2 rounded-lg mb-4 text-gray-300 cursor-pointer"
        />
        <ChartBarIcon
          width={30}
          className="bg-gray-600 p-2 rounded-lg mb-4 text-gray-300 cursor-pointer"
        />
        <DocumentIcon
          width={30}
          className="bg-gray-600 p-2 rounded-lg mb-4 text-gray-300 cursor-pointer"
        />
        <MagnifyingGlassIcon
          width={30}
          className="bg-gray-600 p-2 rounded-lg mb-4 text-gray-300 cursor-pointer"
        />
        <CreditCardIcon
          width={30}
          className="bg-gray-600 p-2 rounded-lg mb-4 text-gray-300 cursor-pointer"
        />
        <BellIcon
          width={30}
          className="bg-gray-600 p-2 rounded-lg mb-4 text-gray-300 cursor-pointer"
        />
      </div>
      <div className="fixed bottom-4 left-3 sm:left-3 ">
        <a href="#top">
          <ArrowUpIcon
            width={30}
            className="bg-gray-600 p-2 rounded-lg mb-4 text-gray-300 cursor-pointer"
          />
        </a>
        <FiExternalLink className="bg-gray-600 w-30  rounded mb-4 text-gray-300 cursor-pointer" />
      </div>
    </div>
  );
};

export default Sidebar;
