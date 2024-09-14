import React from 'react';
import Image from 'next/image';
import profilePic from './assets/headshot.png'

const Hero = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <div className="flex items-center space-x-8">
        <div>
          <Image
            src={profilePic} // Replace with your image path
            alt="Murray Anderson"
            width={300}
            height={300}
            className="rounded-full border-4 border-white shadow-lg"
          />
        </div>
        <div className="text-left">
          <h1 className="text-5xl font-bold mb-4">Hi, I'm Murray Anderson</h1>
          <h4 className="text-2xl">A Web Developer Crafting Beautiful Experiences</h4>
        </div>
      </div>
    </div>
  );
}

export default Hero;
