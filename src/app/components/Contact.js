import React from 'react';

const ContactPage = () => {
  return (
    <div className="h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white flex flex-col justify-center items-center p-4">
      <h1 className="text-4xl font-bold mb-8">Get in Touch</h1>
      
      <div className="w-full max-w-4xl flex flex-col md:flex-row justify-between items-start">
        {/* Contact Information */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <div className="space-y-4">
            <div>
              <span className="font-semibold">Email:</span>
              <a href="mailto:your.email@example.com" className="ml-2 hover:underline">
                andersonmurray83@gmail.com
              </a>
            </div>
            <div>
              <span className="font-semibold">GitHub:</span>
              <a href="https://github.com/murrayandersonn" target="_blank" rel="noopener noreferrer" className="ml-2 hover:underline">
              https://github.com/murrayandersonn
              </a>
            </div>
            <div>
              <span className="font-semibold">LinkedIn:</span>
              <a href="https://www.linkedin.com/in/murray-anderson-688513301/?trk=opento_sprofile_topcard" target="_blank" rel="noopener noreferrer" className="ml-2 hover:underline">
              https://linkedin.com/in/murray-anderson
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Send a Message</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1">Name</label>
              <input type="text" id="name" name="name" className="w-full p-2 rounded bg-white bg-opacity-20 focus:bg-opacity-30 focus:outline-none" required />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">Email</label>
              <input type="email" id="email" name="email" className="w-full p-2 rounded bg-white bg-opacity-20 focus:bg-opacity-30 focus:outline-none" required />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1">Message</label>
              <textarea id="message" name="message" rows="4" className="w-full p-2 rounded bg-white bg-opacity-20 focus:bg-opacity-30 focus:outline-none" required></textarea>
            </div>
            <button type="submit" className="bg-white text-blue-600 font-semibold py-2 px-4 rounded hover:bg-blue-100 transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
