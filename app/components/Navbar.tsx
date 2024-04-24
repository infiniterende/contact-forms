import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-900 p-4 w-full h-auto">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white"> Clickflo Widgets </h1>
        <div className="text-white font-bold"></div>

        {/* Navigation Links */}
        <ul className="flex justify-between ">
          <li>
            <a
              href="#"
              className="p-6 font-bold text-white hover:text-gray-200"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="p-6 font-bold text-white hover:text-gray-200"
            >
              Widgets
            </a>
          </li>
          <li>
            <a
              href="#"
              className="p-6 font-bold text-white hover:text-gray-200"
            >
              Form
            </a>
          </li>
          <li>
            <a
              href="#"
              className="p-6 font-bold text-white hover:text-gray-200"
            >
              Contact Us
            </a>
          </li>
        </ul>

        <div className="bg-white rounded-full p-2">Sign Up</div>
      </div>
    </nav>
  );
};

export default Navbar;
