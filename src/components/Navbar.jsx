import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Vibudesh R B</div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <button className="btn-primary">Get Started</button>
    </nav>
  );
};

export default Navbar;
