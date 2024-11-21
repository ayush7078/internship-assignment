"use client";

import { FaUserCircle } from "react-icons/fa";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-800 text-white flex justify-between items-center p-4 shadow-md z-10">
      <div className="text-lg font-bold">Company Logo</div>
      <div className="flex items-center">
        <FaUserCircle className="text-3xl mr-2" />
        <span>John Doe</span>
      </div>
    </header>
  );
}
