import React from 'react';

const Header = () => {
  return (
    <header className="bg-black text-orange-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">My Portfolio</h1>
        <nav>
          <a href="#about" className="px-3 transition duration-300 transform hover:text-gray-400 hover:scale-110">About</a>
          <a href="#projects" className="px-3 transition duration-300 transform hover:text-gray-400 hover:scale-110">Projects</a>
          <a href="#contact" className="px-3 transition duration-300 transform hover:text-gray-400 hover:scale-110">Contact</a>
        </nav>
        <button className="bg-orange-500 text-black px-4 py-2 rounded-full transition duration-300 transform hover:bg-orange-600 hover:scale-110">
          Email
        </button>
      </div>
    </header>
  );
}

export default Header;
