import React from 'react';
import './styles/heade.css';

const Header = () => {
  const handleSmoothScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-black text-orange-500 p-4 shadow header-box">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold text-shadow"> 
          <span className='portfolio-blink'>MY PORTFOLIO</span>
        </h1>
        <nav>
          <a 
            href="#about" 
            onClick={(e) => handleSmoothScroll(e, 'about')} 
            className="mx-10 px-3 py-2 transition duration-300 transform hover:bg-orange-500 hover:text-black hover:rounded-md text-shadow">
            About
          </a>
          <a 
            href="#projects" 
            onClick={(e) => handleSmoothScroll(e, 'projects')} 
            className="mx-10 px-3 py-2 transition duration-300 transform hover:bg-orange-500 hover:text-black hover:rounded-md text-shadow">
            Projects
          </a>
          <a 
            href="#skills" 
            onClick={(e) => handleSmoothScroll(e, 'skills')} 
            className="mx-10 px-3 py-2 transition duration-300 transform hover:bg-orange-500 hover:text-black hover:rounded-md text-shadow">
            Skills
          </a>
        </nav>
        <a href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')}>
          <button className="bg-orange-500 text-black px-4 py-2 rounded-full transition duration-300 transform hover:bg-orange-600 text-shadow">
            Contact
          </button>
        </a>
      </div>
    </header>
  );
}

export default Header;
