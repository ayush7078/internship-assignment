"use client";

import { FaTachometerAlt, FaListAlt, FaBriefcase } from "react-icons/fa";
import Link from "next/link"; // Import Link from next/link for navigation

export default function Sidebar() {
  return (
    <nav className="bg-gray-200 h-screen pt-16 fixed top-0 left-0 w-64 shadow-lg">
      <ul className="p-4 space-y-4">
        {/* Dashboard Menu */}
        <li className="flex items-center text-lg font-medium hover:bg-gray-300 p-2 rounded">
          <Link href="/" className="flex items-center">
            <FaTachometerAlt className="mr-2" />
            Dashboard
          </Link>
        </li>
        
        {/* Skill Test Menu */}
        <li className="flex items-center text-lg font-medium hover:bg-gray-300 p-2 rounded">
          <Link href="/skilltest" className="flex items-center">
            <FaListAlt className="mr-2" />
            Skill Test
          </Link>
        </li>

        {/* Internship Menu */}
        <li className="flex items-center text-lg font-medium hover:bg-gray-300 p-2 rounded">
          <Link href="/internship" className="flex items-center">
            <FaBriefcase className="mr-2" />
            Internship
          </Link>
        </li>
      </ul>
    </nav>
  );
}
