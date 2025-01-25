import React from 'react';
import { FiHome } from 'react-icons/fi'; // Home icon
import { FiInfo } from 'react-icons/fi'; // About icon
import { FiBriefcase } from 'react-icons/fi'; // Projects icon
import { FiMail } from 'react-icons/fi'; // Contact icon

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <a href="#">
            <FiHome /> 
          </a>
        </li>
        <li>
          <a href="#">
            <FiInfo /> 
          </a>
        </li>
        <li>
          <a href="#">
            <FiBriefcase /> 
          </a>
        </li>
        <li>
          <a href="#">
            <FiMail />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
