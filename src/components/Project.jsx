import React from 'react';
import './styles/project.css'; // Updated CSS file with animations

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
  {
    title: 'Hospital Connection System',
    description: 'A web application that connects hospitals with patients, offering features like appointment scheduling, patient records management, and real-time communication.',
    technologies: 'Spring Boot, MySQL, Thymeleaf, Java',
    date: '2023',
    link: 'https://yourprojectlink.com/hospital-connection-system',
    photos: [
      '/images/hospital-connection-1.jpg',
      '/images/hospital-connection-2.jpg',
      '/images/hospital-connection-3.jpg',
    ],
  },
  {
    title: 'Blood Bank Connection System using Firebase',
    description: 'A Firebase-based blood bank connection system that facilitates blood donation and management with real-time data syncing and user authentication.',
    technologies: 'Firebase, React, Tailwind CSS',
    date: '2023',
    link: 'https://yourprojectlink.com/blood-bank-firebase',
    photos: [
      '/images/blood-bank-firebase-1.jpg',
      '/images/blood-bank-firebase-2.jpg',
      '/images/blood-bank-firebase-3.jpg',
    ],
  },
  {
    title: 'Machine Maintenance System',
    description: 'A MERN stack application for managing and scheduling machine maintenance tasks, with real-time status tracking and alerts.',
    technologies: 'MongoDB, Express, React, Node.js',
    date: '2023',
    link: 'https://yourprojectlink.com/machine-maintenance',
    photos: [
      '/images/machine-maintenance-1.jpg',
      '/images/machine-maintenance-2.jpg',
      '/images/machine-maintenance-3.jpg',
    ],
  },
  {
    title: 'Face Anti-Spoofing Mechanism',
    description: 'An advanced face anti-spoofing mechanism that ensures secure facial recognition by detecting live faces using ONNX models in the browser.',
    technologies: 'ONNX, React, TensorFlow.js',
    date: '2023',
    link: 'https://yourprojectlink.com/face-anti-spoofing',
    photos: [
      '/images/face-anti-spoofing-1.jpg',
      '/images/face-anti-spoofing-2.jpg',
      '/images/face-anti-spoofing-3.jpg',
    ],
  },
  {
    title: 'E-commerce Website using Flutter',
    description: 'A cross-platform e-commerce application built with Flutter, featuring product browsing, user authentication, and secure payment integration.',
    technologies: 'Flutter, Dart, Firebase',
    date: '2023',
    link: 'https://yourprojectlink.com/flutter-ecommerce',
    photos: [
      '/images/flutter-ecommerce-1.jpg',
      '/images/flutter-ecommerce-2.jpg',
      '/images/flutter-ecommerce-3.jpg',
    ],
  },
  {
    title: 'WhatsApp UI Clone using Flutter',
    description: 'A clone of the WhatsApp UI built using Flutter, mimicking the chat interface and navigation structure for both Android and iOS.',
    technologies: 'Flutter, Dart',
    date: '2023',
    link: 'https://yourprojectlink.com/flutter-whatsapp',
    photos: [
      '/images/flutter-whatsapp-1.jpg',
      '/images/flutter-whatsapp-2.jpg',
      '/images/flutter-whatsapp-3.jpg',
    ],
  },
  {
    title: 'Portfolio and Projects Hosted on Render',
    description: 'A portfolio showcasing various projects, all hosted on Render, demonstrating full-stack development skills and deployment capabilities.',
    technologies: 'React, Tailwind CSS, Node.js, Render',
    date: '2023',
    link: 'https://yourprojectlink.com/portfolio-render',
    photos: [
      '/images/portfolio-render-1.jpg',
      '/images/portfolio-render-2.jpg',
      '/images/portfolio-render-3.jpg',
    ],
  },
  {
    title: 'Flight Reservation System',
    description: 'A web-based flight reservation system allowing users to search for flights, book tickets, and manage reservations.',
    technologies: 'React, MySQL, Flask',
    date: '2023',
    link: 'https://yourprojectlink.com/flight-reservation',
    photos: [
      '/images/flight-reservation-1.jpg',
      '/images/flight-reservation-2.jpg',
      '/images/flight-reservation-3.jpg',
    ],
  },
];

const Project = () => {
  return (
    <div id="projects" className="min-h-screen flex items-center justify-center p-4">
      <div className="container mx-auto py-16">
        <h2 className="text-4xl font-bold text-orange-400 mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="relative project-card group bg-gray-900 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              
              <div className="overflow-hidden rounded-lg">
                <img
                  src={project.photos[0]}
                  alt={project.title}
                  className="project-image transition-transform duration-300 group-hover:scale-110"
                />
                <div className="image-gallery absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <span className="block project-technologies mb-2">Technologies: {project.technologies}</span>
                <span className="block project-date mb-2">Date: {project.date}</span>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link underline">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
