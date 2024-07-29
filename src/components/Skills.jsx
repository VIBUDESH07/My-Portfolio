import React from 'react';
import './styles/globals.css'; // Ensure this CSS file is imported

const skills = [
  // Front-end
  { name: 'HTML', img: '/logos/html.png' },
  { name: 'CSS', img: '/logos/CSS3_logo_and_wordmark.svg' },
  { name: 'JavaScript', img: '/logos/javascript.png' },
  { name: 'Tailwind CSS', img: '/logos/tailwind css.png' },
  { name: 'React', img: '/logos/react.png' },
  { name: 'Flutter', img: '/logos/flutter.png' },
  
  // Back-end
  { name: 'Node.js', img: '/logos/node.js.png' },
  { name: 'Express', img: '/logos/express.png' },
  { name: 'Flask', img: '/logos/flask.png' },
  { name: 'Spring Boot', img: '/logos/springboot.png' },
  { name: 'PHP', img: '/logos/php.png' },
  
  // Coding
  { name: 'C', img: '/logos/c.png' },
  { name: 'C++', img: '/logos/c++.png' },
  { name: 'Java', img: '/logos/java.png' },
  { name: 'Python', img: '/logos/python.png' },

  // Database
  { name: 'MongoDB', img: '/logos/mongodb.png' },
  { name: 'MySQL', img: '/logos/sql.png' },
  { name: 'PostgreSQL', img: '/logos/postgresql.png' },
];

const Skills = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black flex items-center justify-center p-4">
      <div className="container mx-auto py-16">
        <div className="text-center mb-12 relative">
          <h2 className="text-5xl font-bold text-orange-400 mb-4 relative z-10">
            <span className="relative before:absolute before:content-[''] before:w-full before:h-1 before:bg-orange-400 before:bottom-0 before:left-0 before:-z-10 before:transition-transform before:duration-300 before:scale-x-0 before:hover:scale-x-100">
              Skills
            </span>
          </h2>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-orange-400 opacity-20">
            <svg width="150" height="150" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 100 20A10 10 0 0012 2zm-1 14.93V7.07A4.992 4.992 0 0012 5a4.992 4.992 0 001-3.07v12.86c-.356.06-.707.18-1 .34zm0 0a4.992 4.992 0 00-1 .34zm0 0a4.992 4.992 0 00-1 .34zM13 5a4.992 4.992 0 00-1 .34V19.93a4.992 4.992 0 001-.34z"/></svg>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gray-800 rounded-lg p-6 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-white shadow-lg"
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="w-24 h-24 object-contain mb-4 border-2 border-gray-600 rounded-lg"
              />
              <span className="text-lg text-orange-500 hover:text-red-500 transition-colors duration-300">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
