import React from 'react';
import Image from 'next/image';


const Tech = () => {
  const technologies = [
    { name: 'HTML', icon: '/icons/html5.svg' },
    { name: 'CSS', icon: '/icons/css3.svg' },
    { name: 'JavaScript', icon: '/icons/javascript.svg' },
    { name: 'React', icon: '/icons/react.svg' },
    { name: 'Tailwind', icon: '/icons/tailwind.svg' },
    { name: 'Bootstrap', icon: '/icons/bootstrap.svg'},
    { name: 'Next.js', icon: '/icons/nextjs.svg' },
    { name: 'GitHub', icon: '/icons/github.svg' },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-700 min-h-screen text-white py-16">
      <div className="container mx-auto p-20 px-4">
        <h1 className="text-4xl font-bold text-center mb-12">My Tech Stack</h1>
        <div className="pt-20 flex flex-col md:flex-row">
          {/* Left side - Text explanation */}
          <div className="md:w-1/2 pr-8 mb-8 md:mb-0">
            <p className="pt-8 text-lg">
              My technology stack is carefully chosen to create efficient, scalable, and modern web applications. I specialize in JavaScript-based technologies, with a focus on React for building interactive user interfaces. I use Next.js for server-side rendering and static site generation, which improves performance and SEO.
            </p>
            <p className="text-lg mt-4">
              For styling, I prefer Tailwind CSS for its utility-first approach, allowing for rapid UI development. HTML5 and CSS3 form the foundation of my front-end work, ensuring accessibility and responsiveness. Version control and collaboration are managed through GitHub, enabling smooth teamwork and project management.
            </p>
          </div>
          
          {/* Right side - SVG icons */}
          <div className="md:w-1/2">
            <div className="grid grid-cols-3 gap-8">
              {technologies.map((tech) => (
                <div key={tech.name} className="flex flex-col items-center">
                  <div className="w-16 h-16 mb-2">
                    <Image
                      src={tech.icon}
                      
                      width={64}
                      height={64}
                      
                    />
                  </div>
                  <h2 className="text-sm font-semibold text-center">{tech.name}</h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;
