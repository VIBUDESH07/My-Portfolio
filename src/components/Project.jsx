import React from 'react';
import './styles/project.css'; // Ensure you have this CSS file

const projects = [
  {
    title: 'Online Shopping Mart',
    description: 'A comprehensive e-commerce platform allowing users to browse and purchase products online. Includes features like user authentication, product search, and secure checkout.',
    technologies: 'React, Tailwind CSS, Node.js, Express, MongoDB',
    date: '2023',
    link: 'https://yourprojectlink.com/online-shopping-mart',
    photos: [
      '/images/online-shopping-1.jpg',
      '/images/online-shopping-2.jpg',
      '/images/online-shopping-3.jpg',
    ],
  },
  {
    title: 'Blood Bank Connection using Spring Boot',
    description: 'A system to connect blood donors and recipients, facilitating efficient blood donation and management. Features include real-time donor tracking and emergency notifications.',
    technologies: 'Spring Boot, MySQL, Thymeleaf, Java',
    date: '2023',
    link: 'https://yourprojectlink.com/blood-bank-connection',
    photos: [
      '/images/blood-bank-1.jpg',
      '/images/blood-bank-2.jpg',
      '/images/blood-bank-3.jpg',
    ],
  },
  // Add more projects here...
];

const Project = () => {
  return (
    <div id="projects" className="min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black flex items-center justify-center p-4">
      <div className="container mx-auto py-16">
        <h2 className="text-4xl font-bold text-orange-400 mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="relative group bg-gray-900 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={project.photos[0]}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-4">
                    {project.photos.slice(1).map((photo, i) => (
                      <img
                        key={i}
                        src={photo}
                        alt={`${project.title} additional`}
                        className="w-24 h-24 object-cover rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-110"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <h3 className="text-2xl font-semibold text-orange-400 mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <span className="block text-gray-400 text-sm mb-2">Technologies: {project.technologies}</span>
                <span className="block text-gray-400 text-sm mb-2">Date: {project.date}</span>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 underline">View Project</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
