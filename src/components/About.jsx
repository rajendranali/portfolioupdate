import React from "react";
import ImagesProfile from "./ImagesProfile";
import Education from "./Education";

const About = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-6 lg:px-0 flex flex-col lg:flex-row items-center justify-center lg:justify-between">
        <div className="lg:w-1/2 lg:mr-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 text-center lg:text-left">
            Hi there!{" "}
            <span className="block text-blue-600 ">
              I'm Rajendra
            </span>
            <span className="block text-transparent bg-gradient-to-r from-red-500  to-blue-700 bg-clip-text">Software Developer</span>

          </h1>

          <p className="text-lg lg:text-xl text-gray-700 mb-4 italic tracking-wide">
            Passionate software developer with a love for creating innovative
            solutions. Crafting elegant code and designing intuitive user
            interfaces are my specialties.
          </p>
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <ImagesProfile />
        </div>
      </div>
      <Education/>
    </div>
  );
};

export default About;
