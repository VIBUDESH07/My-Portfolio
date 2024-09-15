import React from 'react';
import './styles/project.css'; // Updated CSS file with animations

const projects = [
  // Your project data as before
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
