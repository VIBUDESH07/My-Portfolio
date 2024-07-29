import React from 'react';
import './styles/heade.css'; // Ensure this CSS file is imported

const Header = () => {
  return (
    <header className="bg-black text-orange-500 p-4 shadow header-box">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold text-shadow"> 
          <span className='portfolio-blink'>MY PORTFOLIO</span>
        </h1>
        <nav>
          <a href="#about" className="mx-10 px-3 py-2 transition duration-300 transform hover:bg-orange-500 hover:text-black hover:rounded-md text-shadow">About</a>
          <a href="#projects" className="mx-10 px-3 py-2 transition duration-300 transform hover:bg-orange-500 hover:text-black hover:rounded-md text-shadow">Projects</a>
          <a href="#contact" className="mx-10 px-3 py-2 transition duration-300 transform hover:bg-orange-500 hover:text-black hover:rounded-md text-shadow">Contact</a>
        </nav>
        <button className="bg-orange-500 text-black px-4 py-2 rounded-full transition duration-300 transform hover:bg-orange-600 text-shadow">
          Email
        </button>
      </div>
    </header>
  );
}

export default Header;
