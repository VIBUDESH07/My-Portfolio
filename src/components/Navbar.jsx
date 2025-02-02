import React from 'react';
import { InformationCircleIcon, BriefcaseIcon, DeviceMobileIcon, MailIcon } from '@heroicons/react/solid';

const Navbar = () => {
  return (
    <nav className="bg-white py-4 text-black mx-[36rem] my-[0.5rem]">
      <div className="container mx-auto flex justify-around items-center">
        <ul className="flex space-x-10">
          <li className="m-2">
            <a href="#about" className="flex items-center space-x-2 hover:text-gray-200">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 p-1 rounded-full">
                <InformationCircleIcon className="w-6 h-6 text-white" />
              </div>
            </a>
          </li>
          <li className="m-2">
            <a href="#projects" className="flex items-center space-x-2 hover:text-gray-200">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 p-1 rounded-full">
                <BriefcaseIcon className="w-6 h-6 text-white" />
              </div>
            </a>
          </li>
          <li className="m-2">
            <a href="#skills" className="flex items-center space-x-2 hover:text-gray-200">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 p-1 rounded-full">
                <DeviceMobileIcon className="w-6 h-6 text-white" />
              </div>
            </a>
          </li>
          <li className="m-2">
            <a href="#contact" className="flex items-center space-x-2 hover:text-gray-200">
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
