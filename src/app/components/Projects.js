"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    { 
      id: 1, 
      title: 'This Portfolio Website', 
      image: '/path-to-project1-image.jpg',
      image2: '/path-to-project1-image.jpg',
      image3: '/path-to-project1-image.jpg',
      description: `This website was built from scratch using React and Next.js. This is also my first time using typescript in a project and I'm still getting used to the nuances of it. For my design elements, I have started to experiment with Tailwind CSS. I am finding it to be a very useful tool for quickly making good looking applications `,
      github: 'https://github.com/murrayandersonn/portfolioV2'
    },
    { 
      id: 2, 
      title: 'Project 2', 
      image: '/path-to-project2-image.jpg',
      description: 'Detailed description of Project 2...',
      github: ''
    },
    { 
      id: 3, 
      title: 'Project 3', 
      image: '/path-to-project3-image.jpg',
      description: 'Detailed description of Project 3...',
      github: ''
    },
    { 
      id: 4, 
      title: 'Project 4', 
      image: '/path-to-project4-image.jpg',
      description: 'Detailed description of Project 4...',
      github: ''
    },
    { 
      id: 5, 
      title: 'Project 5', 
      image: '/path-to-project5-image.jpg',
      description: 'Detailed description of Project 5...',
      github: ''
    },
  ];

  const Modal = ({ project, onClose }) => {
    if (!project) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-8 rounded-lg max-w-2xl w-full m-4">
          <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
          <div className='flex'>
            <Image
                src={project.image2}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover mb-4"
            />
            <Image
                src={project.image3}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover mb-4"
            />
          </div>
          <p className="mb-4">{project.description}</p>
          <button 
            onClick={onClose}
            className="bg-blue-500 text-white mr-2 px-4 py-2 rounded hover:bg-blue-600"
          >
            Close
          </button>
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <button 
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
            >
                GitHub Repo
            </button>
        </a>
        </div>
      </div>
    );
  };

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
              className="w-56 h-80 bg-gray-700 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 cursor-pointer"
              onClick={() => {
                setSelectedProject(project);
                setIsModalOpen(true);
              }}
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

      {isModalOpen && (
        <Modal
          project={selectedProject}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedProject(null);
          }}
        />
      )}
    </div>
  );
};

export default Projects;
