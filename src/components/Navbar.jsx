import React from 'react';
import { InformationCircleIcon, BriefcaseIcon, DeviceMobileIcon, MailIcon } from '@heroicons/react/solid';

const Navbar = () => {
  return (
    <nav className="fixed top-2 left-1/2 transform -translate-x-1/2 bg-white py-3 px-6 text-black rounded-full shadow-lg z-50">
      <div className="container mx-auto flex justify-around items-center">
        <ul className="flex space-x-10">
          <li className="m-2">
            <a href="#about" className="flex items-center space-x-2 hover:text-gray-400 transition">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 p-1 rounded-full">
                <InformationCircleIcon className="w-6 h-6 text-white" />
              </div>
            </a>
          </li>
          <li className="m-2">
            <a href="#projects" className="flex items-center space-x-2 hover:text-gray-400 transition">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 p-1 rounded-full">
                <BriefcaseIcon className="w-6 h-6 text-white" />
              </div>
            </a>
          </li>
          <li className="m-2">
            <a href="#skills" className="flex items-center space-x-2 hover:text-gray-400 transition">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 p-1 rounded-full">
                <DeviceMobileIcon className="w-6 h-6 text-white" />
              </div>
            </a>
          </li>
          <li className="m-2">
            <a href="#contact" className="flex items-center space-x-2 hover:text-gray-400 transition">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 p-1 rounded-full">
                <MailIcon className="w-6 h-6 text-white" />
              </div>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
