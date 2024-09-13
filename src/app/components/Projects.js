import React from 'react';
import Image from 'next/image';

const ProjectsPage = () => {
  const projects = [
    { id: 1, title: 'Project 1', image: '/path-to-project1-image.jpg' },
    { id: 2, title: 'Project 2', image: '/path-to-project2-image.jpg' },
    { id: 3, title: 'Project 3', image: '/path-to-project3-image.jpg' },
    { id: 4, title: 'Project 4', image: '/path-to-project4-image.jpg' },
    { id: 5, title: 'Project 5', image: '/path-to-project5-image.jpg' },
  ];

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-gray-200 to-gray-300 text-gray-800 py-12 bg-cover bg-center bg-no-repeat">
        

      {/* Header area */}
      <div className="flex-grow flex items-start justify-center pt-16">
        <h1 className="text-5xl font-bold">My Projects</h1>
      </div>
      
      {/* Project showcase area */}
      <div className="h-2/3 w-full flex flex-col justify-end items-center pb-20">
        <div className="flex space-x-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="w-56 h-80 bg-gray-700 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={224}
                height={224}
                className="w-full h-3/4 object-cover"
              />
              <div className="h-1/4 flex items-center justify-center bg-gray-800">
                <h3 className="text-lg font-semibold text-white">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
