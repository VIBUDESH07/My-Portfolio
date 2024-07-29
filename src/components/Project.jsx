import React from 'react';

const projects = [
  {
    title: 'Online Shopping Mart',
    description: 'A comprehensive e-commerce platform allowing users to browse and purchase products online.',
    technologies: 'React, Tailwind CSS, Node.js, Express, MongoDB',
  },
  {
    title: 'Blood Bank Connection using Spring Boot',
    description: 'A system to connect blood donors and recipients, facilitating efficient blood donation and management.',
    technologies: 'Spring Boot, MySQL, Thymeleaf, Java',
  },
  {
    title: 'Flight Reservation System',
    description: 'An application for booking and managing flight reservations, including ticket issuance and seat selection.',
    technologies: 'Java, Spring Boot, MySQL, Thymeleaf',
  },
  {
    title: 'Hospital Machine Supervising',
    description: 'A monitoring system for hospital machinery, ensuring proper functioning and timely maintenance.',
    technologies: 'Python, Flask, SQLite',
  },
  {
    title: 'Mediconnect',
    description: 'A healthcare solution developed during a hackathon, integrating various technologies for a seamless user experience.',
    technologies: 'HTML, CSS, JavaScript, MySQL, Express.js, Python',
  },
  {
    title: 'WhatsApp using Flutter (Ongoing)',
    description: 'A mobile application project aimed at replicating WhatsApp functionality using Flutter.',
    technologies: 'Flutter, Dart',
  },
];

const Project = () => {
  return (
    <div id="projects" className="min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black flex items-center justify-center p-4">
      <div className="container mx-auto py-16">
        <h2 className="text-4xl font-bold text-orange-400 mb-8 text-center">Projects</h2>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-3xl font-semibold text-orange-400 mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <span className="block text-gray-400 text-sm">Technologies: {project.technologies}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
