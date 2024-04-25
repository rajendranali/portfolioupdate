import React from 'react';

export const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 flex justify-center">
      <div className="flex items-center">
      
        <div className="text-gray-800">
          <h1 className="text-3xl font-bold mb-4">About Me</h1>
          <p className="text-lg mb-4">
            Hi there! I'm a passionate software developer with a love for creating innovative solutions.
          </p>
          <p className="text-lg mb-4">
            With a strong background in computer science and several years of experience, I specialize in building robust web applications and scalable software systems.
          </p>
          <p className="text-lg mb-4">
            My skills include proficiency in various programming languages and frameworks, such as JavaScript, React, Node.js, and Python.
          </p>
          <p className="text-lg mb-4">
            I'm dedicated to continuous learning and staying up-to-date with the latest technologies and best practices in software development.
          </p>
          <p className="text-lg mb-4">
            Let's work together to bring your ideas to life and create exceptional software solutions!
          </p>
        </div>
      </div>
      <div className="ml-6">
        <img src="/path/to/your/other/image.jpg" alt="Your Other Image" className="rounded-lg" />
      </div>
    </div>
  );
};
