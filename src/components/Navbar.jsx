import { useState } from "react";
import { FaBars } from "react-icons/fa";
import logo from "../assets/Scriptdrawer.png";
import { IoMdArrowDropdown } from "react-icons/io";

export default function Navbar() {
  const [isB2CDropdownOpen, setIsB2CDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 text-white font-inter px-4 py-4">
      <div className="w-full flex items-center justify-between">
        {/* Logo */}
        <div className={`flex items-center space-x-3 ${menuOpen ? "hidden" : "flex"}`} >
          <img src={logo} alt="Logo" className="h-10 w-auto" />
          <span className="text-xl font-semibold text-white">ScriptDrawer</span>
        </div>

        {/* Hamburger */}
        <button
          className={`md:hidden text-white text-xl z-50`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaBars />
        </button>

        {/* Full Navbar */}
        <div
          className={`fixed inset-0 md:static md:flex md:items-center md:justify-between transition-all duration-300 ${menuOpen ? "flex flex-col items-center bg-violet-900 p-6 space-y-6 z-40" : "hidden"
            } md:bg-transparent`}
        >
          {/* Nav Links */}
          <ul className="flex flex-col md:flex-row md:items-center text-sm font-medium space-y-4 md:space-y-0 md:space-x-6 text-center">
            <li className="cursor-pointer hover:text-blue-300">Home</li>
            <li className="cursor-pointer hover:text-blue-300">Product</li>

            <li
              className="relative cursor-pointer hover:text-blue-300 flex items-center justify-center"
              onMouseEnter={() => setIsB2CDropdownOpen(true)}
              onMouseLeave={() => setIsB2CDropdownOpen(false)}
            >
              B2C <IoMdArrowDropdown />
              {isB2CDropdownOpen && (
                <ul className="absolute top-6 left-0 bg-white text-black shadow-md p-2 rounded text-sm space-y-1 w-32">
                  <li className="hover:bg-gray-100 px-2 py-1 cursor-pointer">ScriptDrawer</li>
                </ul>
              )}
            </li>
            <li
              className="relative cursor-pointer hover:text-blue-300 flex items-center justify-center"
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              Services <IoMdArrowDropdown />
              {isServicesDropdownOpen && (
                <ul className="absolute top-6 left-0 bg-white text-black shadow-md p-2 rounded text-sm space-y-1 w-32">
                  <li className="hover:bg-gray-100 px-2 py-1 cursor-pointer">AI</li>
                  <li className="hover:bg-gray-100 px-2 py-1 cursor-pointer">Enterprise Architecture</li>
                  <li className="hover:bg-gray-100 px-2 py-1 cursor-pointer">Power Initiative</li>
                  <li className="hover:bg-gray-100 px-2 py-1 cursor-pointer">Foundation</li>
                </ul>
              )}
            </li>

            <li className="cursor-pointer hover:text-blue-300">Blog</li>
            <li className="cursor-pointer hover:text-blue-300">Careers</li>
            <li className="md:mr-6"></li> {/* Added space between Careers and Contact Us */}
          </ul>
          {/* Buttons */}
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2 mt-6 md:mt-0">
            <button className="rounded-full px-5 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#00cfff] to-[#e46cff] hover:opacity-90">
              Contact Us
            </button>
            <button className="rounded-full px-5 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#00cfff] to-[#e46cff] hover:opacity-90">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}